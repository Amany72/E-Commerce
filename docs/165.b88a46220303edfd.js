"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[165],{5165:(P,d,o)=>{o.r(d),o.d(d,{ProductDetailsComponent:()=>v});var n=o(6814),a=o(756),t=o(4769),l=o(1120),u=o(1132),p=o(6286),m=o(2425);function g(s,_){if(1&s&&t._UZ(0,"img",17),2&s){const e=t.oxw().$implicit;t.Q6J("src",e,t.LSH)}}function f(s,_){1&s&&(t.ynx(0),t.YNc(1,g,1,1,"ng-template",16),t.BQk())}function h(s,_){if(1&s){const e=t.EpF();t.TgZ(0,"section",1)(1,"div",2)(2,"div",3)(3,"owl-carousel-o",4),t.YNc(4,f,2,0,"ng-container",5),t.qZA()(),t.TgZ(5,"div",6)(6,"div")(7,"h2",7),t._uU(8),t.qZA(),t.TgZ(9,"p",8),t._uU(10),t.qZA(),t.TgZ(11,"span"),t._uU(12),t.qZA(),t.TgZ(13,"div",9)(14,"span",10),t._uU(15),t.ALo(16,"currency"),t.qZA(),t.TgZ(17,"p",11),t._UZ(18,"i",12),t._uU(19),t.qZA()(),t.TgZ(20,"button",13,14),t.NdJ("click",function(){t.CHM(e);const r=t.MAs(21),c=t.oxw();return t.KtG(c.addProduct(c.details._id,r))}),t._UZ(22,"i",15),t._uU(23," Add To Cart"),t.qZA()()()()()}if(2&s){const e=t.oxw();t.xp6(3),t.Q6J("options",e.detailsOptions),t.xp6(1),t.Q6J("ngForOf",e.details.images),t.xp6(4),t.hij(" ",e.details.title," "),t.xp6(2),t.hij(" ",e.details.description," "),t.xp6(2),t.hij(" ",e.details.category.name," "),t.xp6(3),t.hij(" ",t.xi3(16,7,e.details.price,"EGP")," "),t.xp6(4),t.hij(" ",e.details.ratingsAverage," ")}}let v=(()=>{class s{constructor(e,i,r,c,x){this._ActivatedRoute=e,this._ProductsService=i,this._Renderer2=r,this._CartService=c,this._ToastrService=x,this.details=null,this.detailsOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!1,navSpeed:700,navText:["",""],items:1,nav:!0}}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:e=>{this.productId=e.get("id"),console.log(this.productId)}}),this._ProductsService.getProductDetails(this.productId).subscribe({next:({data:e})=>{console.log(e),this.details=e}})}addProduct(e,i){this._Renderer2.setAttribute(i,"disabled","true"),this._CartService.addToCart(e).subscribe({next:r=>{this._ToastrService.success(r.message),this._Renderer2.removeAttribute(i,"disabled"),this._CartService.cartNumber.next(r.numOfCartItems)},error:()=>{this._Renderer2.removeAttribute(i,"disabled")}})}static#t=this.\u0275fac=function(i){return new(i||s)(t.Y36(l.gz),t.Y36(u.s),t.Y36(t.Qsj),t.Y36(p.N),t.Y36(m._W))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-product-details"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","w-75 py-4 shadow my-3 rounded-5 mx-auto",4,"ngIf"],[1,"w-75","py-4","shadow","my-3","rounded-5","mx-auto"],[1,"row","align-items-center","g-5","px-4"],[1,"col-md-3"],[3,"options"],[4,"ngFor","ngForOf"],[1,"col-md-9"],[1,"fw-bold","fs-3","text"],[1,"small","text-muted"],[1,"d-flex","justify-content-between","align-items-center"],[1,"my-2"],[1,"mb-0"],[1,"rating-color","fas","fa-star"],[1,"main-btn","my-0","py-2","w-100",3,"click"],["addBtn",""],[1,"fa-solid","fa-circle-plus",2,"color","#ffffff"],["carouselSlide",""],[1,"w-100",3,"src"]],template:function(i,r){1&i&&t.YNc(0,h,24,10,"section",0),2&i&&t.Q6J("ngIf",r.details)},dependencies:[n.ez,n.sg,n.O5,n.H9,a.bB,a.Fy,a.Mp]})}return s})()}}]);