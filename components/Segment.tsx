import React, { useState } from 'react';

import { StyledPressable, StyledView } from './nativeWrapper';
import Typography from './Typography';

interface SegmentProps {
  items: string[];
}

const Segment: React.FunctionComponent<SegmentProps> = ({ items }) => {
  const [value] = useState<number>(1);

  return (
    <StyledView className='flex-row justify-between items-center h-12 py-2 px-1 bg-gray rounded-full'>
      {items.map((item, index) => (
        <StyledPressable
          key={item}
          className={`flex-1 ${index !== value
            ? ''
            : 'h-10 py-2 flex-1 bg-white rounded-full shadow-md'
            }`}
        >
          <Typography
            variant='sm'
            className={`text-center ${index !== value ? '' : 'text-primary font-semibold'
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
