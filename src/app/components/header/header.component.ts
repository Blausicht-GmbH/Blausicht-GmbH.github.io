import { ViewportScroller, DOCUMENT, NgClass } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(@Inject(DOCUMENT) private document: Document,
    private router: Router,
    private scrollService: ScrollService) { }

  isScrolled = false;

  scrollTo(targetId: string): void {
    if (this.router.url !== '/') {
      sessionStorage.setItem('scrollTarget', targetId);
      this.router.navigateByUrl('/');
    } else {
      const el = this.document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  //scrollTo(targetId: string): void {
  //  const el = this.document.getElementById(targetId);
  //  if (el) {
  //    el.scrollIntoView({ behavior: 'smooth' });

  //  }
  //}

  //scrollTo(targetId: string): void {
  //  const currentUrl = this.router.url;

  //  if (currentUrl === '/') {
  //    this.smoothScroll(targetId);
  //  } else {
  //    console.log("scrollTo(targetId: string)");
  //    console.log(targetId);
  //    this.scrollService.setTarget(targetId);
  //    this.router.navigate(['/']);
  //  }
  //}

  //smoothScroll(targetId: string) {
  //  setTimeout(() => {
  //    const el = this.document.getElementById(targetId);
  //    if (el) {
  //      el.scrollIntoView({ behavior: 'smooth' });
  //    }
  //  }, 100); // kleine Verzögerung, um sicherzustellen, dass DOM geladen ist
  //}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 10;
  }
}
