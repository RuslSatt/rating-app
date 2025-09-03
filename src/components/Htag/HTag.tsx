import styles from './HTag.module.css';

export interface HTagProps extends React.HTMLAttributes<HTMLHeadingElement> {
  Tag: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
}

export const HTag: React.FC<HTagProps> = (props) => {
  const { Tag, children, ...otherProps } = props;

  return (
    <Tag className={styles[Tag]} {...otherProps}>
      {children}
    </Tag>
  );
};
