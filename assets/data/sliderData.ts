import { ImageSourcePropType } from "react-native";

export type ImageSliderType = {
   title: string;
   image: ImageSourcePropType;
   description: string;
};

export const ImageSlider: ImageSliderType[] = [
   {
      title: "I keep forgetting my goals and lose track of what matters",
      image: require("@/assets/images/forget.jpg"),
      description:
         "Our app keeps you reminded and motivated with regular notifications, so you stay on top of your goals without missing a beat.",
   },
   {
      title: "Managing multiple goals for work and life feels overwhelming.",
      image: require("@/assets/images/working.jpg"),
      description:
         "Easily organize personal and professional goals into projects, set timeframes, and track progress—all in one app.",
   },
   {
      title: "I struggle to stay motivated during tough times",
      image: require("@/assets/images/phone.jpg"),
      description:
         "Start your day with motivational quotes and insights that keep you inspired to tackle challenges and achieve success.",
   },
];
