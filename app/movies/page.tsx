import axios from 'axios';
import { options } from '../layout';
import Image from 'next/image';
import Link from 'next/link';
import Loading from '@/components/Loading';
import { Suspense } from 'react';
import NowPlaying from '@/components/NowPlaying';
import PopularMovie from '@/components/PopularMovie';
import TopRated from '@/components/TopRated';

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
    'https://api.themoviedb.org/3/movie/popular',
    options
  );
  //console.log(movie.data?.results);

  return (
    <Suspense fallback={<Loading />}>
      <main className="sm:p-14 py-16 px-3 flex flex-col gap-2 bg-[#0F1117]">
        <h1 className="text-3xl text-white text-center font-bold">Movies</h1>
        <NowPlaying />
        <PopularMovie />
        <TopRated />
      </main>
    </Suspense>
  );
}
