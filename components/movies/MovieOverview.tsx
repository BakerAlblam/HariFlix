import { Star } from 'lucide-react';
import React from 'react';

type genre = {
  id: string;
  name: string;
};

type Data = {
  tagline: string;
  vote_average: number;
  title: string;
  genres: any;
  overview: string;
  release_date: number;
  runtime: number;
};

const MovieOverview = ({ data }: { data: Data }) => {
  return (
    <div className="flex flex-col justify-center space-y-2">
      <ul className="flex flex-row space-y-2">
        <li className="flex">
          <Star
            size={'25'}
            color="gold"
          />
          <span className="text-lg mr-1 ml-1">
            {data?.vote_average.toString().substring(0, 3)} •
          </span>
          <p className="text-lg mr-1">{data?.runtime}m •</p>
          <p className="text-lg mr-1">
            {data?.release_date.toString().substring(0, 4)}
          </p>
        </li>
      </ul>

      <div className="space-y-1">
        <h1 className="text-3xl mb-2 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          {data?.title}
        </h1>
        <span className="mb-2">&quot;{data?.tagline}&quot;</span>
        <div className="flex text-sm space-x-2 mt-3">
          {data?.genres?.map((g: genre) => (
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
};

export default MovieOverview;
