import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarAuthComponent } from 'src/app/components/navbar-auth/navbar-auth.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-auth',
  standalone: true,
  imports: [CommonModule , NavbarAuthComponent , RouterOutlet],
  templateUrl: './layout-auth.component.html',
  styleUrls: ['./layout-auth.component.scss']
})
export class LayoutAuthComponent {

}
