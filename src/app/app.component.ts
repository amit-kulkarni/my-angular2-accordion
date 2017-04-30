import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedTabIndex: Number = 1;

  isActive(index: Number) {
    return index === this.selectedTabIndex;
  }

  changeActiveTab(index: Number) {
    if (this.selectedTabIndex === index) {
      this.selectedTabIndex = 0;
    } else {
      this.selectedTabIndex = index;
    }
  }
}
