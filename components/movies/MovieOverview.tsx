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
      <div className="flex">
        <ul>
          <li className="flex">
            <Star
              size={'25'}
              color="gold"
            />
            <span className="ml-1 mb-2 text-lg">
              {data?.vote_average.toString().substring(0, 3)}
            </span>
          </li>
        </ul>
      </div>
      <div className="space-y-1">
        <h1 className="text-3xl mb-4 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
          {data?.title}
        </h1>
        <div className="flex text-sm space-x-2">
          {data?.genres?.map((g: genre) => (
            <li
              key={g.id}
              className=" list-none mb-4 text-sm p-1.5 bg-slate-800 rounded-lg"
            >
              {g.name}
            </li>
          ))}
        </div>
        <span>&quot;{data?.tagline}&quot;</span>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Overview</h2>
        <p className="">{data?.overview}</p>
        <p className="">Release Date: {data?.release_date} </p>
        <p className="">Runtime: {data?.runtime} minutes</p>
      </div>
    </div>
  );
};

export default MovieOverview;
