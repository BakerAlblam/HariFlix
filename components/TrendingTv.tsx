import axios from 'axios';
import { Card, CardContent } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel';
import Image from 'next/image';
import { options } from '@/app/layout';
import Link from 'next/link';
import { Star } from 'lucide-react';

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

export default async function TrendingTv() {
  const data = await axios.get(
    'https://api.themoviedb.org/3/trending/tv/day?language=en-US',
    options
  );
  const trendingTv = data?.data?.results;

  return (
    <div className="text-white my-10">
      <h1 className="text-2xl text-white mb-2 underline">TV</h1>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {trendingTv?.map((m: Tv) => (
            <CarouselItem
              key={m.id}
              className="sm:basis-1/2 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-1/8 basis-1/2"
            >
              <div className="p-1">
                <Image
                  alt={m.name}
                  className="object-cover w-full h-fit-screen rounded-lg"
                  height={400}
                  src={`https://image.tmdb.org/t/p/original${m.poster_path}`}
                  width={400}
                />
              </div>
              <div className="bg-gray-400 p-4 rounded-b-lg">
                <div className="text-sm flex">
                  <Star
                    size={20}
                    color="gold"
                  />
                  <span className="ml-1 mb-0.5 text-rose-700">
                    {' '}
                    {m.vote_average.toFixed(1)}{' '}
                  </span>
                </div>
                <Link
                  href={`/${
                    m.media_type === 'movie' ? 'movies' : m.media_type
                  }/${m.id}`}
                >
                  <h3 className="font-semibold text-lg md:text-l text-white truncate">
                    {m.title || m.name}
                  </h3>
                </Link>
                <p className="text-sm flex">
                  <span>
                    {m.release_date?.slice(0, 4) ||
                      m.first_air_date?.slice(0, 4)}
                  </span>
                  <span className="ml-auto">
                    {m.media_type.charAt(0).toUpperCase() +
                      m.media_type.slice(1)}
                  </span>
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="hidden sm:inline-block" />
      </Carousel>
    </div>
  );
}
