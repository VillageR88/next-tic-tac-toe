'use client';
import { ButtonType } from '@/app/_lib/interfaces';
import { PlayerMark } from '@/app/_lib/interfaces';
import Link from 'next/link';
import { Routes } from '@/app/routes';
import { DataContext } from '../_providers/DataContext';
import { useContext } from 'react';

const title = 'PICK PLAYER 1’S MARK';
const description = 'REMEMBER : X GOES FIRST';

const buttonTypeColors = {
  [ButtonType.singlePlayer]: {
    outerBG: 'bg-[#CC8B13]',
    innerBG: 'bg-lightYellow',
    innerBGHover: 'group-hover/primaryButton:bg-lightYellowHover',
    title: 'NEW GAME (VS CPU)',
  },
  [ButtonType.multiPlayer]: {
    outerBG: 'bg-[#118C87]',
    innerBG: 'bg-lightBlue',
    innerBGHover: 'group-hover/primaryButton:bg-lightBlueHover',
    title: 'NEW GAME  (VS PLAYER)',
  },
};

const ButtonOption = ({ buttonType }: { buttonType: ButtonType }) => (
  <Link prefetch href={buttonType !== ButtonType.multiPlayer ? Routes[buttonType] : ''}>
    <button
      disabled={buttonType === ButtonType.multiPlayer}
      name="gameType"
      value={buttonType}
      className={`${buttonTypeColors[buttonType].outerBG} group/primaryButton flex h-[67px] w-full flex-col rounded-[15px] text-[20px] font-bold tracking-[1.25px] text-darkNavy disabled:cursor-not-allowed`}
      type="button"
    >
      <div
        className={`${buttonTypeColors[buttonType].innerBG} ${buttonTypeColors[buttonType].innerBGHover} flex h-[59px] w-full items-center justify-center rounded-b-[20px] rounded-t-[15px] transition-colors`}
      >
        {buttonTypeColors[buttonType].title}
      </div>
    </button>
  </Link>
);

export default function Form() {
  const { setPlayerMark, playerMark } = useContext(DataContext);
  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className="flex w-full flex-col gap-[40px]">
      <div className="h-[205px] w-full rounded-[15px] bg-semiDarkNavyOuterShadow">
        <div className="flex h-[197px] w-full flex-col items-center justify-between rounded-b-[20px] rounded-t-[15px] bg-semiDarkNavy py-[22px]">
          <h1 className="text-[16px] font-bold tracking-[1px] text-silver">{title}</h1>
          <div className="flex h-[72px] w-[412px] items-center justify-center rounded-[10px] bg-darkNavy">
            <label className="group/xOption relative flex items-center justify-center">
              <svg
                className="pointer-events-none absolute fill-silver transition group-has-[input[type='radio']:checked]/xOption:fill-darkNavy"
                width="32"
                height="32"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
                  fillRule="evenodd"
                />
              </svg>
              <input
                onChange={(event) => {
                  setPlayerMark(event.target.value as PlayerMark);
                }}
                checked={playerMark === PlayerMark.X}
                type="radio"
                name="playerMark"
                value={PlayerMark.X}
              />
              {''}
            </label>
            <label className="group/oOption relative flex items-center justify-center">
              <svg
                className="pointer-events-none absolute fill-silver transition group-has-[input[type='radio']:checked]/oOption:fill-darkNavy"
                width="32"
                height="32"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z" />
              </svg>
              <input
                onChange={(event) => {
                  setPlayerMark(event.target.value as PlayerMark);
                }}
                checked={playerMark === PlayerMark.O}
                type="radio"
                name="playerMark"
                value={PlayerMark.O}
              />
              {''}
            </label>
          </div>
          <p className="text-[14px] font-medium tracking-[0.88px] text-silver">{description}</p>
        </div>
      </div>
      <div className="flex flex-col gap-[20px]">
        <ButtonOption buttonType={ButtonType.singlePlayer} />
        <ButtonOption buttonType={ButtonType.multiPlayer} />
      </div>
    </form>
  );
}
