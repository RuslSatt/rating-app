import styles from './Button.module.css';
import classNames from 'classnames';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  appearance: 'primary' | 'ghost';
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, appearance, ...otherProps } = props;

  return (
    <button className={classNames(styles.button, styles[appearance])} {...otherProps}>
      {children}
    </button>
  );
};
