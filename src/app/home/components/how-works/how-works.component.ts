import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonCard, IonCardHeader, IonCardContent } from '@ionic/angular/standalone';
export interface step {
  icon: string;
  title: string;
  step: string;
  description: string;
}
@Component({
  selector: 'app-how-works',
  standalone: true,
  imports: [IonCardContent, IonCardHeader, IonButton, IonGrid, IonRow, IonCol, IonImg , IonCard , RouterLink],
  templateUrl: './how-works.component.html',
  styleUrls: ['./how-works.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class HowWorksComponent implements OnInit {
  steps: step[];
  constructor() {
    this.steps = [
      {
        icon: 'assets/step1.png',
        title: 'Subscribe',
        step: 'Step 1',
        description:
          'Select a subscription plan that suits your child’s learning needs and preferences.',
      },
      {
        icon: 'assets/step2.png',
        title: 'Personalise Your Box',
        step: 'Step 2',
        description:
          'Tell us about your child’s age, interests, and learning goals, and we’ll customize their surprise box accordingly.',
      },
      {
        icon: 'assets/step3.png',
        title: 'Receive Your Surprise Box',
        step: 'Step 3',
        description:
          'Sit back and relax as your child eagerly awaits the arrival of their monthly surprise box filled with engaging learning materials.',
      },
    ];
  }
  ngOnInit() {}
}
