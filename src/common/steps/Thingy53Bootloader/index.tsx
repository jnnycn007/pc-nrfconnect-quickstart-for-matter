/*
 * Copyright (c) 2025 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-4-Clause
 */

import React, { useEffect } from 'react';
import { InfoBox } from '@nordicsemiconductor/pc-nrfconnect-shared';

import { useAppDispatch, useAppSelector } from '../../../app/store';
import { getSelectedDeviceUnsafely } from '../../../features/device/deviceSlice';
import {
    goToNextStep,
    goToPreviousStep,
} from '../../../features/flow/flowSlice';
import { Back } from '../../Back';
import Main from '../../Main';
import { Skip } from '../../Next';

let previous = false;

const VerifyBootloaderStep = () => {
    const device = useAppSelector(getSelectedDeviceUnsafely);
    const dispatch = useAppDispatch();
    const guideManual = [
        "Remove the top part of the Thingy:53's cover.",
        'Power off the device using <b>SW1</b> switch.',
        'Find the small <b>SW2</b> button that is located near the big center button.',
        'Press and hold the <b>SW2</b> button.',
        'Power on the device using <b>SW1</b> switch (keep pressing <b>SW2</b> button).',
        'Release the <b>SW2</b> button.',
    ];

    useEffect(() => {
        if (device.traits.mcuBoot === true) {
            if (previous) {
                dispatch(goToPreviousStep());
                previous = false;
            } else {
                dispatch(goToNextStep());
                previous = true;
            }
        }
    }, [device, dispatch]);

    return (
        <Main>
            <Main.Content
                heading="Entering bootloader mode"
                subHeading="Make sure that the device is in bootloader mode, which is required to program it using Device Firmware Upgrade."
            >
                <br />
                <div>
                    <div className="guide">
                        {guideManual.map((guide, index) => (
                            <div
                                key={
                                    typeof guide === 'string'
                                        ? guide.slice(0, 32)
                                        : index
                                }
                            >
                                <span className="guide-index">
                                    {index + 1}.
                                </span>{' '}
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: guide,
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                    <br />
                    <div className="additional-dk-image-content">
                        <img
                            src="../resources/devices/images/thingy53_bootloader_mode.png"
                            alt="Enabling bootloader mode"
                        />
                    </div>
                    <br />
                    Once the device is in bootloader mode, the app will
                    automatically proceed to the next step.
                    <br />
                    <br />
                    <InfoBox
                        mdiIcon="mdi-information-outline"
                        color="tw-text-primary"
                        title="You can skip this step if you have already flashed the device with the correct firmware."
                        content="In this case, the device will be revert to the factory reset state and then proceed the verification step."
                    />
                </div>
            </Main.Content>
            <Main.Footer>
                <Back />
                <Skip
                    onClick={next => {
                        // Skip both bootloader verification and programming steps
                        // Go directly to verification since device already has valid firmware
                        next(); // Skip VerifyBootloader -> go to Program
                        next(); // Skip Program -> go to Verify
                    }}
                />
            </Main.Footer>
        </Main>
    );
};

export default () => ({
    name: 'Verify Bootloader',
    component: () => VerifyBootloaderStep(),
});
