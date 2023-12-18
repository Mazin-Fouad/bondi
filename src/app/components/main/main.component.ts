import { Component } from '@angular/core';
import { GraphicDesignComponent } from '../graphic-design/graphic-design.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [GraphicDesignComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
