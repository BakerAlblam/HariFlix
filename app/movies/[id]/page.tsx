import { options } from '@/app/layout';
import NotFound from '@/components/NotFound';
import MovieCast from '@/components/movies/MovieCast';
import axios from 'axios';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';

type genre = {
  id: string;
  name: string;
};

export default async function Page({ params }: { params: { id: any } }) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}`,
      options
    );

    if (response.status === 404) {
      return <NotFound />;
    }

    const data = response.data;

    return (
      <div className="flex flex-col bg-[#0F1117] text-white">
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <nav
              className="flex px-5 py-3 text-gray-700  rounded-lg mb-4 w-1-/3"
              aria-label="Breadcrumb text-lg"
            >
              <ol className="inline-flex items-center">
                <li className="inline-flex items-center">
                  <Link
                    href="/"
                    className="inline-flex items-center font-medium text-gray-400 hover:text-slate-500 dark:text-gray-400 dark:hover:text-white"
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
                      className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-500 "
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
                      className="ms-1 font-medium text-gray-400 hover:text-gray-500 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      Shows
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg
                      className="rtl:rotate-180  w-3 h-3 mx-1 text-gray-500"
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
                    <span className="ms-1 font-medium text-gray-200 md:ms-2 dark:text-gray-400">
                      {data?.title || ''}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>

            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                alt={data?.title}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full sm:h-full  lg:order-last lg:aspect-square"
                height={'650'}
                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                width={'650'}
              />
              <div className="flex flex-col justify-center space-y-2">
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
                <div className="space-y-1">
                  <h1 className="text-3xl mb-6 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {data?.title}
                  </h1>
                  <div className="flex text-sm space-x-2">
                    {data?.genres?.map((g: genre) => (
                      <li
                        key={g.id}
                        className=" list-none mb-2 text-sm p-1.5 bg-slate-800 rounded-lg"
                      >
                        {g.name}
                      </li>
                    ))}
                    <p className=" list-none mb-2 text-sm p-1.5 bg-slate-800 rounded-lg">
                      TV Series{' '}
                    </p>
                  </div>
                  <span>&quot;{data?.tagline}&quot;</span>
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Overview</h2>
                  <p className="">{data?.overview}</p>
                  <p className="">Release Date: {data?.release_date} </p>
                  <p className="">Runtime: {data?.runtime} minutes</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <hr className="w-full h-0.5 bg-white" />
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-4">Cast</h2>
            <MovieCast data={data} />
          </div>
        </section>
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Overview</h2>
                <p className="">This is the plot of the movie.</p>
                <p className="">Release Date: January 1, 2024</p>
                <p className="">Runtime: 120 minutes</p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Cast</h2>
                <p className="">Main Actor as Main Character</p>
                <p className="">Supporting Actor as Supporting Character</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Ratings & Reviews</h2>
                <p className="">User 1: 5 stars - This movie was amazing!</p>
                <p className="">
                  User 2: 4 stars - Great movie, would recommend..
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } catch (error) {
    // Handle other errors (e.g., network issues)
    console.error('Error fetching data:', error);
    return <NotFound />;
  }
}
