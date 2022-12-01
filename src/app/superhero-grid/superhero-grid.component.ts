import { Component, Input } from '@angular/core';
import { ISuperhero } from '../superhero';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-superhero-grid',
  template: `
    <cdk-virtual-scroll-viewport itemSize="350" minBufferPx="700" maxBufferPx="1400" style="height:100vh">
      <mat-grid-list cols="1" rowHeight="350">
        <mat-grid-tile *cdkVirtualFor="let superhero of superheroData$ | async">
          <app-superhero-image-card [imageUrl]="superhero.image.url" [superheroName] ="superhero.superheroName"></app-superhero-image-card>
        </mat-grid-tile>
      </mat-grid-list>
    </cdk-virtual-scroll-viewport>
  `,
  styles: [
  ]
})
export class SuperheroGridComponent {
  @Input() superheroData$: Observable<ISuperhero[]> = of();
}
