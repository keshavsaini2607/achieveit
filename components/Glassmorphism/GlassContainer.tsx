import { View, ViewProps } from "react-native";
import React from "react";

interface GlassContainerProps extends ViewProps {
   intensity?: number;
   children: React.ReactNode;
}

export const GlassContainer = ({
   intensity = 10,
   children,
   style,
   ...props
}: GlassContainerProps) => {
   return (
      <View
         {...props}
         className="backdrop-blur-lg bg-white/10 rounded-lg overflow-hidden"
         style={[
            {
               backgroundColor: `rgba(255, 255, 255, ${intensity / 100})`,
               shadowColor: "rgba(255, 255, 255, 0.2)",
               shadowOffset: { width: 0, height: 4 },
               shadowOpacity: 0.3,
               shadowRadius: 20,
            },
            style,
         ]}
      >
         {children}
      </View>
   );
};
