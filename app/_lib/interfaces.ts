export enum HeaderType {
  header = 'header',
  div = 'div',
}

export enum ButtonType {
  singlePlayer = 'singlePlayer',
  multiPlayer = 'multiPlayer',
}

export enum PlayerMark {
  X = 'X',
  O = 'O',
}

export interface Blocks {
  A1: PlayerMark | undefined;
  A2: PlayerMark | undefined;
  A3: PlayerMark | undefined;
  B1: PlayerMark | undefined;
  B2: PlayerMark | undefined;
  B3: PlayerMark | undefined;
  C1: PlayerMark | undefined;
  C2: PlayerMark | undefined;
  C3: PlayerMark | undefined;
}

export enum GameMode {
  singlePlayer = 'singlePlayer',
  multiPlayer = 'multiPlayer',
}

export interface Score {
  X: number;
  tie: number;
  O: number;
}
