import { RouterModule,Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch:'full'},
  {path: 'home', component: MainPageComponent}
];
