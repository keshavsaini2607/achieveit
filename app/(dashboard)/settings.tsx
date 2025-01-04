import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import BackButton from "@/components/BackButton";
import { Avatar, AvatarFallbackText } from "@/components/ui/avatar";
import { Divider } from "@/components/ui/divider";
import { dummyAchievements } from "@/assets/data/dummyAchievements";
import AchievementTile from "@/components/AchievementTile";
import PrimaryButton from "@/components/PrimaryButton";
import AntDesign from "@expo/vector-icons/AntDesign";

const settings = () => {
   return (
      <View className="flex-1 bg-white p-4">
         <View className="flex-row items-center justify-between">
            <BackButton />
            <Text className="text-xl font-semibold text-center">
               App Settings
            </Text>
         </View>

         <View className="bg-[#ccd5ae] p-4 rounded-lg my-6">
            <View className="flex-row items-center gap-2">
               <Avatar>
                  <AvatarFallbackText>Keshav Saini</AvatarFallbackText>
               </Avatar>
               <Text className="text-2xl font-semibold tracking-wider">
                  Hi, Keshav Saini
               </Text>
            </View>
            <View className="mt-3">
               <Text>We're proud of your progress so far! 😃</Text>
               <Text className="text-gray-600">
                  You are just one decision away from being the best version of
                  yourself!! And that is to start now.
               </Text>
            </View>
            <View className="mt-2 flex-row items-start justify-start w-[50%]  gap-2">
               <Text className="text-center underline">Terms & Conditions</Text>
               <Divider orientation="vertical" className="text-gray-900" />
               <Text className="text-center underline">Privacy Policy</Text>
            </View>
         </View>
         <View className="">
            <Text className="text-lg fong-semibold">
               Here's an overview of your achievements🚀
            </Text>
            <FlatList
               data={dummyAchievements}
               renderItem={({ item }) => (
                  <View className="mr-4">
                     <AchievementTile item={item} />
                  </View>
               )}
               keyExtractor={(item) => item.title}
               horizontal
               showsHorizontalScrollIndicator={false}
               className="mt-4"
            />
         </View>
         <PrimaryButton
            title="Logout"
            btnAction={() => console.log("Logout")}
            bgColor="#f08080"
            icon={<AntDesign name="logout" size={20} color="black" />}
         />
         <Pressable className="mt-4 w-screen flex flex-row items-center justify-center gap-2">
            <AntDesign name="deleteuser" size={20} color="black" />
            <Text className="text-center">Delete Account</Text>
         </Pressable>
      </View>
   );
};

export default settings;
