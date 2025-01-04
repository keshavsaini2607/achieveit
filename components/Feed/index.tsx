import { View, Text, FlatList } from "react-native";
import React from "react";
import { dummyFeed } from "@/assets/data/dummyFeed";
import FeedCard from "./FeedCard";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const Feed = () => {
   return (
      <View>
         <FlatList
            data={dummyFeed}
            renderItem={({ item }) => <FeedCard item={item} />}
            keyExtractor={(item) => item.postedAt.toDateString()}
            ListEmptyComponent={() => (
               <View className="w-full flex items-center justify-center">
                  <EvilIcons name="camera" size={40} color="black" />
                  <Text className="text-center">Nothing in feed yet</Text>
               </View>
            )}
         />
      </View>
   );
};

export default Feed;
