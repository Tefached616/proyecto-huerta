'use client';

import { IconTemperature, IconCloudRain, IconPlant } from '@tabler/icons-react';
import WeatherItem, {
  WeatherItemProps as WeatherData,
} from '@/components/WeatherItem';

export default function Home() {
  const data: Array<WeatherData> = [
    {
      icon: <IconTemperature stroke={1.5} size={80} className='mb-2' />,
      value: '20°C',
      title: 'Temperatura ambiente',
      toggle: (checked) => {
        if (checked) {
          return console.log('Toggle temperature on');
        }

        return console.log('Toggle temperature off');
      },
    },
    {
      icon: <IconCloudRain stroke={1.5} size={80} className='mb-2' />,
      value: '20%',
      title: 'Humedad ambiente',
      toggle: (checked) => {
        if (checked) {
          return console.log('Toggle humidity on');
        }

        return console.log('Toggle humidity off');
      },
    },
    {
      icon: <IconPlant stroke={1.5} size={80} className='mb-2' />,
      value: '20%',
      title: 'Humedad de suelo',
      toggle: (checked) => {
        if (checked) {
          return console.log('Toggle soil humidity on');
        }

        return console.log('Toggle soil humidity off');
      },
    },
  ];

  return (
    <div className='gap-y-5 grid grid-rows-[1fr,auto] h-screen'>
      <main className='px-5 space-y-5 lg:max-w-7xl mx-auto w-full lg:space-y-16'>
        <h1 className='font-semibold mt-5 text-2xl lg:mt-16 lg:text-4xl'>
          Control de temperatura ambiente y del suelo 🌡️
        </h1>
        <div className='flex'>
          <section className='rounded-lg w-full bg-white text-black flex flex-col items-center justify-between p-7 gap-y-8 lg:flex-row'>
            {data.map((item) => (
              <WeatherItem key={item.title} {...item} />
            ))}
          </section>
        </div>
      </main>
      <footer className='mb-3'>MondoTechno &copy; - 2023</footer>
    </div>
  );
}
