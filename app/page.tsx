import axios from 'axios';
import { options } from './layout';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

type movieTypes = {
  id: string;
  title: string;
  release_date: number;
  poster_path: any;
};

export default async function Page() {
  const movie = await axios.get(
    'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
    options
  );
  console.log(movie);

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10 bg-[#0F1117]">
      <h1 className="text-3xl text-white font-bold">Explore Movies</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:p-6">
        {movie?.data?.results.map((m: movieTypes) => (
          <div
            className="relative group overflow-hidden rounded-lg"
            key={m.id}
          >
            <Link
              className="absolute inset-0 z-10"
              href={`/movie/${m.id}`}
            >
              <span className="sr-only">View</span>
            </Link>
            <Image
              alt="Movie 1"
              className="object-cover w-full h-fit-screen"
              height={400}
              src={`https://image.tmdb.org/t/p/original${m.poster_path}`}
              width={400}
            />
            <div className="bg-amber-300 p-4">
              <h3 className="font-semibold text-lg md:text-l text-white">
                {m.title}
              </h3>
              <p className="text-sm">{m.release_date}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
