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
              className="sm:basis-1/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6"
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
                  <Star size={20} />
                  <span className="ml-1"> {m.vote_average.toFixed(1)} </span>
                </div>
                <Link
                  href={`/${
                    m.media_type === 'movie' ? 'movies' : m.media_type
                  }/${m.id}`}
                >
                  <h3 className="font-semibold text-lg md:text-l text-white">
                    {m.title || m.name}
                  </h3>
                </Link>
                <p className="text-sm flex">
                  <span>
                    {m.release_date?.slice(0, 4) ||
                      m.first_air_date?.slice(0, 4)}
                  </span>
                  <span className="ml-auto">{m.media_type}</span>
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
