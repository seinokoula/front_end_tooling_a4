'use client';

import React, { FC, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';

interface Client {
    id: number;
    name: string;
    imageUrl: string;
    lastInvoice: {
        date: string;
        dateTime: string;
        status: string;
    };
}

const statuses: { [key: string]: string } = {
    Paid: 'text-green-700 bg-green-50 ring-green-600/20',
    Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
    Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
};

const clients: Client[] = [
    {
        id: 1,
        name: 'NCU',
        imageUrl: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
        lastInvoice: { date: '`npm-check-updates (ncu)` upgrades dependencies in package.json to the latest versions. It checks and updates direct dependencies, devDependencies, peerDependencies, and optionalDependencies using semantic versioning rules.', dateTime: '2022-12-13', status: 'Useful' },
    },
    {
        id: 2,
        name: 'StoryBook',
        imageUrl: 'https://d3uyj2gj5wa63n.cloudfront.net/wp-content/uploads/2019/08/011fc620-4cb2-11e9-a51a-fdbb10b4cabb-e1567090000539.png',
        lastInvoice: { date: 'Storybook is an open source tool for developing UIs in isolation. Developers can build and test UI components without running the full application. It integrates with popular frontend tools, is used by companies like Microsoft for streamlined UI development.', dateTime: '2023-01-22', status: 'Depend on the application' },
    },
    {
        id: 3,
        name: 'Eslint',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/1200px-ESLint_logo.svg.png',
        lastInvoice: { date: 'ESLint analyzes JavaScript code, enforces style guidelines, and catches errors. It can be customized with plugins and configurations. Install and set up locally with ﻿npm init @eslint/config. Run ESLint from the command line to lint code. It allow flexibility through plugins.', dateTime: '2023-01-23', status: 'Useful' },
    },
    {
        id: 4,
        name: 'PokeApi',
        imageUrl: 'https://assets-global.website-files.com/6064b31ff49a2d31e0493af1/63a577d0efca11b7a8e05430_pokeapi.svg',
        lastInvoice: { date: 'The PokéAPI is a RESTful API providing extensive Pokémon game data.It covers everything from Pokémon to abilities. Its freely available and maintained by volunteers worldwide. Documentation helps developers start using the API easily, trademarked by Nintendo.', dateTime: '2023-01-23', status: 'For fun side project' },
    },
    {
        id: 5,
        name: 'Tailwind',
        imageUrl: 'https://yt3.googleusercontent.com/ikv41jMTr1uHGdILrJhvbfVJcDt4oqhwApKX37TjAleF_cRPbF2W-waj7uMnS5JySvnlvAlTCg=s900-c-k-c0x00ffffff-no-rj',
        lastInvoice: { date: 'By using low-level utility classes instead of abstracted components, Tailwind gives flexibility while still providing consistency through its configuration and tokens. It has been widely adopted by developers and agencies for how much it speeds up the design and development process.', dateTime: '2023-01-23', status: 'Useful' },
    },
    {
        id: 6,
        name: 'Jest',
        imageUrl: 'data:image/png;base64,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',
        lastInvoice: { date: 'Jest is a JavaScript testing framework designed to ensure the correctness of any JavaScript codebase. It allows you to write tests with an accessible, familiar, and feature-rich API that provides fast results.', dateTime: '2023-01-23', status: 'Useful' },
    },
];

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

const Example: FC = () => {
    return (
        <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
            {clients.map((client) => (
                <li key={client.id} className="overflow-hidden rounded-xl border border-gray-200">
                    <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                        <img
                            src={client.imageUrl}
                            alt={client.name}
                            className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
                        />
                        <div className="text-sm font-medium leading-6 text-gray-900">{client.name}</div>
                        <Menu as="div" className="relative ml-auto">
                            <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Open options</span>
                                <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-50' : '',
                                                    'block px-3 py-1 text-sm leading-6 text-gray-900'
                                                )}
                                            >
                                                View<span className="sr-only">, {client.name}</span>
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-50' : '',
                                                    'block px-3 py-1 text-sm leading-6 text-gray-900'
                                                )}
                                            >
                                                Edit<span className="sr-only">, {client.name}</span>
                                            </a>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                    <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                        <div className="flex justify-between gap-x-4 py-3">
                            <dt className="text-gray-500">Description</dt>
                            <dd className="text-gray-700">
                                <time dateTime={client.lastInvoice.dateTime}>{client.lastInvoice.date}</time>
                            </dd>
                        </div>
                        <div className="flex justify-between gap-x-4 py-3">
                            <dt className="text-gray-500">Use case</dt>
                            <dd className="flex items-start gap-x-2">
                                <div
                                    className={classNames(
                                        statuses[client.lastInvoice.status],
                                        'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'
                                    )}
                                >
                                    {client.lastInvoice.status}
                                </div>
                            </dd>
                        </div>
                    </dl>
                </li>
            ))}
        </ul>
    );
};

export default Example;