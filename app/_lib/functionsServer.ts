'use server';

import { redirect } from 'next/navigation';
import { Routes } from '@/app/routes';
import { ButtonType } from '@/app/_lib/interfaces';
import { cookies } from 'next/headers';

// eslint-disable-next-line @typescript-eslint/require-await
export async function proceedToGame(FormData: FormData): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const playerMark = FormData.get('playerMark');
  const gameType = FormData.get('gameType');
  cookies().set('playerMark', playerMark as string);
  // if (gameType === ButtonType.singlePlayer) redirect(Routes.singlePlayer);
  // else if (gameType === ButtonType.multiPlayer) redirect(Routes.multiPlayer);
}
