import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar-top',
  template: `
    <p>
      <mat-toolbar color="primary">
        <span>Suphero Intelligence</span>
        <span class="example-spacer"></span>
        <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
          <mat-icon>star</mat-icon>
        </button>
        <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
          <mat-icon>share</mat-icon>
        </button>
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
