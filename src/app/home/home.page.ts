import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonButtons,
  IonImg,
} from '@ionic/angular/standalone';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { HowWorksComponent } from './components/how-works/how-works.component';
import { FooterComponent } from '../shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonContent,
    IonButtons,
    IonImg,
    MainSectionComponent,
    HowWorksComponent,
    FooterComponent
  ],
})
export class HomePage {
  constructor() {
  }
}
