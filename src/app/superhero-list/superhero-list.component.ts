import { Component, Input } from '@angular/core';
import { ISuperhero } from '../superhero';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-superhero-list',
  template: `
    <cdk-virtual-scroll-viewport itemSize="88" style="height:80vh">
      <mat-list>
        <mat-list-item *cdkVirtualFor="let superhero of superheroData$ | async">
          <span matListItemTitle>{{ superhero.superheroName}}</span>
          <span matListItemLine>Secret Identity: {{ superhero.realName }}</span>
          <span matListItemLine>Superhero ID: {{ superhero.id }}</span>
        </mat-list-item>
      </mat-list>
    </cdk-virtual-scroll-viewport>
  `,
  styles: [
  ]
})
export class SuperheroListComponent {
  @Input() superheroData$: Observable<ISuperhero[]> = of();
}
