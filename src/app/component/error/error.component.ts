import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'An Error Occurred you have to contact at ******** for submitting your issue to solve the problem';
  constructor() { }

  ngOnInit(): void {
  }

}
