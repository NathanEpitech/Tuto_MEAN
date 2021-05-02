import { Component, OnInit } from '@angular/core';
import { PangolinService } from 'src/app/services/pangolin.service';
import { Pangolin } from 'src/app/models/pangolin.model';

@Component({
  selector: 'app-add-pangolin',
  templateUrl: './add-pangolin.component.html',
  styleUrls: ['./add-pangolin.component.css']
})
export class AddPangolinComponent implements OnInit {
  pangolin: Pangolin = {
    family: '',
    race: '',
    age: '',
    food: '',
    friends: false
  };
  submitted = false;

  constructor(private pangolinService: PangolinService) { }

  ngOnInit(): void {
  }

  savePangolin(): void {
    const data = {
      famille: this.pangolin.family,
      race: this.pangolin.race,
      age: this.pangolin.age,
      food: this.pangolin.food
    };
    this.pangolinService.create(data)
      .subscribe(
          (response: any) => {
          console.log(response);
          this.submitted = true;
        },
          (error: any) => {
          console.log(error);
        });
  }

  newPangolin(): void {
    this.submitted = false;
    this.pangolin = {
      family: ' ',
      race: ' ',
      age: ' ',
      food: ' ',
      friends: false
    };
  }
}
