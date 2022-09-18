import { useWalletConnect } from "@walletconnect/react-native-dapp";
import React, { useEffect } from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import { useAccount } from "wagmi";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

function WalletComponent() {
	const connector = useWalletConnect();

	const { connect } = useConnect({
		connector: new WalletConnectConnector({
			options: {
				qrcode: false,
				connector,
			},
		}),
	});

	useEffect(() => {
		if (connector?.accounts?.length && !account) {
			connect();
		} else {
			disconnect();
		}
	}, [connector]);

	const { data: account } = useAccount();

	function WalletButton() {
		if (connector.connected) {
			return (
				<Pressable onPress={() => connector.killSession()}>
					<Text style={styles.disconnect_button}>Disconnect</Text>
				</Pressable>
			);
		} else {
			return (
				<Pressable onPress={() => connector.connect()}>
					<Text style={styles.connect_button}>Connect</Text>
				</Pressable>
			);
		}
	}

	function AccountDetails() {
		if (connector.connected && account) {
			return (
				<View>
					<Text style={styles.account}>{account.address}</Text>
				</View>
			);
		} else {
			return (
				<View>
					<Text style={styles.account}>
						wagmi not showing account
					</Text>
				</View>
			);
		}
	}

	return (
		<View>
			<Text>Wallet</Text>
			<WalletButton />
			<AccountDetails />
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
