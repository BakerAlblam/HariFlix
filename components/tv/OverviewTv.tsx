import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
    runtime: number;
    release_date: string;
  };
};

export default function OverviewTv({ data }: TvHeroProps) {
  return (
    <div className="flex flex-col justify-center space-y-2">
      <ul className="flex flex-row space-y-2">
        <li className="flex">
          <Star
            size={'25'}
            color="gold"
          />
          <span className="text-lg mr-1 ml-1">
            {data?.vote_average?.toString().substring(0, 3)} •
          </span>
          <p className="text-lg mr-1">
            {data?.first_air_date?.toString().substring(0, 4)}
          </p>
        </li>
      </ul>

      <div className="space-y-1">
        <h1 className="text-3xl mb-2 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          {data?.name}
        </h1>
        {data?.tagline ? <span>{data?.tagline}</span> : null}
        <div className="flex text-sm space-x-2 mt-5">
          {data?.genres?.map((g: Genre) => (
            <li
              key={g.id}
              className=" list-none mb-2 mt-1 text-sm p-1.5 bg-slate-800 rounded-lg"
            >
              {g.name}
            </li>
          ))}
        </div>
      </div>
      <div className="space-y-1">
        <h2 className="text-2xl font-bold">Overview</h2>
        <p className="">{data?.overview}</p>
      </div>
    </div>
  );
}
