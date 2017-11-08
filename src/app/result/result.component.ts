import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: []
})

export class ResultComponent implements OnInit {
  @Input() childHikes;

  constructor() { }

  ngOnInit() {

  }

}
