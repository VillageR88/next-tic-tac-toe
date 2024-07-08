'use client';
import Image from 'next/image';
import iconX from '@/public/assets/icon-x.svg';
import iconO from '@/public/assets/icon-o.svg';
import { HeaderType, PlayerMark } from '@/app/_lib/interfaces';
import { DataContext } from '../_providers/DataContext';
import { useContext } from 'react';

function Children({ type }: { type: HeaderType }) {
  const { turn, win, blocks } = useContext(DataContext);
  return (
    <>
      <div className="relative">
        <div className="headerType flex">
          <Image width={32} height={32} className={`size-[32px]`} src={iconX as string} alt="x icon" />
          <Image width={32} height={32} className={`size-[32px]`} src={iconO as string} alt="o icon" />
        </div>
        <div
          className={`${type == HeaderType.header || win !== undefined || !Object.values(blocks).includes(undefined) ? 'hidden' : ''} ${turn === PlayerMark.X ? 'bg-lightBlue' : 'translate-x-[40px] bg-lightYellow'} absolute top-[40px] h-1 w-[32px] animate-pulse transition duration-500`}
        ></div>
      </div>
    </>
  );
}

export default function Header({ type }: { type: HeaderType }) {
  if (type === (HeaderType.div as HeaderType)) {
    return (
      <div className="headerType">
        <Children type={type} />
      </div>
    );
  } else if (type === (HeaderType.header as HeaderType)) {
    return (
      <header>
        <Children type={type} />
      </header>
    );
  }
}
