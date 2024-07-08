'use client';
import { useEffect } from 'react';
import Header from '../components/Header';
import Form from './Form';
import { HeaderType } from '@/app/_lib/interfaces';
import { DataContext } from '../_providers/DataContext';
import { useContext } from 'react';
import { PlayerMark } from '@/app/_lib/interfaces';

export default function Menu() {
  const { setBlocks, setTurn, setScore, setGameMode } = useContext(DataContext);
  useEffect(() => {
    setBlocks({
      A1: undefined,
      A2: undefined,
      A3: undefined,
      B1: undefined,
      B2: undefined,
      B3: undefined,
      C1: undefined,
      C2: undefined,
      C3: undefined,
    });
    setScore({ X: 0, tie: 0, O: 0 });
    setTurn(PlayerMark.X);
    setGameMode(undefined);
    document.documentElement.classList.remove('hidden');
  }, [setBlocks, setGameMode, setScore, setTurn]);

  return (
    <div className="mx-auto flex h-fit w-full max-w-[460px] flex-col gap-[40px]">
      <Header type={HeaderType.header} />
      <Form />
    </div>
  );
}
