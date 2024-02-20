import { options } from '@/app/layout';
import axios from 'axios';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '../ui/carousel';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '../ui/card';

export default async function AiringToday() {
  const data = await axios.get(
    'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1',
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

  const response = data.data?.results;

  return (
    <div className="text-white my-10">
      <h1 className="text-2xl text-white mb-2 underline">Airing Today</h1>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {response?.map((m: Tv) => (
            <CarouselItem
              key={m.id}
              className="sm:basis-1/2 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-1/8 basis-1/2"
            >
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
                  <Link href={`/tv/${m.id}`}>
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="hidden sm:inline-block" />
      </Carousel>
    </div>
  );
}
