import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss'],
})
export class VehicleComponent {
  @Input('releaseYear') releaseYear: number = 0;
  @Input('brand') brand: string = '';
  @Input('model') model: string = '';
  @Input('engineDescription') engineDescription: string = '';
  @Input('weight') weight: number = 0;
  @Input('price') price: number = 0;
  @Input('logo') logo: string = '';
  @Input('carImages') carImages: string[] = [];
}
