import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  rocketName: string = "Plasma Max";
  missionName: string = "Mars 2030";
  constructor() { }

  ngOnInit() {
  }

}
