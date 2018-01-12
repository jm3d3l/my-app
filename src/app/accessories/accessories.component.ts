import { ProductsComponent } from './../products/products.component';
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
// import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls  : ['./accessories.component.css'],
  providers  : [RestService]
})
export class AccessoriesComponent implements OnInit {
 products: any = [];
 selectedIndex: any;
price: number;
item: string;
totalPrice: number = 0;

  constructor( private rest: RestService) { 
  }
 
  onClick(index: string) {
     this.selectedIndex = index;
     console.log(this.selectedIndex.item);
     this.totalPrice += this.selectedIndex.price;
     console.log(this.totalPrice);
  }
  ngOnInit() {
     this.rest.get('api/product').subscribe( res => {
      this.products = res.result;
      console.log(this.products);
     });
  }

}
