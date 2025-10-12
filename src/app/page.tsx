import { Sidebar } from '@/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'GF Home page',
};

export default function Home() {
  return (
    <div className="">
      <Sidebar />
    </div>
  );
}
