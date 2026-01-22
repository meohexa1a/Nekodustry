import {
  Home,
  User,
  Layers,
  Calendar,
  Gamepad2,
  Settings,
} from "lucide-react"

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
      title: "Events",
      url: "/events",
      icon: Calendar,
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
}
