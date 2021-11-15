import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  post = [
    {
      autor: 'Юля',
      zag: 'Котики',
      data: 'Сегодня',
      imageUrl:
        'https://bugaga.ru/uploads/posts/2017-03/1489052030_kotik-hosiko-12.jpg',
     
    },
    {
      autor: 'Дима',
      zag: 'Котики',
      data: 'Вчера',
      imageUrl:
        'https://img3.goodfon.ru/wallpaper/nbig/e/ca/kot-kotik-kote-kotenok-vzgliad-glaza-smotrit-korzina.jpg',
      
    },
    {
      autor: 'Стас',
      zag: 'Котики',
      data: 'Завтра',
      imageUrl:
        'https://mobimg.b-cdn.net/v3/fetch/c4/c493aac67877288476b0fc52d55f55cf.jpeg',

      
    },
    
  ];
  constructor() {}

  ngOnInit(): void {}
}
