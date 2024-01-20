import { Card, CardContent } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './ui/carousel';
import Image from 'next/image';

type Movie = {
  id: string;
  title: string;
  release_date: number;
  poster_path: any;
  name: string;
  media_type: string;
  first_air_date: number;
};

type TrendingCarouselProps = {
  trendingMovies: Movie[];
};

export default async function TrendingCarousel({
  trendingMovies,
}: TrendingCarouselProps) {
  console.log(trendingMovies);
  return (
    <div className="text-white">
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
              className="sm:basis-1/3 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
