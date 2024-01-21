import { Star } from 'lucide-react';
import Image from 'next/image';

type Genre = {
  id: string;
  name: string;
};

type TvHeroProps = {
  data: {
    genres?: Genre[];
    name?: string;
    tagline?: string;
    vote_average?: number;
    overview?: string;
    first_air_date?: string;
    last_air_date?: string | null;
    poster_path?: string;
    original_language: string;
  };
};

export default function TvHero({ data }: TvHeroProps) {
  return (
    <section className="w-full py-12">
      <div className="container px-4 md:px-6">
        <div className="flex text-sm">
          {data?.genres?.map((g: Genre) => (
            <li
              key={g.id}
              className="ml-1 list-none mb-2 text-sm p-1.5 bg-slate-800 rounded-lg"
            >
              {g.name}
            </li>
          ))}
          <p className="ml-1 list-none mb-2 text-sm p-1.5 bg-slate-800 rounded-lg">
            TV Series{' '}
          </p>
          <p className="ml-1 list-none mb-2 text-sm p-1.5 bg-slate-800 rounded-lg">
            Orig. language: {data?.original_language.toLocaleUpperCase()}
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            alt={data?.name || ''}
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full sm:h-full  lg:order-last lg:aspect-square"
            height={'550'}
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            width={'550'}
          />
          <div className="flex flex-col justify-center space-y-2">
            <div className="space-y-1">
              <div className="flex">
                <Star size={'25'} />
                <span className="ml-1 mb-2 text-lg">{data?.vote_average}</span>
              </div>
              <h1 className="text-5xl mb-2 font-bold tracking-tighter sm:text-4xl xl:text-6xl/none">
                {data?.name}
              </h1>
              <span>
                {' '}
                {data.tagline && <div>&quot;{data.tagline}&quot;</div>}
              </span>
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p className="">{data?.overview}</p>
              <p className="">First air date: {data?.first_air_date} </p>
              <p className="">
                Last air date: {data?.last_air_date || 'not available'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
