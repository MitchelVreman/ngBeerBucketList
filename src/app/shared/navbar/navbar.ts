import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavBar {

}

@NgModule({
  imports: [MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, RouterModule, CommonModule],
  exports: [NavBar],
  declarations: [NavBar]
})
export class NavBarModule {}
