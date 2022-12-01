import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar-top',
  template: `
    <p>
      <mat-toolbar color="primary">
        <span>Suphero Intelligence Agency</span>
        <span class="example-spacer"></span>
        <a href="https://github.com/emberborja/angular-example-ember" target="_blank"
          mat-icon-button 
          class="example-icon favorite-icon" 
          aria-label="Star this project on GitHub">
            <mat-icon>star</mat-icon>
        </a>
        <share-buttons theme="circles-dark"
          [include]="['linkedin']"
          [showIcon]="true"
          [showText]="false"
          url="https://en.wikipedia.org/wiki/Squirrel_Girl"
          description="Linkedin Share Button"
          class="example-icon">
        </share-buttons>
      </mat-toolbar>
    </p>
  `,
  styles: [
    `
      .example-spacer {
        flex: 1 1 auto;
      }
    `
  ]
})
export class ToolbarTopComponent {

}
