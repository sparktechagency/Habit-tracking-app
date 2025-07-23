export type Tab = {
  key: string;
  label: string;
};

export type ProgressProps = {
  color: any;
  progress: number;
  height?: number;
};
export type AddGroupProps = {
  title: string;
  addHeading?: string;
};
export type JoinChallengeModalProps = {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
};

export type Habit = {
  habitName: string;
  description: string;
  goal: string;
  duration: string;
  participants: string;
};

export type AddHabitModalProps = {
  visible: boolean;
  onClose: () => void;
  onSave: (habit: Habit) => void;
  addHeading?: string;
};
export type AddSayHabitModalProps = {
  visible: boolean;
  onClose: () => void;
  // onSave: (habit: Habit) => void;
  // addHeading?: string;
};
export type RedeemModalProps = {
  viewModal: boolean;
  setViewModal: (viewModal: boolean) => void;
};

export type MiniTopProps = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  Heading?: string;
  pageName: string;
};
export type BackProfileProps = {
  title?: string;
};
