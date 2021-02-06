import {Component, OnInit} from '@angular/core';
import {SubjectService} from '../../services';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  value = 0;

  constructor(private subjectService: SubjectService) {
  }

  ngOnInit(): void {
    this.subjectService.getCurrentState().subscribe(value => this.value = value);
  }

  increment(): void {
    this.subjectService.setNewState();
  }
}
