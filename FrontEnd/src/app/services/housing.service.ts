import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/property-card/IProperty';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) {

   }
   getAllProperties(SellRent:number){
    return this.http.get('data/properties.json').
    pipe(
     map(data=>{
      const properties:Array<IProperty>=[];
      if(Array.isArray(data))
      {
      for(const id in data)
        {
          debugger;
          if(data.hasOwnProperty(id) && data[id].SellRent===SellRent)
         {
           properties.push(data[id]);
          }
        }
      }
        return properties;
      }
      )
    );
   }
}
