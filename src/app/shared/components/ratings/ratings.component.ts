import { Component, Input } from '@angular/core';
import { IconDefinition, faStar, faStarHalfStroke, } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent {

  faStar = faStar;
  faStarHalf = faStarHalfStroke;
  faStarEmpty = faStarEmpty;

  stars: IconDefinition[] = [];

  private _score: number = 0;

  @Input()
  set score(val: number) {
    this._score = val > 5 ? 5 : val;
    
    const solidStarCount: number = Math.floor(this._score);
    
    for(let i:number=0;i<5;i++){
      if(i<solidStarCount){
        this.stars.push(faStar);
      }else{
        this.stars.push(faStarEmpty);
      }
    }
}
}
