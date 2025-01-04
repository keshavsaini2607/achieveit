import { View, Text, Image } from "react-native";
import React from "react";
import { FeedType } from "@/assets/data/dummyFeed";
import { Avatar, AvatarFallbackText } from "../ui/avatar";

const FeedCard = ({ item }: any) => {
   const { name, description, media, postedAt }: FeedType = item;
   return (
      <View className="bg-white shadow-lg border-[1px] border-gray-200 rounded-2xl overflow-hidden mb-4">
         {/* Header Section */}
         <View className="p-4 border-b border-gray-100">
            <View className="flex-row items-center gap-3">
               <Avatar className="h-10 w-10">
                  <AvatarFallbackText>{name}</AvatarFallbackText>
               </Avatar>
               <View>
                  <Text className="font-semibold text-base text-gray-900">
                     {name}
                  </Text>
                  <Text className="text-xs text-gray-500">
                     {postedAt.toDateString()}
                  </Text>
               </View>
            </View>
         </View>

         {/* Description Section */}
         {description && (
            <View className="px-4 py-3">
               <Text className="text-sm leading-5 text-gray-700">
                  {description}
               </Text>
            </View>
         )}

         {/* Media Section */}
         {media && (
            <View className="w-full aspect-square">
               <Image
                  source={media}
                  alt="Post media"
                  className="w-full h-full"
                  style={{
                     width: "100%",
                     height: "100%",
                     resizeMode: "cover",
                  }}
               />
            </View>
         )}

         {/* Interaction Section */}
         <View className="flex-row justify-between items-center px-4 py-3">
            <View className="flex-row items-center gap-6">
               <View className="flex-row items-center gap-2">
                  <Text className="text-gray-600">❤️</Text>
                  <Text className="text-sm text-gray-600">23 High Five's</Text>
               </View>
            </View>
            <View>
               <Text className="text-gray-600">↗️</Text>
            </View>
         </View>
      </View>
   );
};

export default FeedCard;
