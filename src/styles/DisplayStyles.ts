import { StyleSheet } from "react-native";

export const DisplayStyles = StyleSheet.create({
  display: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10,
    
  },
  displayText: {
    fontSize: 48,
    fontWeight: "300",
  },
  darkText: {
    color: "white",
  },
  divider: {
    width: 40,
    height: 4,
    backgroundColor: "#e0e0e0",
    borderRadius: 2,
    
  },

  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingBottom:20,
    alignItems: "center",
  },
});
