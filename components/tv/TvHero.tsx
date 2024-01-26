import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Genre = {
  id: string;
  name: string;
};

type TvHeroProps = {
  data: {
    genres?: Genre[];
    name?: string;
    tagline?: string;
    vote_average?: number;
    overview?: string;
    first_air_date?: string;
    last_air_date?: string | null;
    poster_path?: string;
    original_language: string;
  };
};

export default function TvHero({ data }: TvHeroProps) {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <nav
          className="flex px-5 py-3 text-gray-700  rounded-lg mb-4 w-1-/3"
          aria-label="Breadcrumb text-lg"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center  font-medium text-gray-700 hover:text-slate-400 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3 me-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <Link
                  href="/tv"
                  className="ms-1 font-medium text-gray-700 hover:text-gray-400 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  Shows
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ms-1 font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                  {data?.name || ''}
                </span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            alt={data?.name || ''}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover   lg:order-last lg:aspect-square w-full h-full"
            height={'1250'}
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            width={'950'}
          />
          <div className="flex flex-col justify-center space-y-2">
            <div className="space-y-1">
              <div className="flex">
                <ul>
                  <li className="flex">
                    <Star size={'25'} />
                    <span className="ml-1 mb-2 text-lg">
                      {data?.vote_average}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="">
                <h1 className="text-5xl mb-4 font-bold tracking-tighter sm:text-4xl xl:text-6xl/none">
                  {data?.name}
                </h1>
              </div>

              <div className="flex text-sm mt-5">
                {data?.genres?.map((g: Genre) => (
                  <li
                    key={g.id}
                    className="mr-1 list-none mb-2 text-sm p-1.5 bg-slate-800 rounded-lg"
                  >
                    {g.name}
                  </li>
                ))}
                <p className="mr-1 list-none mb-2 text-sm p-1.5 bg-slate-800 rounded-lg">
                  TV Series{' '}
                </p>
              </div>
              <span>
                {' '}
                {data.tagline && <div>&quot;{data.tagline}&quot;</div>}
              </span>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p className="">{data?.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
