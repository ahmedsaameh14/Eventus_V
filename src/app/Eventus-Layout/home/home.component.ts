import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/VEventus/', icon: 'facebook' },
    { name: 'Instagram', url: 'https://www.instagram.com/eventus_v_/', icon: 'instagram' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/eventus-v/', icon: 'linkedin' },
    { name: 'WhatsApp', url: 'https://wa.me/201224489330', icon: 'whatsapp' }
  ];
}
