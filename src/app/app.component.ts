import { Component } from '@angular/core';
import { User } from './models/User';
import { Router } from '@angular/router';
import { RemoteDataService } from './services/remote-data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Techit';
	paths : {}[]
	userId:string

	constructor(private router: Router, private dataService: RemoteDataService) {
		this.paths = [
		{title: 'Home', url: 'home'}];
	}
	ngOnInit(){
		this.dataService.setUserId(localStorage.getItem('userId'))
		console.log(this.dataService.userId)
		this.dataService.userIdSubject.subscribe(userId=> this.userId=userId)
	}

	logout():void {
		localStorage.removeItem("token")
		localStorage.removeItem("exp")
		localStorage.removeItem("userId")
		this.dataService.setUserId(null)
		this.router.navigateByUrl('login');
	}
	
}
