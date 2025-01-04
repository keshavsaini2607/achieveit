import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

interface GlassButtonProps {
   onPress: () => void;
   label: string;
   gradientColors?: string[];
}

export const GlassButton = ({
   onPress,
   label,
   gradientColors = ["#F14A00", "#C62300"],
}: GlassButtonProps) => {
   return (
      <LinearGradient
         colors={gradientColors}
         className="rounded-xl mt-4 p-4 backdrop-blur-lg bg-opacity-70"
         style={styles.gradient}
      >
         <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text className="text-center text-white font-medium">{label}</Text>
         </TouchableOpacity>
      </LinearGradient>
   );
};

const styles = StyleSheet.create({
   gradient: {
      borderWidth: 1,
      borderColor: "rgba(255, 255, 255, 0.2)",
   },
   button: {
      alignItems: "center",
      justifyContent: "center",
   },
});
