import { options } from '@/app/layout';
import NotFound from '@/components/NotFound';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import Image from 'next/image';

type genre = {
  id: string;
  name: string;
};

export default async function Page({ params }: { params: { id: any } }) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/${params.id}`,
      options
    );

    if (response.status === 404) {
      return <NotFound />;
    }

    const data = response.data;
    console.log(response);

    return (
      <div className="w-full min-h-screen bg-gray-900 text-white">
        <main className="container mx-auto p-4 md:p-8">
          <section className="mb-8 flex flex-col md:flex-row items-center gap-4">
            <div className="w-full md:w-1/3">
              <Image
                alt="Actor Image"
                className="w-full h-64 md:h-auto object-cover rounded-md"
                height="500"
                src={`https://image.tmdb.org/t/p/original${data.profile_path}`}
                width="400"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold mb-4 text-white ">Biography</h2>
              <p className="text-gray-100 mb-4 bg-zinc-600 p-2 rounded-lg">
                {data?.biography}
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
                <h3 className="font-semibold mb-2 text-gray-900">Birthdate</h3>
                <p className="text-gray-700 dark:text-gray-300 flex">
                  {data?.birthday}
                  {data?.deathday ? <p> -{data?.deathday} </p> : null}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
                <h3 className="font-semibold mb-2 text-gray-900">Birthplace</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {data?.place_of_birth}
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-md shadow-md">
                <h3 className="font-semibold mb-2 text-gray-900">Known for</h3>
                <p className="text-gray-900 dark:text-gray-300">
                  {data?.known_for_department}
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  } catch (error) {
    // Handle other errors (e.g., network issues)
    console.error('Error fetching data:', error);
    return <NotFound />;
  }
}
