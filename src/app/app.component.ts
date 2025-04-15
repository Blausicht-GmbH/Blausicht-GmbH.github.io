import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blausicht GmbH';

  constructor(private scrollService: ScrollService) { }

  ngAfterViewInit(): void {
    const target = this.scrollService.consumeTarget();
    if (target) {
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }
}
