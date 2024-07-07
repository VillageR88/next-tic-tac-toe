'use client';

import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import { DataContext } from '@/app/_providers/DataContext';
import { useContext, useEffect } from 'react';
import { PlayerMark } from '@/app/_lib/interfaces';
import Popup from './Popup';

export default function Mode() {
  const { playerMark, blocks, setBlocks, turn, setHandleTurn, win } = useContext(DataContext);
  const aIMark = playerMark === PlayerMark.X ? PlayerMark.O : PlayerMark.X;

  useEffect(() => {
    if (turn === playerMark || win !== undefined) return;

    const timer = setTimeout(() => {
      const emptyBlocks = Object.entries(blocks).filter(([, block]) => block === undefined);
      if (emptyBlocks.length === 0) return;
      const randomBlock = emptyBlocks[Math.floor(Math.random() * emptyBlocks.length)];
      const [blockKey] = randomBlock;
      setBlocks((prevBlocks) => ({
        ...prevBlocks,
        [blockKey]: aIMark,
      }));
      setHandleTurn(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [aIMark, blocks, playerMark, setBlocks, setHandleTurn, turn, win]);

  return (
    <form className="mx-auto flex h-fit w-full max-w-[460px] flex-col gap-[19px]">
      <Popup />
      <Navbar />
      <Main />
      <Footer />
    </form>
  );
}
