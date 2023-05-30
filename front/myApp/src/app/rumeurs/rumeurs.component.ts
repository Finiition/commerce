import { Component, Input } from '@angular/core';
import { WindowRef } from '../window-ref.service';

@Component({
  selector: 'app-rumeurs',
  templateUrl: './rumeurs.component.html',
  styleUrls: ['./rumeurs.component.css']
})
export class RumeursComponent {

  constructor(private windowRef: WindowRef) {}

  public divActive = false;
  
  public urlImageZoomed = "";

  urlMain = "../../assets/images/";
  balenos = [
    { url: 'Velia/General_true.JPG', title: 'General', pnj: 'Clorince' },
    { url: 'Velia/raw_true.JPG', title: 'Matières premières', pnj: 'Bahar'  },
    { url: 'Velia/Clothe_true.JPG', title: 'Vêtements', pnj: 'Bahar'  },
    { url: 'Velia/Medic_true.JPG', title: 'Médicaments', pnj: 'Zaaria'  },
    { url: 'Velia/Food_true.JPG', title: 'Nourriture', pnj: 'Nadia Rowen'  },
    { url: 'Velia/Milit_true.JPG', title: 'Militaire', pnj: 'Tranan Underfoe'  },
    { url: 'Velia/luxe_true.JPG', title: 'Luxe', pnj: 'Marsella'  },
    { url: 'Velia/Relique_true.JPG', title: 'Reliques', pnj: 'Bahar'  },
  ];

  serendia = [
    { url: 'Heidel/Gene_true.JPG', title: 'General', pnj: '???' },
    { url: 'Heidel/Raw_true.JPG', title: 'Matières premières', pnj: 'Suita'  },
    { url: 'Heidel/Clothe_true.JPG', title: 'Vêtements', pnj: '???'  },
    { url: 'Heidel/Medic_true.JPG', title: 'Médicaments', pnj: 'Lara'  },
    { url: 'Heidel/food_true.JPG', title: 'Nourriture', pnj: '???'  },
    { url: 'Heidel/Milit_true.JPG', title: 'Militaire', pnj: 'Techthon'  },
    { url: 'Heidel/Luxe_true.JPG', title: 'Luxe', pnj: 'George Fusto'  },
    { url: 'Heidel/relique_true.JPG', title: 'Reliques', pnj: '???'  },
  ];

  calpheon = [
    { url: 'Calpheon/Gene_true.JPG', title: 'General', pnj: '???' },
    { url: 'Calpheon/Raw_true.JPG', title: 'Matières premières', pnj: '???'  },
    { url: 'Calpheon/clothe_true.JPG', title: 'Vêtements', pnj: '???'  },
    { url: 'Calpheon/Medic_true.JPG', title: 'Médicaments', pnj: '???'  },
    { url: 'Calpheon/Food_true.JPG', title: 'Nourriture', pnj: '???'  },
    { url: 'Calpheon/Mili_true.JPG', title: 'Militaire', pnj: '???'  },
    { url: 'Calpheon/Luxe_true.JPG', title: 'Luxe', pnj: '???'  },
    { url: 'Calpheon/Relic_true.JPG', title: 'Reliques', pnj: '???'  },
  ];

  mediah = [
    { url: 'Mediah/Gene-true.JPG', title: 'General', pnj: "Nelople" },
    { url: 'Mediah/raw_true.JPG', title: 'Matières premières', pnj: 'Quina'  },
    { url: 'Mediah/Clothe_true.JPG', title: 'Vêtements', pnj: 'Lucy Benkum'  },
    { url: 'Mediah/Medic_true.JPG', title: 'Médicaments', pnj: 'Lashir'  },
    { url: 'Mediah/food_true.JPG', title: 'Nourriture', pnj: '???'  },
    { url: 'Mediah/Mili_true.JPG', title: 'Militaire', pnj: 'Mevo Muranan'  },
    { url: 'Mediah/luxe_true.JPG', title: 'Luxe', pnj: 'Belgar'  },
    { url: 'Mediah/relic_true.JPG', title: 'Reliques', pnj: 'Patrigio'  },
  ];

