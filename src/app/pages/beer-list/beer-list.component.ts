import { Component, OnInit } from '@angular/core';

import { NavBar } from '../../shared/navbar/navbar';

@Component({
  selector: 'app-beer-list',
  styleUrls: ['beer-list.component.scss'],
  templateUrl: './beer-list.component.html'
})
export class BeerListComponent {

  defaultBeerImg: string = 'https://freeiconshop.com/wp-content/uploads/edd/beer-solid.png';

  beers: any[] = [
    { brewery: 'Brouwerij de Werf', name: 'Meermoid', imgUrl: this.defaultBeerImg },
    { brewery: 'Brewdog', name: 'Punk IPA', imgUrl: this.defaultBeerImg },
    { brewery: 'Uiltje', name: 'Joost Mag Het Weten', imgUrl: this.defaultBeerImg },
  ];
}
