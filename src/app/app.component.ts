import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pixow';

  constructor(
    public translate: TranslateService,
    private el: ElementRef
  ) {
    translate.addLangs(['en', 'zh-CN']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|zh-CN/) ? browserLang : 'en');
  }
}
