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
              <Card
                className="w-full rounded-sm overflow-hidden"
                key={m?.id}
              >
                <div className="relative">
                  <img
                    alt={m?.name || m?.title}
                    className="w-full h-auto rounded-none"
                    src={`https://image.tmdb.org/t/p/original${m?.profile_path}`}
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
                  <p>Known for: {m?.known_for_department} </p>
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
