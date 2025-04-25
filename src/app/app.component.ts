import { Component } from '@angular/core';
import { CafeListComponent } from './components/cafe-list/cafe-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CafeListComponent],
  template: `
    <main>
      <app-cafe-list></app-cafe-list>
    </main>
  `,
  styles: []
})
export class AppComponent {
  title = 'parcial-cafe';
}