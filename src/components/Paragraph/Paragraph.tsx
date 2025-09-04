import classNames from 'classnames';
import styles from './Paragraph.module.css';

export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  size?: 's' | 'm' | 'l';
}

export const Paragraph: React.FC<ParagraphProps> = (props) => {
  const { children, size = 'm', ...otherProps } = props;

  return (
    <p className={classNames(styles.paragraph, styles[size])} {...otherProps}>
      {children}
    </p>
  );
};
