import { options } from '@/app/layout';
import NotFound from '@/components/NotFound';
import TvHero from '@/components/TvHero';
import axios from 'axios';
import { Star } from 'lucide-react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default async function Page({ params }: { params: { id: number } }) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${params.id}`,
      options
    );

    if (response.status === 404) {
      return <NotFound />;
    }

    const data = response.data;
    console.log(data);

    return (
      <div className="flex flex-col bg-[#0F1117] text-white">
        <TvHero data={data} />
        <hr className="w-full h-0.5 bg-white" />
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Episodes and Seasons</h2>
                <p className="">Number of seasons: {data?.number_of_seasons}</p>
                <p className="">
                  Number of episodes: {data?.number_of_episodes}
                </p>
                <p className="">Runtime: 120 minutes</p>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Cast</h2>
                <Accordion
                  type="single"
                  collapsible
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <p className="">Supporting Actor as Supporting Character</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Ratings & Reviews</h2>
                <p className="">User 1: 5 stars - This movie was amazing!</p>
                <p className="">
                  User 2: 4 stars - Great movie, would recommend..
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } catch (error) {
    // Handle other errors (e.g., network issues)
    console.error('Error fetching data:', error);
    return <NotFound />;
  }
}
