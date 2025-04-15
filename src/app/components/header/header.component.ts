import { ViewportScroller, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private viewportScroller: ViewportScroller, @Inject(DOCUMENT) private document: Document) { }
  //scrollTo(sectionId: string): void {
  //  this.viewportScroller.scrollToAnchor(sectionId);
  //}

  scrollTo(targetId: string): void {
    const el = this.document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });

    }

  }
}
