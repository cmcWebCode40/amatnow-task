import React from 'react';
import { ScrollViewProps } from 'react-native';

import {
  StyledSafeAreaView,
  StyledScrollView,
} from '../components/nativeWrapper';

type LayoutProps = {
  children: React.ReactNode;
  withScrollView?: boolean;
  scrollViewClassName?: string;
  containerClassname?: string;
} & ScrollViewProps;

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  scrollViewClassName,
  containerClassname,
  withScrollView = true,
  ...otherProps
}) => {
  if (withScrollView) {
    return (
      <StyledSafeAreaView
        className={`bg-white flex-1 ${containerClassname}`}
        {...otherProps}
      >
        <StyledScrollView
          showsVerticalScrollIndicator={false}
          className={`py-3 flex-1 px-4 ${scrollViewClassName}`}
        >
          {children}
        </StyledScrollView>
      </StyledSafeAreaView>
    );
  }

  return (
    <StyledSafeAreaView className='bg-white flex-1 py-3 px-4'>
      {children}
    </StyledSafeAreaView>
  );
};

export default Layout;
