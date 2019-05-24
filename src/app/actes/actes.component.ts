import { Component, OnInit, HostListener, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { MDBBootstrapModule, MdbTableDirective,MdbTablePaginationComponent, } from 'angular-bootstrap-md';
import { Router } from '@angular/router';
import { ActesService } from '../actes.service';


@Component({
  selector: 'app-actes',
  templateUrl: './actes.component.html',
  styleUrls: ['./actes.component.scss']
})
export class ActesComponent implements OnInit, AfterViewInit {

  @ViewChild(MdbTableDirective) mdbTable: MdbTableDirective;
  @ViewChild(MdbTablePaginationComponent) mdbTablePagination: MdbTablePaginationComponent;


  searchText: string = '';
  previous: string;
  elements;
  headElements = ['id', 'code_greffe', 'nom_greffe', 'numero_gestion', 'siren', 'date_depot', 'numero_depot', 'date_acte', 'type_acte', 'decision', 'etat', 'file_name', 'created_at'];


  constructor(private route: Router, private res: ActesService,private cdRef: ChangeDetectorRef) { }


  @HostListener('input') oninput() {
    this.searchItems();
  }
 

  ngOnInit() {

    this.res.getActes().subscribe(
      data => {
        this.elements = data;
        console.log(this.elements);
      
    
        this.mdbTable.setDataSource(this.elements);
        this.elements = this.mdbTable.getDataSource();
        this.previous = this.mdbTable.getDataSource();
      });
  }
  


  ngAfterViewInit() {
    this.mdbTablePagination.setMaxVisibleItemsNumberTo(5);

    this.mdbTablePagination.calculateFirstItemIndex();
    this.mdbTablePagination.calculateLastItemIndex();
    this.cdRef.detectChanges();
  }

searchItems() {
    const prev = this.mdbTable.getDataSource();

    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.elements = this.mdbTable.getDataSource();
    }

    if (this.searchText) {
      this.elements = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }
  }


}

