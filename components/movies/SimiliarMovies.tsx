import { Card } from '@nextui-org/react';
import axios from 'axios';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import Image from 'next/image';
import { options } from '@/app/layout';
import { Star } from 'lucide-react';
import Link from 'next/link';
import { CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

export default async function SimilarMovies({ data }: { data: any }) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${data?.id}/similar?language=en-US&page=1`,
    options
  );

  const SimilarMovies = await response?.data?.results;

  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full"
    >
      <CarouselContent>
        {SimilarMovies?.map((m: any) => (
          <CarouselItem
            key={m.id}
            className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/8 basis-1/2"
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
                <h3 className="font-semibold text-start text-lg md:text-l text-white truncate">
                  {m.title || m.name}
                </h3>
              </Link>
              <p className="text-sm flex">
                <span>
                  {m.release_date?.slice(0, 4) || m.first_air_date?.slice(0, 4)}
                </span>
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:inline-block" />
      <CarouselNext className="hidden sm:inline-block" />
    </Carousel>
  );
}
