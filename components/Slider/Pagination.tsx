import { View, Text } from "react-native";
import React from "react";
import { ImageSliderType } from "@/assets/data/sliderData";
import { SharedValue } from "react-native-reanimated";

interface Props {
   items: ImageSliderType[];
   paginationIdx: number;
   scrollX: SharedValue<number>;
}

const Pagination: React.FC<Props> = ({ items, paginationIdx, scrollX }) => {
   return (
      <View className="flex-row h-[60px] justify-center items-center bg-transparent absolute top-0 left-[45%]">
         {items.map((_, idx) => (
            <View
               key={idx}
               className={`${
                  paginationIdx === idx ? "bg-orange-600" : "bg-[#ccc]"
               } h-3 w-3 mx-2 rounded-full`}
            />
         ))}
      </View>
   );
};

export default Pagination;
