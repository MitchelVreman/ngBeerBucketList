import {Component, NgModule, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {FooterModule} from '../../shared/footer/footer';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
}

@NgModule({
  imports: [MatButtonModule, FooterModule, RouterModule],
  exports: [HomepageComponent],
  declarations: [HomepageComponent],
})
export class HomepageModule {}
