import {
  Home,
  User,
  Layers,
  Calendar,
  Gamepad2,
} from "lucide-react"

export const sidebarData = {
  navMain: [
    {
      title: "Tổng quan",
      url: "/",
      icon: Home,
    },
    {
      title: "Về Neko",
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
      title: "Events",
      url: "/events",
      icon: Calendar,
    },
  ],

  navGamemodes: [
    {
      title: "Common Gamemode",
      url: "/gamemodes/common",
      icon: Gamepad2,
    },
    {
      title: "Catali.io",
      url: "/gamemodes/catali-io",
      icon: Gamepad2,
    },
    {
      title: "Onslaught Protocol",
      url: "/gamemodes/onslaught-protocol",
      icon: Gamepad2,
    },
  ],
}
