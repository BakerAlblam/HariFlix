import axios from 'axios';
import { options } from '../layout';
import Loading from '@/components/Loading';
import { Suspense } from 'react';
import { Card, Image } from '@nextui-org/react';
import Link from 'next/link';
import { CardContent } from '@/components/ui/card';

export default async function Page() {
  const data = await axios.get(
    'https://api.themoviedb.org/3/person/popular?language=en-US&page=1',
    options
  );

  const limitedResponse = data?.data?.results;

  return (
    <Suspense fallback={<Loading />}>
      <main className="sm:p-14 py-16 px-3 flex flex-col gap-2 bg-[#0F1117]">
        <h1 className="text-3xl text-white text-center font-bold">People</h1>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-2 lg:gap-5">
          {limitedResponse?.map((m: any) => (
            <Card
              className="w-full rounded-sm overflow-hidden"
              key={m?.id}
            >
              <div className="relative">
                <img
                  alt={m?.name || m?.title}
                  className="w-full h-auto rounded-none"
                  src={`https://image.tmdb.org/t/p/original${m?.profile_path}`}
                  style={{
                    aspectRatio: '2/3',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <CardContent className="bg-white p-4">
                <Link href={`/person/${m.id}`}>
                  <h3 className="text-lg font-bold truncate">
                    {m?.title || m?.name}
                  </h3>
                </Link>
                <p>Known for: {m?.known_for_department} </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </Suspense>
  );
}
