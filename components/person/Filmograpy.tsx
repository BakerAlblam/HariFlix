import { options } from '@/app/layout';
import axios from 'axios';
import { Image } from '@nextui-org/react';
import Link from 'next/link';
import { Card, CardContent } from '../ui/card';
import { Star } from 'lucide-react';

export default async function Filmography({ data }: { data: any }) {
  const actorId = data?.id;
  const actorData = await axios.get(
    `https://api.themoviedb.org/3/person/${actorId}/movie_credits?language=en-US`,
    options
  );

  type Tv = {
    id: string;
    title: string;
    release_date: string;
    poster_path: any;
    name: string;
    media_type: string;
    first_air_date: string;
    vote_average: number;
  };

  const response = actorData?.data?.cast;
  const limitedResponse = response ? response.slice(0, 20) : null;

  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-1 lg:gap-3">
        {limitedResponse?.map((m: any) => (
          <Card
            className="w-full rounded-sm overflow-hidden"
            key={m?.id}
          >
            <div className="relative">
              <img
                alt={m?.name || m?.title}
                className="w-full h-auto rounded-none"
                src={`https://image.tmdb.org/t/p/original${m.poster_path}`}
                style={{
                  aspectRatio: '2/3',
                  objectFit: 'cover',
                }}
              />
            </div>
            <CardContent className="bg-white p-4">
              <Link href={`/movies/${m.id}`}>
                <h3 className="text-lg font-bold truncate">
                  {m?.title || m?.name}
                </h3>
              </Link>
              <div className="flex mt-1 space-x-2 text-sm text-gray-600">
                <p className="mr-1">
                  {m?.release_date?.toString()?.substring(0, 4) ||
                    m?.first_air_date?.toString()?.substring(0, 4)}
                </p>
                <p className="mr-1">•</p>

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
    </section>
  );
}
