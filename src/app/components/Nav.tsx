"use client";

import { useState } from "react";
import Link from "next/link";
import UserView from "./UserView";
import { useSession } from "@clerk/nextjs";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { session } = useSession();
  return (
    <nav className="row bg-white dark:bg-gray-900 shadow-md fixed w-full z-10">
      <div className="container w-full mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          <Link href="/">INNOVA</Link>
        </div>
        {/* Hamburger Menu for Mobile */}
        <button
          className="block md:hidden text-gray-800 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 6.75h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div
          className={`flex-1 md:flex ${
            isOpen ? "block" : "hidden"
          } md:block justify-end`}
        >
          <div className="flex gap-4 justify-evenly">
            <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 mt-4 md:mt-0">
              <li>
                <Link
                  href="/"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
            <div>
              {session ? (
                <UserView></UserView>
              ) : (
                <SignedOut>
                  <SignInButton />
                </SignedOut>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
