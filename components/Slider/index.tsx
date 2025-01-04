import { View, Text, FlatList } from "react-native";
import React, { useRef } from "react";
import { ImageSlider } from "@/assets/data/sliderData";
import SliderItem from "./SliderItem";
import Animated, {
   useAnimatedScrollHandler,
   useSharedValue,
} from "react-native-reanimated";
import Pagination from "./Pagination";

const Slider = () => {
   const scrollX = useSharedValue(0);
   const onScrollHandler = useAnimatedScrollHandler({
      onScroll: (event) => {
         scrollX.value = event.contentOffset.x;
      },
   });
   const [paginationIdx, setPaginationIdx] = React.useState(0);

   const viewabilityConfig = {
      itemVisiblePercentThreshold: 50,
   };

   const onViewableItemsChanged = ({
      viewableItems,
   }: {
      viewableItems: any;
   }) => {
      if (
         viewableItems[0].index !== undefined &&
         viewableItems[0].index !== null
      ) {
         setPaginationIdx(viewableItems[0].index);
      }
   };

   const viewabilityConfigCallbackPairs = useRef([
      { viewabilityConfig, onViewableItemsChanged },
   ]);

   return (
      <View>
         <Animated.FlatList
            data={ImageSlider}
            renderItem={({ item, index }) => (
               <SliderItem item={item} index={index} scrollX={scrollX} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={onScrollHandler}
            viewabilityConfigCallbackPairs={
               viewabilityConfigCallbackPairs.current
            }
         />
         <Pagination
            items={ImageSlider}
            scrollX={scrollX}
            paginationIdx={paginationIdx}
         />
      </View>
   );
};

export default Slider;
