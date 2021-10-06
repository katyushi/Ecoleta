import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public name = '';
  public adrex = '';
  public adrexL2 = '';
  public pscode = '';
  public city = '';
  public cont = '';

  constructor(public emailComposer: EmailComposer) { }

  ngOnInit() {
  }

  public send() {
    const email = {
      to: 'ecoletateam@gmail.com',
      cc: [],
      bcc: [],
      subject: 'ecoleta collection request',
      body:
        this.name + ' ' +
        'request a collection on:' + ' ' +
        this.adrex + ', ' + this.adrexL2 + ', ' + this.pscode + ' ' +
        'on this city:' + ' ' + this.city + ', ' +
        'on this county:' + ' ' + this.cont
        ,
      isHtml: false
    };
    this.emailComposer.open(email);
  }
}
