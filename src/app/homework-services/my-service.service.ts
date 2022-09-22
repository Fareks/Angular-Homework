import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
  public textText$ = new Subject<string>(); 
  public textText2$ = new Subject<string>();
  arr: string[] = [];
  writeMessage(text : string) {
    console.log(text);
  }
  getText(){
    return this.textText$;
  }

  setText(newText :string){
    this.textText$.next(newText);
  };

  addToArr (item : string = "newItem")
  {
    this.arr.push(item);
  }
}
