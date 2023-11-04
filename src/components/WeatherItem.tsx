'use client';

import Switch from './Switch';

export interface WeatherItemProps {
  icon: React.ReactNode;
  value: string;
  title: string;
  toggle: (checked: boolean) => void;
}

const WeatherItem = ({ icon, value, title, toggle }: WeatherItemProps) => {
  return (
    <article className='font-bold grid justify-items-center'>
      {icon}
      <p className='text-4xl'>{value}</p>
      <h2 className='text-lg'>{title}</h2>
      <Switch onCheckedChange={(checked) => toggle(checked)} />
    </article>
  );
};

export default WeatherItem;
