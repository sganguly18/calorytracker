import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ExerciseDataService {
  api_url = 'http://localhost:3000/api/exercise/';
  exerciseList = [];
  exerciseObs = new Subject();

  constructor(private http: HttpClient) { }

  submit(desc :string, category_id :string, duration: number, repetition: number, date: Date) {
    const exerciseItem = {
      desc: desc,
      category_id: category_id,
      duration: duration,
      repetition: repetition,
      date: date
    }
    this.http.post<any>(this.api_url, exerciseItem)
      .subscribe(data => {
        this.exerciseList.push(data);
        this.exerciseObs.next([...this.exerciseList])
        console.log(data);
      })
  }

  getList() {
    this.http.get<any>(this.api_url).subscribe(data => {
      this.exerciseList = data;
      this.exerciseObs.next([...this.exerciseList]);
    })
  }

  getSubscription(): any {
    return this.exerciseObs.asObservable();
  }

  delete(id) {
    this.http.delete(this.api_url + id).subscribe(data => {
      this.exerciseList = this.exerciseList.filter(item => item._id !== id);
      this.exerciseObs.next([...this.exerciseList]);
    })
  }

  forceReload() {
    this.getList();
    this.exerciseObs.next([...this.exerciseList]);
  }

}