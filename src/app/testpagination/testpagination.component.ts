import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-testpagination',
  templateUrl: './testpagination.component.html',
  styleUrls: ['./testpagination.component.scss']
})
export class TestpaginationComponent    implements OnInit {
  optionsSelect: Array<any>;

  ngOnInit() {
  this.optionsSelect = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
  ];
  }
  }