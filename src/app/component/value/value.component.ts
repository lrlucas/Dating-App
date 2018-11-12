import { Component, OnInit } from '@angular/core';
import { ValueService } from '../../services/value.service';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  values: any;

  constructor(public valueService: ValueService) { }

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.valueService.getValues()
      .subscribe( (data: any) => {
        this.values = data;
      }, error => {
        console.log(error);
      });
  }
}
