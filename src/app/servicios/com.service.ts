import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComService {

  @Output() triggerLogin: EventEmitter<any> = new EventEmitter();
  constructor() { }
}
