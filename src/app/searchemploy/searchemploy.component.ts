import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchemploy',
  templateUrl: './searchemploy.component.html',
  styleUrls: ['./searchemploy.component.css']
})
export class SearchemployComponent implements OnInit {

  constructor() { }
  employCode=""
  readValue=()=>{
    let data={
      "employCode":this.employCode
      
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
