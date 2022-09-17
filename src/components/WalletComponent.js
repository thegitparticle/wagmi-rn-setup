import { useWalletConnect } from "@walletconnect/react-native-dapp";
import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";

function WalletComponent() {
	const connector = useWalletConnect();

	function WalletButton() {
		if (connector.connected) {
			return (
				<Pressable onPress={() => connector.killSession()}>
					<Text style={styles.disconnect_button}>Disconnect</Text>
				</Pressable>
			);
		} else {
			return (
				<Pressable onPress={() => connector.createSession()}>
					<Text style={styles.connect_button}>Connect</Text>
				</Pressable>
			);
		}
	}

	return (
		<View>
			<Text>Wallet</Text>
			<WalletButton />
		</View>
	);
}

export default WalletComponent;

const styles = StyleSheet.create({
	connect_button: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: "pink",
	},
	disconnect_button: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		backgroundColor: "red",
	},
});
