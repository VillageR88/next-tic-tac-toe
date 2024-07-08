'use client';
import { GameMode, PlayerMark } from '@/app/_lib/interfaces';
import { DataContext } from '@/app/_providers/DataContext';
import { useContext } from 'react';

const Box = ({ title, score, background }: { title: string; score: number; background: string }) => {
  return (
    <div
      className={`${background} flex h-[64px] w-full flex-col items-center justify-center rounded-[15px] text-darkNavy sm:h-[72px] sm:w-[140px]`}
    >
      <span className="text-[12px] font-medium leading-tight tracking-[0.75px] sm:text-[14px] sm:tracking-[0.88px]">
        {title}
      </span>
      <span className="text-[20px] font-bold leading-tight tracking-[1.25px] sm:text-[24px] sm:tracking-[1.5px]">
        {score}
      </span>
    </div>
  );
};

export default function Footer() {
  const { playerMark, score, gameMode } = useContext(DataContext);
  function getPlayerName(mark: PlayerMark, playerMark: PlayerMark, gameMode: GameMode | undefined) {
    if (mark === playerMark) {
      return `${mark} (${gameMode === GameMode.singlePlayer ? 'YOU' : 'P1'})`;
    } else {
      return `${mark} (${gameMode === GameMode.singlePlayer ? 'CPU' : 'P2'})`;
    }
  }
  const nameX = getPlayerName(PlayerMark.X, playerMark, gameMode);
  const nameO = getPlayerName(PlayerMark.O, playerMark, gameMode);
  const nameTie = 'TIES';
  const items = {
    X: { name: nameX, score: score.X, background: 'bg-lightBlue' },
    tie: { name: nameTie, score: score.tie, background: 'bg-silver' },
    O: { name: nameO, score: score.O, background: 'bg-lightYellow' },
  };
  return (
    <footer className="mt-[20px] flex w-full max-w-[328px] justify-between sm:mt-0 sm:max-w-[460px]">
      <ul className="flex w-full justify-between gap-[20px]">
        {Object.values(items).map((item, index) => (
          <li className="w-full" key={index}>
            <Box title={item.name} score={item.score} background={item.background} />
          </li>
        ))}
      </ul>
    </footer>
  );
}
