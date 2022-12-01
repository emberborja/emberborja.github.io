import { Component, Input } from '@angular/core';
import { Superhero } from '../superhero';

@Component({
  selector: 'app-superhero-list',
  template: `
    <p>
      superhero-list works!
    </p>
  `,
  styles: [
  ]
})
export class SuperheroListComponent {
  @Input() superheroData: Superhero[] = [];
}
