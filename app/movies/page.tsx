import Loading from '@/components/Loading';
import { Suspense } from 'react';
import NowPlaying from '@/components/movies/NowPlaying';
import PopularMovie from '@/components/movies/PopularMovie';
import TopRated from '@/components/movies/TopRated';
import Upcoming from '@/components/movies/Upcoming';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Movies',
  description:
    'Movies page where you can get info regarding upcoming, popular, top-rated and now playing movies',
};

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <main className="sm:p-14 py-16 px-3 flex flex-col gap-2 bg-[#0F1117]">
        <h1 className="text-3xl text-white text-center font-bold">Movies</h1>
        <NowPlaying />
        <PopularMovie />
        <TopRated />
        <Upcoming />
      </main>
    </Suspense>
  );
}
