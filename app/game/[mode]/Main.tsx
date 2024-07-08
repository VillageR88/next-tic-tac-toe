'use client';

import { PlayerMark, Blocks, GameMode } from '@/app/_lib/interfaces';
import IconOOutline from '@/app/components/IconOOutline';
import IconXOutline from '@/app/components/IconXOutline';
import IconO from '@/app/components/IconO';
import IconX from '@/app/components/IconX';
import { DataContext } from '@/app/_providers/DataContext';
import { useContext } from 'react';

function Block({
  blockName,
  value,
  winBlocks,
}: {
  blockName: keyof Blocks;
  value: PlayerMark | undefined;
  winBlocks: string[] | undefined;
}) {
  const { setBlocks, turn, blocks, playerMark, win, setHandleTurn, gameMode } = useContext(DataContext);
  const PlayerMarkIconHover =
    value === undefined && (turn === playerMark || gameMode === GameMode.multiPlayer) && win === undefined
      ? playerMark === turn
        ? IconOOutline
        : IconXOutline
      : () => <div></div>;
  const MarkIcon =
    blocks[blockName] === PlayerMark.X
      ? winBlocks?.includes(blockName)
        ? () => IconX({ classExtension: 'text-semiDarkNavyOuterShadow' })
        : IconX
      : blocks[blockName] === PlayerMark.O
        ? winBlocks?.includes(blockName)
          ? () => IconO({ classExtension: 'text-semiDarkNavyOuterShadow' })
          : IconO
        : () => <div></div>;

  return (
    <button
      onClick={
        value === undefined && (turn === playerMark || gameMode === GameMode.multiPlayer)
          ? () => {
              setBlocks((prevBlocks) => ({ ...prevBlocks, [blockName]: turn }));
              setHandleTurn(true);
            }
          : undefined
      }
      key={blockName}
      disabled={value !== undefined || (turn !== playerMark && gameMode === GameMode.singlePlayer) || win !== undefined}
      name={blockName}
      aria-label={blockName}
      value={playerMark}
      type="button"
      className={`${winBlocks?.includes(blockName) ? (win === PlayerMark.X ? 'bg-lightBlueOuterShadow' : 'bg-lightYellowOuterShadow') : 'bg-semiDarkNavyOuterShadow'} group/buttonBox flex size-[140px] rounded-[15px] disabled:hover:cursor-not-allowed`}
    >
      <div
        className={`flex h-[132px] w-full items-center justify-center rounded-b-[17px] rounded-t-[15px] ${winBlocks?.includes(blockName) ? (win === PlayerMark.X ? 'bg-lightBlue' : 'bg-lightYellow') : 'bg-semiDarkNavy'}`}
      >
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

export default function Main({ winBlocks }: { winBlocks: string[] | undefined }) {
  {
    const { blocks } = useContext(DataContext);
    return (
      <main className="h-[461px] w-[460]">
        <ul className="grid grid-cols-3 gap-[20px]">
          {Object.entries(blocks).map((element, i) => (
            <li key={i}>
              <Block winBlocks={winBlocks} value={element[1] as PlayerMark} blockName={element[0] as keyof Blocks} />
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
