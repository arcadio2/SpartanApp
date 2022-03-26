import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user!:User; 

  constructor(private auth:AuthService) { }


  ngOnInit(): void {
    this.loadingUser(); 

  }

  loadingUser(){
    this.user = this.auth.usuario;
  }

}
