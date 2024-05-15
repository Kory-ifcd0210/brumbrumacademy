import { Routes } from '@angular/router';
import { CircuitComponent } from './pages/circuit/circuit.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'circuitos', component: CircuitComponent},
    {path: '', redirectTo: '/home', pathMatch:'full'},
    {path: '**', component: HomeComponent},

];
