import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { AvatarModule } from 'primeng/avatar';
import { drivers } from '../../data/drivers';
import { Drivers } from '../../interfaces/drivers.interface';


@Component({
    selector: 'app-table',
    standalone: true,
    templateUrl: './table.component.html',
    styleUrl: './table.component.css',
    imports: [TableModule, AvatarModule]
})

export class TableComponent  {

    driversList: Drivers[] = drivers.map(driver => {
        return {
            id: driver.id,
            name: driver.name,
            first: driver.name[0]
        };
        }).filter(driver => driver.first !== 'I');
}
