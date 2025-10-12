import { Sidebar } from '@/components';
import { Heading2 } from '@/components/ui';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'GF Home page',
};

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex flex-col w-full gap-2 items-center justify-center">
        <Heading2>variant=primary</Heading2>
        <div className="flex gap-3 p-2">
          <Button size="small" variant="primary">
            Button
          </Button>
          <Button size="medium" variant="primary">
            Button
          </Button>
          <Button size="large" variant="primary">
            Button
          </Button>
          <Button size="large" variant="primary" disabled>
            Button
          </Button>
        </div>

        <Heading2>variant=outline</Heading2>
        <div className="flex gap-3 p-2">
          <Button size="small" variant="outline">
            Button
          </Button>
          <Button size="medium" variant="outline">
            Button
          </Button>
          <Button size="large" variant="outline">
            Button
          </Button>
          <Button size="large" variant="outline" disabled>
            Button
          </Button>
        </div>

        <Heading2>variant=text</Heading2>
        <div className="flex gap-3 p-2">
          <Button size="small" variant="text">
            Button
          </Button>
          <Button size="medium" variant="text">
            Button
          </Button>
          <Button size="large" variant="text">
            Button
          </Button>
          <Button size="large" variant="text" disabled>
            Button
          </Button>
        </div>

        <Heading2>variant=primary+destructive</Heading2>
        <div className="flex gap-3 p-2">
          <Button size="small" variant="primary" destructive="on">
            Button
          </Button>
          <Button size="medium" variant="primary" destructive="on">
            Button
          </Button>
          <Button size="large" variant="primary" destructive="on">
            Button
          </Button>
          <Button size="large" variant="primary" destructive="on" disabled>
            Button
          </Button>
        </div>

        <Heading2>variant=outline+destructive</Heading2>
        <div className="flex gap-3 p-2">
          <Button size="small" variant="outline" destructive="on">
            Button
          </Button>
          <Button size="medium" variant="outline" destructive="on">
            Button
          </Button>
          <Button size="large" variant="outline" destructive="on">
            Button
          </Button>
          <Button size="large" variant="outline" destructive="on" disabled>
            Button
          </Button>
        </div>

        <Heading2>variant=text+destructive</Heading2>
        <div className="flex gap-3 p-2">
          <Button size="small" variant="text" destructive="on">
            Button
          </Button>
          <Button size="medium" variant="text" destructive="on">
            Button
          </Button>
          <Button size="large" variant="text" destructive="on">
            Button
          </Button>
          <Button size="large" variant="text" destructive="on" disabled>
            Button
          </Button>
        </div>
      </main>
    </div>
  );
}
