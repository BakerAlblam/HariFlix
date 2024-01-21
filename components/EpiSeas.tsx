import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@radix-ui/react-accordion';

export default async function EpiSeas({ data }: any) {
  return (
    <div className="">
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Episodes and Seasons</h2>
              <p className="">Number of seasons: {data?.number_of_seasons}</p>
              <p className="">Number of episodes: {data?.number_of_episodes}</p>
            </div>
            <div className="space-y-4">
              {data?.seasons?.map((info: any) => (
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
      <section className="w-full py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Production</h2>
              <p className="">
                Country: {data?.production_countries?.[0]?.name}
              </p>
              <h2 className="text-1xl font-bold">Production companies</h2>
              {data?.production_companies.map((comp: any) => (
                <div className="">
                  <li key={comp?.id}> {comp?.name} </li>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
