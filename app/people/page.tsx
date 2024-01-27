import axios from 'axios';
import { options } from '../layout';
import Loading from '@/components/Loading';
import { Suspense } from 'react';
import { Image } from '@nextui-org/react';
import Link from 'next/link';

export default async function Page() {
  const data = await axios.get(
    'https://api.themoviedb.org/3/person/popular?language=en-US&page=1',
    options
  );

  const limitedResponse = data?.data?.results;
  console.log(limitedResponse);

  return (
    <Suspense fallback={<Loading />}>
      <main className="sm:p-14 py-16 px-3 flex flex-col gap-2 bg-[#0F1117]">
        <h1 className="text-3xl text-white text-center font-bold">People</h1>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 gap-2 lg:gap-5">
          {limitedResponse?.map((d: any) => (
            <div
              className="mb-2"
              key={d?.id}
            >
              <Image
                alt={d?.name}
                className="object-cover w-3/4 lg:w-full h-fit-screen rounded-lg"
                height={300}
                src={`https://image.tmdb.org/t/p/original${d.profile_path}`}
                fallbackSrc={
                  'https://usercontent.one/wp/www.vocaleurope.eu/wp-content/uploads/no-image.jpg?media=1642546813'
                }
                width={400}
              />
              <Link href={`/${'person'}/${d.id}`}>
                <h3 className="font-semibold truncate text-center mt-1 text-white">
                  {' '}
                  {d?.name}{' '}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Suspense>
  );
}
