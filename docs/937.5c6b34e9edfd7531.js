"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[937],{937:(l,a,s)=>{s.r(a),s.d(a,{CategoriesComponent:()=>u});var r=s(6814),t=s(4769),i=s(1132);function c(e,g){if(1&e&&(t.TgZ(0,"div",4)(1,"div",5),t._UZ(2,"img",6),t.TgZ(3,"h3",7),t._uU(4),t.qZA()()()),2&e){const o=g.$implicit;t.xp6(2),t.Q6J("src",o.image,t.LSH)("alt",o.name),t.xp6(2),t.hij(" ",o.name,"\n")}}let u=(()=>{class e{constructor(o){this._ProductsService=o,this.categoryData=[]}ngOnInit(){this._ProductsService.getCategories().subscribe({next:o=>{this.categoryData=o.data}})}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(i.s))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-categories"]],standalone:!0,features:[t.jDz],decls:5,vars:1,consts:[[1,"my-5"],[1,"fw-bold","text","text-center","my-4"],[1,"row","g-4","justify-content-center"],["class","col-sm-6 col-md-4 col-lg-3",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-4","col-lg-3"],[1,"p-2","shadow","rounded","border","border-success"],["height","280",1,"w-100",3,"src","alt"],[1,"text-center","text"]],template:function(n,_){1&n&&(t.TgZ(0,"section",0)(1,"h2",1),t._uU(2,"All Categories"),t.qZA(),t.TgZ(3,"div",2),t.YNc(4,c,5,3,"div",3),t.qZA()()),2&n&&(t.xp6(4),t.Q6J("ngForOf",_.categoryData))},dependencies:[r.ez,r.sg]})}return e})()},1132:(l,a,s)=>{s.d(a,{s:()=>i});var r=s(4769),t=s(9862);let i=(()=>{class c{constructor(e){this._HttpClient=e,this.baseURL="https://ecommerce.routemisr.com/api/v1/"}getProducts(e=1){return this._HttpClient.get(this.baseURL+`products?page=${e}`)}getCategories(){return this._HttpClient.get(this.baseURL+"categories")}getProductDetails(e){return this._HttpClient.get(this.baseURL+`products/${e}`)}static#t=this.\u0275fac=function(g){return new(g||c)(r.LFG(t.eN))};static#e=this.\u0275prov=r.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()}}]);