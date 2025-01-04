import { ImageProps } from "react-native";

export type FeedType = {
   name: string;
   description: string;
   postedAt: Date;
   media: ImageProps;
};

export const dummyFeed: FeedType[] = [
   {
      name: "John Doe",
      description: "I just completed a 10km cycling marathon!",
      postedAt: new Date(),
      media: require("@/assets/images/cycling.jpg"),
   },
];
