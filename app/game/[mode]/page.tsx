import Navbar from './Navbar';
import Main from './Main';
import { redirect } from 'next/navigation';
import { BlockValue, PlayerMark } from '@/app/_lib/interfaces';
import { cookies } from 'next/headers';

let A1 = BlockValue.empty;
let A2 = BlockValue.empty;
let A3 = BlockValue.empty;
let B1 = BlockValue.empty;
let B2 = BlockValue.empty;
let B3 = BlockValue.empty;
let C1 = BlockValue.empty;
let C2 = BlockValue.empty;
let C3 = BlockValue.empty;

// eslint-disable-next-line @typescript-eslint/require-await
async function handleSubmit(FormData: FormData) {
  'use server';
  // FormData.append('A1', BlockValue.X);
  // console.log(FormData.get('A1') as BlockValue);
  // console.log(FormData.get('restart'));

  // const restart = FormData.get('restart') === 'restart' ? true : false;
  console.log(FormData.get('restart'));
  if (FormData.get('restart') === 'restart') {
    A1 = BlockValue.empty;
    A2 = BlockValue.empty;
    A3 = BlockValue.empty;
    B1 = BlockValue.empty;
    B2 = BlockValue.empty;
    B3 = BlockValue.empty;
    C1 = BlockValue.empty;
    C2 = BlockValue.empty;
    C3 = BlockValue.empty;
    // redirect('/game/singlePlayer');
  } else {
    A1 = FormData.get('A1') ? (FormData.get('A1') as BlockValue) : A1;
    A2 = FormData.get('A2') ? (FormData.get('A2') as BlockValue) : A2;
    A3 = FormData.get('A3') ? (FormData.get('A3') as BlockValue) : A3;
    B1 = FormData.get('B1') ? (FormData.get('B1') as BlockValue) : B1;
    B2 = FormData.get('B2') ? (FormData.get('B2') as BlockValue) : B2;
    B3 = FormData.get('B3') ? (FormData.get('B3') as BlockValue) : B3;
    C1 = FormData.get('C1') ? (FormData.get('C1') as BlockValue) : C1;
    C2 = FormData.get('C2') ? (FormData.get('C2') as BlockValue) : C2;
    C3 = FormData.get('C3') ? (FormData.get('C3') as BlockValue) : C3;
  }
  // console.log(A1, A2, A3, B1, B2, B3, C1, C2, C3);
  // return [A1, A2, A3, B1, B2, B3, C1, C2, C3];
  //reload page
  // window.location.reload();
  //server side page reload
  redirect('/game/singlePlayer');
}

export default function Mode() {
  const playerMark = cookies().get('playerMark')?.value as PlayerMark;

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form action={handleSubmit} className="mx-auto flex h-fit w-full max-w-[460px] flex-col gap-[19px]">
      <Navbar />
      <Main playerMark={playerMark} A1={A1} A2={A2} A3={A3} B1={B1} B2={B2} B3={B3} C1={C1} C2={C2} C3={C3} />
    </form>
  );
}
