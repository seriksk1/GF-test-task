import {
  Caption,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  OverlineText,
  Paragraph,
  ParagraphSmall,
  Subtitle,
  SubtitleSmall,
} from '@/components/ui';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'GF Home page',
};

export default function Home() {
  return (
    <div className="">
      <Heading1>Heading1</Heading1>
      <Heading2>Heading2</Heading2>
      <Heading3>Heading3</Heading3>
      <Heading4>Heading4</Heading4>
      <Heading5>Heading5</Heading5>
      <Heading6>Heading6</Heading6>
      <Subtitle>Subtitle</Subtitle>
      <SubtitleSmall>SubtitleSmall</SubtitleSmall>
      <Paragraph>Paragraph</Paragraph>
      <ParagraphSmall>ParagraphSmall</ParagraphSmall>
      <Caption>Caption</Caption>
      <OverlineText>Overline Text</OverlineText>
    </div>
  );
}
