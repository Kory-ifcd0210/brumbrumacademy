import { Component } from '@angular/core';
import { MenubarComponent } from "../menubar/menubar.component";
import { SliderComponent } from "../slider/slider.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [MenubarComponent, SliderComponent]
})
export class HeaderComponent {

}
