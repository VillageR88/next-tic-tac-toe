'use client';

import { PlayerMark, Blocks, Score, GameMode } from '../_lib/interfaces';
import { checkWin } from '@/app/_lib/functionsClient';
import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Routes } from '@/app/routes';

export const DataContext = createContext(
  {} as {
    gameMode: GameMode | undefined;
    setGameMode: Dispatch<SetStateAction<GameMode | undefined>>;
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
    score: Score;
    setScore: Dispatch<SetStateAction<Score>>;
  },
);

export default function DataProvider({ children }: { children: ReactNode }) {
  const [gameMode, setGameMode] = useState<GameMode | undefined>(undefined);
  const [playerMark, setPlayerMark] = useState<PlayerMark>(PlayerMark.O);
  const [turn, setTurn] = useState<PlayerMark>(PlayerMark.X);
  const [win, setWin] = useState<PlayerMark | undefined>(undefined);
  const [handleTurn, setHandleTurn] = useState<boolean>(false);
  const [showRestart, setShowRestart] = useState<boolean>(false);
  const [score, setScore] = useState<Score>({ X: 0, tie: 0, O: 0 });
  const [loaded, setLoaded] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (loaded) return;
    if (pathname !== (Routes.menu as string)) {
      setLoaded(true);
      router.push(Routes.menu);
    }
  }, [loaded, pathname, router]);

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
    if (win)
      setScore((prevScore) => ({
        ...prevScore,
        [win]: prevScore[win] + 1,
      }));
  }, [win]);

  useEffect(() => {
    if (win === undefined && Object.values(blocks).every((block) => block !== undefined)) {
      setScore((prevScore) => ({
        ...prevScore,
        tie: prevScore.tie + 1,
      }));
    }
  }, [blocks, win]);

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
        gameMode,
        setGameMode,
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
        score,
        setScore,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
