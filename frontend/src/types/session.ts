import type {Dayjs} from "dayjs";
import type { User } from "./user";

export type TrainingSession = {
  title: string;
  description: string;
  primaryTrainer: string;
  category: string;
  startTime: Dayjs | null;
  endTime: Dayjs | null;
  location: string;
  attendees: User[]
}