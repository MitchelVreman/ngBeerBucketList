import { Component, NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavBar {
  constructor(private _router: Router) { }

  title : string = 'Collectables';

  isRoot(): boolean {
    return this._router.url == "/";
  }
}

@NgModule({
  imports: [MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, RouterModule, CommonModule],
  exports: [NavBar],
  declarations: [NavBar]
})
export class NavBarModule {}
