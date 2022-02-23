import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
    
    submitted = false;

    constructor(private formBuilder:FormBuilder){}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
          nombre:['',[Validators.required]],
          password:['',[Validators.required]]
        })
      /*      this.loginForm = new FormGroup({
            'login': new FormControl('', Validators.required),
            'password': new FormControl('', Validators.required)
        }); */
    }
    
    onSubmit() { 
        this.submitted = true;
        alert(JSON.stringify(this.loginForm.value));
    }

}
