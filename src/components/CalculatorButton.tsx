import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "../styles/CalculatorButton";

type CalculatorButtonProps = {
  text?: string;
  icon?: React.ComponentProps<typeof Feather>["name"];
  type?: "number" | "operation" | "equals" | "ac" | "division";
  onPress: () => void;
  darkMode?: boolean;
};

const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  text,
  icon,
  type = "number",
  onPress,
  darkMode = false,
}) => {
  const getButtonStyle = () => {
    let buttonStyle: ViewStyle = { ...styles.button };

    if (type === "operation") {
      buttonStyle = { ...buttonStyle, ...styles.operationButton };
    } else if (type === "number") {
      buttonStyle = { ...buttonStyle, ...styles.numberButton };
    } else if (type === "equals") {
      buttonStyle = { ...buttonStyle, ...styles.equalsButton };
    } else if (type === "ac") {
      buttonStyle = { ...buttonStyle, ...styles.acButton };
    } else if (type === "division") {
      buttonStyle = { ...buttonStyle, ...styles.divisionButton };
    }

    if (darkMode) {
      buttonStyle.backgroundColor = "#333333";
    }

    return buttonStyle;
  };

  const getTextStyle = () => {
    const baseStyle = [styles.buttonText];

    if (type === "ac") {
      baseStyle.push(styles.acText);
    } else if (type === "division") {
      baseStyle.push(styles.divisionText);
    } else if (type === "operation") {
      baseStyle.push(styles.operationText);
    }

    if (darkMode) {
      baseStyle.push(styles.darkText);
    }

    return baseStyle;
  };

  return (
    <TouchableOpacity style={getButtonStyle()} onPress={onPress}>
      {icon ? (
        <Feather name={icon} size={24} color={darkMode ? "white" : "black"} />
      ) : (
        <Text style={getTextStyle()}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CalculatorButton;
