import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

type epi = {
  number_of_seasons: number;
  number_of_episodes: number;
  first_air_date: number;
  last_air_date: number;
  seasons: [];
};

type Seas = {
  id: number;
  name: string;
  air_date: number;
  episode_count: number;
  vote_average: number;
  overview: string;
};

export default async function SeasonsAndEpi({ data }: { data: epi }) {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Episodes and Seasons</h2>
            <p className="">Number of seasons: {data?.number_of_seasons}</p>
            <p className="">Number of episodes: {data?.number_of_episodes}</p>
            <p className="">First air date: {data?.first_air_date} </p>
            <p className="">
              Last air date: {data?.last_air_date || 'not available'}
            </p>
          </div>
          <div className="space-y-4">
            {data?.seasons?.map((info: Seas) => (
              <Accordion
                type="single"
                collapsible
                key={info?.id}
              >
                <AccordionItem value={info?.name}>
                  <AccordionTrigger>{info?.name}</AccordionTrigger>
                  <AccordionContent className="space-y-2 text-sm">
                    <li>Episeode count: {info?.episode_count} </li>
                    <li>Air date: {info?.air_date} </li>
                    <li>Rating: {info?.vote_average} </li>
                    <li>Plot {info?.overview} </li>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
