import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export class Game {
  title?: string;
  platform?: string;
  genre?: string;
  release?: Date;
}

@Injectable({
  providedIn: 'root',
})
export class CrudService {
	
  endpoint = 'http://localhost:3000';
  
  constructor(private httpClient: HttpClient) {}
  
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  
  getAllGamesLocal(): Observable<Game> {
    return this.httpClient
      .get<Game>('/assets/games_list.json')
      .pipe(retry(1), catchError(this.processError));
  }
  
  getAllGamesRemote(): Observable<Game> {
    return this.httpClient
      .get<Game>(this.endpoint + '/allgames')
      .pipe(retry(1), catchError(this.processError));
  }
  
  processError(err: any) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
	console.log("PROCESS ERROR");
    console.log(message);
    return throwError(() => {
      message;
    });
  }
}