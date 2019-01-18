import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    // set ScrollSpy for Animations
    $(window).scroll(function () {
      if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
      } else {
        $('nav').removeClass('shrink');
      }
    });
    // set Mock
    localStorage.setItem('gallery', JSON.stringify(this.gallery));
    localStorage.setItem('carousel', JSON.stringify(this.carousel));
    localStorage.setItem('institutionalData', JSON.stringify(this.institutionalData));
    localStorage.setItem('beautyServices', JSON.stringify(this.beautyServices));
  }

  // TODO: change origin to an API
  // Mocked Items
  gallery: any = [
    {
      src: 'assets/images/g1.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/g1.jpg'
    },
    {
      src: 'assets/images/g2.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/g2.jpg'
    },
    {
      src: 'assets/images/g3.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/g3.jpg'
    },
    {
      src: 'assets/images/g4.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/g4.jpg'
    },
    {
      src: 'assets/images/g5.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/g5.jpg'
    },
    {
      src: 'assets/images/g6.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/g6.jpg'
    },
    {
      src: 'assets/images/g7.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/g7.jpg'
    },
    {
      src: 'assets/images/g8.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/g8.jpg'
    },
  ];

  carousel: any = [
    {
      src: 'assets/images/m1.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/m1.jpg'
    },
    {
      src: 'assets/images/m2.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/m2.jpg'
    },
    {
      src: 'assets/images/m3.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/m3.jpg'
    },
    {
      src: 'assets/images/m4.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/m4.jpg'
    },
    {
      src: 'assets/images/m5.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/m5.jpg'
    },
    {
      src: 'assets/images/m6.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/m6.jpg'
    },
    {
      src: 'assets/images/m7.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/m7.jpg'
    },
    {
      src: 'assets/images/m8.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/m8.jpg'
    },
    {
      src: 'assets/images/m9.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/m9.jpg'
    },
  ];

  institutionalData = {
    facebook: 'https://www.facebook.com/NicoleLeifheitMakeup/',
    whatsApp: 'https://api.whatsapp.com/send?1=pt_BR&phone=5551997908803',
    instagram: 'https://www.instagram.com/nicole_leifheit_makeup/',
    phone: '(51) 99790-8803',
    email: '',
    location: {
      address: 'Bairro Guajuviras - Rua Trinta, Nº 07',
      city: 'Canoas RS',
      latitude: '',
      longitude: ''
    }
  }

  makeupServices = [
    {
      title: 'Maquiagem Artística',
      price: '~~',
      keywords: ['Duração variada', 'Caracterização', 'Transformação', 'Efeitos Especiais'],
      description: 'loren ipsum'
    },
    {
      title: 'Maquiagem Profissional',
      price: '~~',
      keywords: ['Duração variada', 'SunStripping', 'Cerimônias', 'Makeover'],
      description: 'loren ipsum'
    },
  ];
  eyebrowServices = [
    {
      title: 'Design Tradicional',
      price: '60',
      keywords: ['Duração média de 30min', 'Eyebrow Design', 'Shaping', 'Extreme Care'],
      description: 'loren ipsum'
    },
    {
      title: 'Design com Henna',
      price: '80',
      keywords: ['Duração média de 1 hora', 'Eyebrow Makeover', 'Henna', 'Shaping'],
      description: 'loren ipsum'
    },
  ];
  depilationServices = [
    {
      title: 'Depilação Egípcia Facial',
      price: '30',
      keywords: ['Duração média de 30min', 'Linhas Soft', 'Evita Pelos Encravados', 'Não Causa Alergias'],
      description: 'loren ipsum'
    },
  ];

  beautyServices = [this.makeupServices, this.eyebrowServices, this.depilationServices];

}
