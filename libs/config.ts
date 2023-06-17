import Constants from 'expo-constants';

const env = Constants?.expoConfig?.extra;

const config = {
  baseApi: env?.BASE_API,
};

export default config;
