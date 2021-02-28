import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { string } from "prop-types";
import colors from '../../constants/colors';

export default function Header({ headerTitle }) {
	return (
		<View style={styles.container}>
			<Text style={styles.headerTitle}>{headerTitle}</Text>
		</View>
	);
}

Header.propTypes = {
	headerTitle: string,
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		backgroundColor: colors.primary,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
    paddingTop: 40,
	},
  headerTitle: {
    color: colors.white,
    fontSize: 20,
    maxHeight: 100,
    textTransform: "uppercase",
    fontFamily: 'open-sans-bold',
  }
});
