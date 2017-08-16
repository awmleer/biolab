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

    @Output() detailButtonClicked:EventEmitter<any> = new EventEmitter();
    @Output() shareButtonClicked:EventEmitter<any> = new EventEmitter();

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


    shareButtonClick(){
        this.shareButtonClicked.emit();
    }

    detailButtonClick() {
        this.detailButtonClicked.emit();
    }

    // toggleExpand(){
    //     this.expanding=!this.expanding;
    // }

}
