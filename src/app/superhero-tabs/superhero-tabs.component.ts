import { SuperheroDataService } from './../superhero-data.service';
import { ISuperhero } from './../superhero';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-superhero-tabs',
  template: `
    <p>
      <mat-tab-group animationDuration="2000ms">
        <mat-tab label="Superhero List">
          <app-superhero-list [superheroData$]="superheroData$"></app-superhero-list>
        </mat-tab>
        <mat-tab label="Superhero Grid">
          <app-superhero-grid [superheroData$]="superheroData$"></app-superhero-grid>
        </mat-tab>
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
  superheroData$: Observable<ISuperhero[]> = of();

  constructor (private superHeroDataService: SuperheroDataService) {}

  ngOnInit(): void {
    this.fetchSuperheroData()
  }

  fetchSuperheroData() {
    this.superheroData$ = this.superHeroDataService.getData();
  }

}
