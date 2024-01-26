import Loading from '@/components/Loading';
import AiringToday from '@/components/tv/AiringToday';
import OnTheAir from '@/components/tv/OnTheAir';
import PopularTv from '@/components/tv/PopularTv';
import TopRatedTv from '@/components/tv/TopRatedTv';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <main className="sm:p-14 py-16 px-3 flex flex-col gap-2 bg-[#0F1117]">
        <h1 className="text-3xl text-white text-center font-bold">TV</h1>
        <TopRatedTv />
        <OnTheAir />
        <AiringToday />
        <PopularTv />
      </main>
    </Suspense>
  );
}
