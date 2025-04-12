import React from "react";
import { View, StyleSheet } from "react-native";
import CalculatorButton from "./CalculatorButton";
import { DisplayStyles } from "../styles/DisplayStyles";

interface KeypadProps {
  darkMode: boolean;
  handleNumberPress: (number: string) => void;
  handleOperationPress: (operation: string) => void;
  handleEquals: () => void;
  handleClear: () => void;
  handlePlusMinus: () => void;
  handlePercent: () => void;
  handleDecimal: () => void;
  handleBackspace: () => void;
}

const Keypad: React.FC<KeypadProps> = ({
  darkMode,
  handleNumberPress,
  handleOperationPress,
  handleEquals,
  handleClear,
  handlePlusMinus,
  handlePercent,
  handleDecimal,
  handleBackspace,
}) => {
  return (
    <View style={[styles.keypad, darkMode && { backgroundColor: "#121212" }]}>
      <View style={DisplayStyles.container}>
        <View style={DisplayStyles.divider} />
      </View>
      <View style={styles.row}>
        <CalculatorButton
          text="AC"
          type="ac"
          darkMode={darkMode}
          onPress={handleClear}
        />
        <CalculatorButton
          text="+/-"
          type="ac"
          darkMode={darkMode}
          onPress={handlePlusMinus}
        />
        <CalculatorButton
          text="%"
          type="ac"
          darkMode={darkMode}
          onPress={handlePercent}
        />
        <CalculatorButton
          text="÷"
          type="division"
          darkMode={darkMode}
          onPress={() => handleOperationPress("÷")}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton
          text="7"
          darkMode={darkMode}
          onPress={() => handleNumberPress("7")}
        />
        <CalculatorButton
          text="8"
          darkMode={darkMode}
          onPress={() => handleNumberPress("8")}
        />
        <CalculatorButton
          text="9"
          darkMode={darkMode}
          onPress={() => handleNumberPress("9")}
        />
        <CalculatorButton
          text="×"
          type="operation"
          darkMode={darkMode}
          onPress={() => handleOperationPress("×")}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton
          text="4"
          darkMode={darkMode}
          onPress={() => handleNumberPress("4")}
        />
        <CalculatorButton
          text="5"
          darkMode={darkMode}
          onPress={() => handleNumberPress("5")}
        />
        <CalculatorButton
          text="6"
          darkMode={darkMode}
          onPress={() => handleNumberPress("6")}
        />
        <CalculatorButton
          text="−"
          type="operation"
          darkMode={darkMode}
          onPress={() => handleOperationPress("-")}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton
          text="1"
          darkMode={darkMode}
          onPress={() => handleNumberPress("1")}
        />
        <CalculatorButton
          text="2"
          darkMode={darkMode}
          onPress={() => handleNumberPress("2")}
        />
        <CalculatorButton
          text="3"
          darkMode={darkMode}
          onPress={() => handleNumberPress("3")}
        />
        <CalculatorButton
          text="+"
          type="operation"
          darkMode={darkMode}
          onPress={() => handleOperationPress("+")}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton
          icon="rotate-ccw"
          darkMode={darkMode}
          onPress={handleBackspace}
        />
        <CalculatorButton
          text="0"
          darkMode={darkMode}
          onPress={() => handleNumberPress("0")}
        />
        <CalculatorButton
          text="."
          darkMode={darkMode}
          onPress={handleDecimal}
        />
        <CalculatorButton
          text="="
          type="equals"
          darkMode={darkMode}
          onPress={handleEquals}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  keypad: {
    padding: 20,
    backgroundColor: "#fafafa",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});

export default Keypad;
