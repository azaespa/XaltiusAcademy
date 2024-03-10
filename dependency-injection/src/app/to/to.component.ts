import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-to',
  templateUrl: './to.component.html',
  styleUrls: ['./to.component.css'],
})
export class ToComponent implements OnInit {
  inputText: string;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.data.subscribe({
      next: (value) => {
        this.inputText = value;
      },
    });
  }
}
