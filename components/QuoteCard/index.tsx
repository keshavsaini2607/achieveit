import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const QuoteCard = () => {
   return (
      <View className="bg-[#FEE8CB] p-4 rounded-xl my-4 flex-row justify-between">
         <View className="w-[55%] flex-col gap-1">
            <Text className="font-semibold text-xl">Quote of the day</Text>
            <Text>"The best way to predict the future is to create it."</Text>
            <TouchableOpacity className="bg-[#EED5AC] p-2 rounded-full w-[70%] mt-4">
               <View className="text-center flex-row items-center justify-center gap-1">
                  <AntDesign name="plus" size={15} />
                  <Text>Add Goal</Text>
               </View>
            </TouchableOpacity>
         </View>
         <Image
            source={require("@/assets/images/goal-w-bg.png")}
            className="w-[40%] h-[120px] mix-blend-darken object-contain"
         />
      </View>
   );
};

export default QuoteCard;
