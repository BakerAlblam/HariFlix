import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between ">
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Link
            href={''}
            className="font-normal transition-colors hover:text-red-500 focus:text-blue-500"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href={''}
            className="font-normal transition-colors hover:text-red-500 focus:text-blue-500"
          >
            License
          </Link>
        </li>
        <li>
          <Link
            href={''}
            className="font-normal transition-colors hover:text-red-500 focus:text-blue-500"
          >
            Contribute
          </Link>
        </li>
        <li>
          <Link
            href={''}
            className="font-normal transition-colors hover:text-red-500 focus:text-blue-500"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="relative text-sm m-2">
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
      </div>
    </footer>
  );
}
