import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./HeaderComponent/header.component";
import { UserComponent } from "./AppComponent/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TaskComponent } from "./TaskComponent/task.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = 'ul';

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  };

  onSelectUser(id: string) {
    this.selectedUserId = id;

  }
}
