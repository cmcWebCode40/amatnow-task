import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { SvgProps } from 'react-native-svg';

export type IconName = 'visibility-off' | 'visibility';

type IconProps = {
  name: IconName;
  size?: number;
} & SvgProps;

const Icon: React.FunctionComponent<IconProps> = ({
  name,
  size = 24,
  ...otherProps
}) => {
  const AppIcon = {
    visibility: <MaterialIcons name='visibility' size={size} {...otherProps} />,
    'visibility-off': (
      <MaterialIcons name='visibility-off' size={size} {...otherProps} />
    ),
  };

  const icon = AppIcon[name];

  if (!icon) {
    throw new Error(`Icon wit name ${name} is  not supported`);
  }

  return AppIcon[name];
};

export default Icon;
