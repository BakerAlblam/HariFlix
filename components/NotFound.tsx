import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <main className="bg-[#0F1117] grid min-h-full place-items-center h-screen text-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold ">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight  sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 ">
          Sorry, we couldn &apos;t find the page you &apos;re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md  px-3.5 py-2.5 text-sm font-semibold  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-black"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
