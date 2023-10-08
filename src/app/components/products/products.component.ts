import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';
import { Poducts } from 'src/app/interfaces/poducts';
import { RouterLink } from '@angular/router';
import { TextCutPipe } from 'src/app/core/pipes/text-cut.pipe';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/core/services/cart.service';
import {NgxPaginationModule} from 'ngx-pagination';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule , RouterLink , TextCutPipe , NgxPaginationModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor (private _ProductsService:ProductsService , private _Renderer2:Renderer2 , private _CartService:CartService , private _ToastrService:ToastrService){}

  products:Poducts[]= [];
  pageSize:number=0;
  currentPage:number=1;
  total:number=0;

  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next: (response) =>{

// console.log('products' , response.data);
this.products=response.data;
this.pageSize= response.metadata.limit;
this.currentPage=response.metadata.currentPage;
this.total =response.results;
      },
    });
  }



  addProduct(id:any , element:HTMLButtonElement):void{
    //disabled Button
    this._Renderer2.setAttribute(element , 'disabled' , 'true');

    //Adding to cart
      this._CartService.addToCart(id).subscribe({

        next:(response)=>{
             // console.log(response.message);

             // console.log(response);
          this._ToastrService.success(response.message);

    // to enable button after adding
          this._Renderer2.removeAttribute(element , 'disabled');

          this._CartService.cartNumber.next(response.numOfCartItems);

        },
        error:()=>{
          this._Renderer2.removeAttribute(element , 'disabled');


        }
      });

    }


    pageChanged(event:any):void{
      this._ProductsService.getProducts(event).subscribe({
        next: (response) =>{

  // console.log('products' , response.data);
  this.products=response.data;
  this.pageSize= response.metadata.limit;
  this.currentPage=response.metadata.currentPage;
  this.total =response.results;
        },
      });

    }
}
