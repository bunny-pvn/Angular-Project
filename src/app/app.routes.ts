import { Routes } from '@angular/router';
import { AddexpenseComponent } from './addexpense/addexpense.component';
import { HomeimageComponent } from './Components/homeimage/homeimage.component';

export const routes: Routes = [

    {path:'AddExpense', component:AddexpenseComponent},
    {path:'', component:HomeimageComponent}
];
