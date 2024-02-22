import * as SwitchPrimitive from '@radix-ui/react-switch';

const Switch = ({
  onCheckedChange,
}: React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>) => {
  return (
    <SwitchPrimitive.Root
      className='w-[42px] mt-5 h-[25px] bg-neutral-400 rounded-full relative cursor-default data-[state=checked]:bg-green-500 '
      id='airplane-mode'
      onCheckedChange={onCheckedChange}
    >
      <SwitchPrimitive.Thumb className='block shadow-lg w-[21px] h-[21px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]' />
    </SwitchPrimitive.Root>
  );
};

export default Switch;
