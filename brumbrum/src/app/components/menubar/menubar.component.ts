import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent {

  items = [
    {
      label: 'Circuitos',
      icon: 'pi pi-fw pi-cloud',
      routerLink:'/circuitos'
    },
    {
      label: 'Pilotos',
      icon: 'pi pi-fw pi-car',
    },
    {
      label: 'Usuario',
      icon: 'pi pi-fw pi-user',
    }
  ];

}
