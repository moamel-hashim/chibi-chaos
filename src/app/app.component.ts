import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('fadeInLetters', [
      transition(':enter', [
        style({opacity: 0 }),
        animate('1000ms', style({opacity: 100})),
      ]),
    ]),
  ],
})

export class AppComponent {
  title = 'Welcome to Chibi Chaos';

  display = false;
  onPress() {
    this.display = true
  }
  splitTitle(): string[] {
    return this.title.split('');
  }
}
