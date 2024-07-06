'use client';
import { useEffect } from 'react';
import Header from '../components/Header';
import Form from './Form';
import { HeaderType } from '@/app/_lib/interfaces';
import { DataContext } from '../_providers/DataContext';
import { useContext } from 'react';
import { PlayerMark } from '@/app/_lib/interfaces';

export default function Menu() {
  const { setBlocks, setTurn } = useContext(DataContext);
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
    setTurn(PlayerMark.X);
  }, [setBlocks, setTurn]);

  return (
    <div className="mx-auto flex h-fit w-full max-w-[460px] flex-col gap-[40px]">
      <Header type={HeaderType.header} />
      <Form />
    </div>
  );
}
