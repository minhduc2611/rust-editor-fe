"use client";

import Link from "next/link";

import { useState } from "react";

export default function Home() {
    const [login, setLogin] = useState(false);

    return (
        <div className="Header flex  mt-8 ml-16 justify-between">
            <div className="flex">
                <div className="flex">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6 mb-2"
                    >
                        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                        <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                    </svg>
                    <h2 className="mx-3.5 font-extrabold">Taxonomy</h2>
                </div>

                <div className="menu flex gap-x-6 ml-8 mt-1 text-slate-500">
                    <div className=" text-sm">Features</div>
                    <div className=" text-sm">Pricing</div>
                    <div className=" text-sm">Blog</div>
                    <div className=" text-sm">Documentation</div>
                </div>
            </div>

            {
            login ? (
                <img
                    src="https://www.nicepng.com/png/detail/159-1593087_avatar-id-sword-art-online.png"
                    alt=""
                    className="Login mt-2 mr-16 bg-slate-100 w-9 h-9 rounded-full"
                />
            ) : (
                <button className="Login mt-2 mr-16 bg-slate-100 w-20 h-8 rounded-md font-medium">
                    Login
                </button>
            )
            }
        </div>
    );
}
