import {Component, OnInit, SimpleChange} from '@angular/core';
import {SubjectService} from './services';

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











  // export class AppComponent implements OnInit, OnChanges {

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
  //   ngDoCheck(): void {
  // ngAfterContentInit - після того як контент проініціалізувався
  // ngAfterContentChecked  - перевірка контенту на помилки
  // ngAfterViewInit   - після перебудування вьюшки
  // ngAfterContentChecked  - перевірка перебудованого
// }

//    # 5
// ngOnInit(): void { }                            // Відпрацьовує коли компонента готова
// аналог ComponentDidMount

// }
