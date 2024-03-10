import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css'],
})
export class FromComponent {
  enterText: string;

  constructor(private dataService: DataService) {}

  send() {
    this.dataService.sendData(this.enterText);
  }
}
