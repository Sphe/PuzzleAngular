import { PLATFORM_ID, Inject, Component, OnInit, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FabricComponent, FabricDirective, FabricConfigInterface } from 'ngx-fabric-wrapper';
declare var require: any;
declare var fabric: any;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  ngOnInit() {
    
    
  }

  public show: boolean = true;
  
  @ViewChild(FabricComponent) componentRef: FabricComponent;
  @ViewChild(FabricDirective) directiveRef: FabricDirective;

  public cvHeight = 600;
  public cvWidth = 800;

    public data: any = {
      objects: [
        {
          type: 'group',
          top: 22,
          left: 72,
          width: 200,
          height: 60,
          objects: [
            {
              type: 'rect',
              top: -30,
              left: -100,
              width: 200,
              height: 60,
              fill: '#cfcfcf'
            },
            {
              type: 'text',
              width: 200,
              height: 60,
              fontSize: 24,
              text: 'Example object',
              originX: 'center',
              originY: 'center'
            }
          ]
        }
      ]
    };
  
    public type: string = 'component';
  
    public disabled: boolean = false;
  
    public config: FabricConfigInterface = {
      renderOnAddRemove: true
    };
  
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  
    addLine() {
      const directiveRef = this.componentRef.directiveRef;
  
      const line = new fabric.Line([
        44, 100, 300, 100
      ], {
        fill: '#000000',
        stroke: '#000000',
        strokeWidth: 3
      });
  
      directiveRef.fabric().add(line);
    }
  
    addText() {
      const directiveRef = this.componentRef.directiveRef;
  
      const text = new fabric.Text('Angular', {
        top: 120,
        left: 105,
        fill: '#000000'
      });
  
      directiveRef.fabric().add(text);
    }
  
    addImage() {
      const directiveRef = this.componentRef.directiveRef;
  
        fabric.Image.fromURL('https://angular.io/assets/images/logos/angular/angular.png', function(img: any) {
          img.scale(0.5);
  
          img.set({ left: 110, top: 180 });
  
        directiveRef.fabric().add(img);
      });
    }
  
    toggleDisabled() {
      this.disabled = !this.disabled;

      if (isPlatformBrowser(this.platformId)) {
        require('../../../lib/jimp');

        const jimp = (window as any).Jimp;

        jimp.read("/assets/angular.png").then(function (lenna: any) {
          lenna.resize(256, 256)            // resize
                .quality(60)                 // set JPEG quality
                .greyscale()                 // set greyscale
                .getBase64(jimp.MIME_JPEG, function (err: any, src: any) {
                      console.log(src);
                });
        }).catch(function (err: any) {
            console.error(err);
        });
        
      
      }

    }
  
    resetCanvasObjects() {
      this.componentRef.directiveRef.clear();
  
      this.data = Object.assign({}, this.data);
    }
  
    onDataLoaded(canvas: any) {
      console.log('Data loaded:', canvas);
    }
  
    onObjectAdded(event: any) {
      console.log('Object added:', event);
    }
  
    onSelectionCreated(event: any) {
      console.log('Selection created:', event);
    }

}
