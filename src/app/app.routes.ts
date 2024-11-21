import { Routes } from '@angular/router';
import { EldeliToplamaComponent } from './components/eldeli-toplama/eldeli-toplama.component';

export const routes: Routes = [
    {path: '', redirectTo: 'eldeli-toplama', pathMatch: 'full'},
    {path: 'eldeli-toplama', loadComponent: ()=> import('./components/eldeli-toplama/eldeli-toplama.component').then(m => m.EldeliToplamaComponent)},
];
