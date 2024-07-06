'use client';

import { PlayerMark, Blocks } from '@/app/_lib/interfaces';
import IconOOutline from '@/app/components/IconOOutline';
import IconXOutline from '@/app/components/IconXOutline';
import IconO from '@/app/components/IconO';
import IconX from '@/app/components/IconX';
import { DataContext } from '@/app/_providers/DataContext';
import { useContext } from 'react';

// eslint-disable-next-line @typescript-eslint/require-await
function Block({ blockName, value }: { blockName: keyof Blocks; value: PlayerMark | undefined }) {
  const { setBlocks, turn, blocks, playerMark, win, setHandleTurn } = useContext(DataContext);

  const PlayerMarkIconHover =
    value === undefined && turn === playerMark && win === undefined
      ? playerMark === PlayerMark.X
        ? IconXOutline
        : IconOOutline
      : () => <div></div>;
  const MarkIcon =
    blocks[blockName] === PlayerMark.X ? IconX : blocks[blockName] === PlayerMark.O ? IconO : () => <div></div>;

  return (
    <button
      onClick={
        value === undefined && turn === playerMark
          ? () => {
              setBlocks((prevBlocks) => ({ ...prevBlocks, [blockName]: playerMark }));
              setHandleTurn(true);
            }
          : undefined
      }
      key={blockName}
      disabled={value !== undefined || turn !== playerMark || win !== undefined}
      name={blockName}
      aria-label={blockName}
      value={playerMark}
      type="button"
      className="group/buttonBox flex size-[140px] rounded-[15px] bg-semiDarkNavyOuterShadow disabled:hover:cursor-not-allowed"
    >
      <div className="flex h-[132px] w-full items-center justify-center rounded-b-[17px] rounded-t-[15px] bg-semiDarkNavy">
        <div className="absolute size-fit opacity-0 transition group-hover/buttonBox:opacity-100">
          <PlayerMarkIconHover />
        </div>
        <div className="absolute size-fit transition">
          <MarkIcon />
        </div>
      </div>
    </button>
  );
}

export default function Main() {
  {
    const { blocks } = useContext(DataContext);
    return (
      <main className="h-[461px] w-[460]">
        <ul className="grid grid-cols-3 gap-[20px]">
          {Object.entries(blocks).map((element, i) => (
            <li key={i}>
              <Block value={element[1] as PlayerMark} blockName={element[0] as keyof Blocks} />
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
