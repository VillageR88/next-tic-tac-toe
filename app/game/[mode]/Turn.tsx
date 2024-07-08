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
    <div className="ml-[-32px] flex h-[40px] w-[96px] items-start justify-center rounded-[5px] bg-semiDarkNavyOuterShadow sm:ml-[-20px] sm:h-[52px] sm:w-[140px] sm:rounded-[10px]">
      <div className="flex h-[36px] w-full items-center justify-center gap-[9px] rounded-[5px] bg-semiDarkNavy sm:h-[48px] sm:gap-[13px] sm:rounded-[10px] sm:rounded-b-[11px]">
        {turn === PlayerMark.X ? (
          <IconX classExtension={`size-[16px] sm:size-[20px] fill-silver`} />
        ) : (
          <IconO classExtension={`size-[16px] sm:size-[20px] fill-silver`} />
        )}
        <h1 className="text-[14px] font-bold tracking-[0.88px] text-silver sm:text-[16px] sm:tracking-[1px]">
          {title}
        </h1>
      </div>
    </div>
  );
}
