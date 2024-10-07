'use client';
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <>
                {/* ========== HEADER ========== */}
                <header className="flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200">
                    <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center gap-x-1">
                            <Link
                                className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80"
                                href="/"
                                aria-label="Brand"
                            >
                                Brand
                            </Link>
                            {/* Collapse Button */}
                            <button
                                type="button"
                                className="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                                id="hs-header-base-collapse"
                                aria-expanded="false"
                                aria-controls="hs-header-base"
                                aria-label="Toggle navigation"
                                data-hs-collapse="#hs-header-base"
                            >
                                <svg
                                    className="hs-collapse-open:hidden size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1={3} x2={21} y1={6} y2={6} />
                                    <line x1={3} x2={21} y1={12} y2={12} />
                                    <line x1={3} x2={21} y1={18} y2={18} />
                                </svg>
                                <svg
                                    className="hs-collapse-open:block shrink-0 hidden size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M18 6 6 18" />
                                    <path d="m6 6 12 12" />
                                </svg>
                                <span className="sr-only">Toggle navigation</span>
                            </button>
                            {/* End Collapse Button */}
                        </div>
                        {/* Collapse */}
                        <div
                            id="hs-header-base"
                            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block "
                            aria-labelledby="hs-header-base-collapse"
                        >
                            <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                                <div className="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
                                    <div className="grow">
                                        <div className="flex flex-col md:flex-row  md:items-center gap-0.5 md:gap-1">
                                            <Link
                                                className="p-2 flex items-center text-sm bg-gray-100 text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                                                href="/eventHandling"
                                                aria-current="page"
                                            >
                                                Event Handling
                                            </Link> 
                                            <Link
                                                className="p-2 flex items-center text-sm bg-gray-100 text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                                                href="/counterExample"
                                                aria-current="page"
                                            >
                                                Counter
                                            </Link> 
                                            <Link
                                                className="p-2 flex items-center text-sm bg-gray-100 text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                                                href="/todo"
                                                aria-current="page"
                                            >
                                                To Do
                                            </Link> 
                                            <Link
                                                className="p-2 flex items-center text-sm bg-gray-100 text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                                                href="/productlisting"
                                                aria-current="page"
                                            >
                                                ProductList
                                            </Link> 
                                        </div>
                                    </div>
                                    {/* Button Group */}
                                    <div className="md:ms-auto mt-2 md:mt-0 flex flex-wrap items-center gap-x-1.5">
                                        <Link
                                            className="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100"
                                            href="/signup"
                                        >
                                            Sign in
                                        </Link>
                                        <Link
                                            className="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100"
                                            href="/login"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            className="py-2 px-2.5 inline-flex items-center font-medium text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                            href="#" onClick={() => {alert("Chalo bhai suru kro!")}}
                                        >
                                            Get started
                                        </Link>
                                    </div>
                                    {/* End Button Group */}
                                </div>
                            </div>
                        </div>
                        {/* End Collapse */}
                    </nav>
                </header>
                {/* ========== END HEADER ========== */}
            </>

        </div>
    )
}

export default Navbar