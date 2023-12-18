import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-landing-section',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './landing-section.component.html',
  styleUrl: './landing-section.component.scss',
})
export class LandingSectionComponent {}
