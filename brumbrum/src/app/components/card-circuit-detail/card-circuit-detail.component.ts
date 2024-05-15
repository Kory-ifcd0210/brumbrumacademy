import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Circuit } from '../../interfaces/circuit.interface';
import { ActivatedRoute } from '@angular/router';
import { circuits } from '../../data/ciruits';


@Component({
  selector: 'app-card-circuit-detail',
  standalone: true,
  imports: [CardModule],
  templateUrl: './card-circuit-detail.component.html',
  styleUrl: './card-circuit-detail.component.css'
})
export class CardCircuitDetailComponent {
  circuit: Circuit | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const circuitId = params.get('id');
      if (circuitId) {
        const id = +circuitId;
        this.circuit = circuits.find(c => c.id === id);
      }
    });
  }
}
