import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-certificat-negatif',
  templateUrl: './certificat-negatif.component.html',
  styleUrls: ['./certificat-negatif.component.css']
})
export class CertificatNegatifComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  @Input() hidden:boolean = false;

}