  valencia = [
    { url: 'Valencia/General_Goods_true.JPG', title: 'General', pnj: "???" },
    { url: 'Valencia/raw_true.JPG', title: 'Matières premières', pnj: '???'  },
    { url: 'Valencia/clothe_true.JPG', title: 'Vêtements', pnj: 'Burita Allon'  },
    { url: 'Valencia/medic_true.JPG', title: 'Médicaments', pnj: '???'  },
    { url: 'Valencia/food_true.JPG', title: 'Nourriture', pnj: '???'  },
    { url: 'Valencia/mili_true.JPG', title: 'Militaire', pnj: '???'  },
    { url: 'Valencia/luxe_true.JPG', title: 'Luxe', pnj: '???'  },
    { url: 'Valencia/relic_true.JPG', title: 'Reliques', pnj: '???'  },
  ];

  kamasylve = [
    { url: 'Mediah/Gene-true.JPG', title: 'General', pnj: "Nelople" },
    { url: 'Mediah/raw_true.JPG', title: 'Matières premières', pnj: 'Quina'  },
    { url: 'Mediah/Clothe_true.JPG', title: 'Vêtements', pnj: 'Lucy Benkum'  },
    { url: 'Mediah/Medic_true.JPG', title: 'Médicaments', pnj: 'Lashir'  },
    { url: 'Mediah/food_true.JPG', title: 'Nourriture', pnj: '???'  },
    { url: 'Mediah/Mili_true.JPG', title: 'Militaire', pnj: 'Mevo Muranan'  },
    { url: 'Mediah/luxe_true.JPG', title: 'Luxe', pnj: 'Belgar'  },
    { url: 'Mediah/relic_true.JPG', title: 'Reliques', pnj: 'Patrigio'  },
  ];

  drieghan = [
    { url: 'Mediah/Gene-true.JPG', title: 'General', pnj: "Nelople" },
    { url: 'Mediah/raw_true.JPG', title: 'Matières premières', pnj: 'Quina'  },
    { url: 'Mediah/Clothe_true.JPG', title: 'Vêtements', pnj: 'Lucy Benkum'  },
    { url: 'Mediah/Medic_true.JPG', title: 'Médicaments', pnj: 'Lashir'  },
    { url: 'Mediah/food_true.JPG', title: 'Nourriture', pnj: '???'  },
    { url: 'Mediah/Mili_true.JPG', title: 'Militaire', pnj: 'Mevo Muranan'  },
    { url: 'Mediah/luxe_true.JPG', title: 'Luxe', pnj: 'Belgar'  },
    { url: 'Mediah/relic_true.JPG', title: 'Reliques', pnj: 'Patrigio'  },
  ];

  montagne = [
    { url: 'Mediah/Gene-true.JPG', title: 'General', pnj: "Nelople" },
    { url: 'Mediah/raw_true.JPG', title: 'Matières premières', pnj: 'Quina'  },
    { url: 'Mediah/Clothe_true.JPG', title: 'Vêtements', pnj: 'Lucy Benkum'  },
    { url: 'Mediah/Medic_true.JPG', title: 'Médicaments', pnj: 'Lashir'  },
    { url: 'Mediah/food_true.JPG', title: 'Nourriture', pnj: '???'  },
    { url: 'Mediah/Mili_true.JPG', title: 'Militaire', pnj: 'Mevo Muranan'  },
    { url: 'Mediah/luxe_true.JPG', title: 'Luxe', pnj: 'Belgar'  },
    { url: 'Mediah/relic_true.JPG', title: 'Reliques', pnj: 'Patrigio'  },
  ];

  handleImageClick(image: any) {
    // Logique pour gérer le clic sur une image
    console.log('Image cliquée :', image);
  }

  openNewTab(urlImage: any) {
    this.divActive = true;
    this.urlImageZoomed = "http://localhost:4200/" + urlImage;
  }
}
