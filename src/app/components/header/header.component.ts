import { ViewportScroller, DOCUMENT, NgClass } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private viewportScroller: ViewportScroller, @Inject(DOCUMENT) private document: Document) { }
  //scrollTo(sectionId: string): void {
  //  this.viewportScroller.scrollToAnchor(sectionId);
  //}

  isScrolled = false;

  scrollTo(targetId: string): void {
    const el = this.document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });

    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 10;
  }
}
