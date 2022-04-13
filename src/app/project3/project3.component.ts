import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project3',
  templateUrl: './project3.component.html',
  styleUrls: ['./project3.component.css']
})
export class Project3Component implements OnInit {
	
	title = 'QA Dashboard';
	
	listOfTests = ([
	{
    "_id": {
        "$oid": "61f844f187dcc8c42d0285ca"
    },
    "type": "UAT",
    "result": "Fail",
    "build": "Jan-30-22a",
    "date": "2022-01-30T17:00:00",
    "steps": {
        "step1": "Open browser",
        "step2": "Navigate to http://www.example.com/"
    },
    "validations": {
        "step1": "",
        "step2": "elementVisibility;CSS;A11y"
    }
},
{
    "_id": {
        "$oid": "61f844f187dcc8c42d0285ca"
    },
    "type": "UAT",
    "result": "Pass",
    "build": "Jan-30-22b",
    "date": "2022-01-30T17:30:00",
    "steps": {
        "step1": "Open browser",
        "step2": "Navigate to http://www.example.com/"
    },
    "validations": {
        "step1": "",
        "step2": "elementVisibility;CSS;A11y"
    }
}
  ]);

  constructor() { }

  ngOnInit(): void {
  }

}
