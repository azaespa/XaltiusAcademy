import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css'],
})
export class SurveyFormComponent implements OnInit {
  question: string = 'test';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.data.subscribe({
      next: (dataValue) => {
        this.question = dataValue;
      },
    });
  }
}
