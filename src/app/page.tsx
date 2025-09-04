import Image from 'next/image';
import styles from './page.module.css';
import { HTag, Button, ButtonAppearance, ButtonArrow, Paragraph } from '@/components';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HTag Tag='h1'>Title</HTag>
        <HTag Tag='h2'>Title</HTag>
        <HTag Tag='h3'>Title</HTag>
        <Button appearance={ButtonAppearance.PRIMARY}>Button</Button>
        <Button appearance={ButtonAppearance.GHOST} arrow={ButtonArrow.RIGHT}>
          Button
        </Button>
        <Paragraph size='s'>Paragraph</Paragraph>
        <Paragraph size='m'>Paragraph</Paragraph>
        <Paragraph size='l'>Paragraph</Paragraph>
      </main>
      <footer className={styles.footer}>
        <a
          href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image aria-hidden src='/file.svg' alt='File icon' width={16} height={16} />
          Learn
        </a>
        <a
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image aria-hidden src='/window.svg' alt='Window icon' width={16} height={16} />
          Examples
        </a>
        <a
          href='https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image aria-hidden src='/globe.svg' alt='Globe icon' width={16} height={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
