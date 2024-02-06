import { options } from '@/app/layout';
import Loading from '@/components/Loading';
import axios from 'axios';
import { Suspense } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Image } from '@nextui-org/react';

type Data = {
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
      <main className="sm:p-14 py-16 px-1 flex flex-col gap-2 bg-[#0F1117]">
        <h1 className="text-2xl text-white text-start font-bold mb-3">
          Search results for: "{decodeURIComponent(slug)}"
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {res?.map((m: Data) => (
            <Card className="w-full rounded-sm overflow-hidden">
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
                <div className="flex absolute top-0 right-0 bg-[#ffd700] gap-2 px-2 py-1 text-xs font-bold text-black">
                  <Star
                    size={20}
                    color="gold"
                  />
                  {m?.vote_average &&
                    typeof m.vote_average === 'number' &&
                    m.vote_average.toFixed(1)}
                </div>
              </div>
              <CardContent className="bg-white p-4">
                <h3 className="text-lg font-bold truncate">
                  {m?.title || m?.name}
                </h3>
                <div className="">
                  <p className="text-sm text-gray-600">
                    {m?.release_date?.toString()?.substring(0, 4) ||
                      m?.first_air_date?.toString()?.substring(0, 4)}{' '}
                    •{' '}
                    {m?.media_type.charAt(0).toUpperCase() +
                      m.media_type.slice(1)}
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
