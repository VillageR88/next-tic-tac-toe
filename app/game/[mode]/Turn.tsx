'use client';
import { DataContext } from '@/app/_providers/DataContext';
import { useContext } from 'react';
import IconX from '@/app/components/IconX';
import IconO from '@/app/components/IconO';
import { PlayerMark } from '@/app/_lib/interfaces';

const title = 'TURN';

export default function Turn() {
  const { turn } = useContext(DataContext);
  return (
    <div className="ml-[-20px] flex h-[52px] w-[140px] items-start justify-center rounded-[10px] bg-semiDarkNavyOuterShadow">
      <div className="flex h-[48px] w-full items-center justify-center gap-[13px] rounded-b-[11px] rounded-t-[10px] bg-semiDarkNavy">
        {turn === PlayerMark.X ? (
          <IconX classExtension={`size-[20px] fill-silver`} />
        ) : (
          <IconO classExtension={`size-[20px] fill-silver`} />
        )}
        <h1 className="text-[16px] font-bold tracking-[1px] text-silver">{title}</h1>
      </div>
    </div>
  );
}
