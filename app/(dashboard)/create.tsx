import { View, Text, Pressable, TextInput } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import AddStoryCard from "@/components/AddStoryCard";
import PrimaryButton from "@/components/PrimaryButton";
import BackButton from "@/components/BackButton";

const Create = () => {
   const handleFormSubmit = () => {
      console.log("Form submitted");
   };
   return (
      <View className="flex-1 p-4 bg-white">
         <View className="flex-row items-center justify-between">
            <BackButton />
            <Text className="text-xl font-semibold text-center">
               Create Feed Story
            </Text>
         </View>

         <AddStoryCard />

         <View>
            <Text className="text-sm">What did you achieved this time?</Text>
            <TextInput
               placeholder="Write your story here..."
               className="border border-gray-300 rounded-xl mt-1"
            />
         </View>
         <PrimaryButton title="Save Achievement" btnAction={handleFormSubmit} />
      </View>
   );
};

export default Create;
