/*
 * Copyright (c) 2022 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-4-Clause
 */

const baseConfig =
    require('@nordicsemiconductor/pc-nrfconnect-shared/config/jest.config')();

module.exports = {
    ...baseConfig,
    setupFilesAfterEnv: [
        ...(baseConfig.setupFilesAfterEnv || []),
        '<rootDir>/jest.setup.js',
    ],
};
