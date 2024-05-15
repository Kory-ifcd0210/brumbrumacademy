import { Component } from '@angular/core';
import { CardCircuitDetailComponent } from "../../components/card-circuit-detail/card-circuit-detail.component";

@Component({
    selector: 'app-circuit-detail',
    standalone: true,
    templateUrl: './circuit-detail.component.html',
    styleUrl: './circuit-detail.component.css',
    imports: [CardCircuitDetailComponent]
})
export class CircuitDetailComponent{
 
}
