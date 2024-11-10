import React from 'react';
import Link from "next/link";

const LoginLinks = () => {
    return (
        <nav className="-mx-3 flex flex-1 justify-end">
            <Link
                href="/login"
                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
            >
                Log in
            </Link>
            <Link
                href="/register"
                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
            >
                Register
            </Link>
        </nav>
    );
};

export default LoginLinks;
