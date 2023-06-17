import React, { useState } from 'react';
import { ViewStyle } from 'react-native';

import { colors } from '../libs/constants';
import { StyledPressable, StyledView } from './nativeWrapper';
import Typography from './Typography';

interface SegmentProps {
  items: string[];
}

const boxShadowStyle: ViewStyle = {
  backgroundColor: colors.white,
  shadowColor: colors.black,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.22,
  shadowRadius: 2.22,

  elevation: 3,
};

const Segment: React.FunctionComponent<SegmentProps> = ({ items }) => {
  const [tab, setTab] = useState<number>(1);

  return (
    <StyledView className='flex-row justify-between items-center h-12 py-2 px-1 bg-gray rounded-full'>
      {items.map((item, index) => (
        <StyledPressable
          key={item}
          onPress={() => setTab(index)}
          className={`flex-1 ${
            index !== tab ? '' : 'h-10 py-2 flex-1 bg-white rounded-full'
          }`}
          style={index === tab && boxShadowStyle}
        >
          <Typography
            variant='sm'
            className={`text-center ${
              index !== tab ? '' : 'text-primary font-semibold'
            }`}
          >
            {item}
          </Typography>
        </StyledPressable>
      ))}
    </StyledView>
  );
};

export default Segment;
