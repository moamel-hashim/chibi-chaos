import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  RouterModule,
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  animations: [
    trigger('fadeInLetters', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 100 })),
      ]),
    ]),
  ],
})
export class HomePageComponent {
  title = 'Welcome to Chibi Chaos';
  splitTitle(): string[] {
    return this.title.split('');
  }
}
