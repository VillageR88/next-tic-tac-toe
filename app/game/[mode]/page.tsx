'use client';

import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import { DataContext } from '@/app/_providers/DataContext';
import { useContext, useEffect } from 'react';
import { Blocks, GameMode, PlayerMark } from '@/app/_lib/interfaces';
import { patterns } from '@/app/_lib/const';
import Popup from './Popup';

export default function Mode() {
  const { playerMark, blocks, setBlocks, turn, setHandleTurn, win, gameMode } = useContext(DataContext);
  const aIMark = playerMark === PlayerMark.X ? PlayerMark.O : PlayerMark.X;
  const emptyBlocks = Object.entries(blocks).filter(([, block]) => block === undefined);
  const randomBlock = emptyBlocks[Math.floor(Math.random() * emptyBlocks.length)];
  const findBlockOfPattern = ({ blocks, mark }: { blocks: Blocks; mark: PlayerMark }): string | undefined => {
    for (const pattern of patterns) {
      const [block1, block2, block3] = pattern;
      if (
        blocks[block1 as keyof typeof blocks] === mark &&
        blocks[block2 as keyof typeof blocks] === mark &&
        blocks[block3 as keyof typeof blocks] === undefined
      ) {
        return block3;
      }
      if (
        blocks[block1 as keyof typeof blocks] === mark &&
        blocks[block3 as keyof typeof blocks] === mark &&
        blocks[block2 as keyof typeof blocks] === undefined
      ) {
        return block2;
      }
      if (
        blocks[block2 as keyof typeof blocks] === mark &&
        blocks[block3 as keyof typeof blocks] === mark &&
        blocks[block1 as keyof typeof blocks] === undefined
      ) {
        return block1;
      }
    }
  };
  const findEmptyCornerBlock = ({ blocks }: { blocks: Blocks }): string | undefined => {
    const cornerBlocks = ['A1', 'A3', 'C1', 'C3'];
    if (blocks.A1 !== undefined) cornerBlocks.splice(cornerBlocks.indexOf('A1'), 1);
    if (blocks.A3 !== undefined) cornerBlocks.splice(cornerBlocks.indexOf('A3'), 1);
    if (blocks.C1 !== undefined) cornerBlocks.splice(cornerBlocks.indexOf('C1'), 1);
    if (blocks.C3 !== undefined) cornerBlocks.splice(cornerBlocks.indexOf('C3'), 1);
    if (cornerBlocks.length === 0) return;
    return cornerBlocks[Math.floor(Math.random() * cornerBlocks.length)];
  };
  const cornerMove = findEmptyCornerBlock({ blocks });
  const defenseMove = findBlockOfPattern({ blocks, mark: playerMark });
  const resolveMove = findBlockOfPattern({ blocks, mark: aIMark });

  useEffect(() => {
    if (turn === playerMark || win !== undefined || gameMode === GameMode.multiPlayer) return;
    const timer = setTimeout(() => {
      if (emptyBlocks.length === 0) return;
      const [blockKey] = randomBlock;

      if (blocks.B2 === undefined) {
        setBlocks((prevBlocks) => ({
          ...prevBlocks,
          B2: aIMark,
        }));
        setHandleTurn(true);
        return;
      } else if (resolveMove) {
        setBlocks((prevBlocks) => ({
          ...prevBlocks,
          [resolveMove]: aIMark,
        }));
      } else if (defenseMove) {
        setBlocks((prevBlocks) => ({
          ...prevBlocks,
          [defenseMove]: aIMark,
        }));
      } else if (cornerMove) {
        setBlocks((prevBlocks) => ({
          ...prevBlocks,
          [cornerMove]: aIMark,
        }));
      } else
        setBlocks((prevBlocks) => ({
          ...prevBlocks,
          [blockKey]: aIMark,
        }));
      setHandleTurn(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [
    aIMark,
    blocks.B2,
    cornerMove,
    defenseMove,
    emptyBlocks.length,
    gameMode,
    playerMark,
    randomBlock,
    resolveMove,
    setBlocks,
    setHandleTurn,
    turn,
    win,
  ]);

  return (
    <form className="mx-auto flex h-fit w-full max-w-[460px] flex-col gap-[19px]">
      <Popup />
      <Navbar />
      <Main />
      <Footer />
    </form>
  );
}
