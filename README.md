# AMAT NOW  TECHNICAL INTERVIEW TASK

## Demo

- APK build : [link to download APK](https://expo.dev/accounts/cmcwebcode/projects/amat-now-task/builds/ba8b83d3-e98c-4dde-8b79-9e0cf36878e9)

## Technologies

- [React native expo managed workflow for development + Typescript](https://expo.dev/tools)

- [Expo application services for creating build and submitting to apple and google store](https://expo.dev/eas)

## Available Scripts

### Install

```
cp .env.sample .env

```

### Adding Environment Variables

```
cp .env.sample .env

```


This will copy the sample environment variables into the newly created `.env` required to get started.

Please enter the following env in the .env file for app to work correctly



### Run dev environment

This project uses expo managed workflow so ensure you have the expo-cli installed globally on your machine see link for[ guide here ](https://docs.expo.dev/get-started/installation/#expo-cli)

```
yarn ios

```

for runinng the project in ios simulator

```
yarn android

```

for runinng the project in an android emulator


## Code Linting 

ESlint lint check 

```
yarn lint

```

Prettier  code format 

```
yarn format

```

typescript check

```
yarn ts:check 

```

### Distribution 

This project uses expo application service (EAS) for creating builds and submissions so ensure you have the eas-cli installed globally on your machine see link for[guide here](https://docs.expo.dev/eas/)


#### EAS development profile  

-  Create Builds


```
yarn build:staging:android

```

