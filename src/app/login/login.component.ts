import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { RemoteDataService } from '../services/remote-data.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(private router: Router, private dataService: RemoteDataService) { }

	username : string;
	password : string;
	errMsg : string;

	ngOnInit() {}

	login() : void {
		this.dataService.login(this.username, this.password)
		.subscribe(({token, exp, userId})=>{
			localStorage.setItem("token", token)
			localStorage.setItem("exp", exp.toString())
			localStorage.setItem("userId", userId)
			this.dataService.setUserId(userId)
			console.log(userId)
			this.router.navigateByUrl('home');
		},
		(err:any)=>{
			console.log(err)
			this.errMsg = err.error.message
		}
	)}
}
