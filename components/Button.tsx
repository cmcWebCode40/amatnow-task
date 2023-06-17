import React from 'react';
import { PressableProps } from 'react-native';

import { StyledPressable, StyledText, StyledView } from './nativeWrapper';

type Size = 'sm' | 'md';
type ButtonVariant = 'contained' | 'text';

interface ButtonProps extends PressableProps {
  variant?: ButtonVariant;
  size?: Size;
  className?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const variantStyles = {
  contained: 'bg-primary text-white hover:bg-slate-800',
  text: 'bg-gray text-black',
};

const variantSizes = {
  md: 'h-14 py-2 px-4',
  sm: 'h-10 px-2',
};

const buttonTextClass = {
  contained: 'text-white',
  text: 'text-black',
};

const Button: React.FunctionComponent<ButtonProps> = ({
  size = 'md',
  variant = 'contained',
  className,
  children,
  icon,
  disabled,
  ...rest
}) => {
  const disabledClassname = disabled ? 'opacity-60' : '';

  return (
    <StyledPressable
      className={`flex-row items-center justify-center shadow-md rounded-full space-x-2 hover:bg-slate-300
      active:opacity-80
 ${variantSizes[size]} ${variantStyles[variant]} ${className} ${disabledClassname}`}
      {...rest}
    >
      {icon && <StyledView>{icon}</StyledView>}
      <StyledText
        className={`${buttonTextClass[variant]} text-base font-semibold text-center flex-row items-center justify-center`}
      >
        {children}
      </StyledText>
    </StyledPressable>
  );
};

export default Button;
