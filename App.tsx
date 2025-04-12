import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import Header from "./src/components/Header";
import Display from "./src/components/Display";
import Keypad from "./src/components/Keypad";
import { useCalculator } from "./src/hook/useCalculator";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const {
    displayValue,
    handleNumberPress,
    handleOperationPress,
    handleEquals,
    handleClear,
    handlePlusMinus,
    handlePercent,
    handleDecimal,
    handleBackspace,
    operationDisplay,
  } = useCalculator();

  return (
    <SafeAreaView style={[styles.container, darkMode && styles.darkContainer]}>
      <StatusBar style={darkMode ? "light" : "dark"} />

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Display
        value={displayValue}
        darkMode={darkMode}
        operationDisplay={operationDisplay ?? undefined}
      />

      <Keypad
        darkMode={darkMode}
        handleNumberPress={handleNumberPress}
        handleOperationPress={handleOperationPress}
        handleEquals={handleEquals}
        handleClear={handleClear}
        handlePlusMinus={handlePlusMinus}
        handlePercent={handlePercent}
        handleDecimal={handleDecimal}
        handleBackspace={handleBackspace}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  darkContainer: {
    backgroundColor: "#121212",
  },
});
