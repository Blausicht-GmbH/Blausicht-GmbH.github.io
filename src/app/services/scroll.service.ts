import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private scrollTarget: string | null = null;

  setTarget(target: string) {
    this.scrollTarget = target;
  }

  consumeTarget(): string | null {
    const target = this.scrollTarget;
    this.scrollTarget = null;
    return target;
  }
}
