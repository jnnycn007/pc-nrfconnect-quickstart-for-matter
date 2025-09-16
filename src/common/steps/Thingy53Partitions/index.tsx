/*
 * Copyright (c) 2025 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-4-Clause
 */

import React from 'react';

import { Back } from '../../Back';
import Main from '../../Main';
import { Next } from '../../Next';

const VerifyPartitionsStep = () => (
    <Main>
        <Main.Content heading="Ensuring compatible partitions layout">
            <div>
                <div style={{ fontSize: '1.1rem' }}>
                    The Thingy53 device does not have a programmer on board, so
                    the software image is transferred to it using Device
                    Firmware Upgrade (DFU) over serial.
                    <br />
                    The bootloader is pre-installed on the device and the memory
                    partitions are fixed.
                    <br />
                    <br />
                    <b>
                        You must ensure that your Thingy53 device is currently
                        running a firmware that has the same partition layout,
                        as the application that is going to be transferred using
                        DFU.
                    </b>
                    <br />
                    <b>
                        Otherwise, the firmware upgrade may fail, lead to
                        undefined behavior or problems with booting the
                        application.
                    </b>
                    <br />
                    <br />
                    <i>
                        <p>
                            <br />
                            <b>Note:</b> The default configuration of all
                            applications present in nRF Connect SDK for
                            Thingy:53 is compatible with the this partitions
                            layout.
                            <br />
                            If you have not customized the partitions layout of
                            a device, you can proceed to the next step.
                            <br />
                            <br />
                        </p>
                    </i>
                    <br />
                    You can see the expected partitions layout below or you can
                    check the{' '}
                    <a
                        href="https://docs.nordicsemi.com/bundle/ncs-latest/page/nrf/protocols/matter/getting_started/hw_requirements.html#reference_matter_memory_layouts"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontStyle: 'italic',
                            color: 'rgb(0, 169, 206)',
                        }}
                    >
                        Matter hardware and memory requirements
                    </a>{' '}
                    for more detailed breakdown of memory layout.
                </div>
                <br />
                <br />
                <div style={{ fontSize: '1.2rem' }}>
                    <b>Internal flash:</b>
                </div>
                <div style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                    <table
                        style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            background: '#f9f9f9',
                            border: '1px solid #ddd',
                        }}
                    >
                        <thead>
                            <tr>
                                <th
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                        textAlign: 'left',
                                    }}
                                >
                                    Partition
                                </th>
                                <th
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                        textAlign: 'left',
                                    }}
                                >
                                    Start Address
                                </th>
                                <th
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                        textAlign: 'left',
                                    }}
                                >
                                    Size
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                    }}
                                >
                                    MCUboot Bootloader (mcuboot)
                                </td>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                    }}
                                >
                                    0x0
                                </td>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                    }}
                                >
                                    64 KB
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                    }}
                                >
                                    MCUboot padding (mcuboot_pad)
                                </td>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                    }}
                                >
                                    0x10000
                                </td>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                    }}
                                >
                                    512 B
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                    }}
                                >
                                    Application (mcuboot_primary_app)
                                </td>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                    }}
                                >
                                    0x10200
                                </td>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                    }}
                                >
                                    895.5 KB
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                    }}
                                >
                                    Non-volatile storage (settings_storage)
                                </td>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                    }}
                                >
                                    0xF0000
                                </td>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                    }}
                                >
                                    64 KB
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{ fontSize: '1.2rem' }}>
                    <b>External flash:</b>
                </div>
                <div style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                    <table
                        style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            background: '#f9f9f9',
                            border: '1px solid #ddd',
                        }}
                    >
                        <thead>
                            <tr>
                                <th
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                        textAlign: 'left',
                                    }}
                                >
                                    Partition
                                </th>
                                <th
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                        textAlign: 'left',
                                    }}
                                >
                                    Start Address
                                </th>
                                <th
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                        textAlign: 'left',
                                    }}
                                >
                                    Size
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                    }}
                                >
                                    Application DFU (mcuboot_secondary)
                                </td>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                    }}
                                >
                                    0x0
                                </td>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                    }}
                                >
                                    896 KB
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                    }}
                                >
                                    Network Core DFU (mcuboot_secondary_1)
                                </td>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                    }}
                                >
                                    0xE0000
                                </td>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                    }}
                                >
                                    256 KB
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                    }}
                                >
                                    Free space (external_flash)
                                </td>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                    }}
                                >
                                    0x120000
                                </td>
                                <td
                                    style={{
                                        border: '1px solid #ddd',
                                        padding: '8px',
                                    }}
                                >
                                    7040 KB
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Main.Content>
        <Main.Footer>
            <Back />
            <Next
                onClick={next => {
                    next();
                }}
            />
        </Main.Footer>
    </Main>
);

export default () => ({
    name: 'Verify Partitions',
    component: () => VerifyPartitionsStep(),
});
