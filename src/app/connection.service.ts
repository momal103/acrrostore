import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  url: string = 'http://localhost:3000/send';

  constructor(private httpClient: HttpClient) { }

  sendMessage(messageContent: any){
    return this.httpClient.post(this.url,
                                JSON.stringify(messageContent),
                                { headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
                                  responseType: 'text'
                                }
                              )
  }
}
