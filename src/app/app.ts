import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// import { ButtonModule } from 'primeng/button';
// import { PrimeNG } from 'primeng/config';
import { ToDo } from './components/to-do/to-do';
@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    MatIconModule,
    // ButtonModule,
    ToDo
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
