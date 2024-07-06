import Header from '@/app/components/Header';
import { HeaderType } from '@/app/_lib/interfaces';
import Turn from './Turn';
import Restart from './Restart';

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between">
      <Header type={HeaderType.div} />
      <Turn />
      <Restart />
    </nav>
  );
}
