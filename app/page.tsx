import { redirect } from 'next/navigation';
import { Routes } from '@/app/routes';

export default function Home() {
  redirect(Routes.menu);
}
