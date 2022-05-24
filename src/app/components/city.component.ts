import { FormBuilder, Validators } from '@angular/forms'
import { Store } from '@ngrx/store';
import { Component,OnInit } from '@angular/core';    
import { Observable,BehaviorSubject } from 'rxjs';
import * as fromWeatherReducer from '../reducers/weather.reducer';
import * as fromActions from '../actions/weatherAction';
;
import { WeatherState } from '../reducers/app.states';


import { cityReq,RootObjCity,RootObj } from '../interfaces/cityWeather';
import { coordReq,RootObject,CurrentObject, Current } from '../interfaces/coordWeather';
@Component({
	selector: 'app-city',
	templateUrl: 'city.component.html'
})
export class CityComponent implements OnInit{
  city$: Observable<RootObjCity| undefined>;
  panelOpenState=false;
  cities=["Jerusalem,IL","London,UK"];
  selectedValue:string="";
  //result = new BehaviorSubject([]);
	constructor( private store: Store<WeatherState>) {
    this.city$ = store.select(fromWeatherReducer.GetCityRep);
    
	}
    getData(data:RootObjCity|undefined):RootObj[]|undefined{
return data?[new RootObj(data)]:undefined;
    }
    selectCity(){
        const city:cityReq={city:this.selectedValue};
              this.store.dispatch(fromActions.GetRepByCity({payload: city,urlGet:"\\Weather\\fetcityRep"}));
    }
    ngOnInit() {
       
        const city:cityReq={city:this.cities[0]};
              this.store.dispatch(fromActions.GetRepByCity({payload: city,urlGet:"\\Weather\\fetcityRep"}));
             
        
      
        
       
             }


     
	
	
}	