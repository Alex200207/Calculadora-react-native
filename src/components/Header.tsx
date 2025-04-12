import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { HeaderStyles } from "../styles/HeaderStyles";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  return (
    <View style={HeaderStyles.header}>
      <TouchableOpacity style={HeaderStyles.menuButton}>
        <Feather name="menu" size={24} color={darkMode ? "white" : "black"} />
      </TouchableOpacity>
      <Text style={[HeaderStyles.title, darkMode && HeaderStyles.darkText]}>
        Calculator
      </Text>
      <View
        style={[
          HeaderStyles.themeButtons,
          darkMode && HeaderStyles.darkThemeButton,
        ]}
      >
        <TouchableOpacity
          onPress={() => setDarkMode(false)}
          style={HeaderStyles.themeButton}
        >
          <Feather name="sun" size={24} color={darkMode ? "gray" : "black"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setDarkMode(true)}
          style={HeaderStyles.themeButton}
        >
          <Feather name="moon" size={24} color={darkMode ? "white" : "gray"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
