import {Injectable} from "@angular/core";

import 'rxjs/add/operator/toPromise'
import {ToastService} from "./toast.service";
import {ApiService} from "./api.service";
import {Lab} from "../classes/lab";
import {Reservation} from "../classes/reservation";
import {DatePipe} from "@angular/common";

@Injectable()
export class LabreserveService {

  constructor(
    private toastService: ToastService,
    private apiSvc: ApiService,
    private datePipe: DatePipe,
  ) {}

  personalReservationListByLabID(labID:number):Promise<Reservation[]>{
    return this.apiSvc.get(`/lab-reserve/lab/${labID}/reservation/mine/`);
  }

  allReservationListByLabID(d:Date, labID:number):Promise<Reservation[]> {
    return this.apiSvc.get(`/lab-reserve/lab/${labID}/reservation/all/`, {'date': this.datePipe.transform(d, 'yyyy-MM-dd')});
  }

  labList (): Promise<Lab[]>{
    return this.apiSvc.get('/lab-reserve/lab/all/');
  }

  addReservation(startTime: Date, endTime: Date, labID: number, description: string): Promise<number> {
    console.log(startTime);
    console.log(endTime);
    console.log(description);
    let data = {
      startTime: new Date(startTime).getTime(),//this.datePipe.transform(startTime, 'yyyy-MM-dd hh:mm'),
      endTime: new Date(endTime).getTime(),//this.datePipe.transform(endTime, 'yyyy-MM-dd hh:mm'),
      labId: labID,
      description: description,
    };
    console.log(data);
    return this.apiSvc.post(`/lab-reserve/create/`, data);
  }

  getLab (labID:number): Promise<Lab> {
    return this.apiSvc.get(`/lab-reserve/lab/${labID}/`);
  }

  removeReservation (reservationID:number): Promise<void> {
    return this.apiSvc.get(`/lab-reserve/reservation/${reservationID}/remove/`);
  }

}
