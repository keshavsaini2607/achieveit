import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Spinner } from "../ui/spinner";

interface Props {
   title: string;
   btnAction: () => void;
   isLoading?: boolean;
   isDisabled?: boolean;
   bgColor?: string;
   icon?: any;
}

const PrimaryButton: React.FC<Props> = ({
   title,
   btnAction,
   isLoading = false,
   isDisabled = false,
   bgColor = "#ccd5ae",
   icon,
}) => {
   return (
      <TouchableOpacity
         onPress={btnAction}
         style={{ backgroundColor: bgColor }}
         className="p-4 rounded-md mt-4"
         disabled={isDisabled || isLoading}
      >
         <View className="flex-row items-center justify-center gap-4">
            {isLoading ? <Spinner color={"#000"} /> : null}
            {icon ? icon : null}
            <Text className="text-center max-w-[150px] ">{title}</Text>
         </View>
      </TouchableOpacity>
   );
};

export default PrimaryButton;
