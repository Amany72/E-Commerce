import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export default class RegisterComponent {

constructor (private _AuthService:AuthService , private _Router:Router , private _FormBuilder:FormBuilder){}

errorMessage:string ='';
loading:boolean=false;


registerForm: FormGroup = this._FormBuilder.group(
  {

    name: ['' ,  [Validators.required , Validators.minLength(3) , Validators.maxLength(20)] ],
    email:['' , [Validators.required , Validators.email]],
    password:['' , [Validators.required , Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]],
    rePassword:[''],
    phone:['' , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]]
  },
  {

       validators:[this.checkPassword]
      }  as FormControlOptions);






checkPassword(checkGroup:FormGroup):void{
const password=checkGroup.get('password');
const rePassword =checkGroup.get('rePassword');

if(rePassword?.value ==''){
  rePassword?.setErrors( { required:true } )
}

else if (password?.value != rePassword?.value ){

  rePassword?.setErrors( { errorr:true } )

}


}
handleForm():void{
const userData =this.registerForm.value;
this.loading=true;

if(this.registerForm.valid ===true){
  this._AuthService.register(userData).subscribe({
    next: (response) =>{

if(response.message == "success"){
  this.loading=false;


this._Router.navigate(['/login']);

}

    },
      error: (err) =>{
      this.errorMessage =err.error.message;

      this.loading=false;

      },

  });
}
}

}





