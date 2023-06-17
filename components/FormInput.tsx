import React, { ForwardedRef, forwardRef, useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import Icon from './Icon';
import { StyledPressable, StyledTextInput, StyledView } from './nativeWrapper';
import Typography from './Typography';

interface FormInputProps extends TextInputProps {
  className?: string;
  isError: boolean;
  errorMessage?: string;
  hasPassword?: boolean;
}

const FormInput: React.FunctionComponent<FormInputProps> = forwardRef(
  (
    { className, errorMessage, isError, hasPassword, ...rest },
    ref: ForwardedRef<TextInput>
  ) => {
    const [passwordVisibility, setPasswordVisibility] =
      useState<boolean>(false);

    const handlePasswordVisibility = () => {
      setPasswordVisibility(!passwordVisibility);
    };

    const PasswordIcon = (
      <StyledPressable onPress={handlePasswordVisibility}>
        {passwordVisibility ? (
          <Icon color='#999' name='visibility' />
        ) : (
          <Icon color='#999' name='visibility-off' />
        )}
      </StyledPressable>
    );

    return (
      <StyledPressable>
        <StyledView className='flex-row px-4 justify-between items-center border-none border-black bg-gray rounded-md'>
          <StyledTextInput
            {...rest}
            autoCapitalize={'none'}
            className={`${className} items-center justify-between w-11/12 py-4`}
            ref={ref}
            secureTextEntry={passwordVisibility}
          />
          {hasPassword && PasswordIcon}
        </StyledView>
        {isError && (
          <Typography variant='sm' className='text-primary'>
            {errorMessage}
          </Typography>
        )}
      </StyledPressable>
    );
  }
);

export default FormInput;
