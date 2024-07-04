import Image from 'next/image';
import iconX from '@/public/assets/icon-x.svg';
import iconO from '@/public/assets/icon-o.svg';

export default function Header() {
  return (
    <header className="flex justify-center gap-[8px]">
      <Image width={32} height={32} className="size-[32px]" src={iconX as string} alt="x icon" />
      <Image width={32} height={32} className="size-[32px]" src={iconO as string} alt="o icon" />
    </header>
  );
}
