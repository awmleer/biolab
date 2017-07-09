import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PaperBrief} from "../../classes/paper";
import {PaperService} from "../../services/paper.service";



@Component({
    selector: 'paper-card',
    templateUrl: 'paper-card.html'
})
export class PaperCardComponent {
    showingDetail:boolean=false;
    detail;

    @Input() paper:PaperBrief;
    @Input() brief: boolean;

    constructor(
        private paperService: PaperService
    ) {}

    toggleDetail(){
        this.showingDetail=!this.showingDetail;
        // if (this.showingDetail){
        //     this.showingDetail=false;
        //     return;
        // }else {
        //     if (this.detail) {
        //         this.showingDetail=true;
        //         return;
        //     }
        // }
        // this.paperService.getPaperDetail(this.paper.id).then(response=>{
        //     this.detail=response.json();
        //     this.showingDetail=true;
        // });
    }

    @Output() cardClicked:EventEmitter<any> = new EventEmitter();

    cardClick() {
        this.cardClicked.emit();
    }

    // toggleExpand(){
    //     this.expanding=!this.expanding;
    // }

}
