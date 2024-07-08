'use client';

import { PlayerMark } from '@/app/_lib/interfaces';
import { DataContext } from '@/app/_providers/DataContext';
import { useContext } from 'react';
import IconO from '@/app/components/IconO';
import IconX from '@/app/components/IconX';
import Link from 'next/link';
import { Routes } from '@/app/routes';

enum ItemsButtonsWinTie {
  quit = 'quit',
  nextRound = 'nextRound',
}

enum ItemsButtonsRestart {
  cancel = 'cancel',
  confirmRestart = 'confirmRestart',
}

const itemsButtonsWinTie = {
  [ItemsButtonsWinTie.quit]: {
    title: 'QUIT',
    background: 'bg-silver',
    backgroundHover: 'group-hover/Button:bg-silverHover',
    outerShadow: 'bg-silverOuterShadow',
    width: 'w-[76px]',
  },
  [ItemsButtonsWinTie.nextRound]: {
    title: 'NEXT ROUND',
    background: 'bg-lightYellow',
    backgroundHover: 'group-hover/Button:bg-lightYellowHover',
    outerShadow: 'bg-lightYellowOuterShadow',
    width: 'w-[146px]',
  },
};

const itemsButtonsRestart = {
  [ItemsButtonsRestart.cancel]: {
    title: 'NO, CANCEL',
    background: 'bg-silver',
    backgroundHover: 'group-hover/Button:bg-silverHover',
    outerShadow: 'bg-silverOuterShadow',
    width: 'w-[139px]',
  },
  [ItemsButtonsRestart.confirmRestart]: {
    title: 'YES, RESTART',
    background: 'bg-lightYellow',
    backgroundHover: 'group-hover/Button:bg-lightYellowHover',
    outerShadow: 'bg-lightYellowOuterShadow',
    width: 'w-[151px]',
  },
};

const titleRestart = 'RESTART GAME?';
const titleTakesTheRound = 'TAKES THE ROUND';
const titleTie = 'ROUND TIED';

const getResultTitle = (win: PlayerMark | undefined, playerMark: PlayerMark) => {
  const playerWon = 'YOU WON!';
  const cpuWon = 'OH NO, YOU LOST…';
  if (playerMark === PlayerMark.X) return win === PlayerMark.X ? playerWon : cpuWon;
  else return win === PlayerMark.O ? playerWon : cpuWon;
};

export default function Popup() {
  const { playerMark, win, showRestart, setShowRestart, handleClearBoard, blocks, setScore } = useContext(DataContext);
  const Row1 = () => (
    <span className="text-[16px] font-bold tracking-[1px] text-silver">{getResultTitle(win, playerMark)}</span>
  );
  const Row2 = () => (
    <div className="mt-[16px] flex w-full justify-center gap-[24px] text-center">
      {win !== undefined ? win === PlayerMark.O ? <IconO /> : <IconX /> : null}
      <span
        className={`w-full text-[40px] font-bold tracking-[2.5px] ${win !== undefined ? (win === PlayerMark.X ? 'text-lightBlue' : 'text-lightYellow') : 'text-silver'}`}
      >
        {win !== undefined ? titleTakesTheRound : !Object.values(blocks).includes(undefined) ? titleTie : titleRestart}
      </span>
    </div>
  );

  if (win !== undefined || !Object.values(blocks).includes(undefined) || showRestart)
    return (
      <div className="fixed left-0 top-0 z-10 flex size-full items-center bg-black/50">
        <div className="flex h-[266px] w-full items-center justify-center bg-semiDarkNavy">
          <div className="flex w-full max-w-[491px] flex-col items-center">
            {win !== undefined && <Row1 />}
            <Row2 />
            <ul className="mt-[24px] flex h-[52px] w-fit gap-[16px]">
              {Object.entries(
                win !== undefined || !Object.values(blocks).includes(undefined)
                  ? itemsButtonsWinTie
                  : itemsButtonsRestart,
              ).map((items) => {
                return (
                  <li key={items[0]}>
                    <Link prefetch href={items[0] === (ItemsButtonsWinTie.quit as string) ? Routes.home : ''}>
                      <button
                        onClick={() => {
                          items[0] !== (ItemsButtonsRestart.cancel as string) && handleClearBoard();
                          items[0] === (ItemsButtonsRestart.confirmRestart as string) &&
                            setScore({
                              X: 0,
                              tie: 0,
                              O: 0,
                            });
                          setShowRestart(false);
                        }}
                        type="button"
                        className={`flex h-full ${items[1].width} group/Button rounded-[10px] ${items[1].outerShadow}`}
                      >
                        <div
                          className={`flex h-[48px] w-full items-center justify-center rounded-b-[12px] rounded-t-[10px] transition ${items[1].backgroundHover} ${items[1].background}`}
                        >
                          <span className="text-[16px] font-bold tracking-[1px] text-darkNavy">{items[1].title}</span>
                        </div>
                      </button>
                    </Link>{' '}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
}
