import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { UserComponent } from './shared/user/user.component';
import { MatListModule } from '@angular/material/list';
import { DUMMY_USERS } from './dummy/users';
import { TasksComponent } from "./shared/tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, MatListModule, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser: any = undefined;

  onSelectUser(id: string) {
    console.log('id', id);
    this.selectedUser = this.users.find((user => user.id === id)) || undefined
  }
}
