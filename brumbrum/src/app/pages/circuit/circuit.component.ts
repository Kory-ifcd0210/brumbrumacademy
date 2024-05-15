import { Component } from '@angular/core';
import { TableCircuitComponent } from "../../components/table-circuit/table-circuit.component";

@Component({
    selector: 'app-circuit',
    standalone: true,
    templateUrl: './circuit.component.html',
    styleUrl: './circuit.component.css',
    imports: [TableCircuitComponent]
})

export class CircuitComponent {
  
}
