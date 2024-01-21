import axios from 'axios';
import { options } from './layout';
import Image from 'next/image';
import Link from 'next/link';
import TrendingCarousel from '@/components/TrendingMovies';
import TrendingTv from '@/components/TrendingTv';
import TrendingAll from '@/components/TrendingAll';
import TrendingPeople from '@/components/TrendingPeople';

export default async function Page() {
  const movie = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );
  const trendingMovies = movie?.data?.results;

  return (
    <main className="sm:p-14 py-16 px-3 flex flex-col gap-2 bg-[#0F1117]">
      <h1 className="text-3xl text-white text-center font-bold">Trending</h1>
      <TrendingAll />
      <TrendingCarousel trendingMovies={trendingMovies} />
      <TrendingTv />
      <TrendingPeople />
    </main>
  );
}
