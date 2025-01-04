import {
   View,
   Text,
   Image,
   Dimensions,
   TouchableOpacity,
} from "react-native";
import React from "react";
import { ImageSliderType } from "@/assets/data/sliderData";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
   Extrapolation,
   interpolate,
   SharedValue,
   useAnimatedStyle,
} from "react-native-reanimated";
import { useRouter } from "expo-router";

const SliderItem = ({
   item,
   index,
   scrollX,
}: {
   item: ImageSliderType;
   index: number;
   scrollX: SharedValue<number>;
}) => {
   const router = useRouter();
   const { width } = Dimensions.get("screen");
   const rAnimatedStyle = useAnimatedStyle(() => {
      return {
         transform: [
            {
               translateX: interpolate(
                  scrollX.value,
                  [(index - 1) * width, index * width, (index + 1) * width],
                  [-width * 0.25, 0, width * 0.25],
                  Extrapolation.CLAMP
               ),
            },
            {
               scale: interpolate(
                  scrollX.value,
                  [(index - 1) * width, index * width, (index + 1) * width],
                  [0.8, 1, 0.8],
                  Extrapolation.CLAMP
               ),
            },
         ],
      };
   });

   return (
      <Animated.View
         className={`justify-center items-center flex gap-20 w-screen`}
         style={rAnimatedStyle}
      >
         <Image
            source={item.image}
            alt="image"
            className="w-[100vw] h-[100vh] rounded-lg"
         />
         <LinearGradient
            colors={["transparent", "rgba(0,0,0,1)"]}
            className="absolute w-[100vw] h-[100vh] p-4 rounded-lg rounded-b-xl justify-between"
         >
            <View className="gap-2 flex justify-end h-full pb-10">
               <Text className="text-white text-3xl font-bold tracking-wider">
                  {item.title}
               </Text>
               <Text className="text-white text-md tracking-wide">
                  {item.description}
               </Text>
               {index && index === 2 && (
                  <LinearGradient
                     colors={["#F14A00", "#C62300"]}
                     className="rounded-xl mt-4 p-4"
                  >
                     <TouchableOpacity
                        style={{
                           alignItems: "center",
                           justifyContent: "center",
                        }}
                        onPress={() => router.push("(dashboard)")}
                     >
                        <Text className="text-center text-white">
                           Get Started
                        </Text>
                     </TouchableOpacity>
                  </LinearGradient>
               )}
            </View>
         </LinearGradient>
      </Animated.View>
   );
};

export default SliderItem;
