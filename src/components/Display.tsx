import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface DisplayProps {
  value: string | number;
  operationDisplay?: string;
  darkMode?: boolean;
}

const Display: React.FC<DisplayProps> = ({
  value,
  operationDisplay,
  darkMode = false,
}) => {
  return (
    <View style={styles.display}>
      {operationDisplay && (
        <Text style={[styles.operationDisplay, darkMode && styles.darkText]}>
          {operationDisplay}
        </Text>
      )}
      <Text style={[styles.displayText, darkMode && styles.darkText]}>
        {value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
  },
  displayText: {
    fontSize: 48,
    fontWeight: "300",
  },
  operationDisplay: {
    fontSize: 20,
    color: "#888",
    fontWeight: "500",
    marginBottom: 5,
  },
  darkText: {
    color: "white",
  },
  divider: {
    width: 40,
    height: 4,
    backgroundColor: "#e0e0e0",
    marginTop: 10,
    borderRadius: 2,
  },
});

export default Display;
