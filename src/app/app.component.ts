import { Component } from '@angular/core';
import{AngularFireDatabase}from'angularfire2/database';
import { observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TrainMe';
  courses:any[];
  constructor(db:AngularFireDatabase){
    db.list('/Courses').valueChanges().subscribe(c=>console.log(c));
  }
}
