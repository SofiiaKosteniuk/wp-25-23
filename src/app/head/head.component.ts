import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from "@angular/router";
import {MainComponent} from "../main/main.component";
import {JobComponent} from "../job/job.component";
@Component({
  selector: 'app-head',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainComponent, JobComponent, RouterLink],
  templateUrl: './head.component.html',
  styleUrl: './head.component.scss'
})
export class HeadComponent {
  public Commun: any[] = [
    {photo: 'assets/phone.png', name: '+1-718-310-5588'},
    {photo: 'assets/inet.png', name: 'www.yourwebsite.com'},
    {photo: 'assets/dot.png', name: '769 Prudence Street Lincoln Park.'},
  ]
  skills = [
    { name: 'Adobe Photoshop', level: 80 },
    { name: 'Microsoft Word', level: 65 },
    { name: 'HTML-S/CSS-3', level: 50 },
    { name: 'Adobe Illustrator', level: 80 },
    { name: 'Microsoft Powerpoint', level: 90 }
  ];
}
