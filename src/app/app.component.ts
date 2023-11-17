import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isClassApplied:boolean = false;

  toggleClass() {
    this.isClassApplied = !this.isClassApplied;
  }
}
