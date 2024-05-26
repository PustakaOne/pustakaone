import React from 'react';
import { SmallStrip } from '../module-elements';
import { REASONS } from '../constant';

export const Reasons: React.FC = () => {
  return (
    <section className="w-full bg-[#1B1B1B] py-20 text-white">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-3xl font-inika font-bold">Mengapa Pilih Kami?</h2>
          <SmallStrip />
        </div>
        <div className="grid grid-cols-4 w-full max-w-screen-lg gap-10 mx-auto">
          {REASONS.map((reason, index) => (
            <div
              key={index}
              className="gap-2 flex flex-col items-center bg-[#2C2C2C] rounded-lg justify-center p-6"
            >
              {reason.icon}
              <span className="text-sm text-center font-inika">
                {reason.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
