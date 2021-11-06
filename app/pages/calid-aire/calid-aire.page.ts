import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Holiday } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-calid-aire',
  templateUrl: './calid-aire.page.html',
  styleUrls: ['./calid-aire.page.scss'],
})
export class CalidAirePage implements OnInit {

  holidays: Holiday[] = []

  constructor(private noticiasService: NoticiasService) { }
  
  ngOnInit() {
    this.noticiasService.getTopHeadLines().subscribe(resp=>{
      console.log('holidays', resp);
      this.holidays.push(...resp.response.holidays)
    });
  }

}
