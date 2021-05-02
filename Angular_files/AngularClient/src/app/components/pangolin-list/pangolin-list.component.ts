import { Component, OnInit } from '@angular/core';
import { PangolinService } from 'src/app/services/pangolin.service';
import { Pangolin } from 'src/app/models/pangolin.model';

@Component({
  selector: 'app-pangolin-list',
  templateUrl: './pangolin-list.component.html',
  styleUrls: ['./pangolin-list.component.css']
})
export class PangolinListComponent implements OnInit {
  pangolin?: Pangolin[];
  currentPangolin?: Pangolin;
  currentIndex = -1;
  family = '';

  constructor(private pangolinService: PangolinService) { }

  ngOnInit(): void {
    this.retrievePangolin();
  }

  retrievePangolin(): void {
    this.pangolinService.getAll()
      .subscribe(
        data => {
          this.pangolin = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrievePangolin();
    this.currentPangolin = undefined;
    this.currentIndex = -1;
  }

  setActivePangolin(pangolin: any, index: number): void {
    this.currentPangolin = pangolin;
    this.currentIndex = index;
  }
  searchFamily(): void {
    this.currentPangolin = undefined;
    this.currentIndex = -1;

    this.pangolinService.findByFamily(this.family)
      .subscribe(
        data => {
          this.pangolin = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
