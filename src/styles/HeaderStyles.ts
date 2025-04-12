import { StyleSheet } from "react-native";

export const HeaderStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  menuButton: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  darkText: {
    color: "white",
  },
  themeButtons: {
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    flexDirection: "row",
  },
  themeButton: {
    padding: 8,
  },
  darkThemeButton: {
    backgroundColor: "#333333",
    borderRadius: 8,
    flexDirection: "row",
  },
});
