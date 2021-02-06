import {Component, OnInit} from '@angular/core';
import {SubjectService} from '../../services';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  value: number;

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.subjectService.getCurrentState().subscribe(value => this.value = value);
  }

  increment(): void {
    this.subjectService.setNewState();
  }
}
