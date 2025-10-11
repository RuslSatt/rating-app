import styles from './Tag.module.css';
import classNames from 'classnames';

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
  size?: 's' | 'm';
  href?: string;
  children: React.ReactNode;
}

export const Tag: React.FC<TagProps> = (props) => {
  const { type = 'ghost', children, size = 'm', href, ...otherProps } = props;

  return (
    <div className={classNames(styles.tag, styles[type], styles[size])} {...otherProps}>
      {href ? <a href={href}>{children}</a> : children}
    </div>
  );
};
