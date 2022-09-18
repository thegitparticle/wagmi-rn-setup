import "./shims";
import "react-native-get-random-values";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WalletComponent from "./src/components/WalletComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WalletConnectProvider from "@walletconnect/react-native-dapp";
import { WagmiConfig, createClient, createStorage } from "wagmi";
import { noopStorage } from "@wagmi/core";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";

const asyncStoragePersister = createAsyncStoragePersister({
	storage: AsyncStorage,
});

const client = createClient({
	persister: asyncStoragePersister,
	storage: createStorage({
		storage: noopStorage,
	}),
});

export default function App() {
	return (
		<WagmiConfig client={client}>
			<WalletConnectProvider
				redirectUrl={
					Platform.OS === "web"
						? window.location.origin
						: "wagmi-rn-setup://"
				}
				storageOptions={{
					asyncStorage: AsyncStorage,
				}}
			>
				<View style={styles.container}>
					<WalletComponent />
					<StatusBar style="auto" />
				</View>
			</WalletConnectProvider>
		</WagmiConfig>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
