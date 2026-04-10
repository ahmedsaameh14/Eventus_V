import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/VEventus/', icon: 'facebook' },
    { name: 'Instagram', url: 'https://www.instagram.com/eventus_v_/', icon: 'instagram' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/eventus-v/', icon: 'linkedin' },
    { name: 'WhatsApp', url: 'https://wa.me/201224489330', icon: 'whatsapp' }
  ];
}
