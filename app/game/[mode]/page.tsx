import Navbar from './Navbar';
import Main from './Main';

export default function Mode() {
  return (
    <div className="mx-auto flex h-fit w-full max-w-[460px] flex-col gap-[19px]">
      <Navbar />
      <Main />
    </div>
  );
}
