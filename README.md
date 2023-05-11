# FNA

This is the repo for the fna development for the master thesis @bfh

## Folder structure

There are 3 main folders on the repo:

- `e2e`: wehere e2e tests will be placed, for testing the wizard
- `screens`: all the screens with different views for complete the wizard as users view
- `dev`: partly mocked backend, will be replaced from time to time with atpoint apis

### Pre install

To follow the next steps:

Node has to be installed

```shell
 https://nodejs.org/en/
```

Yarn or npm has to be installed  
Yarn:

```shell
 https://yarnpkg.com/
```

### Set up IOS

Step 1: Install Xcode

```shell
 - Go to Appstore and install xcode
 - open xcode, go to Preferences and choose the latest version from the Coomand Line Tools
```

Step 2: Install expo-cli

```shell
 - yarn add expo-cli
 - check if expo-cli is installed expo --version
```

Step 3: Set up local

```shell
 - yarn
 - expo start
 - after started up press i, to start it from the ios simulator
 - for buliding as a builded app -> yarn ios
```

Step 4: run e2e tests

```shell
 - yarn add detox-cli
 - xcode-select --install
 - brew tap wix/brew
 - brew install applesimutils
 - yarn build-e2e:ios
 - yarn start-e2e:ios
```

if you have trouble installing on andoird here is a step-by-step manual -> https://github.com/wix/Detox/blob/master/docs/Introduction.iOSDevEnv.md

### Set up Android

Step 1: Install Android studio

```shell
 -  donwload Android studio https://developer.android.com/studio
 - Select "Standard" for the "Install Type" inside the wizard.
 - Inside Android Studio, go to Preferences > Appearance & Behavior > System Settings > Android SDK. Click on the "SDK Tools" tab and make sure you have at least one version of the "Android SDK Build-Tools" installed.
 - Copy or remember the path listed in the box that says "Android SDK Location."
 - On the Android Studio main screen, click "Configure", then "AVD Manager" in the dropdown.
 - Press the "+ Create Virtual Device" button.
 - Choose the type of hardware you'd like to emulate. We recommend testing against a variety of devices, but if you're unsure where to start, the newest device in the Pixel line could be a good choice.
```

Step 2: Install expo-cli

```shell
 - yarn add expo-cli
 - check if expo-cli is installed expo --version
```

Step 3: Set up local

```shell
 - yarn
 - expo start
 - after started up press a, to start it from the android emulator
 - for buliding as a builded app -> yarn android
```

Step 4: run e2e tests

```shell
 - yarn add detox-cli
 - java -version
 - The path to the SDK’s root directory is set into the ANDROID_SDK_ROOT
 - The path to the SDK’s root directory is bundled into the global PATH on your computer.
 - yarn build-e2e:android
 - yarn start-e2e:android
```

if you have trouble installing on andoird here is a step-by-step manual -> https://github.com/wix/Detox/blob/master/docs/Introduction.AndroidDevEnv.md
