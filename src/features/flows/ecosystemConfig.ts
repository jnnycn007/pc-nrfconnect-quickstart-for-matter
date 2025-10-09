/*
 * Copyright (c) 2025 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-4-Clause
 */

export interface EcosystemConfig {
    name: string;
    description: string;
    appManual: string;
    pairingManual: string;
    hubManual: string;
    hubImage: string;
    hubName: string;
    appImage: string[];
    appImageAlt: string[];
    appSystemSupport: string;
    setupVideo: string;
    setupManual: string[];
    supportedDeviceTypes: string[];
    ecosystemVersion: string;
}

let selectedEcosystem: EcosystemConfig;

export const ecosystemConfig: EcosystemConfig[] = [
    {
        name: 'Apple Home',
        description: 'Work with Apple Home',
        appManual: 'https://www.apple.com/home-app/',
        pairingManual: 'https://support.apple.com/en-us/104998',
        hubManual: 'https://support.apple.com/en-us/102557',
        hubImage: '../resources/ecosystems/Apple/apple_hub.png',
        hubName: 'Apple HomePod Mini',
        appImage: ['../resources/ecosystems/Apple/apple_home_qr_code.png'],
        appImageAlt: ['Get the iOS version from App Store'],
        appSystemSupport: 'iOS system',
        setupVideo: '../resources/ecosystems/Apple/apple_hub.mp4',
        setupManual: [
            'Power on the **Apple HomePod Mini**.',
            'Make sure that your smartphone is connected to the Wi-Fi network.',
            'Open the **Apple Home** app.',
            'The nearby hub will be detected automatically and you will be asked to confirm the setup.',
            'Tap the **Set Up** tile.',
            'Center the HomePod Mini device top part in the middle of the frame displayed on the screen.',
            'Select **Home** that you want to add the device to.',
            'Select **Room** that you want to add the device to.',
            'Agree to the usage terms and conditions.',
            'The device will be added to the Apple Home app and it should be visible in the selected room.',
        ],
        supportedDeviceTypes: [
            'Matter Door Lock',
            'Matter Light Bulb',
            'Matter Temperature Sensor',
            'Matter Weather Station',
            'Matter Contact Sensor',
        ],
        ecosystemVersion: '18.6',
    },
    {
        name: 'Google Home',
        description: 'Work with Google Home',
        appManual: 'https://home.google.com/welcome/',
        pairingManual:
            'https://support.google.com/googlenest/answer/9159862?hl=en',
        hubManual: 'https://home.google.com/get-inspired/matter-and-thread/',
        hubImage: '../resources/ecosystems/Google/google_hub.png',
        hubName: 'Google Nest Hub 2nd Gen',
        appImage: [
            '../resources/ecosystems/Google/google_home_android_qr_code.png',
            '../resources/ecosystems/Google/google_home_ios_qr_code.png',
        ],
        appImageAlt: [
            'Get the Android version from Google Play',
            'Get the iOS version from App Store',
        ],
        appSystemSupport: 'Android and iOS systems',
        setupVideo: '../resources/ecosystems/Google/google_hub.mp4',
        setupManual: [
            'Power on the **Google Nest Hub 2nd Gen**.',
            'Make sure that your smartphone is connected to the Wi-Fi network.',
            'Open the **Google Home** app.',
            'Go to the **Devices** section.',
            'Tap the **Add device** button.',
            'Tap the **Google Nest or partner device** option.',
            'Select **Home** that you want to add the device to.',
            'The nearby hub will be detected automatically and you will be asked to confirm by tapping **Yes**.',
            'Scan the QR code displayed on the screen of the hub.',
            'Decide if you want to help improve Nest Hub by sharing statistics or not.',
            'Tap the **Proceed** button when asked about your country compatibility.',
            'Select **Room** that you want to add the device to.',
            'Choose the Wi-Fi network that you want to use for the device. It should be the same as the one that you are currently using on your smartphone.',
            'Click the **Next** button on the next few screens that instruct you how to use the device.',
            'The device will be added to the Google Home app and it should be visible in the selected room.',
        ],
        supportedDeviceTypes: [
            'Matter Door Lock',
            'Matter Light Bulb',
            'Matter Temperature Sensor',
            'Matter Weather Station',
            'Matter Contact Sensor',
        ],
        ecosystemVersion: '3.38.53.1',
    },
    {
        name: 'Amazon Alexa',
        description: 'Work with Amazon Alexa',
        appManual:
            'https://www.amazon.com/Alexa-App/b?ie=UTF8&node=18354642011',
        pairingManual:
            'https://www.amazon.com/gp/help/customer/display.html?nodeId=G3RKPNRKF33ECTW7',
        hubManual:
            'https://developer.amazon.com/en-US/docs/alexa/smarthome/matter-support.html#compatible-echos',
        hubImage: '../resources/ecosystems/Amazon/amazon_hub.png',
        hubName: 'Amazon Echo 4th Gen',
        appImage: [
            '../resources/ecosystems/Amazon/amazon_alexa_android_qr_code.png',
            '../resources/ecosystems/Amazon/amazon_alexa_ios_qr_code.png',
        ],
        appImageAlt: [
            'Get the Android version from Google Play',
            'Get the iOS version from App Store',
        ],
        appSystemSupport: 'Android and iOS systems',
        setupVideo: '../resources/ecosystems/Amazon/alexa_hub.mp4',
        setupManual: [
            'Power on the **Amazon Echo 4th Gen**.',
            'Make sure that your smartphone is connected to the Wi-Fi network.',
            'Open the **Alexa** app.',
            'Go to the **Devices** section.',
            'Tap **+**.',
            'Tap **Add Device** button.',
            'Select **Amazon Echo** from the list of **All Devices**.',
            'Select **Echo, Echo Dot, Echo Pop and more**.',
            'Make sure that the Echo device is displaying an orange light and tap **Yes**.',
            'The nearby hub will be detected automatically. Tap on it once listed.',
            'Tap **Continue** after connecting to Wi-Fi network.',
            'Tap **Skip** once informed that application could not detect your location.',
            'Select **Room** that you want to add the device to.',
            'Tap the **Google Nest or partner device** option.',
            'Select **Home** that you want to add the device to.',
            'You can setup voice ID, or tap **Remind me later**.',
            "Tap **Let's go**.",
            'The device will be added to the Alexa app and it should be visible in the selected room.',
        ],
        supportedDeviceTypes: [
            'Matter Door Lock',
            'Matter Light Bulb',
            'Matter Temperature Sensor',
            'Matter Weather Station',
            'Matter Contact Sensor',
        ],
        ecosystemVersion: '2025.16',
    },
    {
        name: 'SmartThings',
        description: 'Work with SmartThings',
        appManual: 'https://www.samsung.com/uk/smartthings/app/',
        pairingManual:
            'https://support.smartthings.com/hc/en-us/articles/360052390111-Devices-in-SmartThings',
        hubManual: 'https://partners.smartthings.com/matter',
        hubImage: '../resources/ecosystems/SmartThings/smartthings_hub.png',
        hubName: 'Aeotec Smart Home Hub',
        appImage: [
            '../resources/ecosystems/SmartThings/smartthings_android_qr_code.png',
            '../resources/ecosystems/SmartThings/smartthings_ios_qr_code.png',
        ],
        appImageAlt: [
            'Get the Android version from Google Play',
            'Get the iOS version from App Store',
        ],
        appSystemSupport: 'Android and iOS systems',
        setupVideo: '../resources/ecosystems/SmartThings/smartthings_hub.mp4',
        setupManual: [
            'Power on the **Aeotec Smart Home Hub**.',
            'Make sure that your smartphone is connected to the Wi-Fi network.',
            'Open the **SmartThings** app.',
            'Go to the **Devices** section.',
            'Tap the **Add device** button.',
            'Tap the **Add** button in the **Samsung devices** section.',
            'Select **Smart Home Hub** from the list.',
            'Scan the QR code printed on the bottom of the hub.',
            'You can **Skip** the geolocation setup.',
            'Select **Wi-Fi** connection type.',
            'Make sure that the light on the Hub is blinking red and green and tap **Next**.',
            'Choose the Wi-Fi network that you want to use for the device. It should be the same as the one that you are currently using on your smartphone.',
            'Select the location, room and the name for the device, and tap **Done**.',
            'You will be navigated to the device detailed view. Tap **<** to go back to the room view.',
            'The device will be added to the SmartThings app and it should be visible in the selected room.',
        ],
        supportedDeviceTypes: [
            'Matter Door Lock',
            'Matter Light Bulb',
            'Matter Temperature Sensor',
            'Matter Weather Station',
            'Matter Contact Sensor',
        ],
        ecosystemVersion: '1.8.34.21',
    },
];

export const getSelectedEcosystem = (): EcosystemConfig => selectedEcosystem;

export const setSelectedEcosystem = (ecosystem: EcosystemConfig) => {
    selectedEcosystem = ecosystem;
};
