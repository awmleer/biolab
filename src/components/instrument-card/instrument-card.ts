import {Component, EventEmitter, Input, Output} from '@angular/core';
import {InstrumentBrief} from "../../classes/instrument";


@Component({
    selector: 'instrument-card',
    templateUrl: 'instrument-card.html'
})
export class InstrumentCardComponent {
    expanding:boolean=false;
    constructor() {}
    @Input() instrument:InstrumentBrief;
    // percent:number;

    @Output()
    cardClicked:EventEmitter<any> = new EventEmitter();

    cardClick() {
        this.cardClicked.emit();
    }

    toggleExpand(){
        this.expanding=!this.expanding;
    }
}
