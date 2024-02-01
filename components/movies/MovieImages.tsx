import axios from 'axios';
import Image from 'next/image';
import { options } from '@/app/layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default async function MovieImages({ data }: { data: any }) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${data?.id}/images`,
    options
  );

  const images = await response?.data?.backdrops.slice(0, 9);
  return (
    <Accordion
      type="single"
      collapsible
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-3xl font-bold text-center mb-4">
          Photos
        </AccordionTrigger>
        <AccordionContent>
          <div className="p-2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-2">
            {images?.map((m: any) => (
              <div key={m?.file_path}>
                <Image
                  alt={m.name}
                  className="object-cover w-full h-fit-screen rounded-lg"
                  height={400}
                  src={`https://image.tmdb.org/t/p/original${m.file_path}`}
                  width={400}
                />
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
