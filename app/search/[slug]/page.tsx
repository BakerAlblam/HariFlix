import { options } from '@/app/layout';
import Loading from '@/components/Loading';
import axios from 'axios';
import { Suspense } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Image } from '@nextui-org/react';
import Link from 'next/link';

type Data = {
  id: number;
  vote_average: number;
  title: string;
  release_date: number;
  media_type: string;
  poster_path: string;
  first_air_date: number;
  name: string;
  profile_path: string;
};

export default async function SearchResults(context: {
  params: { slug: string };
}) {
  const { slug } = context.params;
  const data = await axios.get(
    `https://api.themoviedb.org/3/search/multi?query=${slug}&include_adult=false&language=en-US&page=1`,
    options
  );
  const res = (await data?.data?.results)?.filter(
    (item: Data) => item.poster_path || item?.profile_path === null
  );
  console.log(res);

  return (
    <Suspense fallback={<Loading />}>
      <main className="sm:p-12 py-16 px-1 flex flex-col gap-2 bg-[#0F1117]">
        <h1 className="text-2xl text-white text-start font-bold mb-3">
          Search results for: &quot;{decodeURIComponent(slug)}&quot;
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8 gap-5">
          {res?.map((m: Data) => (
            <Card
              className="w-full rounded-sm overflow-hidden"
              key={m?.id}
            >
              <div className="relative">
                <Image
                  alt={m?.name || m?.title}
                  className="w-full h-auto rounded-none"
                  src={`https://image.tmdb.org/t/p/original${
                    m.poster_path || m?.profile_path
                  }`}
                  style={{
                    aspectRatio: '2/3',
                    objectFit: 'cover',
                  }}
                />
              </div>
              <CardContent className="bg-white p-4">
                <Link
                  href={`/${
                    m.media_type === 'movie' ? 'movies' : m.media_type
                  }/${m.id}`}
                >
                  <h3 className="text-lg font-bold truncate">
                    {m?.title || m?.name}
                  </h3>
                </Link>
                <div className="flex mt-1 space-x-2 text-sm text-gray-600">
                  <p>
                    {m?.release_date?.toString()?.substring(0, 4) ||
                      m?.first_air_date?.toString()?.substring(0, 4)}
                    •
                  </p>
                  <p>
                    {' '}
                    {m?.media_type.charAt(0).toUpperCase() +
                      m.media_type.slice(1)}
                    •
                  </p>
                  <Star
                    size={20}
                    color="gold"
                  />
                  <p>
                    {' '}
                    {m?.vote_average &&
                      typeof m.vote_average === 'number' &&
                      m.vote_average.toFixed(1)}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </Suspense>
  );
}
