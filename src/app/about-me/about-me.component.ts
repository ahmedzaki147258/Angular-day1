import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  standalone: true,
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  protected readonly Math = Math;
  images: string[] = [
    'assets/me/me1.jpg',
    'assets/me/me2.png',
    'assets/me/me3.png',
    'assets/me/me4.jpg'
  ]
}
