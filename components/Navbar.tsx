import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SheetTrigger, SheetContent, Sheet } from '@/components/ui/sheet';
import { JSX, SVGProps } from 'react';

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-4 py-2 lg:px-6 sticky top-0 bg-white z-10">
      <Link
        className="flex items-center"
        href="#"
      >
        <FilmIcon className="h-6 w-6" />
        <span className="ml-2 text-lg font-semibold">HariFlix</span>
      </Link>
      <nav className="hidden lg:flex gap-6">
        <Link
          className="text-sm font-medium hover:text-red-500"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium hover:text-red-500"
          href="/movies"
        >
          Movies
        </Link>
        <Link
          className="text-sm font-medium hover:text-red-500"
          href="#"
        >
          Anime
        </Link>
        <Link
          className="text-sm font-medium hover:text-red-500"
          href="#"
        >
          Shows
        </Link>
      </nav>
      <div className="relative">
        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
        <Input
          className="pl-8 text-sm"
          placeholder="Search..."
          type="search"
        />
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="lg:hidden"
            size="icon"
            variant="outline"
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link
            className="flex items-center mb-4"
            href="#"
          >
            <FilmIcon className="h-6 w-6" />
            <span className="ml-2 text-lg font-semibold">HariFlix</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold hover:text-red-500"
              href="/"
            >
              Home
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold hover:text-red-500"
              href="/movies"
            >
              Movies
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold hover:text-red-500"
              href="#"
            >
              Anime
            </Link>
            <Link
              className="flex w-full items-center py-2 text-lg font-semibold hover:text-red-500"
              href="/tv"
            >
              Shows
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

function FilmIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect
        width="18"
        height="18"
        x="3"
        y="3"
        rx="2"
      />
      <path d="M7 3v18" />
      <path d="M3 7.5h4" />
      <path d="M3 12h18" />
      <path d="M3 16.5h4" />
      <path d="M17 3v18" />
      <path d="M17 7.5h4" />
      <path d="M17 16.5h4" />
    </svg>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line
        x1="4"
        x2="20"
        y1="12"
        y2="12"
      />
      <line
        x1="4"
        x2="20"
        y1="6"
        y2="6"
      />
      <line
        x1="4"
        x2="20"
        y1="18"
        y2="18"
      />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle
        cx="11"
        cy="11"
        r="8"
      />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
