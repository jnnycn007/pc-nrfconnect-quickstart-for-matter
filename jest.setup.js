/*
 * Copyright (c) 2024 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-4-Clause
 */

const { TextDecoder } = require('util');
const { TextEncoder } = require('util');

// Polyfill TextDecoder for Jest test environment
if (typeof global.TextDecoder === 'undefined') {
    global.TextDecoder = TextDecoder;
}

if (typeof global.TextEncoder === 'undefined') {
    global.TextEncoder = TextEncoder;
}
