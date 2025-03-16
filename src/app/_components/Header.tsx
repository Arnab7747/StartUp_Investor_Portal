import Image from "next/image";
import React from "react";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link className="flex items-center" href="/">
              <span className="sr-only">Home</span>
              <Image
                src="/logo.svg"
                alt="logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-blue-600 text-sm font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-blue-600 text-sm font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-blue-600 text-sm font-medium"
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <LoginLink className="rounded-md px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600">
              Sign in
            </LoginLink>
            <RegisterLink className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Sign up
            </RegisterLink>

            <button className="md:hidden rounded-md p-2 text-gray-600 hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;