import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, mergeMap, catchError, debounceTime } from 'rxjs/operators';
import * as fromActions from '../actions/login.actions';
import { LoginService } from '../services/login.sevice';

@Injectable()
export class LoginEffects {

  constructor(
    private actions$: Actions,
    private loginService: LoginService
  ) { }

  

  searchArticleById$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.SineIn),
    map(action => action.payload),
    switchMap(user =>
          this.loginService.getUser(user).pipe(
            map(res => 
                fromActions.GetByIdSuccessAction({payload:res}  ))
          )
        )
        // Errors are handled and it is safe to disable resubscription
      
    
  ));
//   setnull$ = createEffect(() => this.actions$.pipe(
//     ofType(fromActions.GetByIdErrorAction)
//     //map(action => action.payload),
   
//         // Errors are handled and it is safe to disable resubscription
      
    
//   ));
//   searchArticleById$ = createEffect(() => this.actions$.pipe(
//     ofType(fromActions.SineIn),
//     debounceTime(500),
//     map(action => action.payload),
//     switchMap(user =>
//       this.loginService.sineIn(user).pipe(
//         map(res => fromActions.SineIn({payload: res}))
//       )
//     )
//   ));
  
}