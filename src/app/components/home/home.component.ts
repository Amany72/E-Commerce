import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/core/services/products.service';

import { TextCutPipe } from 'src/app/core/pipes/text-cut.pipe';

import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';


import { Poducts } from 'src/app/interfaces/poducts';
import { Categories } from 'src/app/interfaces/categories';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { SearchPipe } from 'src/app/core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule ,TextCutPipe,CarouselModule, RouterLink , SearchPipe , FormsModule],

templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _ProductsService:ProductsService , private _CartService:CartService , private _ToastrService:ToastrService , private _Renderer2:Renderer2){}

products:Poducts[]= [];
categories:Categories[]=[];
term:string='';

  ngOnInit(): void {
    this._ProductsService.getProducts().subscribe({
      next: (response) =>{

// console.log('products' , response.data);
this.products=response.data;
      },
    });

this._ProductsService.getCategories().subscribe({

  next:(response)=>{
    // console.log('Categories',response);
    this.categories=response.data;
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
  categorieOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['Next', 'Previous'],
    autoplay:true,
    autoplayTimeout:3000,
    autoplaySpeed:1000,
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: false
  };


 staticSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:3000,
    autoplaySpeed:1000,
    navText: ['Next', 'Previous'],
    items:1,

    nav: false
  };


}
