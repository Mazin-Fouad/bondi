import { Component } from '@angular/core';
import { GraphicDesignComponent } from '../graphic-design/graphic-design.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [GraphicDesignComponent, PortfolioComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
