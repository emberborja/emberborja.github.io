import { Superhero } from './../superhero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-superhero-tabs',
  template: `
    <p>
      <mat-tab-group animationDuration="2000ms">
        <mat-tab label="Superhero List">
          <app-superhero-list [superheroData]="superheroData"></app-superhero-list>
        </mat-tab>
        <mat-tab label="Superhero Grid"> Content 2 </mat-tab>
      </mat-tab-group>
    </p>
  `,
  styles: [
    `
      p { 
        padding: 0 1.75rem;
      }
    `
  ]
})
export class SuperheroTabsComponent implements OnInit {
  superheroData: Superhero[] = [];

  constructor () {}

  ngOnInit(): void {
    this.fetchSuperheroData()
  }

  fetchSuperheroData() {
    // this.superheroData
  }

}
