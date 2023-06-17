import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
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
import { LoginAuthFields } from '../libs/types';
import useAuth from '../libs/useAuth';

const formInitialValues = {
  "email": "",
  "password": ""
};
const segmentItems = [' Create Account', 'Login'];

const SignInScreen: React.FunctionComponent = () => {
  const { error, isLoading, login } = useAuth();

  const handleLogin = async (inputs: LoginAuthFields) => {
    await login(inputs);
  };
  return (
    <Layout withScrollView={false}>
      <>
        {isLoading && <Loader isLoading={isLoading} />}
        <StyledView className='mt-4 mb-5'>
          <Segment items={segmentItems} />
        </StyledView>
        <Formik
          enableReinitialize={true}
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
              {isLoading && <Loader isLoading={isLoading} />}
              <KeyboardAwareScrollView style={{
                minHeight: 300
              }}>
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
              </KeyboardAwareScrollView>
              <StyledView className='space-y-5'>
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
                <Typography
                  variant='sm'
                  className='text-center underline text-gray-light'
                >
                  Continue with more options
                </Typography>
              </StyledView>
            </StyledView>
          )}
        </Formik>
      </>
    </Layout>
  );
};

export default SignInScreen;
