export type ProjectType = {
   title: string;
   iconFamily: string;
   iconName: string;
   bgColor: string;
   textColor: string;
};

export const dummyProjects: ProjectType[] = [
   {
      title: "My personal milestones",
      iconFamily: "FontAwesome6",
      iconName: "person-skating",
      bgColor: "#FFDFD3",
      textColor: "#4B4B4B",
   },
   {
      title: "Goals at work",
      iconFamily: "MaterialCommunityIcons",
      iconName: "brain",
      bgColor: "#FEE3EC",
      textColor: "#4B4B4B",
   },
   {
      title: "Long term goals",
      iconFamily: "FontAwesome6",
      iconName: "swatchbook",
      bgColor: "#D4ECDD",
      textColor: "#4B4B4B",
   },
];
