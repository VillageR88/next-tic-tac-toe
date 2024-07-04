import Image from 'next/image';
import iconX from '@/public/assets/icon-x.svg';
import iconO from '@/public/assets/icon-o.svg';
import { HeaderType } from '@/app/_lib/interfaces';

function Children() {
  return (
    <>
      <Image width={32} height={32} className="size-[32px]" src={iconX as string} alt="x icon" />
      <Image width={32} height={32} className="size-[32px]" src={iconO as string} alt="o icon" />{' '}
    </>
  );
}

export default function Header({ type }: { type: HeaderType }) {
  if (type === (HeaderType.div as HeaderType)) {
    return (
      <div className="headerType">
        <Children />
      </div>
    );
  } else if (type === (HeaderType.header as HeaderType)) {
    return (
      <header className="headerType">
        <Children />
      </header>
    );
  }
}
