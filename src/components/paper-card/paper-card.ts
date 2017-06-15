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
    // expanding:boolean=false;

    constructor(
        private paperService: PaperService
    ) {}

    showDetail(){
        if (this.showingDetail) {
            return;
        }
        this.paperService.getPaperDetail(this.paper.id).then(response=>{
            this.detail=response.json();
            this.showingDetail=true;
        });
    }

    @Output() cardClicked:EventEmitter<any> = new EventEmitter();

    cardClick() {
        this.cardClicked.emit();
    }

    // toggleExpand(){
    //     this.expanding=!this.expanding;
    // }

}
