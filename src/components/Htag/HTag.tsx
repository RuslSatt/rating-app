import styles from './HTag.module.css';

export interface HTagProps {
  Tag: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
}

export const HTag: React.FC<HTagProps> = (props) => {
  const { Tag, children } = props;

  return <Tag className={styles[Tag]}>{children}</Tag>;
};
