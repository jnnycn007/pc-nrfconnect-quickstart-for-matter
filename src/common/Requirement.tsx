/*
 * Copyright (c) 2025 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-4-Clause
 */

import React, { ReactElement } from 'react';

import Link from './Link';

interface MediaProps {
    path: string;
    alt: string;
    text: string;
    description: string;
    visit_note: ReactElement;
}

interface RequirementProps {
    mediaSrc: MediaProps[];
    note?: string;
    footer?: string;
}

const Requirement = ({ mediaSrc, note, footer }: RequirementProps) => (
    // Container
    <div className="tw-flex tw-flex-col tw-gap-8">
        {/* Media container */}
        <div className="tw-flex tw-flex-row tw-gap-8">
            {/* Media items */}
            {mediaSrc.map((media, index) => (
                <div
                    key={
                        typeof media.text === 'string'
                            ? media.text.slice(0, 40)
                            : `media-${index}`
                    }
                    className="tw-flex tw-flex-1 tw-flex-col tw-gap-6"
                >
                    {/* Media item */}
                    <div className="tw-flex tw-flex-1 tw-flex-col tw-gap-8">
                        {/* Media text */}
                        <div
                            className="tw-text-center tw-font-medium"
                            dangerouslySetInnerHTML={{
                                __html: media.text,
                            }}
                        />
                        {/* Media image */}
                        <img
                            src={media.path}
                            alt={media.alt}
                            className="tw-mx-auto tw-h-[200px]"
                        />
                    </div>
                    {/* Media description */}
                    <div className="tw-flex tw-flex-1 tw-flex-col tw-gap-2">
                        <div
                            className="tw-align-text-top tw-font-light"
                            dangerouslySetInnerHTML={{
                                __html: media.description,
                            }}
                        />
                        {/* Media visit note */}
                        {media.visit_note && (
                            <div className="tw-align-text-top tw-font-light">
                                {media.visit_note}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
        {/* Note */}
        {note && (
            <div className="tw-pt-0.5 tw-text-xs">
                <Link label={note} href={note} color="tw-text-primary" />
            </div>
        )}
        {/* Footer */}
        {footer && (
            <div className="tw-pt-0.5 tw-text-xs">
                <Link label={footer} href={footer} color="tw-text-primary" />
            </div>
        )}
    </div>
);

export default Requirement;
