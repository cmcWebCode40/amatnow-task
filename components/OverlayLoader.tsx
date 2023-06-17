import React from 'react';
import Modal from 'react-native-modal';

import { colors } from '../libs/constants';
import { StyledActivityIndicator } from './nativeWrapper';

interface OverlayLoaderProps {
  isLoading: boolean;
}

const OverlayLoader: React.FunctionComponent<OverlayLoaderProps> = ({
  isLoading = false,
}) => {
  const OverlayLoaderIndicator = (
    <StyledActivityIndicator animating={true} color={colors.primary} />
  );

  return <Modal isVisible={isLoading}>{OverlayLoaderIndicator}</Modal>;
};

export default OverlayLoader;
