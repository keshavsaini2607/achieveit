import { Touchable, TouchableOpacity, View } from "react-native";
import { Text, PlatformPressable } from "@react-navigation/elements";
import { AntDesign } from "@expo/vector-icons";

const MyTabBar = ({ state, descriptors, navigation }: any) => {
   const primaryColor = "#272D33";
   const greyColor = "#686D76";

   const icons = {
      index: (props: any) => (
         <AntDesign name="home" size={26} color={greyColor} {...props} />
      ),
      create: (props: any) => (
         <AntDesign name="plus" size={26} color={greyColor} {...props} />
      ),
      settings: (props: any) => (
         <AntDesign name="setting" size={26} color={greyColor} {...props} />
      ),
      analytics: (props: any) => (
         <AntDesign name="linechart" size={26} color={greyColor} {...props} />
      ),
   };

   return (
      <View className="absolute bottom-5 bg-white shadow-lg shadow-current flex flex-row items-center justify-between mx-10 py-4 rounded-3xl">
         {state.routes.map((route: any, index: number) => {
            const { options } = descriptors[route.key];
            const label =
               options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
               const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                  canPreventDefault: true,
               });

               if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name, route.params);
               }
            };

            const onLongPress = () => {
               navigation.emit({
                  type: "tabLongPress",
                  target: route.key,
               });
            };

            return (
               <TouchableOpacity
                  key={label}
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarButtonTestID}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  className="flex-1 items-center justify-center"
               >
                  {icons[route.name]({
                     color: isFocused ? primaryColor : greyColor,
                  })}
                  <View
                     className={`${
                        isFocused &&
                        "border-b-4 border-b-[#272D33] rounded-md p-1"
                     }`}
                  ></View>
               </TouchableOpacity>
            );
         })}
      </View>
   );
};

export default MyTabBar;
