import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-superhero-image-card',
  template: `
    <mat-card class="example-card">
      <mat-card-header>
        <mat-card-title>{{ superheroName }}</mat-card-title>
      </mat-card-header>
      <img mat-card-image src="{{ imageUrl }}" alt="photo of {{ superheroName }}">
    </mat-card>
  `,
  styles: [
    `
      .example-card {
        max-width: 220px;
      }
    `
  ]
})
export class SuperheroImageCardComponent {
  @Input() superheroName: string = "";
  @Input() imageUrl: string = "";
}
