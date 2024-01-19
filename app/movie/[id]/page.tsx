import { options } from '@/app/layout';
import Navbar from '@/components/Navbar';
import axios from 'axios';
import Image from 'next/image';

export default async function Page({ params }: { params: { id: any } }) {
  const fetchMovie = await axios.get(
    `https://api.themoviedb.org/3/movie/${params.id}`,
    options
  );
  const data = fetchMovie.data;
  console.log(fetchMovie.data);
  return (
    <div className="flex flex-col bg-[#0F1117]">
      <section className="w-full py-12 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Image
              alt="Movie Backdrop"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              height={'550'}
              src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
              width={'550'}
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {data?.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p className="text-gray-500 dark:text-gray-400">
                This is the plot of the movie.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Release Date: January 1, 2024
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Runtime: 120 minutes
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Cast</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Main Actor as Main Character
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Supporting Actor as Supporting Character
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Ratings & Reviews</h2>
              <p className="text-gray-500 dark:text-gray-400">
                User 1: 5 stars - This movie was amazing!
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                User 2: 4 stars - Great movie, would recommend..
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
