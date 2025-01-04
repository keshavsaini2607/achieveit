import { View, Text } from "react-native";
import React from "react";

const AchievementTile = ({ item }: any) => {
   const { title, bgColor, textColor, value } = item;
   return (
      <View
         style={{ backgroundColor: bgColor }}
         className="w-[35vw] relative h-[20vh] p-3 rounded-2xl"
      >
         <View className="absolute top-3 right-3 bg-white p-2 w-10 h-10 flex-row items-center justify-center rounded-full">
            <Text className="text-center font-bold">{value}</Text>
         </View>
         <Text
            style={{ color: textColor }}
            className="absolute bottom-3 left-3 w-[80%] text-lg text-semibold"
         >
            {title}
         </Text>
      </View>
   );
};

export default AchievementTile;
