import { Component, Input } from '@angular/core';
import { ISuperhero } from '../superhero';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-superhero-grid',
  template: `
    <mat-grid-list cols="3" rowHeight="350">
      <mat-grid-tile *ngFor="let superhero of superheroData$ | async">
        <app-superhero-image-card [imageUrl]="superhero.image.url" [superheroName] ="superhero.superheroName"></app-superhero-image-card>
      </mat-grid-tile>
    </mat-grid-list>
  `,
  styles: [
  ]
})
export class SuperheroGridComponent {
  @Input() superheroData$: Observable<ISuperhero[]> = of();
}
