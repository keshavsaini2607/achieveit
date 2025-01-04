import React from "react";
import { Tabs } from "expo-router";
import MyTabBar from "@/components/Tabbar";

const DashboardLayout = () => {
   return (
      <Tabs tabBar={MyTabBar} screenOptions={{ headerShown: false }}>
         <Tabs.Screen name="index" options={{ title: "Home" }} />
         <Tabs.Screen name="create" options={{ title: "Create" }} />
         <Tabs.Screen name="rewards" options={{ title: "Rewards" }} />
         <Tabs.Screen name="settings" options={{ title: "Settings" }} />
      </Tabs>
   );
};

export default DashboardLayout;
