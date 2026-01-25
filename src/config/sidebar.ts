import { Home, User, Boxes, CalendarDays, LayoutGrid, Swords, ShieldAlert, Trophy } from "lucide-react";

export const sidebarData = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "About Neko",
      url: "/about-neko",
      icon: User,
    },
  ],

  navFramework: [
    {
      title: "MintyMDT",
      url: "/mintymdt",
      icon: Boxes,
    },
  ],

  navEvents: [
    {
      title: "Overview",
      url: "/events",
      icon: CalendarDays,
    },
  ],

  navGameModes: [
    {
      title: "Common Game Mode",
      url: "/game-modes/common",
      icon: LayoutGrid,
    },
    {
      title: "Catali.io",
      url: "/game-modes/catali-io",
      icon: Swords,
    },
    {
      title: "Ranked",
      url: "/game-modes/ranked",
      icon: Trophy,
    },
    {
      title: "Onslaught Protocol",
      url: "/game-modes/onslaught-protocol",
      icon: ShieldAlert,
    },
  ],
};
