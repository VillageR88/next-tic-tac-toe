import Header from '../components/Header';
import Form from './Form';
import { HeaderType } from '@/app/_lib/interfaces';

export default function Menu() {
  return (
    <div className="mx-auto flex h-fit w-full max-w-[460px] flex-col gap-[40px]">
      <Header type={HeaderType.header} />
      <Form />
    </div>
  );
}
