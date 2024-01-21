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
};

export default async function TrendingPeople() {
  const data = await axios.get(
    'https://api.themoviedb.org/3/trending/person/day?language=en-US',
    options
  );
  const trendingTv = data?.data?.results;
  console.log(trendingTv);

  return (
    <div className="text-white my-10">
      <h1 className="text-2xl text-white mb-2">People</h1>
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
              className="sm:basis-1/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            >
              <div className="p-1">
                <Image
                  alt={m.name}
                  className="object-cover w-full h-fit-screen rounded-lg"
                  height={400}
                  src={`https://image.tmdb.org/t/p/original${m.profile_path}`}
                  width={400}
                />
              </div>
              <Link href={`/tv/${m.name}`}>
                <h2 className="text-xl"> {m.name} </h2>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
