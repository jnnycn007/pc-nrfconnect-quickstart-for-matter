/*
 * Copyright (c) 2025 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-4-Clause
 */

import {
    NrfutilDevice,
    NrfutilDeviceLib,
} from '@nordicsemiconductor/pc-nrfconnect-shared/nrfutil/device';

import { DeviceWithSerialnumber } from '../../device/deviceLib';

// Whitelist for USB Manufacturer and USB Product filtering
// Please update this list if you notice a Thingy device that is not detected automatically.
const USB_WHITELIST = ['ZEPHYR', 'USB-DEV'];

// Device traits for Thingy device detection
const THINGY_DEVICE_TRAITS = {
    usb: true,
    nordicUsb: true,
    nordicDfu: true,
    seggerUsb: true,
    jlink: true,
    serialPorts: true,
    broken: true,
    mcuBoot: true,
    modem: true,
};

// Function to check if a device matches Thingy criteria
const isThingyCompatible = (device: NrfutilDevice): boolean => {
    if (!device.usb) {
        return false;
    }

    // Check if device supports serial ports
    const hasSerialPortsTrait = device.traits?.serialPorts === true;
    const hasActualSerialPorts =
        device.serialPorts && device.serialPorts.length > 0;

    if (!hasSerialPortsTrait || !hasActualSerialPorts) {
        return false;
    }

    const manufacturer = device.usb.manufacturer;
    const product = device.usb.product;

    // Check if manufacturer or product matches whitelist
    const manufacturerMatch = manufacturer
        ? USB_WHITELIST.some(
              entry =>
                  manufacturer.toLowerCase().includes(entry.toLowerCase()) ||
                  entry.toLowerCase().includes(manufacturer.toLowerCase())
          )
        : false;

    const productMatch = product
        ? USB_WHITELIST.some(
              entry =>
                  product.toLowerCase().includes(entry.toLowerCase()) ||
                  entry.toLowerCase().includes(product.toLowerCase())
          )
        : false;

    return manufacturerMatch || productMatch;
};

/**
 * Creates a properly formatted device from a Thingy NrfutilDevice.
 * This ensures deviceInfo can recognize it as PCA20053 (Thingy:53) for correct Family icon.
 *
 * @param {NrfutilDevice} thingyDevice Raw NrfutilDevice from device detection
 * @returns {DeviceWithSerialnumber} Formatted device compatible with deviceInfo and device store
 */
const createFormattedThingyDevice = (
    thingyDevice: NrfutilDevice
): DeviceWithSerialnumber =>
    ({
        ...thingyDevice,
        serialNumber: thingyDevice.serialNumber || '',
        devkit: {
            deviceFamily: 'NRF53_FAMILY',
            boardVersion: 'PCA20053', // Critical: This enables deviceInfo to show correct nRF53 family icon
        },
        usb: {
            product: 'Nordic Thingy:53', // Ensure deviceInfo recognizes it as PCA20053
            manufacturer:
                thingyDevice.usb?.manufacturer || 'Nordic Semiconductor',
            serialNumber:
                thingyDevice.usb?.serialNumber ||
                thingyDevice.serialNumber ||
                '',
            osDevicePath:
                thingyDevice.usb?.osDevicePath || '/dev/thingy-unknown',
            device: thingyDevice.usb?.device || {
                busNumber: 0,
                address: 0,
                descriptor: {
                    bDescriptorType: 1,
                    idVendor: 0x1915, // Nordic Semiconductor
                    idProduct: 0x530a, // Thingy:53
                    bcdDevice: 0x0100,
                },
                configList: {
                    descriptors: [],
                    interfaceLists: [],
                    length: 0,
                },
            },
        },
    } as DeviceWithSerialnumber);

/**
 * Real-time Thingy device watching with hotplug support.
 * This function provides continuous monitoring of Thingy-compatible devices.
 *
 * @param {function(NrfutilDevice[]): void} onThingyDevicesChanged Callback called when Thingy devices are added/removed
 * @param {function(Error): void} [onError] Optional error callback
 * @returns {Promise<function(): void>} Promise that resolves to a cleanup function
 */
export const startWatchingThingyDevices = async (
    onThingyDevicesChanged: (devices: NrfutilDevice[]) => void,
    onError?: (error: Error) => void
) => {
    const currentDevices = new Map<number, NrfutilDevice>();

    const notifyChange = () => {
        onThingyDevicesChanged([...currentDevices.values()]);
    };

    const stopHotplugEvents = await NrfutilDeviceLib.list(
        THINGY_DEVICE_TRAITS,
        (devices: NrfutilDevice[]) => {
            // Initial enumeration
            currentDevices.clear();
            devices.filter(isThingyCompatible).forEach(device => {
                currentDevices.set(device.id, device);
            });
            notifyChange();
        },
        error => {
            onError?.(error);
        },
        {
            // Hotplug event handlers
            onDeviceArrived: (device: NrfutilDevice) => {
                if (isThingyCompatible(device)) {
                    currentDevices.set(device.id, device);
                    notifyChange();
                }
            },
            onDeviceLeft: (deviceId: number) => {
                if (currentDevices.has(deviceId)) {
                    currentDevices.delete(deviceId);
                    notifyChange();
                }
            },
        }
    );

    return () => {
        if (stopHotplugEvents.isRunning()) {
            stopHotplugEvents.stop();
        }
    };
};

/**
 * Real-time Thingy device watching with properly formatted devices for the device store.
 * Returns devices that are compatible with deviceInfo for Family icon display.
 *
 * @param {function(DeviceWithSerialnumber[]): void} onThingyDevicesChanged Callback called with formatted DeviceWithSerialnumber devices
 * @param {function(Error): void} [onError] Optional error callback
 * @returns {Promise<function(): void>} Promise that resolves to a cleanup function
 */
export const startWatchingFormattedThingyDevices = (
    onThingyDevicesChanged: (devices: DeviceWithSerialnumber[]) => void,
    onError?: (error: Error) => void
) =>
    startWatchingThingyDevices((rawThingyDevices: NrfutilDevice[]) => {
        // Format each device for proper deviceInfo recognition
        const formattedDevices = rawThingyDevices
            .filter(device => device.serialNumber) // Only devices with serial numbers
            .map(createFormattedThingyDevice);

        onThingyDevicesChanged(formattedDevices);
    }, onError);
