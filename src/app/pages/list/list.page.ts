import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista', { static: false }) lista;

  users: Observable<any>;

  constructor(private dataService: DataService, private toastCtrl: ToastController) { }

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message,
      color,
      duration: 2000
    });
    toast.present();
  }

  favorite(user) {
    this.presentToast('Guardó en favoritos', 'success');
    this.lista.closeSlidingItems();
  }
  share(user) {
    this.presentToast('Compartido!', 'primary');
    this.lista.closeSlidingItems();
  }
  delete(user) {
    this.presentToast('Borrado!', 'danger');
    this.lista.closeSlidingItems();
  }
}
