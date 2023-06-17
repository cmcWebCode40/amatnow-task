import 'dotenv/config';

let config = {
  BASE_API: process.env.BASE_API,
};

export default {
  expo: {
    name: 'Amat Now Task',
    slug: 'amat-now-task',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: 'com.cmcwebcode.amatnow',
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      ...config,
      eas: {
        projectId: '87264a91-55d8-4b3f-a616-145b0c4bdb6d',
      },
    },
    owner: 'cmcwebcode',
  },
};
