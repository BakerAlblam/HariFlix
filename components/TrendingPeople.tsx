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

type Tv = {
  id: string;
  title: string;
  release_date: number;
  profile_path: any;
  name: string;
  media_type: string;
  first_air_date: number;
  known_for_department: string;
};

export default async function TrendingPeople() {
  const data = await axios.get(
    'https://api.themoviedb.org/3/trending/person/day?language=en-US',
    options
  );
  const TrendingPeople = data?.data?.results;

  return (
    <div className="text-white my-10">
      <h1 className="text-2xl text-white mb-2 underline">People</h1>
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full"
      >
        <CarouselContent>
          {TrendingPeople?.map((m: Tv) => (
            <CarouselItem
              key={m.id}
              className="sm:basis-1/2 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-1/8 basis-1/2"
            >
              <div className="p-1">
                <img
                  alt={m.name}
                  className="object-cover w-full h-fit-screen rounded-lg"
                  height={400}
                  src={`https://image.tmdb.org/t/p/original${m.profile_path}`}
                  width={400}
                />
              </div>
              <div className="bg-gray-400 p-4 rounded-b-lg">
                <Link
                  href={`/${
                    m.media_type === 'movie' ? 'movies' : m.media_type
                  }/${m.id}`}
                >
                  <h3 className="font-semibold text-lg md:text-l text-white truncate">
                    {m.title || m.name}
                  </h3>
                  <div className="text-sm flex">
                    <span className="">
                      Known for: {m.known_for_department}{' '}
                    </span>
                  </div>
                </Link>
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
