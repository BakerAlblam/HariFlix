import { options } from '@/app/layout';
import axios from 'axios';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

type Data = {
  file_path: string;
  name: string;
  id: number;
  key: string;
};

export default async function MovieVideos({ data }: { data: Data }) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${data?.id}/videos?language=en-US`,
    options
  );

  const videos = await res?.data?.results;
  console.log(videos);

  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className="w-full"
    >
      <CarouselContent>
        {videos?.map((m: Data) => (
          <CarouselItem
            key={m?.id}
            className="sm:basis-1/2 md:basis-1/2 lg:basis-1/3 xl:basis-1/3 2xl:basis-1/5 basis-1/1"
          >
            <iframe
              width="660"
              height="360"
              className="w-full rounded-md"
              src={`https://www.youtube.com/embed/${m?.key}?si=PUMN8a0SmlPFGnDN`}
              title={``}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden sm:inline-block" />
      <CarouselNext className="hidden sm:inline-block" />
    </Carousel>
  );
}
