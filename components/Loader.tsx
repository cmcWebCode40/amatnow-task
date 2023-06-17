import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay/lib';

import { StyledActivityIndicator } from './nativeWrapper';

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FunctionComponent<LoaderProps> = ({
  isLoading = false,
}) => {
  const loaderIndicator = (
    <StyledActivityIndicator animating={true} color={'#F12B01'} />
  );

  return <Spinner visible={isLoading} customIndicator={loaderIndicator} />;
};

export default Loader;
