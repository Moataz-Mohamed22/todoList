import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ButtonModule } from 'primeng/button';
import { PrimeNG } from 'primeng/config';
@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule,
    MatIconModule,
    ButtonModule

  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
