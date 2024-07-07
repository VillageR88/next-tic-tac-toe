'use client';
import { PlayerMark } from '@/app/_lib/interfaces';
import { DataContext } from '@/app/_providers/DataContext';
import { useContext } from 'react';

const Box = ({ title, score, background }: { title: string; score: number; background: string }) => {
  return (
    <div
      className={`${background} flex h-[72px] w-[140px] flex-col items-center justify-center rounded-[15px] text-darkNavy`}
    >
      <span className="text-[14px] font-medium leading-tight tracking-[0.88px]">{title}</span>
      <span className="text-[24px] font-bold leading-tight tracking-[1.5px]">{score}</span>
    </div>
  );
};

export default function Footer() {
  const { playerMark, score } = useContext(DataContext);
  const nameX = playerMark === PlayerMark.X ? 'X (YOU)' : 'X (CPU)';
  const nameO = playerMark === PlayerMark.O ? 'O (YOU)' : 'O (CPU)';
  const nameTie = 'TIES';
  const items = {
    X: { name: nameX, score: score.X, background: 'bg-lightBlue' },
    tie: { name: nameTie, score: score.tie, background: 'bg-silver' },
    O: { name: nameO, score: score.O, background: 'bg-lightYellow' },
  };
  return (
    <footer className="flex w-full justify-between">
      <ul className="flex w-full justify-between">
        {Object.values(items).map((item, index) => (
          <li key={index}>
            <Box title={item.name} score={item.score} background={item.background} />
          </li>
        ))}
      </ul>
    </footer>
  );
}
