import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PaperBrief} from "../../classes/paper";



@Component({
    selector: 'paper-card',
    templateUrl: 'paper-card.html'
})
export class PaperCardComponent {

    @Input() paper:PaperBrief;
    expanding:boolean=false;

    constructor() {}


    @Output() cardClicked:EventEmitter<any> = new EventEmitter();

    cardClick() {
        this.cardClicked.emit();
    }

    toggleExpand(){
        this.expanding=!this.expanding;
    }

}
