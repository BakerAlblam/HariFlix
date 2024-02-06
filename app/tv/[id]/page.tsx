import { options } from '@/app/layout';
import NotFound from '@/components/NotFound';
import TvHero from '@/components/tv/OverviewTv';
import axios from 'axios';
import { Star } from 'lucide-react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Suspense } from 'react';
import Loading from '@/components/Loading';
import OverviewTv from '@/components/tv/OverviewTv';
import SeasonsAndEpi from '@/components/tv/SeasonsAndEpi';
import TvBreadcrumb from '@/components/tv/TvBreadcrumb';
import TvCast from '@/components/tv/TvCast';
import TvImages from '@/components/tv/TvImages';
import TvVideos from '@/components/tv/TvVideos';
import TvReviews from '@/components/tv/TvReviews';

export default async function Page({ params }: { params: { id: number } }) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${params.id}`,
      options
    );

    const trailer = await axios.get(
      `https://api.themoviedb.org/3/tv/${params?.id}/videos?language=en-US`,
      options
    );

    const lastTrailer = trailer?.data?.results[trailer.data.results.length - 1];

    if (response.status === 404) {
      return <NotFound />;
    }

    const data = response.data;

    return (
      <Suspense fallback={<Loading />}>
        <div className="bg-[#0F1117] text-white sm:p-10 py-12 px-2 flex flex-col gap-2">
          <section className="w-full py-6">
            <div className="container px-4 md:px-6">
              <TvBreadcrumb data={data} />
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <iframe
                  width="660"
                  height="400"
                  className="w-full rounded-md"
                  src={`https://www.youtube.com/embed/${lastTrailer?.key}?si=PUMN8a0SmlPFGnDN`}
                  title={`${data?.movie?.title}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />

                <OverviewTv data={data} />
              </div>
            </div>
          </section>

          <hr className="w-full h-0.5 bg-gray-900" />
          <section className="w-full py-6">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-4">Cast</h2>
              <TvCast data={data} />
            </div>
          </section>
          {/* Images */}
          <hr className="w-full h-0.5 bg-gray-900" />
          <section className="w-full py-6">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-4">Images</h2>
              <TvImages data={data} />
            </div>
          </section>
          {/* Videos */}
          <hr className="w-full h-0.5 bg-gray-900" />
          <section className="w-full py-6">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-4">Videos</h2>
              <TvVideos data={data} />
            </div>
          </section>
          {/* Seasons and episodes */}
          <hr className="w-full h-0.5 bg-gray-900" />
          <section className="w-full py-6">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-4">
                Episodes and Seasons
              </h2>
              <SeasonsAndEpi data={data} />
            </div>
          </section>
          {/* Seasons and episodes */}
          <hr className="w-full h-0.5 bg-gray-900" />
          <section className="w-full py-6">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-4">Reviews</h2>
              <TvReviews data={data} />
            </div>
          </section>
        </div>
      </Suspense>
    );
  } catch (error) {
    return <NotFound />;
  }
}
