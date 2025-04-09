import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IonFooter, IonToolbar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-footer',
  standalone:true,
  imports:[IonFooter , IonToolbar],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FooterComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
