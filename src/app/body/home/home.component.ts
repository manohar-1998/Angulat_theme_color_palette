import { Component, OnInit } from '@angular/core';
import homecontent from 'src/assets/homecontent.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homePageText:any = homecontent

  constructor() { }

  ngOnInit(): void {
  }

}
