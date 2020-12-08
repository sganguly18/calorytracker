import { Component, OnInit } from '@angular/core';
import { CategoryDataService } from '../category-data.service'
import { ExerciseDataService } from '../exercise-data.service'

@Component({
  selector: 'app-exercise-manager',
  templateUrl: './exercise-manager.component.html',
  styleUrls: ['./exercise-manager.component.css']
})
export class ExerciseManagerComponent implements OnInit {
  ename :string;
  ecat  :string;
  eduration :number;
  erepetition :number;
  edate :string;
  cname :string;
  cthreshold :number;

  constructor(
    private cService :CategoryDataService,
    private eService :ExerciseDataService
  ) { }
  addExercise() {
    console.log(this.ename, this.ecat, this.eduration, this.erepetition )
    var splitdate=this.edate.split("/")
    var finaldate = new Date(parseInt(splitdate[2]), parseInt(splitdate[1]), parseInt(splitdate[0])) 
    this.eService.submit(this.ename, this.ecat, this.eduration, this.erepetition, finaldate)
  }
  addCategory() {
    console.log(this.cname, this.cthreshold)
    this.cService.submit(this.cname, this.cthreshold)
  }
  ngOnInit(): void {
  }

}
