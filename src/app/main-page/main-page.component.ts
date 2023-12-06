import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent implements OnInit {
  title = 'Main Page';
  private url: string = 'https://api.jikan.moe/v4/random/anime';
  data: any;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

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
}
