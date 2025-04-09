import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [IonButton, IonGrid, IonRow, IonCol , IonImg ,  RouterLink],
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class MainSectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
