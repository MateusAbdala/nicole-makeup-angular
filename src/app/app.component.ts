import { Component, OnInit } from '@angular/core';
declare var $: any, jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    $(document).ready(function () {
      jQuery(document).ready(function ($) {
        $(".scroll ").click(function (event) {
          event.preventDefault();
          $('html,body').animate({
            scrollTop: $(this.hash).offset().top
          }, 1000);
        });
      });
      $(document).ready(function () {
        $().UItoTop({
          easingType: 'easeOutQuart'
        });
      });
    });
    // set ScrollSpy for Navbar
    $(window).scroll(function () {
      if ($(document).scrollTop() > 50) {
        $('nav').addClass('shrink');
      } else {
        $('nav').removeClass('shrink');
      }
    });

    // set Mock
    localStorage.setItem('gallery', JSON.stringify(this.gallery));
    localStorage.setItem('institutionalData', JSON.stringify(this.institutionalData));
    localStorage.setItem('beautyServices', JSON.stringify(this.beautyServices));
  }

  // TODO: change origin to an API
  // Mocked Items
  gallery: any = [
    {
      id: 1,
      src: 'assets/images/g1.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/g1.jpg',
      order: null,
      modelsList: false
    },
    {
      id: 2,
      src: 'assets/images/g2.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/g2.jpg',
      order: null,
      modelsList: false
    },
    {
      id: 3,
      src: 'assets/images/g3.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/g3.jpg',
      order: null,
      modelsList: false
    },
    {
      id: 4,
      src: 'assets/images/g4.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/g4.jpg',
      order: null,
      modelsList: false
    },
    {
      id: 5,
      src: 'assets/images/g5.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/g5.jpg',
      order: null,
      modelsList: false
    },
    {
      id: 6,
      src: 'assets/images/g6.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/g6.jpg',
      order: null,
      modelsList: false
    },
    {
      id: 7,
      src: 'assets/images/g7.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/g7.jpg',
      order: null,
      modelsList: false
    },
    {
      id: 8,
      src: 'assets/images/g8.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/g8.jpg',
      order: null,
      modelsList: false
    },
    {
      id: 9,
      src: 'assets/images/m1.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/m1.jpg',
      order: null,
      modelsList: true
    },
    {
      id: 10,
      src: 'assets/images/m2.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/m2.jpg',
      order: null,
      modelsList: true
    },
    {
      id: 11,
      src: 'assets/images/m3.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/m3.jpg',
      order: null,
      modelsList: true
    },
    {
      id: 12,
      src: 'assets/images/m4.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/m4.jpg',
      order: null,
      modelsList: true
    },
    {
      id: 13,
      src: 'assets/images/m5.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/m5.jpg',
      order: null,
      modelsList: true
    },
    {
      id: 14,
      src: 'assets/images/m6.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/m6.jpg',
      order: null,
      modelsList: true
    },
    {
      id: 15,
      src: 'assets/images/m7.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/m7.jpg',
      order: null,
      modelsList: true
    },
    {
      id: 16,
      src: 'assets/images/m8.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/m8.jpg',
      order: null,
      modelsList: true
    },
    {
      id: 17,
      src: 'assets/images/m9.jpg',
      caption: 'Descrição da Imagem',
      thumb: 'assets/images/m9.jpg',
      order: null,
      modelsList: true
    },
  ];

  institutionalData = {
    facebook: 'https://www.facebook.com/NicoleLeifheitMakeup/',
    whatsApp: 'https://api.whatsapp.com/send?1=pt_BR&phone=5551997908803',
    instagram: 'https://www.instagram.com/nicole_leifheit_makeup/',
    phone: '(51) 99790-8803',
    email: 'nicole.leifheit.makeup@gmail.com',
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
