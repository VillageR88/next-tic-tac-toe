'use client';

import { PlayerMark, Blocks } from '../_lib/interfaces';
import { checkWin } from '@/app/_lib/functionsClient';
import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from 'react';

export const DataContext = createContext(
  {} as {
    playerMark: PlayerMark;
    setPlayerMark: Dispatch<SetStateAction<PlayerMark>>;
    blocks: Blocks;
    setBlocks: Dispatch<SetStateAction<Blocks>>;
    turn: PlayerMark;
    setTurn: Dispatch<SetStateAction<PlayerMark>>;
    win: PlayerMark | undefined;
    setWin: Dispatch<SetStateAction<PlayerMark | undefined>>;
    handleTurn: boolean;
    setHandleTurn: Dispatch<SetStateAction<boolean>>;
    showRestart: boolean;
    setShowRestart: Dispatch<SetStateAction<boolean>>;
    handleClearBoard: () => void;
  },
);

export default function DataProvider({ children }: { children: ReactNode }) {
  const [playerMark, setPlayerMark] = useState<PlayerMark>(PlayerMark.O);
  const [turn, setTurn] = useState<PlayerMark>(PlayerMark.X);
  const [win, setWin] = useState<PlayerMark | undefined>(undefined);
  const [handleTurn, setHandleTurn] = useState<boolean>(false);
  const [showRestart, setShowRestart] = useState<boolean>(false);

  const [blocks, setBlocks] = useState<Blocks>({
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

  const handleClearBoard = (): void => {
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
    setWin(undefined);
    setTurn(Math.random() < 0.5 ? PlayerMark.X : PlayerMark.O);
  };

  useEffect(() => {
    if (handleTurn) {
      const result = checkWin(blocks, turn);
      if (result) {
        setWin(result);
      } else {
        setTurn(turn === PlayerMark.X ? PlayerMark.O : PlayerMark.X);
        setHandleTurn(false);
      }
    }
  }, [blocks, handleTurn, turn]);

  return (
    <DataContext.Provider
      value={{
        playerMark,
        setPlayerMark,
        blocks,
        setBlocks,
        turn,
        setTurn,
        win,
        setWin,
        handleTurn,
        setHandleTurn,
        showRestart,
        setShowRestart,
        handleClearBoard,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
