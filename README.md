### React Native app to setup Wallet Connect and Wagmi with ethers.

Note: It is being built from a Dapp point of view, not wallet.

##### Dos, Don'ts and more

1. WalletConnect will need js crypto module which is not supported by RN by default. So, do `expo install expo-crypto-polyfills` and change the `metro.config.js` as done in this repo.
2. Also install `react-native-get-random-values`. Either do `expo install` or `yarn and pod-install` and expo errors about pods
