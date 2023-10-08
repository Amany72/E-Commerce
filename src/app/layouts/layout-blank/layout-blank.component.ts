import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarBlankComponent } from 'src/app/components/navbar-blank/navbar-blank.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-blank',
  standalone: true,
  imports: [CommonModule , NavbarBlankComponent , RouterOutlet],
  templateUrl: './layout-blank.component.html',
  styleUrls: ['./layout-blank.component.scss']
})
export class LayoutBlankComponent {
  upToStart():void{
    window.scrollTo(0,0);
  }
}
