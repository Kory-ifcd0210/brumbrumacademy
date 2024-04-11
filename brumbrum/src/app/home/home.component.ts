import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { TableComponent } from "../table/table.component";
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ImageModule, TableComponent, MenubarModule]
})
export class HomeComponent {

    items = [
      {
        label: 'New',
        icon: 'pi pi-fw pi-plus',
      },
      {
        label: 'Delete',
        icon: 'pi pi-fw pi-trash'
      }
    ];
  

}
