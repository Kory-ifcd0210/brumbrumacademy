import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';


@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [ImageModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

}
