import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { Divider } from "../ui/divider";

const AddStoryCard = () => {
   return (
      <View className="p-4 rounded-lg my-4 bg-white border-gray-300 shadow-lg flex-row items-center justify-between">
         <TouchableOpacity className="flex items-center justify-center w-[50%] h-[20vh]">
            <MaterialIcons name="photo-camera" size={24} color="black" />
            <Text className="text-center">Click a photo</Text>
         </TouchableOpacity>
         <Divider orientation="vertical" />
         <TouchableOpacity className="flex items-center justify-center w-[50%] h-[20vh]">
            <Entypo name="images" size={24} color="black" />
            <Text className="text-center">Choose from gallery</Text>
         </TouchableOpacity>
      </View>
   );
};

export default AddStoryCard;
