/*
 * Copyright (c) 2025 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-4-Clause
 */

import React from 'react';
import {
    logger,
} from '@nordicsemiconductor/pc-nrfconnect-shared';

import { RadioSelect } from '../listSelect/RadioSelect';
import { useAppDispatch } from '../../app/store';
import { Back } from '../Back';
import Main from '../Main';
import { Next } from '../Next';
import {
    Choice,
    setChoice,
} from '../../features/device/deviceSlice';


interface EcosystemProps {
    name: string;
    description: string;
}

interface SelectEcosystemStepProps {
    ecosystems: EcosystemProps[];
}

const SelectEcosystemStep = ({ ecosystems }: SelectEcosystemStepProps) => {

    const dispatch = useAppDispatch();
    const previouslySelectedChoice = undefined;
    const [selected, setSelected] = React.useState<Choice | undefined>(previouslySelectedChoice);

    const isSelected = (name: string) => {
        const result = selected?.name === name;
        // Debug log to see if ecosystem is selected
        // eslint-disable-next-line no-console
        logger.debug(`isSelected("${name}"):`, result, 'selected:', selected);
        return result;
    };

    return (
        <Main>
            <Main.Content heading="Select an ecosystem you want to work with">
                <RadioSelect
                    items={ecosystems.map(ecosystem => ({
                        id: ecosystem.name,
                        selected: isSelected(ecosystem.name),
                        onClick: () => {},
                        content: (
                            <span className="tw-text-lg tw-font-semibold">{ecosystem.description}</span>
                        ),
                    }))}
                    onSelect={item => {
                        const found = ecosystems.find(ecosystem => ecosystem.name === item.id);
                        if (found) {
                            setSelected(found as Choice);
                        }
                    }}
                />
            </Main.Content>
            <Main.Footer>
                <Back />
                <Next
                    disabled={!selected}
                    onClick={next => {
                        if (!selected) return;

                        dispatch(setChoice(selected));
                        next();
                    }}
                />
            </Main.Footer>
        </Main>
    );
};

export default (ecosystems: EcosystemProps[]) => ({
    name: 'Select Ecosystem',
    component: () => SelectEcosystemStep({ ecosystems }),
});

