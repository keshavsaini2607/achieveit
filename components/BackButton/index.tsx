import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const BackButton = () => {
   const router = useRouter();
   return (
      <Pressable
         className="flex flex-row items-center gap-2 w-[100] bg-gray-200 p-2 rounded-full"
         onPress={() => router.replace("(dashboard)")}
      >
         <Ionicons name="chevron-back-outline" size={24} color="black" />
         <Text className="text-center">Home</Text>
      </Pressable>
   );
};

export default BackButton;
