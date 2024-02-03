import { options } from '@/app/layout';
import axios from 'axios';
import { Card } from '../ui/card';
import { Avatar } from '@nextui-org/react';
import { Star } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type Data = {
  id: number;
  author_details: {
    avatar_path: string;
    rating: number;
  };
  author: string;
  content: string;
  created_at: string;
};

export default async function MovieReviews({ data }: { data: any }) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${data?.id}/reviews?language=en-US&page=1`,
    options
  );

  const rev = await response?.data?.results;

  return (
    <div className="container px-4 md:px-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">
          Ratings & Reviews -{' '}
          <span className="p-2 bg-slate-600 rounded-full">{rev?.length}</span>
        </h2>
        {rev?.map((r: Data) => (
          <Accordion
            type="single"
            collapsible
            key={rev?.id}
          >
            <AccordionItem value={`r?.id`}>
              <AccordionTrigger>
                {r?.author} - {r?.created_at.toString().substring(0, 10)}
              </AccordionTrigger>
              <AccordionContent key={r?.id}>
                <Card>
                  <div className="flex items-center mb-4 ml-1 mt-1">
                    <Avatar
                      src={`https://image.tmdb.org/t/p/original${r?.author_details?.avatar_path}`}
                      size="md"
                      fallback={'NA'}
                    />
                    <div className="font-medium dark:text-white ml-1 flex flex-col">
                      <p className="mt-1">{r?.author}</p>
                      <div className="flex items-center">
                        <Star
                          size={20}
                          color="gold"
                        />
                        <span className="ml-1 mb-0.5 text-rose-700">
                          {' '}
                          {r.author_details?.rating}{' '}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mb-2 text-gray-800 mx-1.5">{r?.content}</p>
                  <p className="mb-2 text-gray-800 mx-1.5 text-sm font-semibold">
                    {r?.created_at.toString().substring(0, 10)}
                  </p>
                </Card>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
