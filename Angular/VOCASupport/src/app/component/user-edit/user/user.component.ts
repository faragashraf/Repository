import { UsersController } from './../../../shared/service-proxies/service-proxies';
import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private users:UsersController) { }

  ngOnInit(): void {

this.users.getById(1).subscribe(res=>{
  let token = localStorage.getItem("jwtVOCA");
  let JwtHelper = new JwtHelperService();
  if(token!=null){
    let jj = JwtHelper.decodeToken(token);
    jj.role;
    Swal.fire('Any fool can use a computer')
  }

})
  }

}
