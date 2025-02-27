import { Component } from '@angular/core';
import { NavbarComponent } from '../Components/navbar/navbar.component';
import { FooterComponent } from '../Components/footer/footer.component';
import { HomeimageComponent } from '../Components/homeimage/homeimage.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, FooterComponent, HomeimageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}
