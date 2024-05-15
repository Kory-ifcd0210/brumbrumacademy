import { Component } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';

import { HeaderComponent } from "../../components/header/header.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [TableComponent, HeaderComponent]
})
export class HomeComponent {

}
