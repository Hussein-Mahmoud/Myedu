import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonHeader,
  IonToolbar,
  IonContent,
  IonButtons,
  IonSelect,
  IonDatetime,
  IonSelectOption,
  IonInput,
  IonLabel,
  IonModal,
  IonDatetimeButton,
  IonItem,
  IonList,
  IonRadio,
  IonRadioGroup,
  IonChip,
} from '@ionic/angular/standalone';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface Grade {
  id: number;
  name: string;
}

interface Gender {
  id: number;
  name: string;
}
interface Topic {
  id: number;
  name: string;
  selected: boolean;
  disabled: boolean;
}

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [
    IonChip,
    IonRadioGroup,
    IonRadio,
    IonDatetimeButton,
    IonLabel,
    IonInput,
    IonCardHeader,
    IonCardContent,
    IonHeader,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonCard,
    RouterLink,
    IonToolbar,
    IonContent,
    IonButtons,
    FooterComponent,
    ReactiveFormsModule,
    IonDatetime,
    IonModal,
    IonSelect,
    IonSelectOption,
    IonChip,
  ],
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscriptionComponent implements OnInit {
  subscriptionForm!: FormGroup;

  grades: Grade[] = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Grade ${i + 1}`,
  }));
  genders: Gender[] = [
    {
      id: 1,
      name: 'male',
    },
    {
      id: 2,
      name: 'female',
    },
  ];

  topics: Topic[] = [
    { id: 1, name: 'Arabic', selected: false, disabled: false },
    { id: 2, name: 'Islamic', selected: false, disabled: false },
    { id: 3, name: 'English', selected: false, disabled: false },
    { id: 4, name: 'History', selected: false, disabled: false },
    { id: 5, name: 'Sports', selected: false, disabled: false },
  ];

  selectedTopics: string[] = [];
  errorText: string = '';

  constructor() {
    this.initForm();
  }
  ngOnInit() {}
  // usage >>init form
  initForm() {
    this.subscriptionForm = new FormGroup({
      userName: new FormControl(''),
      email: new FormControl(''),
      childName: new FormControl(''),
      childBirthDate: new FormControl(''),
      selectedGrade: new FormControl(''),
      gender: new FormControl(''),
      topics: new FormControl([]),
    });
  }
  // usage >> change gender
  genderChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.subscriptionForm.get('gender')?.setValue(target);
  }
  // usage >> change date
  changeDate(event: any) {
    const date = event.detail.value;
    this.subscriptionForm.get('childBirthDate')?.setValue(date);
  }

  get getSelectedTopics() {
    return this.topics.filter((topic) => topic.selected);
  }
  // usage >> to get selected topics
  updateSelection(id: number, selected: boolean) {
    const topic = this.topics.find((topic) => topic.id === id);
    if (topic) {
      topic.selected = !selected;
      topic.disabled = false;
    }
    this.selectedTopics = this.topics
      .filter((topic) => topic.selected)
      .map((topic) => topic.name);
    if (this.getSelectedTopics.length > 3) {
      this.errorText = 'Cant select more than 3 topics';
    }
    if (this.getSelectedTopics.length > 2) {
      this.topics
        .filter((topic) => !topic.selected)
        .map((topic) => (topic.disabled = true));
    } else {
      this.topics
        .filter((topic) => !topic.selected)
        .map((topic) => (topic.disabled = false));
    }
    this.subscriptionForm.get('topics')?.setValue(this.selectedTopics);
  }
  // usage >> submit form
  submitForm() {
    console.log(this.subscriptionForm.value);
  }
}
