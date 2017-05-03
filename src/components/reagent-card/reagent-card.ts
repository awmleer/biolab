import {Component, Input} from '@angular/core';


@Component({
    selector: 'reagent-card',
    templateUrl: 'reagent-card.html'
})
export class ReagentCardComponent {
    expanding:boolean=false;
    constructor() {}
    // @Input()
    // percent:number;

    toggleExpand(){
        this.expanding=!this.expanding;
    }
}
