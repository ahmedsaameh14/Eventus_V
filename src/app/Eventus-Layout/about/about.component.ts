import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  heroImage = 'https://images.unsplash.com/photo-1515165562835-c5c6c09d7f44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  heroLines = [
    ['We’re', 'Your'],
    ['Story', 'Teller']
  ];
}
