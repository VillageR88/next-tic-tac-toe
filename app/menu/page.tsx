import Header from './Header';
import Form from './Form';

export default function Menu() {
  return (
    <div className="mx-auto flex h-fit w-full max-w-[460px] flex-col gap-[40px]">
      <Header />
      <Form />
    </div>
  );
}
