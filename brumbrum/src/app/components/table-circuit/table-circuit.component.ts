import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Circuit } from '../../interfaces/circuit.interface';
import { circuits } from '../../data/ciruits';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-table-circuit',
  standalone: true,
  imports: [TableModule, RouterModule],
  templateUrl: './table-circuit.component.html',
  styleUrl: './table-circuit.component.css'
})
export class TableCircuitComponent {
  circuitList: Circuit[] = circuits.map(circuit => {
    return {
      id: circuit.id,
      name: circuit.name,
      location: circuit.location,
      time: circuit.time,
      image: circuit.image,
      url: circuit.url
    };
    })
}
