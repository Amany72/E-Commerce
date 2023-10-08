import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-navbar-blank',
  standalone: true,
  imports: [CommonModule , RouterLink , RouterLinkActive],
  templateUrl: './navbar-blank.component.html',
  styleUrls: ['./navbar-blank.component.scss']
})
export class NavbarBlankComponent implements OnInit {
constructor(private _Router:Router , private _CartService:CartService , private _Renderer2:Renderer2){}

@ViewChild('navScroll') navElement!:ElementRef;
@HostListener('window.scroll')
onScroll():void{
if(scrollY >500){
  this._Renderer2.addClass(this.navElement.nativeElement , 'shadow');
}else{
  this._Renderer2.removeClass(this.navElement.nativeElement , 'shadow');
}

}
changeCartNum:number=0;

ngOnInit(): void {
this._CartService.cartNumber.subscribe({
  next:(numOfProduct)=>{
    // console.log(numOfProduct);
    this.changeCartNum=numOfProduct;
  }
});


this._CartService.getUserCart().subscribe({
  next: (response)=>{
    // console.log(response);
    this.changeCartNum =response.numOfCartItems;
  }
});

}



  logOut():void{
    localStorage.removeItem('ltoken');
    this._Router.navigate(['/login']);

  }
}
