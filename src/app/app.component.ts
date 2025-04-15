import { Component, AfterViewInit, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ScrollService } from './services/scroll.service';
import { filter } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'Blausicht GmbH';

  constructor(private router: Router, private scrollService: ScrollService, @Inject(DOCUMENT) private document: Document) { }

  ngAfterViewInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const targetId = sessionStorage.getItem('scrollTarget');
      if (targetId) {
        const el = this.document.getElementById(targetId);
        if (el) {
          // Timeout notwendig, damit die Sektion im DOM vorhanden ist
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
            sessionStorage.removeItem('scrollTarget');
          }, 200);
        }
      }
    });
  }
}
