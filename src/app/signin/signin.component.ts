import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  username: string = '';
  password: string = '';

  @Output()
  change: EventEmitter<object> = new EventEmitter<object>();

  login() {
    console.log(this.username, this.password);
    const loginData = {
      username: this.username,
      password: this.password,
    };
    console.log(loginData);
    this.change.emit(loginData);
  }
}
