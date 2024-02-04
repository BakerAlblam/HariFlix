import { options } from '@/app/layout';
import axios from 'axios';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import Image from 'next/image';

type Data = {
  file_path: string;
  name: string;
  id: number;
};

export default async function TvImages({ data }: { data: Data }) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/tv/${data?.id}/images`,
    options
  );

  const images = await response?.data?.backdrops.slice(0, 10);
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full"
    >
      <CarouselContent>
        {images?.map((m: Data) => (
          <CarouselItem
            key={m?.file_path}
            className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/5 basis-1/1"
          >
            <Image
              alt={m.name}
              className="object-cover w-full h-fit-screen rounded-lg"
              height={400}
              src={`https://image.tmdb.org/t/p/original${m.file_path}`}
              width={400}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:inline-block" />
      <CarouselNext className="hidden sm:inline-block" />
    </Carousel>
  );
}
