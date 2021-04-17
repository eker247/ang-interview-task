import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { APP_KEY } from 'src/app/shared/constants/constants';
import { UserMap } from 'src/app/user/models/user-map';
import { User } from 'src/app/user/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private httpService: HttpClient) { }

  getUsers(): Observable<UserMap> {
    const storedUsers = JSON.parse(localStorage.getItem(`${APP_KEY} users`) || null) as UserMap;

    return storedUsers ? of(storedUsers) : this.httpService.get('assets/user.json').pipe(
      map((resp: any) =>
        (resp.userList as User[]).reduce((acc: any, curr: User) => {
          acc[curr.id] = curr;
          return acc;
        }, {}),
      ),
    );
  }

  saveUsers(users: UserMap): Observable<UserMap> {
    localStorage.setItem(`${APP_KEY} users`, JSON.stringify(users));
    return of(users);
  }
}
