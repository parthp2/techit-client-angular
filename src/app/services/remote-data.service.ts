import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Ticket } from '../models/Ticket';
import { User } from '../models/User';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RemoteDataService {
  userId:string = null
  public userIdSubject: Subject<string> = new BehaviorSubject<string>(this.userId);

  constructor(private http: HttpClient) { }

  login(username, password):Observable<{token:string, exp:number, userId:string}>{
    return this.http.post<{token:string, exp:number, userId:string}>("/api/login", { username, password })
  }

  getTicketsRequested():Observable<{ title:string, tickets:Ticket[] }>{
    let headers = new HttpHeaders().append('Authorization', `Bearer ${localStorage.getItem("token")}`);
    return this.http.get<{ title:string, tickets:Ticket[] }>(`/api/users/${this.userId}/tickets`,{headers})
  }

  createTicket(ticket:Ticket):Observable<Ticket>{
    let headers = new HttpHeaders().append('Authorization', `Bearer ${localStorage.getItem("token")}`);
    return this.http.post<Ticket>("/api/tickets", ticket, {headers})
  }

  getUnits():Observable<any>{
    let headers = new HttpHeaders().append('Authorization', `Bearer ${localStorage.getItem("token")}`);
    return this.http.get<any>("/api/units", {headers})
  }
  
  setUserId(userId:string):void{
    this.userId = userId
    this.userIdSubject.next(this.userId)
  }

  getUserId():string{
    return this.userId
  }
}
