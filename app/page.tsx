import axios from 'axios';
import { options } from './layout';
import Image from 'next/image';
import Link from 'next/link';
import TrendingCarousel from '@/components/TrendingMovies';
import TrendingTv from '@/components/TrendingTv';
import TrendingAll from '@/components/TrendingAll';
import TrendingPeople from '@/components/TrendingPeople';
import { Suspense } from 'react';
import Loading from '@/components/Loading';

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <main className="sm:p-14 py-16 px-3 flex flex-col gap-2 bg-[#0F1117]">
        <h1 className="text-3xl text-white text-center font-bold">Trending</h1>
        <TrendingAll />
        <TrendingCarousel />
        <TrendingTv />
        <TrendingPeople />
      </main>
    </Suspense>
  );
}
