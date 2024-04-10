import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { drivers } from '../data/drivers';


interface Drivers {
    id: number;
    name: string;
  }

interface Race {
    id: 0,
        name: string,
        date: string,
        hour: string,
        location: string,
        circuit: string,
        times: [
            {
                driverId: number,
                laptimes: string[]
            },
        ]
}

@Component({
    selector: 'app-table',
    standalone: true,
    templateUrl: './table.component.html',
    styleUrl: './table.component.css',
    imports: [TableModule, AvatarModule]
})

export class TableComponent  {

    driversList: Drivers[] = drivers

}
