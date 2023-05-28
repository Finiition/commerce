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

  urlMain = "../../assets/images/"
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

  handleImageClick(image: any) {
    // Logique pour gérer le clic sur une image
    console.log('Image cliquée :', image);
  }

  openNewTab(urlImage: any) {
    console.log('Image cliquée :', urlImage);
    this.divActive = true;
    this.urlImageZoomed = "http://localhost:4200/" + urlImage;
    /* this.windowRef.nativeWindow.open("http://localhost:4200/" + urlImage, '_blank'); */
  }
}
