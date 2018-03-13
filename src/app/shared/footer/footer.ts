import { Component, NgModule } from '@angular/core';
import { VERSION } from '@angular/material';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss']
})
export class Footer {
  get version() {
    return '1.0.0-beta1';
    // const version = VERSION.full.match(/\d+\.\d+\.\d+/);
    // if (version) {
    //   return version[0];
    // }
    // else {
    //   return '';
    // }
  }
}

@NgModule({
  exports: [Footer],
  declarations: [Footer]
})
export class FooterModule {}
