import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-circuit-detail',
  standalone: true,
  imports: [CardModule],
  templateUrl: './circuit-detail.component.html',
  styleUrl: './circuit-detail.component.css'
})
export class CircuitDetailComponent {

}
