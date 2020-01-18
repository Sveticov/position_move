import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-win-size-module',
  templateUrl: './app-win-size-module.component.html',
  styleUrls: ['./app-win-size-module.component.css']
})
export class AppWinSizeModuleComponent implements OnInit {

  title='new module '
  private screenHeight: number;
  private screenWidth: number;
  private posX: number;
  private posY: number;
  posRectX: string;
  posRectY: string;

  constructor() {
    this.onResize()
  }

  ngOnInit() {
  }

  @HostListener('window:resize',['$event'])
  onResize(event?){
    this.screenHeight=window.innerHeight;
    this.screenWidth=window.innerWidth;
    console.log(this.screenHeight+"  "+this.screenWidth)
  }

  onMouseMove(event:MouseEvent) {
    this.posX=event.clientX
    this.posY=event.clientY

  }

  onMoveRectangle() {
    this.posRectX=this.posX-50+'px'
    this.posRectY=this.posY-50+'px'
  }
}
