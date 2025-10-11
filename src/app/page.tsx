import styles from './page.module.css';
import { HTag, Button, ButtonAppearance, ButtonArrow, Paragraph, Tag } from '@/components';

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

        <Tag type='ghost' size='s'>
          Tag s
        </Tag>
        <Tag type='red'>Tag</Tag>
        <Tag type='grey'>Tag</Tag>
        <Tag type='green'>Tag</Tag>
        <Tag type='primary'>Tag</Tag>
      </main>
    </div>
  );
}
