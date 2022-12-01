import { Component, Input } from '@angular/core';
import { ISuperhero } from '../superhero';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-superhero-list',
  template: `
    <mat-list>
      <mat-list-item *ngFor="let superhero of superheroData$ | async">
        <span matListItemTitle>{{ superhero.superheroName}}</span>
        <span matListItemLine>Secret Identity: {{ superhero.realName }}</span>
        <span matListItemLine>Superhero ID: {{ superhero.id }}</span>
      </mat-list-item>
    </mat-list>
  `,
  styles: [
  ]
})
export class SuperheroListComponent {
  @Input() superheroData$: Observable<ISuperhero[]> = of();
}
