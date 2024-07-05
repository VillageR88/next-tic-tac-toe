import IconX from '@/app/components/IconX';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import IconO from '@/app/components/IconO';

const title = 'TURN';

export default function Turn() {
  return (
    <div className="ml-[-20px] flex h-[52px] w-[140px] items-start justify-center rounded-[10px] bg-semiDarkNavyOuterShadow">
      <div className="flex h-[48px] w-full items-center justify-center gap-[13px] rounded-b-[11px] rounded-t-[10px] bg-semiDarkNavy">
        <IconX classExtension={`size-[20px] fill-silver`} />
        <h1 className="text-[16px] font-bold tracking-[1px] text-silver">{title}</h1>
      </div>
    </div>
  );
}
