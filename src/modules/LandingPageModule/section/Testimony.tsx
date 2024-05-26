import React from 'react';
import { SmallStrip } from '../module-elements';
import { TESTIMONIES } from '../constant';
import Image from 'next/image';
import { Star } from '@/components/icons';

export const Testimony: React.FC = () => {
  return (
    <section className="w-full  py-20 ">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-3xl font-inika font-bold">Testimoni</h2>
          <SmallStrip />
        </div>
        <div className="grid grid-cols-2 w-full max-w-screen-xl gap-10 mx-auto ">
          {TESTIMONIES.map((testimony, index) => (
            <div key={index} className="flex bg-[#2C2C2C] h-[300px] text-white">
              <div className="relative bg-gray-400 aspect-[3/5]">
                <Image
                  src={testimony.imageUrl}
                  alt={testimony.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex  flex-col gap-1 px-7 h-full justify-center py-8 h-min">
                <div className="flex flex-col">
                  <h3 className="font-inika font-bold text-2xl">
                    {testimony.name}
                  </h3>
                  <h4 className="text-xl">{testimony.job}</h4>
                </div>
                <div className="flex">
                  <Star size="h-6 w-6" fill="fill-[#FF8024]" />
                  <Star size="h-6 w-6" fill="fill-[#FF8024]" />
                  <Star size="h-6 w-6" fill="fill-[#FF8024]" />
                  <Star size="h-6 w-6" fill="fill-[#FF8024]" />
                  <Star size="h-6 w-6" fill="fill-[#FF8024]" />
                </div>
                <p className="font-light">{testimony.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
