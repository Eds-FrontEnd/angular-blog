import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss',
  './top-bar.component.responsive.scss']
})
export class TopBarComponent implements OnInit {

  menuAberto = true;
  isMobile = false;

  constructor(private deviceService: DeviceDetectorService) {}

  ngOnInit() {
    this.isMobile = this.deviceService.isMobile();

    // Se não for um dispositivo móvel, mantenha o menu sempre aberto
    if (!this.isMobile) {
      this.menuAberto = false;
    } else {
      this.menuAberto = true;
    }
  }

  openMenu(): void {
    // Se for um dispositivo móvel, toggle o menu
      this.menuAberto = true;
  }

  closeMenu(): void {
    // Se for um dispositivo móvel, toggle o menu
      this.menuAberto = false;
  }

  toggleMenu(): void {
    // Se for um dispositivo móvel, toggle o menu
    if (this.isMobile) {
      this.menuAberto = !this.menuAberto;
    }
  }
}
