import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addemploy',
  templateUrl: './addemploy.component.html',
  styleUrls: ['./addemploy.component.css']
})
export class AddemployComponent implements OnInit {

  constructor() { }
  employCode=""
  employName=""
  employDesignation=""
  gender=""
  companyName=""
  salary=""
  companyAddress=""
  mobileNum=""
  companyEmail=""
  yearOfExperience=""
  bloodGroup=""
  dOB=""

readValue=()=>{
  let data ={
    "employCode":this.employCode,
  "employName":this.employName,
  "employDesignation":this.employDesignation,
  "gender":this.gender,
  "companyName":this.companyName,
  "salary":this.salary,
  "companyAddress":this.companyAddress,
  "mobileNum":this.mobileNum,
  "companyEmail":this.companyEmail,
  "yearOfExperience":this.yearOfExperience,
  "bloodGroup":this.bloodGroup,
  "dOB":this.dOB
  }
  console.log(data)
}


  ngOnInit(): void {
  }

}
