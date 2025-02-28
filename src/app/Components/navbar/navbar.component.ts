import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink} from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router:Router){}
  addExpense(){
    
  }

}
