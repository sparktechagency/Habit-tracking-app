import { HabitProps, Tab } from "./type";

export const TABS: Tab[] = [
  { key: "all", label: "All Habits" },
  { key: "my", label: "My Habits" },
];
export const GROUPTABS: Tab[] = [
  { key: "all", label: "Active Challenges" },
  { key: "my", label: "Completed Challenges" },
];
//
export const ViewTABS: Tab[] = [
  { key: "all", label: "Daily Summaries" },
  { key: "my", label: "Overall Progress" },
];
export const LogProgressTab: Tab[] = [
  { key: "all", label: "Members" },
  { key: "my", label: "Reports" },
];

export const habits: HabitProps[] = [
  { id: 5, name: "Favourite", count: "3 times" },
  { id: 1, name: "Practice", count: "1 times" },
  { id: 2, name: "Relationships", count: "1 times" },
  { id: 3, name: "Meditation", count: "2 times" },
  { id: 4, name: "Learning", count: "3 times" },
];
