import { Star } from '@/components/icons/Star';
import React from 'react';
import { ReviewCardProps } from '../interface';
import { format } from 'date-fns';

export const ReviewCard: React.FC<ReviewCardProps> = ({
  author,
  rating,
  content,
  date,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-2">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 0v24h-24v-24h24zm-12 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8 14c0-2.21-4.42-4-8-4s-8 1.79-8 4v2h16v-2z" />
          </svg>
        </div>
        <div>
          <p className="font-bold">{author}</p>
          <div className="flex items-center">
            {Array.from({ length: 5 }, (_, index) => (
              <Star
              key={index}
              size="w-6 h-6"
              fill={index < rating ? 'fill-[#FF8024]' : 'fill-[#5E5E5E]'}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="mb-2">{content}</p>
      <p className="text-gray-500 text-sm">
        {format(new Date(date), 'HH:mm')} &middot; {new Date(date).toLocaleDateString()}
      </p>
    </div>
  );
};
