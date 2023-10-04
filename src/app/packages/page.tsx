'use client';

import React, { FC, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid';
import github from './../../../assets/Logo_packages/github_logo.png'

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
        name: 'Reform',
        imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
        lastInvoice: { date: 'January 23, 2023', dateTime: '2023-01-23', status: 'Paid' },
    },
    {
        id: 5,
        name: 'Reform',
        imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
        lastInvoice: { date: 'January 23, 2023', dateTime: '2023-01-23', status: 'Paid' },
    },
    {
        id: 6,
        name: 'Reform',
        imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
        lastInvoice: { date: 'January 23, 2023', dateTime: '2023-01-23', status: 'Paid' },
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