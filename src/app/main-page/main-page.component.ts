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
  title:string = 'Main Page';
  private url: string = 'https://api.jikan.moe/v4/random/anime';
  animeDataArray:any = [];
  currentIndex:number = 0;
  private carouselData: any = [];
  data: any;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  isModuleOpen = true;

  async ngOnInit(): Promise<void> {
    await this.fetchAnimeData();
    this.initializeCarouselData();
  }

  async fetchAnimeData():Promise<any> {
    fetch(this.url)
    .then((response) => response.json())
    .then((res) => {
      this.data = res;
      this.animeDataArray.push(res)
      return res
    }) as Promise<any>
  }

  async navigateAnime(direction:number): Promise<void> {
    const newIndex = this.currentIndex + direction;
    if(newIndex >= 0 && newIndex < this.animeDataArray.length) {
      this.currentIndex = newIndex;
      this.data = this.animeDataArray[this.currentIndex];
    } else {
      await this.fetchAnimeData();
      this.currentIndex = this.animeDataArray.length - 1;
      this.data = this.animeDataArray[this.currentIndex];
    }
    await this.fetchPreviousAndNextData();
  }

  async initializeCarouselData() {
    this.carouselData = [null, this.data, null];
    await this.fetchPreviousAndNextData();
  }
  async fetchPreviousAndNextData() {
    this.carouselData[0] = this.animeDataArray[this.currentIndex - 1]?.data || null;
    await this.fetchAnimeData();
    this.carouselData[2] = this.animeDataArray[this.currentIndex + 1]?.data || null;
  }

  getCarouselImage(offset:number): string {
    const index = this.currentIndex + offset;
    if(index >= 0 && index < this.animeDataArray.length) {
      return this.animeDataArray[index].data.images.jpg.image_url;
    }
    return '';
  }

  generateStars(score:number): number[] {
    const roundedScore = Math.round(score);
    return Array.from({length: 10}, (_, index) => index < roundedScore ? 1 : 0);
  }
  toggleModule() {
    this.isModuleOpen = !this.isModuleOpen;
  }
}
