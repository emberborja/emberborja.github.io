import { ISuperhero, IServerSuperhero } from './superhero';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperheroDataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<ISuperhero[]> {
    return this.http.get<IServerSuperhero[]>(
      'https://tppublic.blob.core.windows.net/test-data/super-heroes.json'
    ).pipe(
        map(o => o.map((ss): ISuperhero => ({
            id: ss.id,
            superheroName: ss.name,
            realName: ss.biography['full-name'] || "Unknown",
            image: ss.image
        }))));
  }
}
