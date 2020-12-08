import { Component, OnInit } from '@angular/core';
import { ExerciseDataService } from '../exercise-data.service'

@Component({
  selector: 'app-daily-list',
  templateUrl: './daily-list.component.html',
  styleUrls: ['./daily-list.component.css']
})
export class DailyListComponent implements OnInit {
  public subscription;
  public exerciseList;
  constructor(
    private fbService: ExerciseDataService // inject service
  ) { }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // onDestroy cancels the subscribe request
  }

  ngOnInit(): void {
    this.subscription = this.fbService.getSubscription().subscribe(msg => {
      this.exerciseList = msg;
    });
    this.fbService.forceReload();
  }

}
