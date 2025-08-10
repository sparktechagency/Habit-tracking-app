import { HabitProps, Tab } from "./type";

export const TABS: Tab[] = [
  { key: "all", label: "All Habits" },
  { key: "my", label: "My Habits" },
];
export const GROUPTABS: Tab[] = [
  { key: "all", label: "Active Challenges" },
  { key: "my", label: "Completed Challenges" },
];
export const GROUPTABSReward: Tab[] = [
  { key: "all", label: "Available Rewards" },
  { key: "my", label: "Redeem History" },
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
  { id: 5, name: "All Habit", count: "3 times" },
];
