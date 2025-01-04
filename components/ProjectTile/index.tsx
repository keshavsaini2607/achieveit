import { View, Text } from "react-native";
import React from "react";
import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import { ProjectType } from "@/assets/data/dummyProjects";

const ProjectTile = ({ item }: any) => {
   const { title, iconFamily, iconName, bgColor, textColor }: ProjectType =
      item;

   const getIconComponent = () => {
      switch (iconFamily) {
         case "MaterialCommunityIcons":
            return MaterialCommunityIcons;
         // Add other icon families here as needed
         case "FontAwesome6":
            return FontAwesome6;
         default:
            return MaterialCommunityIcons; // Default to MaterialCommunityIcons if no match
      }
   };

   const IconComponent = getIconComponent();

   return (
      <View
         style={{ backgroundColor: bgColor }}
         className="w-[35vw] relative h-[20vh] p-3 rounded-2xl"
      >
         <View className="absolute top-3 right-3 bg-white p-2 rounded-full">
            <IconComponent name={iconName} size={24} />
         </View>
         <Text
            style={{ color: textColor }}
            className="absolute bottom-3 left-3 w-[70%] text-lg text-semibold"
         >
            {title}
         </Text>
      </View>
   );
};

export default ProjectTile;
