import { View, Text, ScrollView, Pressable, FlatList } from "react-native";
import React from "react";
import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import { AntDesign } from "@expo/vector-icons";
import QuoteCard from "@/components/QuoteCard";
import ProjectTile from "@/components/ProjectTile";
import { dummyProjects } from "@/assets/data/dummyProjects";
import Feed from "@/components/Feed";

const Home = () => {
   return (
      <ScrollView className="flex-1 bg-white p-3 px-6">
         <View className="w-full flex-row items-center justify-between">
            <Avatar className="bg-[#272D33]">
               <AvatarFallbackText className="text-white">
                  Keshav Saini
               </AvatarFallbackText>
            </Avatar>
            <Text className="text-center text-2xl font-semibold">Insights</Text>
            <Pressable className="bg-gray-200 p-3 rounded-full">
               <AntDesign name="menufold" size={24} color="black" />
            </Pressable>
         </View>

         <QuoteCard />

         <View className="px-1">
            <View className="flex-row items-center justify-between">
               <Text className="text-xl font-semibold">Milestones</Text>
               <Text className="text-sm ">View all</Text>
            </View>
            <FlatList
               data={dummyProjects}
               renderItem={({ item }) => (
                  <View className="mr-4">
                     <ProjectTile item={item} />
                  </View>
               )}
               keyExtractor={(item) => item.title}
               horizontal
               showsHorizontalScrollIndicator={false}
               className="mt-4"
            />
         </View>

         <View className="my-4 pb-28">
            <Text className="text-xl font-semibold">Let's get personal</Text>
            <Text className="text-sm mb-4">
               Hear inspiring stories and experiences from achievers in our
               community
            </Text>
            <Feed />
         </View>
      </ScrollView>
   );
};

export default Home;
