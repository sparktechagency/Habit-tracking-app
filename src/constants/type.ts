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
