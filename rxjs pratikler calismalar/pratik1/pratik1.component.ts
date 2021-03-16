import { AfterViewInit, Component, OnInit } from '@angular/core';
import { asyncScheduler, AsyncSubject, BehaviorSubject, fromEvent,Observable, ReplaySubject, Subject } from 'rxjs';
import {first, observeOn} from 'rxjs/operators'
;
@Component({
  selector: 'app-pratik1',
  templateUrl: './pratik1.component.html',
  styleUrls: ['./pratik1.component.scss']
})
export class Pratik1Component implements OnInit,AfterViewInit {

  name: String = "";
  constructor() { }

  ngAfterViewInit(): void {
    asyncScheduler.schedule(() =>{
      this.name = "diyar";
    })
    // console.log("2");
  }

  ngOnInit(): void {
    // console.log("1");

    const button= document.getElementsByTagName("button")[0];

    fromEvent(button, "click").pipe(first()).subscribe(
      x => console.log("Merhaba")
    );

    // const observable = new Observable( observer => {
    //   observer.next(1);
    //   observer.next(2);
    //   observer.next(3);
    //   observer.next("Sebebsiz boş yere ayrılacaksan...");
    //   observer.complete();
    // }).subscribe(data => console.log(data));

    // const observable = new Observable<number>( data => {
    //     data.next(3);
    //     data.next(5);
    //     data.next(10);
    //     data.complete();
    // });

    // observable.subscribe(data => {
    //     console.log(data);
    // });

    // const observer = function (data:any){
    //   console.log(data);
    // }

    // const observer = (data: any) => {
    //   console.log(data);
    // }

    // observable.subscribe(observer);

    // observable.subscribe(data => {
    //   console.log(data);
    // });
    
 //   const subsejt = new Subject();
    // let data:any = "diyar";
    // const subsejt = new BehaviorSubject(data);
    // const subsejt = new ReplaySubject(2);
    // const subsejt = new AsyncSubject();
    // subsejt.subscribe(data => { console.log(`ObserverA ${data}`) });
    // subsejt.subscribe(data => { console.log(`ObserverB ${data}`) });
    // subsejt.next(3);
    // subsejt.next(5);
    // subsejt.subscribe(data => { console.log(`ObserverC ${data}`) });
    // subsejt.next(7);
    // subsejt.next(9);
    // subsejt.complete();
    // subsejt.next("Ahmet");

    // const ob = new Observable (d => {
    //   console.log("Schedular kullanılmayan *");
    //   d.next(1);
    //   d.next(2);
    //   d.next(3);
    //   d.complete();
    // });

    // ob.subscribe(d => {
    //   console.log(d);
    // });
    // console.log("Schedular kullanılmayan ***");
    // console.log("***************************");

    // console.log("Schedular kullanan *");
    // const ob2 = new Observable (d => {
    //   d.next(1);
    //   d.next(2);
    //   d.next(3);
    //   d.complete();
    // }).pipe(observeOn(asyncScheduler));

    // ob2.subscribe(d => {
    //   console.log(d);
    // });
    // console.log("Schedular kullanan *");

  }

}
