import { options } from '@/app/layout';
import { Avatar } from '@nextui-org/react';
import axios from 'axios';

export default async function MovieProduction({ data }: { data: any }) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${data?.id}?language=en-US`,
    options
  );
  const prod = await response?.data;

  return (
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Production Companies</h2>
          {prod?.production_companies.map((p: any) => (
            <p
              className=""
              key={p?.name}
            >
              {p?.name} • {p?.origin_country}
            </p>
          ))}
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Box office</h2>
          <p className="">Budget: ${prod?.budget} </p>
          <p className="">Revenue: ${prod?.revenue}</p>
        </div>
      </div>
    </div>
  );
}
