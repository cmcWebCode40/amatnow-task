import React from 'react';

import { Button, Layout } from '../components';
import Typography from '../components/Typography';
import useAuth from '../libs/useAuth';

const HomeScreen: React.FunctionComponent = () => {
  const { logout } = useAuth()

  return (
    <Layout>
      <Typography className="mb-4 font-semibold" variant="lg">Welcome home</Typography>
      <Button onPress={logout}>
        Lgout
      </Button>
    </Layout>
  );
};

export default HomeScreen;
