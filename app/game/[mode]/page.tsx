'use client';

import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
// import { redirect } from 'next/navigation';
import { DataContext } from '@/app/_providers/DataContext';
import { useContext, useEffect } from 'react';
import { PlayerMark } from '@/app/_lib/interfaces';

// const A1 = BlockValue.empty;
// const A2 = BlockValue.empty;
// const A3 = BlockValue.empty;
// const B1 = BlockValue.empty;
// const B2 = BlockValue.empty;
// const B3 = BlockValue.empty;
// const C1 = BlockValue.empty;
// const C2 = BlockValue.empty;
// const C3 = BlockValue.empty;

// eslint-disable-next-line @typescript-eslint/require-await
// async function handleSubmit(FormData: FormData) {
//   'use server';

//   console.log(FormData.get('restart'));
//   if (FormData.get('restart') === 'restart') {
//     A1 = BlockValue.empty;
//     A2 = BlockValue.empty;
//     A3 = BlockValue.empty;
//     B1 = BlockValue.empty;
//     B2 = BlockValue.empty;
//     B3 = BlockValue.empty;
//     C1 = BlockValue.empty;
//     C2 = BlockValue.empty;
//     C3 = BlockValue.empty;
//     // redirect('/game/singlePlayer');
//   } else {
//     A1 = FormData.get('A1') ? (FormData.get('A1') as BlockValue) : A1;
//     A2 = FormData.get('A2') ? (FormData.get('A2') as BlockValue) : A2;
//     A3 = FormData.get('A3') ? (FormData.get('A3') as BlockValue) : A3;
//     B1 = FormData.get('B1') ? (FormData.get('B1') as BlockValue) : B1;
//     B2 = FormData.get('B2') ? (FormData.get('B2') as BlockValue) : B2;
//     B3 = FormData.get('B3') ? (FormData.get('B3') as BlockValue) : B3;
//     C1 = FormData.get('C1') ? (FormData.get('C1') as BlockValue) : C1;
//     C2 = FormData.get('C2') ? (FormData.get('C2') as BlockValue) : C2;
//     C3 = FormData.get('C3') ? (FormData.get('C3') as BlockValue) : C3;
//   }
// }

export default function Mode() {
  const { playerMark, blocks, setBlocks, turn, setHandleTurn, win } = useContext(DataContext);
  const aIMark = playerMark === PlayerMark.X ? PlayerMark.O : PlayerMark.X;

  useEffect(() => {
    if (turn === playerMark || win) return;

    const timer = setTimeout(() => {
      const emptyBlocks = Object.entries(blocks).filter(([, block]) => block === undefined);
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
      <Navbar />
      <Main />
      <Footer />
    </form>
  );
}
