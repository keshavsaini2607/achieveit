import { View, Text } from "react-native";
import React from "react";
import Slider from "@/components/Slider";

const OnboardingScreen = () => {
   return (
      <View className="flex-1 w-screen h-screen items-center justify-center">
         <Slider />
      </View>
   );
};

export default OnboardingScreen;
