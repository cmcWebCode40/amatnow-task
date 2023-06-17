import React from 'react';
import { TextProps } from 'react-native';

import { StyledText } from './nativeWrapper';

type Size = 'sm' | 'md' | 'lg';

interface TypographyProps extends TextProps {
  variant?: Size;
  className?: string;
}

const variantStyles = {
  sm: 'text-base',
  md: 'text-lg',
  lg: 'text-3xl',
};

const Typography: React.FunctionComponent<TypographyProps> = ({
  variant = 'md',
  className,
  ...rest
}) => {
  return (
    <StyledText
      className={`
      ${variantStyles[variant]} text-black  ${className}`}
      {...rest}
    />
  );
};

export default Typography;
