import {Injectable, SimpleChange} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private data = new BehaviorSubject<number>(0);

  getCurrentState(): BehaviorSubject<number> {
    return this.data;
  }

  setNewState(): void {
    this.data.next(this.data.getValue() + 1);
  }
}
