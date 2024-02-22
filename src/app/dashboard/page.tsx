'use client';

import {
  IconTemperature,
  IconCloudRain,
  IconPlant,
  IconLoader2,
} from '@tabler/icons-react';

import useWeather from '@/hooks/useWeather';

import WeatherItem, { WeatherItemProps } from '@/components/WeatherItem';

export default function Home() {
  const { loading, data } = useWeather();

  const weatherItems: Array<WeatherItemProps> = [
    {
      icon: <IconTemperature stroke={1.5} size={80} className='mb-2' />,
      value: `${data.temperature}°C`,
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
      value: `${data.humidity}HR`,
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
      value: `${data.soilStatus}`,
      title: 'Estado del suelo',
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
        <div className='flex flex-col bg-white text-black rounded-lg p-7 space-y-6'>
          <section className='w-full flex flex-col items-center justify-between gap-y-8 lg:flex-row'>
            {loading && (
              <IconLoader2
                className='animate-spin mx-auto text-[#2b3b9b]'
                size={40}
              />
            )}
            {!loading &&
              weatherItems.map((item) => (
                <WeatherItem key={item.title} {...item} />
              ))}
          </section>
          {!loading && (
            <p>
              <span className='font-semibold'>Fecha de actualización:</span>{' '}
              {data.lastUpdateAt}
            </p>
          )}
        </div>
      </main>
      <footer className='mb-3'>MondoTechno &copy; - 2023</footer>
    </div>
  );
}
