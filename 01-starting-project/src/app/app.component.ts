import { Component } from '@angular/core';
import { HeaderComponent } from "./header.component";


//selector app-root in index.html will be replaced with component.html
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
