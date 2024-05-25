import { SmallStripProps } from '../interface';

export const SmallStrip: React.FC<SmallStripProps> = ({
  color = 'gradient',
}) => {
  return (
    <div
      className={`h-1 w-6 ${
        color === 'white'
          ? `bg-white`
          : `bg-gradient-to-br from-[#FF3407] to-[#FF8024]`
      }`}
    />
  );
};
