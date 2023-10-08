"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[932],{6666:(A,g,l)=>{l.r(g),l.d(g,{LoginComponent:()=>I});var _=l(6814),i=l(95),u=l(1120),e=l(4769),p=l(5881);function c(o,a){1&o&&(e.TgZ(0,"p",16),e._uU(1,"Name Is Required"),e.qZA())}function d(o,a){1&o&&(e.TgZ(0,"p",16),e._uU(1,"Email Is Invalid"),e.qZA())}function f(o,a){if(1&o&&(e.TgZ(0,"div",14),e.YNc(1,c,2,0,"p",15),e.YNc(2,d,2,0,"p",15),e.qZA()),2&o){const r=e.oxw();let t,n;e.xp6(1),e.Q6J("ngIf",null==(t=r.loginForm.get("email"))?null:t.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(n=r.loginForm.get("email"))?null:n.getError("email"))}}function h(o,a){1&o&&(e.TgZ(0,"p",16),e._uU(1,"password Is Required"),e.qZA())}function Z(o,a){1&o&&(e.TgZ(0,"p",16),e._uU(1,"Password must be at least 6 characters "),e.qZA())}function v(o,a){if(1&o&&(e.TgZ(0,"div",14),e.YNc(1,h,2,0,"p",15),e.YNc(2,Z,2,0,"p",15),e.qZA()),2&o){const r=e.oxw();let t,n;e.xp6(1),e.Q6J("ngIf",null==(t=r.loginForm.get("password"))?null:t.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(n=r.loginForm.get("password"))?null:n.getError("pattern"))}}function T(o,a){1&o&&(e.TgZ(0,"span"),e._UZ(1,"i",17),e.qZA())}function x(o,a){if(1&o&&(e.TgZ(0,"p",18),e._uU(1),e.qZA()),2&o){const r=e.oxw();e.xp6(1),e.hij(" ",r.errorMessage," ")}}let I=(()=>{class o{constructor(r,t,n){this._AuthService=r,this._Router=t,this._FormBuilder=n,this.errorMessage="",this.loading=!1,this.loginForm=this._FormBuilder.group({email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required,i.kI.pattern(/^[a-zA-Z0-9_@]{6,}$/)]]})}handleForm(){const r=this.loginForm.value;this.loading=!0,!0===this.loginForm.valid&&this._AuthService.login(r).subscribe({next:t=>{"success"==t.message&&(console.log(t),localStorage.setItem("ltoken",t.token),this._AuthService.decodeUser(),this.loading=!1,this._Router.navigate(["/home"]))},error:t=>{this.errorMessage=t.error.message,this.loading=!1}})}static#e=this.\u0275fac=function(t){return new(t||o)(e.Y36(p.e),e.Y36(u.F0),e.Y36(i.qu))};static#o=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],standalone:!0,features:[e.jDz],decls:21,vars:6,consts:[[1,"w-80","mx-auto","shadow-sm","bg-main-light"],[1,"fw-bold","text-center","py-2"],[3,"formGroup","ngSubmit"],[1,"form-item","m-3"],["for","email"],["formControlName","email","type","email","id","email",1,"form-control"],["class","alert alert-danger small w-25 ",4,"ngIf"],["for","password"],["formControlName","password","type","password","id","password",1,"form-control"],[1,"d-flex","align-items-center","justify-content-between"],[1,"main-btn","my-3","text-center","m-3","p-3",3,"disabled"],[4,"ngIf"],["routerLink","/forgotpass",1,"link-success","px-4"],["class","alert alert-danger w-25 mx-auto text-center ",4,"ngIf"],[1,"alert","alert-danger","small","w-25"],["class","mb-0",4,"ngIf"],[1,"mb-0"],[1,"fas","fa-spin","fa-spinner"],[1,"alert","alert-danger","w-25","mx-auto","text-center"]],template:function(t,n){if(1&t&&(e.TgZ(0,"section",0)(1,"h1",1),e._uU(2," Login..Now"),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return n.handleForm()}),e.TgZ(4,"div",3)(5,"label",4),e._uU(6,"Email"),e.qZA(),e._UZ(7,"input",5),e.YNc(8,f,3,2,"div",6),e.qZA(),e.TgZ(9,"div",3)(10,"label",7),e._uU(11,"Password"),e.qZA(),e._UZ(12,"input",8),e.YNc(13,v,3,2,"div",6),e.qZA(),e.TgZ(14,"div",9)(15,"button",10),e._uU(16," Login"),e.YNc(17,T,2,0,"span",11),e.qZA(),e.TgZ(18,"a",12),e._uU(19,"ForgotPassword"),e.qZA()()(),e.YNc(20,x,2,1,"p",13),e.qZA()),2&t){let s,m;e.xp6(3),e.Q6J("formGroup",n.loginForm),e.xp6(5),e.Q6J("ngIf",(null==(s=n.loginForm.get("email"))?null:s.errors)&&(null==(s=n.loginForm.get("email"))?null:s.touched)),e.xp6(5),e.Q6J("ngIf",(null==(m=n.loginForm.get("password"))?null:m.errors)&&(null==(m=n.loginForm.get("password"))?null:m.touched)),e.xp6(2),e.Q6J("disabled",n.loginForm.invalid),e.xp6(2),e.Q6J("ngIf",n.loading),e.xp6(3),e.Q6J("ngIf",n.errorMessage)}},dependencies:[_.ez,_.O5,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,u.rH]})}return o})()}}]);