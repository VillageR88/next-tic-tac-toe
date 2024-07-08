'use client';
import { Blocks, PlayerMark } from './interfaces';

export const checkWin = (blocks: Blocks, mark: PlayerMark): PlayerMark | undefined => {
  const winPatterns = [
    ['A1', 'A2', 'A3'],
    ['B1', 'B2', 'B3'],
    ['C1', 'C2', 'C3'],
    ['A1', 'B1', 'C1'],
    ['A2', 'B2', 'C2'],
    ['A3', 'B3', 'C3'],
    ['A1', 'B2', 'C3'],
    ['A3', 'B2', 'C1'],
  ];
  for (const pattern of winPatterns) {
    if (
      blocks[pattern[0] as keyof Blocks] === mark &&
      blocks[pattern[1] as keyof Blocks] === mark &&
      blocks[pattern[2] as keyof Blocks] === mark
    )
      return mark;
  }
  return undefined;
};
