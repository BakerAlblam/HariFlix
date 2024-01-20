import axios from 'axios';
import { options } from './layout';
import Image from 'next/image';
import Link from 'next/link';
import TrendingCarousel from '@/components/TrendingCarousel';

type movieTypes = {
  id: string;
  title: string;
  release_date: number;
  poster_path: any;
  name: string;
  media_type: string;
  first_air_date: number;
};

export default async function Page() {
  const movie = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );
  const trendingMovies = movie?.data?.results;

  console.log(trendingMovies);

  return (
    <main className="sm:p-14 py-16 px-3 flex flex-col gap-2 bg-[#0F1117]">
      <h1 className="text-3xl text-white font-bold">Trending</h1>

      <TrendingCarousel trendingMovies={trendingMovies} />
    </main>
  );
}
