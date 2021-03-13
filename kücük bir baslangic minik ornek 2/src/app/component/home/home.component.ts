import { HomeServiceService } from './../../service/home-service.service';
import { Name } from './../../models/home';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  myname: Name = {
    name: 'Ceranika',
  };
  constructor(private homeService:HomeServiceService) {}

  ngOnInit(): void {}
}
