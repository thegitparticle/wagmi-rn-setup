import "./shims";
import "react-native-get-random-values";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WalletComponent from "./src/components/WalletComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WalletConnectProvider from "@walletconnect/react-native-dapp";

export default function App() {
	return (
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
