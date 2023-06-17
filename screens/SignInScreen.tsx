import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import React from 'react';

import {
  Button,
  FormInput,
  Layout,
  Loader,
  Segment,
  StyledView,
} from '../components';
import Typography from '../components/Typography';
import { LoginAuthSchema } from '../libs/authSchema';
import { HOME_SCREEN } from '../libs/constants';
import { LoginAuthFields, RootNavigationScreens } from '../libs/types';
import useAuth from '../libs/useAuth';

const formInitialValues = {
  email: '',
  password: '',
};
const segmentItems = [' Create Account', 'Login'];

const SignInScreen: React.FunctionComponent = () => {
  const { error, isLoading, loginUser } = useAuth();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootNavigationScreens>>();
  const handleLogin = async (inputs: LoginAuthFields) => {
    await loginUser(inputs);
    navigation.navigate(HOME_SCREEN);
  };
  return (
    <Layout withScrollView={false}>
      <Loader isLoading={isLoading} />
      <StyledView className='mt-4 mb-5'>
        <Segment items={segmentItems} />
      </StyledView>
      <Formik
        initialValues={formInitialValues}
        onSubmit={handleLogin}
        validationSchema={LoginAuthSchema}
      >
        {({
          values,
          isValid,
          errors,
          touched,
          handleChange,
          setFieldTouched,
          handleSubmit,
        }) => (
          <StyledView className='flex-1 justify-between flex-col h-auto mb-4'>
            <StyledView>
              <StyledView className='space-y-4'>
                <StyledView>
                  <Typography className='font-semibold my-2'>
                    Email address or phone number
                  </Typography>
                  <FormInput
                    onChangeText={handleChange('email')}
                    onBlur={() => setFieldTouched('email')}
                    value={values.email}
                    isError={Boolean(errors.email && touched.email)}
                    errorMessage={errors.email}
                    placeholder='Enter email or phone'
                  />
                </StyledView>
                <StyledView>
                  <Typography className='font-semibold my-2'>
                    Password
                  </Typography>
                  <FormInput
                    onChangeText={handleChange('password')}
                    onBlur={() => setFieldTouched('password')}
                    value={values.password}
                    isError={Boolean(errors.password && touched.password)}
                    errorMessage={errors.password}
                    placeholder='Enter password'
                    hasPassword={true}
                  />
                </StyledView>
              </StyledView>
              <StyledView className='flex-row justify-between'>
                <StyledView />
                <Typography variant='sm' className='text-primary mt-2'>
                  Forgot pasword ?
                </Typography>
              </StyledView>
              {error && (
                <Typography className='my-2 text-primary'>{error}</Typography>
              )}
            </StyledView>
            <StyledView className='space-y-4'>
              <Button
                disabled={!isValid}
                onPress={() => {
                  handleSubmit();
                }}
                variant='contained'
              >
                Login
              </Button>
              <Button variant='text'>Continue as quest </Button>
            </StyledView>
          </StyledView>
        )}
      </Formik>
    </Layout>
  );
};

export default SignInScreen;
