import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  OnInit,
  Output,
} from '@angular/core';

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
