import styles from './Button.module.css';
import classNames from 'classnames';
import ArrowIcon from '@/shared/icons/arrow.svg';

export const enum ButtonAppearance {
  PRIMARY = 'primary',
  GHOST = 'ghost'
}

export const enum ButtonArrow {
  RIGHT = 'right',
  DOWN = 'down',
  NONE = 'none'
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  appearance: ButtonAppearance;
  arrow?: ButtonArrow;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, appearance, arrow = ButtonArrow.NONE, ...otherProps } = props;

  return (
    <button className={classNames(styles.button, styles[appearance])} {...otherProps}>
      {children}
      {arrow !== ButtonArrow.NONE && (
        <ArrowIcon className={classNames(styles.arrow, styles[arrow])} />
      )}
    </button>
  );
};
