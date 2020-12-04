import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async abrirModal() {
    const modal = await this.modalCtrl.create({
      animated: true,
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Fernando',
        pais: 'Costa Rica'
      },
      mode: 'ios',
      showBackdrop: true,
      cssClass: "md--max-height"
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();
    console.log('Retorno del modal ', data);
    console.log(JSON.stringify(data));
  }
}
