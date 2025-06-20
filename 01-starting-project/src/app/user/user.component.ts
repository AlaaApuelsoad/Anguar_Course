import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import { every } from 'rxjs';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  selectedUser = DUMMY_USERS[randomIndex];

  get ImagePath(){
    //function using as a property
    return 'assets/users/'+this.selectedUser.avatar
  }


  onSelectUser(){
    console.log('clicked');
  }

}
