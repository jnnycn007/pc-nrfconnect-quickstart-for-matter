/*
 * Copyright (c) 2023 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-4-Clause
 */

import { combineReducers } from '@reduxjs/toolkit';

import type { AppThunk } from '../../app/store';
import thingy91x, { reset as thingy91xReset } from './thingy91x/thingy91xSlice';

export const allReset = (): AppThunk => dispatch => {
    dispatch(thingy91xReset());
};

export default combineReducers({
    thingy91x,
});
