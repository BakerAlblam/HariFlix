import Link from 'next/link';
import { Card, CardContent } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel';
import Image from 'next/image';
import { Star } from 'lucide-react';
import axios from 'axios';
import { options } from '@/app/layout';

type Movie = {
  id: string;
  title: string;
  release_date: string;
  poster_path: any;
  name: string;
  media_type: string;
  first_air_date: string;
  vote_average: number;
};

export default async function TrendingMovies() {
  const movie = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );
  const trendingMovies = movie?.data?.results;

  return (
    <div className="text-white my-10">
      <h1 className="text-2xl text-white mb-2 underline">Movies</h1>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {trendingMovies?.map((m: Movie) => (
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="hidden sm:inline-block" />
      </Carousel>
    </div>
  );
}
