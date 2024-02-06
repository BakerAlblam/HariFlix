import { FilmIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-2 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <FilmIcon className="h-6 w-6" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              HariMDB
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-3 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="#"
                className="hover:underline me-4 md:me-6"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline me-4 md:me-6"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline me-4 md:me-6"
              >
                Licensing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Thanks to{' '}
          <span>
            <Link
              href="https://vercel.com"
              className="text-sm font-medium hover:text-red-500"
            >
              Vercel
            </Link>{' '}
          </span>{' '}
          and the{' '}
          <span>
            <Link
              href="https://www.themoviedb.org/"
              className="text-sm font-medium hover:text-red-500"
            >
              Themoviedb.org
            </Link>{' '}
          </span>
          for making this site possible
        </span>
      </div>
    </footer>
  );
};

export default Footer;
