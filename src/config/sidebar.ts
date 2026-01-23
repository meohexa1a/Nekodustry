import { Home, User, Layers, Calendar, CalendarClock, PlayCircle, History, Gamepad2 } from "lucide-react";

export const sidebarData = {
  navMain: [
    {
      title: "Dashboard",
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
      icon: Layers,
    },
  ],

  navEvents: [
    {
      title: "Overview",
      url: "/events",
      icon: Calendar,
    },
    {
      title: "Scheduled",
      url: "/events/scheduled",
      icon: CalendarClock,
    },
    {
      title: "Ongoing",
      url: "/events/ongoing",
      icon: PlayCircle,
    },
    {
      title: "Past",
      url: "/events/past",
      icon: History,
    },
  ],

  navGameModes: [
    {
      title: "Common Game Mode",
      url: "/game-modes/common",
      icon: Gamepad2,
    },
    {
      title: "Catali.io",
      url: "/game-modes/catali-io",
      icon: Gamepad2,
    },
    {
      title: "Onslaught Protocol",
      url: "/game-modes/onslaught-protocol",
      icon: Gamepad2,
    },
  ],
};
