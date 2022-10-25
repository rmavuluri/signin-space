import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sigin-space';
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
