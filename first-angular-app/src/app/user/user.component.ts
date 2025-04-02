import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

//Type Alias defining object type
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  //Object type + Input Decorator
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: string;
  // @Input({ required: true }) name!: string;
  @Output() select = new EventEmitter<string>();

  // select = output<string>();  output function - Signals()

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // input function - Signals()
  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
