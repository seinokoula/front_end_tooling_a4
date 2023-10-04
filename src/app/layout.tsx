'use client';

import './globals.css';
import header_logo from './../../assets/pikachuVangog.jpeg'
import Image from 'next/image';
import React, { Fragment, useState } from 'react';
import { Dialog } from '@headlessui/react'
import pikachuGog from './../../assets/pikachuVangog.jpeg'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Packages', href: 'packages' },
  { name: 'Pokedex', href: 'pokedex' },
  { name: 'Contact', href: 'contact' },
]

  export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
      <html lang="en" className='dark'>
        <body>
            <header className="bg-white">
              <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <Image className="h-8 w-auto" width={150} height={150} src={pikachuGog} alt="" />
                  </a>
                </div>
                <div className="flex lg:hidden">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(true)}
                  >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                  <a href="https://github.com/seinokoula/front_end_tooling_a4" target='_blank' className="text-sm font-semibold leading-6 text-gray-900">
                  GitHub repo<span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </nav>
              <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                  <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Your Company</span>
                      <Image className="h-8 w-auto" width={150} height={150} src={pikachuGog} alt="" />
                    </a>
                    <button
                      type="button"
                      className="-m-2.5 rounded-md p-2.5 text-gray-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                      <div className="space-y-2 py-6">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <div className="py-6">
                        <a
                          href="https://github.com/seinokoula/front_end_tooling_a4"
                          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          GitHub repo
                        </a>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Dialog>
            </header>
            {children}
        </body>
      </html>
    )
  }


