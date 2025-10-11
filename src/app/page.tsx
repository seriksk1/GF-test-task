import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'GF Home page',
};

export default function Home() {
  return (
    <div className="">
      <h1 className="text-5xl font-semibold leading-normal font-default">
        Whereas recognition of the inherent dignity
      </h1>
    </div>
  );
}
