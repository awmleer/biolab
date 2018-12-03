import {Lab} from "./lab";
import {UserItem} from "./user";

export class Reservation {
  id: number;
  lab: Lab;
  startTime: string;
  endTime: string;
  applier: UserItem;
  approver?: UserItem;
  status: 'init' | 'approved' | 'rejected';
  description: string;
}
