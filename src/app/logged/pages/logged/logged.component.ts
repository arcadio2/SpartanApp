import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {
  user!:User; 
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.loadingUser(); 
  }

  loadingUser(){
    this.user = this.auth.usuario;
  }

}
