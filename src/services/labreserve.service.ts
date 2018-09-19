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

  allReservationListByLabID(labID:number):Promise<Reservation[]> {
    return this.apiSvc.get(`/lab-reserve/lab/${labID}/reservation/all/`)
  }

  labList (): Promise<Lab[]>{
    return this.apiSvc.get('/lab-reserve/lab/all/');
  }

  addReservation (startTime:Date, endTime:Date, labID:number, description:string): Promise<number> {
    let data = {
      startTime: this.datePipe.transform(startTime, 'yyyy-MM-dd hh:mm'),
      endTime: this.datePipe.transform(endTime, 'yyyy-MM-dd hh:mm'),
      labId: labID,
      description: description,
    };
    return this.apiSvc.post(`/lab-reserve/create/`, data);
  }

  getLab (labID:number): Promise<Lab> {
    return this.apiSvc.get(`/lab-reserve/labs/${labID}`);
  }

}
