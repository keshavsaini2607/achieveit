import { Stack, useRouter } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useEffect } from "react";

export default function RootLayout() {
   const router = useRouter();
   useEffect(() => {
      router.replace("/(dashboard)");
   }, []);
   return (
      <GluestackUIProvider mode="light">
         <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(onboarding)" />
            <Stack.Screen name="(dashboard)" />
         </Stack>
      </GluestackUIProvider>
   );
}
