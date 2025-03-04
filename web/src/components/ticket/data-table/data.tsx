import {
    ArrowDown,
    ArrowUp,
    CheckCircle,
    Circle,
    CircleOff,
    HelpCircle,
    Timer,
} from "lucide-react";

export const priorities = [
  {
    id: 1,
    label: "Low",
    icon: ArrowDown,
  },
  {
    id: 2,
    label: "High",
    icon: ArrowUp,
  },
];

export const statuses = [
  {
    id: 1,
    label: "Open",
    icon: HelpCircle,
  },
  {
    id: 2,
    label: "Closed",
    icon: Circle,
  },
  {
    id: 3,
    label: "In Progress",
    icon: Timer,
  },
  {
    id: 4,
    label: "Done",
    icon: CheckCircle,
  },
  {
    id: 5,
    label: "Canceled",
    icon: CircleOff,
  },
];
