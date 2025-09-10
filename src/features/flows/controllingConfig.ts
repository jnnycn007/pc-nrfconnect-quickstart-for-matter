/*
 * Copyright (c) 2025 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-4-Clause
 */

/**
 * This file contains the controlling configuration for the Matter devices.
 */

interface ControllingEcosystem {
    name: string;
    guide: string[];
    video: string;
    videoDeviceName: string;
}

export interface ControllingConfig {
    name: string;
    controllingGuide: ControllingEcosystem[];
}

export const controllingConfig: ControllingConfig[] = [
    {
        name: 'Matter Door Lock',
        controllingGuide: [
            {
                name: 'Apple Home',
                guide: [
                    'Open the <b>Apple Home</b> app',
                    'Navigate to the room that contains the device that was previously paired',
                    'Tap the <b>Matter Accessory</b> Door Lock tile to open detailed view',
                    'Tap on the top part of the slider to unlock the Matter Door Lock',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns off</b>',
                    'Tap on the bottom part of the slider to lock the Matter Door Lock',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns on</b>',
                    'Click to the side to go back to the room view',
                    'Click on the lock symbol on the <b>Matter Accessory</b> tile to unlock the Matter Door Lock from the room view',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns off</b>',
                    'Click on the lock symbol on the <b>Matter Accessory</b> tile again to lock the Matter Door Lock from the room view',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns on</b>',
                ],
                video: '../resources/ecosystems/Apple/usage/apple_lock_usage.mp4',
                videoDeviceName: 'Matter Accessory',
            },
            {
                name: 'SmartThings',
                guide: [
                    'Open the <b>SmartThings</b> app',
                    'Go to the <b>Devices</b> page',
                    'Tap on the <b>MatterLock</b> tile to unlock the Matter Door Lock',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns off</b>',
                    'Tap on the <b>MatterLock</b> tile again to lock the Matter Door Lock',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns on</b>',
                ],
                video: '../resources/ecosystems/SmartThings/usage/smartthings_lock_usage_short.mp4',
                videoDeviceName: 'MatterLock',
            },
            {
                name: 'Amazon Alexa',
                guide: [
                    'Open the <b>Amazon Alexa</b> app',
                    'Go to the <b>Devices</b> page',
                    'Tap the <b>First lock</b> Door Lock tile to open detailed view',
                    'Tap on the <b>Gear</b> icon on the right top to access settings',
                    'Tap on the <b>Enable</b> slider to allow unlock in the Alexa App',
                    'Go back to the <b>First lock</b> device detailed view',
                    'Tap on the lock symbol to unlock the Matter Door Lock',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns off</b>',
                    'Tap on the lock symbol again to lock the Matter Door Lock',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns on</b>',
                ],
                video: '../resources/ecosystems/Amazon/usage/alexa_lock_usage.mp4',
                videoDeviceName: 'First lock',
            },
            {
                name: 'Google Home',
                guide: [
                    'Open the <b>Google Home</b> app',
                    'Go to the <b>Devices</b> page',
                    'Tap the <b>Living Room device</b> Door Lock tile to open detailed view',
                    'Tap on the lock symbol to unlock the Matter Door Lock',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns off</b>',
                    'Tap on the lock symbol again to lock the Matter Door Lock',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns on</b>',
                ],
                video: '../resources/ecosystems/Google/usage/google_lock_usage.mp4',
                videoDeviceName: 'Living Room device',
            },
        ],
    },
    {
        name: 'Matter Light Bulb',
        controllingGuide: [
            {
                name: 'Apple Home',
                guide: [
                    'Open the <b>Apple Home</b> app',
                    'Navigate to the room that contains the device that was previously paired',
                    'Click on the light bulb symbol on the <b>Matter Accessory</b> tile to turn on the Matter Light Bulb from the room view',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns off</b>',
                    'Click on the light bulb symbol on the <b>Matter Accessory</b> tile again to turn off the Matter Light Bulb from the room view',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns on</b>',
                    'Tap the <b>Matter Accessory</b> Light Bulb tile to open detailed view',
                    'Tap on the slider to change the brightness of the Matter Light Bulb',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>changed brightness level</b> accordingly',
                ],
                video: '../resources/ecosystems/Apple/usage/apple_bulb_usage.mp4',
                videoDeviceName: 'Matter Accessory',
            },
            {
                name: 'SmartThings',
                guide: [
                    'Open the <b>SmartThings</b> app',
                    'Go to the <b>Devices</b> page',
                    'Tap the power symbol on the <b>MatterLight 1</b> Light Bulb tile to to turn on the Matter Light Bulb',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns on</b>',
                    'Tap on the <b>MatterLight 1</b> Light Bulb tile to open detailed view',
                    'Click on the power symbol again to turn off the Matter Light Bulb',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns off</b>',
                    'Move the slider to change the brightness of the Matter Light Bulb',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>changed brightness level</b> accordingly',
                ],
                video: '../resources/ecosystems/SmartThings/usage/smartthings_bulb_usage.mp4',
                videoDeviceName: 'MatterLight 1',
            },
            {
                name: 'Amazon Alexa',
                guide: [
                    'Open the <b>Amazon Alexa</b> app',
                    'Go to the <b>Devices</b> page',
                    'Tap the <b>First light</b> Light Bulb tile to open detailed view',
                    'Click on the power symbol to turn on the Matter Light Bulb',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns on</b>',
                    'Click on the power symbol again to turn off the Matter Light Bulb',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns off</b>',
                    'Clink on the power symbol again and move the slider to change the brightness of the Matter Light Bulb',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>changed brightness level</b> accordingly',
                ],
                video: '../resources/ecosystems/Amazon/usage/alexa_bulb_usage.mp4',
                videoDeviceName: 'First light',
            },
            {
                name: 'Google Home',
                guide: [
                    'Open the <b>Google Home</b> app',
                    'Go to the <b>Devices</b> page',
                    'Click on the light bulb symbol on the <b>Living Room device</b> tile to turn on the Matter Light Bulb from the room view',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns off</b>',
                    'Click on the light bulb symbol on the <b>Living Room device</b> tile again to turn off the Matter Light Bulb from the room view',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns on</b>',
                    'Press the <b>Living Room device</b> Light Bulb tile to open detailed view',
                    'Move the slider to change the brightness of the Matter Light Bulb',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>changed brightness level</b> accordingly',
                ],
                video: '../resources/ecosystems/Google/usage/google_bulb_usage.mp4',
                videoDeviceName: 'Living Room device',
            },
        ],
    },
    {
        name: 'Matter Weather Station',
        controllingGuide: [
            {
                name: 'Apple Home',
                guide: [
                    'Open the <b>Apple Home</b> app',
                    'Tap on the <b>Climate</b> tile on the top bar',
                    'Tap on the <b>Temperature</b> tile',
                    'You are going to see two <b>Temperature Sensor</b> tiles. The one is the in-built sensor of Apple Home hub, and the other is the sensor of Weather Station device.',
                    'Read the measurement of <b>Temperature Sensor</b> device that has battery symbol on the tile, as this is the Weather Station device.',
                    'Navigate back to the <b>Climate</b> view',
                    'Tap on the <b>Humidity</b> tile',
                    'You are going to see two <b>Humidity Sensor</b> tiles. The one is the in-built sensor of Apple Home hub, and the other is the sensor of Weather Station device.',
                    'Read the measurement of <b>Humidity Sensor</b> device that has battery symbol on the tile, as this is the Weather Station device.',
                ],
                video: '../resources/ecosystems/Apple/usage/apple_ws_usage.mp4',
                videoDeviceName: 'Temperature Sensor and Humidity Sensor',
            },
            {
                name: 'SmartThings',
                guide: [
                    'Open the <b>SmartThings</b> app',
                    'Go to the <b>Devices</b> page',
                    'Tap on the <b>MatterWeather</b> device tile to open detailed view',
                    'Observe the listed measurement values for <b>Temperature</b>, <b>Humidity</b>, and <b>Atmospheric pressure</b>',
                ],
                video: '../resources/ecosystems/SmartThings/usage/smartthings_ws_usage.mp4',
                videoDeviceName: 'MatterWeather',
            },
            {
                name: 'Amazon Alexa',
                guide: [
                    'Open the <b>Amazon Alexa</b> app',
                    'Go to the <b>Devices</b> page',
                    'Tap on the <b>First device</b> tile',
                    'Observe the measured temperature in Fahrenheit degrees',
                    'Navigate back to the <b>Devices</b> page',
                    'Tap on the <b>First humidity sensor</b> tile',
                    'Observe the measured humidity in percentages',
                ],
                video: '../resources/ecosystems/Amazon/usage/alexa_ws_usage.mp4',
                videoDeviceName: 'First device and First humidity sensor',
            },
            {
                name: 'Google Home',
                guide: [
                    'Open the <b>Google Home</b> app',
                    'Go to the <b>Devices</b> page',
                    `Tap on the <b>Humidity Sensor</b> device tile to open detailed view`,
                    `Observe the measured pressure in kPa`,
                    'Navigate back to the <b>Devices</b> page',
                    `Tap on the <b>Pressure Sensor</b> device tile to open detailed view`,
                    `Observe the measured humidity in percentages`,
                    'Navigate back to the <b>Devices</b> page',
                    `Tap on the <b>Temperature Sensor</b> device tile to open detailed view`,
                    `Observe the measured temperature in Celsius degrees`,
                    'Navigate back to the <b>Devices</b> page',
                    `Observe all the measured values visible also on the <b>Devices</b> view`,
                ],
                video: '../resources/ecosystems/Google/usage/google_ws_usage.mp4',
                videoDeviceName:
                    'Temperature Sensor, Humidity Sensor, and Pressure Sensor',
            },
        ],
    },
    {
        name: 'Matter Temperature Sensor',
        controllingGuide: [
            {
                name: 'Apple Home',
                guide: [
                    'Open the <b>Apple Home</b> app',
                    'Tap on the <b>Climate</b> tile on the top bar',
                    'Tap on the <b>Temperature</b> tile',
                    'You are going to see two <b>Temperature Sensor</b> tiles. The one is the in-built sensor of Apple Home hub, and the other is the sensor of Temperature Sensor device.',
                    'Find the <b>Temperature</b> tile with the name you assigned during commissioning and read its measurement.',
                    'The temperature reading will gradually increase from -20°C to 20°C in 1°C increments per each 10 seconds, repeating in a continuous loop.',
                ],
                video: '../resources/ecosystems/Apple/usage/apple_temperature_sensor_usage.mp4',
                videoDeviceName: 'Temperature',
            },
            {
                name: 'SmartThings',
                guide: [
                    'Open the <b>SmartThings</b> app',
                    'Go to the <b>Devices</b> page',
                    'Tap on the <b>Temperature sensor</b> device tile to open detailed view',
                    'Observe the simulated temperature in Celsius degrees. The temperature reading will gradually increase from -20°C to 20°C in 1°C increments per each 10 seconds, repeating in a continuous loop.',
                ],
                video: '../resources/ecosystems/SmartThings/usage/smartthings_temp_usage.mp4',
                videoDeviceName: 'Temperature sensor',
            },
            {
                name: 'Amazon Alexa',
                guide: [
                    'Open the <b>Amazon Alexa</b> app',
                    'Go to the <b>Devices</b> page',
                    'Tap on the <b>Temperature sensor</b> tile to open detailed view',
                    'Observe the simulated temperature in Celsius degrees. The temperature reading will gradually increase from -20°C to 20°C in 1°C increments per each 10 seconds, repeating in a continuous loop.',
                ],
                video: '../resources/ecosystems/Amazon/usage/alexa_temp_usage.mp4',
                videoDeviceName: 'Temperature sensor',
            },
            {
                name: 'Google Home',
                guide: [
                    'Open the <b>Google Home</b> app',
                    'Go to the <b>Devices</b> page',
                    'Tap on the <b>Temperature sensor</b> tile to open detailed view',
                    'Observe the simulated temperature in Celsius degrees. The temperature reading will gradually increase from -20°C to 20°C in 1°C increments per each 10 seconds, repeating in a continuous loop.',
                ],
                video: '../resources/ecosystems/Google/usage/google_temp_usage.mp4',
                videoDeviceName: 'Temperature Sensor',
            },
        ],
    },
    {
        name: 'Matter Contact Sensor',
        controllingGuide: [
            {
                name: 'Apple Home',
                guide: [
                    'Press the button marked with green rectangle on the DK',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns on</b> while pressing the button',
                    'Release the button',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns off</b>',
                    'Open the <b>Apple Home</b> app',
                    'Navigate to the room that contains the device that was previously paired',
                    'Tap the <b>Activity History</b> tile to open a list of events',
                    'Press the button marked with green rectangle on the DK once again',
                    'Wait for the update in the <b>Apple Home</b> app and observe that the event is added to the <b>Activity History</b> list as <bClosed/b>',
                    'Release the button',
                    'Wait for the update in the <b>Apple Home</b> app and observe that the event is removed from the <b>Activity History</b> list as <bOpened/b>',
                ],
                video: '../resources/ecosystems/Apple/usage/apple_contact_usage.mp4',
                videoDeviceName: 'Matter Accessory',
            },
            {
                name: 'SmartThings',
                guide: [
                    'Open the <b>SmartThings</b> app',
                    'Go to the <b>Devices</b> page',
                    'Tap on the <b>Open close sensor</b> tile to open detailed view',
                    'Press the button marked with green rectangle on the DK',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns on</b> and the Contact sensor tile in the <b>SmartThings</b> app is marked as <b>Closed</b>',
                    'Release the button',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns off</b> and the Contact sensor tile in the <b>SmartThings</b> app is marked as <b>Open</b>',
                ],
                video: '../resources/ecosystems/SmartThings/usage/smartthings_contact_usage.mp4',
                videoDeviceName: 'Open close sensor',
            },
            {
                name: 'Amazon Alexa',
                guide: [
                    'Open the <b>Amazon Alexa</b> app',
                    'Go to the <b>Devices</b> page',
                    'Tap on the <b>Contact sensor</b> tile to open detailed view',
                    'Press the button marked with green rectangle on the DK',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns on</b> and the Contact sensor tile in the <b>Amazon Alexa</b> app is marked as <b>Closed</b>',
                    'Release the button',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns off</b> and the Contact sensor tile in the <b>Amazon Alexa</b> app is marked as <b>Open</b>',
                ],
                video: '../resources/ecosystems/Amazon/usage/alexa_contact_usage.mp4',
                videoDeviceName: 'Contact sensor',
            },
            {
                name: 'Google Home',
                guide: [
                    'Open the <b>Google Home</b> app',
                    'Go to the <b>Devices</b> page',
                    'Press the button marked with green rectangle on the DK',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns on</b> and the Contact sensor tile in the <b>Google Home</b> app is marked as <b>Closed</b>',
                    'Release the button',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns off</b> and the Contact sensor tile in the <b>Google Home</b> app is marked as <b>Open</b>',
                    'Tap on the <b>Contact sensor</b> tile to open detailed view',
                    'Press the button marked with green rectangle on the DK',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns on</b> and the Contact sensor tile in the <b>Google Home</b> app is marked as <b>Closed</b>',
                    'Release the button',
                    'Observe that <b>LED</b> marked with green rectangle on the DK <b>turns off</b> and the Contact sensor tile in the <b>Google Home</b> app is marked as <b>Open</b>',
                ],
                video: '../resources/ecosystems/Google/usage/google_contact_usage.mp4',
                videoDeviceName: 'Contact Sensor',
            },
        ],
    },
];

export const getSelectedControllingGuide = (
    sampleName: string,
    ecosystemName: string
): ControllingEcosystem | undefined => {
    const config = controllingConfig.find(cfg => cfg.name === sampleName);
    if (config) {
        const guide = config.controllingGuide.find(
            guideEntry => guideEntry.name === ecosystemName
        );
        if (guide) return guide;
    }
    return undefined;
};

export const getSelectedControllingConfig = (
    name: string
): ControllingConfig | undefined =>
    controllingConfig.find(config => config.name === name);
