import {Component, OnInit, SimpleChange, ViewChild} from '@angular/core';
import {SubjectService} from './services';
import {AComponent, BComponent} from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'subject-service';

  value: number;

  constructor(private subjectService: SubjectService) {
  }

  ngOnInit(): void {
    this.subjectService.getCurrentState().subscribe(value => this.value = value);
  }

  increment(): void {
    this.subjectService.setNewState();
  }
}




  // export class AppComponent implements OnInit, OnChanges, afterViewInit {

  //    @ViewChild(AComponent)                       // Витягує дітей
  //    a: AComponent;                               // Тип даних
  //    @ViewChild(BComponent)
  //    b: BComponent;

  //    afterViewInit(): void { }                     // Дає змогу доступитися до дітей
                                                      // Відпрацьовує коли готова вьюшка



  //    # 1
  // constructor() { }


  //    # 2
  // ngOnChanges(changes: SimpleChange): void {      // SimpleChange має доступ до змін
  //   console.log(changes);
  // }


  //    # 3
  // ngOnInit(): void { }                            // Відпрацьовує коли компонента готова
                                                     // аналог ComponentDidMount


  //    # 4
  // ngDoCheck(): void {                                              // НАВАНТАЖУЄ КОРИСТУВАЧА
  //    ngAfterContentInit       - після того як контент проініціалізувався
  //    ngAfterContentChecked    - перевірка контенту на помилки
  //    ngAfterViewInit          - після перебудування вьюшки
  //    ngAfterContentChecked    - перевірка перебудованого
  // }


  //    # 5
  // ngOnDestroy(): void { }                         // Відпрацьовує коли компонента знищується
                                                     // аналог ComponentDidUnMount
// }
