import { Component } from '@angular/core';
import { Car } from '../interfaces/car.interface';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent {
  vehiclesCategory: string[] = [
    'American Cars',
    'Japanese Cars',
    'Germany Cars',
  ];

  americanCars: Car[] = [
    {
      releaseYear: 1970,
      brand: 'Chevrolet',
      model: 'Camaro Z/28',
      engineDescription: 'V-8, water-cooled, cast iron block and heads.',
      weight: 3640,
      price: 4475.7,
      logo: '../../assets/chevrolet-logo.png',
      carImages: [
        '../../assets/camaro-1.jpg',
        '../../assets/camaro-2.jpg',
        '../../assets/camaro-3.jpg',
      ],
    },
  ];

  japaneseCars: Car[] = [
    {
      releaseYear: 2013,
      brand: 'Toyota',
      model: 'Aqua Hybrid S',
      engineDescription: '1,490cc, 1NZ-1LM.',
      weight: 2381,
      price: 2710,
      logo: '../../assets/toyota-logo.png',
      carImages: [
        '../../assets/aqua-1.jpg',
        '../../assets/aqua-2.jpg',
        '../../assets/aqua-3.jpg',
      ],
    },
    {
      releaseYear: 2013,
      brand: 'Mitsubishi',
      model: 'Parejo',
      engineDescription: '1,830cc, 4G93.',
      weight: 2911,
      price: 2100,
      logo: '../../assets/mitsubishi-logo.png',
      carImages: [
        '../../assets/parejo-1.jpg',
        '../../assets/parejo-3.jpg',
        '../../assets/parejo-2.jpg',
      ],
    },
  ];

  germanyCars: Car[] = [
    {
      releaseYear: 2018,
      brand: 'Audi',
      model: 'A3 Cabriolet',
      engineDescription: '1,395cc with automatic transmission.',
      weight: 3153,
      price: 32028,
      logo: '../../assets/audi-logo.png',
      carImages: [
        '../../assets/a3-1.jpg',
        '../../assets/a3-2.jpg',
        '../../assets/a3-3.jpg',
      ],
    },
    {
      releaseYear: 2017,
      brand: 'Audi',
      model: 'A5 Coupe',
      engineDescription:
        '2.0 liter turbocharged, four-cylinder with 261 horsepower and 273 pound-feet of torque.',
      weight: 3605,
      price: 34621.21,
      logo: '../../assets/audi-logo.png',
      carImages: [
        '../../assets/a5-1.jpg',
        '../../assets/a5-2.jpg',
        '../../assets/a5-3.jpg',
      ],
    },
    {
      releaseYear: 2007,
      brand: 'Bugatti',
      model: 'Veyron',
      engineDescription: '8.0 litre, quad-turbocharged W16 engine.',
      weight: 4052,
      price: 1128952.5,
      logo: '../../assets/bugatti-logo.png',
      carImages: [
        '../../assets/veyron-1.jpg',
        '../../assets/veyron-2.jpg',
        '../../assets/veyron-3.jpg',
      ],
    },
  ];
}
