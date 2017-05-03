import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
    selector: 'reagent-card',
    templateUrl: 'reagent-card.html'
})
export class ReagentCardComponent {
    expanding:boolean=false;
    constructor() {}
    // @Input()
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
