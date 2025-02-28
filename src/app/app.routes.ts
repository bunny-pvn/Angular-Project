import { Routes } from '@angular/router';
import { AddexpenseComponent } from './viewexpense/addexpense/addexpense.component';
import { HomeimageComponent } from './Components/homeimage/homeimage.component';
import { LoginformComponent } from './loginform/loginform.component';

export const routes: Routes = [
    {path:'', component:HomeimageComponent},
    {path:'AddExpense', component:AddexpenseComponent},
    {path:'Login', component:LoginformComponent}
];
