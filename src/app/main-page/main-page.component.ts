import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faArrowLeft, faArrowRight, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { trigger, transition, style, animate } from '@angular/animations';
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  animations: [
    trigger('slideInOut',[
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('300ms ease-in-out', style({transform: 'translateX(0%)'})),
      ]),
      transition(':leave', [
        animate('300ms ease-in-out', style({transform: 'translateX(100%)'})),
      ]),
    ]),
  ],
})
export class MainPageComponent implements OnInit {
  title = 'Main Page';
  private url: string = 'https://api.jikan.moe/v4/random/anime';
  data: any;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  isModuleOpen = true;

  ngOnInit(): void {
    fetch(this.url)
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      this.data = res
    })
  }
  navigateAnime(direction: number): void {

  }

  generateStars(score:number): number[] {
    const roundedScore = Math.round(score);
    return Array.from({length: 10}, (_, index) => index < roundedScore ? 1 : 0);
  }
  toggleModule() {
    this.isModuleOpen = !this.isModuleOpen;
    console.log(this.isModuleOpen)
  }
}
