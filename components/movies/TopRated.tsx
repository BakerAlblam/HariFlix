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

export default async function TopRated() {
  const data = await axios.get(
    'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    options
  );

  const response = data?.data?.results;

  return (
    <div className="text-white my-10">
      <h1 className="text-2xl text-white mb-2 underline">Top Rated</h1>
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
                <Link href={`/${'movies'}/${m.id}`}>
                  <h3 className="font-semibold text-lg md:text-l text-white truncate">
                    {m.title || m.name}
                  </h3>
                </Link>
                <p className="text-sm flex">
                  <span>
                    {m.release_date?.slice(0, 4) ||
                      m.first_air_date?.slice(0, 4)}
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
