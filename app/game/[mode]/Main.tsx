import { cookies } from 'next/headers';
import { PlayerMark } from '@/app/_lib/interfaces';
import IconOOutline from '@/app/components/IconOOutline';
import IconXOutline from '@/app/components/IconXOutline';

const blockList = Array.from({ length: 9 }, (_, i) => i);
const namingConvention = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'];

function Block({ blockName }: { blockName: string }) {
  const playerMark = cookies().get('playerMark' as PlayerMark)?.value;
  const PlayerMark = playerMark === 'X' ? IconXOutline : IconOOutline;

  return (
    <button
      aria-label={blockName}
      type="button"
      className="group/buttonBox flex size-[140px] rounded-[15px] bg-semiDarkNavyOuterShadow"
    >
      <div className="flex h-[132px] w-full items-center justify-center rounded-b-[17px] rounded-t-[15px] bg-semiDarkNavy">
        <div className="absolute size-fit opacity-0 transition group-hover/buttonBox:opacity-100">
          <PlayerMark />
        </div>
      </div>
    </button>
  );
}

export default function Main() {
  return (
    <div className="grid h-[461px] w-[460] grid-cols-3 gap-[20px]">
      {blockList.map((_, i) => (
        <Block blockName={namingConvention[i]} key={i} />
      ))}
    </div>
  );
}
