import { PlayerMark } from '@/app/_lib/interfaces';
import IconOOutline from '@/app/components/IconOOutline';
import IconXOutline from '@/app/components/IconXOutline';
import IconO from '@/app/components/IconO';
import IconX from '@/app/components/IconX';
import { BlockValue } from '@/app/_lib/interfaces';
import { Suspense } from 'react';

// const blockList = Array.from({ length: 9 }, (_, i) => i);
const namingConvention = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'];

const SuspenseBlock = ({ value, playerMark }: { value: BlockValue; playerMark: PlayerMark }) => {
  const PlayerMarkIcon =
    value !== BlockValue.empty
      ? playerMark === PlayerMark.X
        ? () => IconX({ classExtension: undefined })
        : () => IconO({ classExtension: undefined })
      : () => (<div></div>) as JSX.Element;
  return (
    <div className="group/buttonBox flex size-[140px] rounded-[15px] bg-semiDarkNavyOuterShadow disabled:hover:cursor-not-allowed">
      <div className="flex h-[132px] w-full items-center justify-center rounded-b-[17px] rounded-t-[15px] bg-semiDarkNavy">
        <div className="absolute size-fit">
          {' '}
          <PlayerMarkIcon />
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/require-await
async function Block({
  blockName,
  value,
  playerMark,
}: {
  blockName: string;
  value: BlockValue;
  playerMark: PlayerMark;
}) {
  // await new Promise((resolve) => setTimeout(resolve, 250));
  const PlayerMarkIconHover =
    value === BlockValue.empty ? (playerMark === PlayerMark.X ? IconXOutline : IconOOutline) : () => <div></div>;
  const PlayerMarkIcon =
    value !== BlockValue.empty
      ? playerMark === PlayerMark.X
        ? () => IconX({ classExtension: undefined })
        : () => IconO({ classExtension: undefined })
      : () => (<div></div>) as JSX.Element;

  return (
    <button
      key={blockName}
      disabled={value !== BlockValue.empty}
      name={blockName}
      aria-label={blockName}
      value={playerMark}
      type="submit"
      className="group/buttonBox flex size-[140px] rounded-[15px] bg-semiDarkNavyOuterShadow disabled:hover:cursor-not-allowed"
    >
      <div className="flex h-[132px] w-full items-center justify-center rounded-b-[17px] rounded-t-[15px] bg-semiDarkNavy">
        <div className="absolute size-fit opacity-0 transition group-hover/buttonBox:opacity-100">
          <PlayerMarkIconHover />
        </div>
        <div className="absolute size-fit transition">
          <PlayerMarkIcon />
        </div>
      </div>
    </button>
  );
}

export default function Main({
  playerMark,
  A1,
  A2,
  A3,
  B1,
  B2,
  B3,
  C1,
  C2,
  C3,
}: {
  playerMark: PlayerMark;
  A1: BlockValue;
  A2: BlockValue;
  A3: BlockValue;
  B1: BlockValue;
  B2: BlockValue;
  B3: BlockValue;
  C1: BlockValue;
  C2: BlockValue;
  C3: BlockValue;
}) {
  return (
    <main className="h-[461px] w-[460]">
      <ul className="grid grid-cols-3 gap-[20px]">
        {[A1, A2, A3, B1, B2, B3, C1, C2, C3].map((element, i) => (
          <li key={i}>
            <Suspense fallback={<SuspenseBlock playerMark={playerMark} value={element} />}>
              <Block playerMark={playerMark} value={element} blockName={namingConvention[i]} />
            </Suspense>
          </li>
        ))}
      </ul>
    </main>
  );
}
