import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as oidc from "oidc-client";

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private rooter:Router) { }

  ngOnInit(): void {
    new oidc.UserManager({response_mode:'query'}).signinRedirectCallback()
    .then(()=>
    {
      this.rooter.navigateByUrl('/');
    });
  }

}
