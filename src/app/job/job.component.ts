import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
@Component({
  selector: 'app-job',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {
  public Job: any[] = [
    {data: '2020 - Present', position: 'SENIOR WEB DESIGNER', place: 'Creative Agency', city: 'Chicago', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do\n' +
        '        eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure\n' +
        '        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
        '        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n' +
        '        mollit anim id est laborum.\n' +
        '        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n' +
        '        ut aliquip ex ea commodo consequat.'},
    {data: '2015 - 2020', position: 'GRAPHIC DESIGNER', place: 'Creative Market', city: 'United Kingdom', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do\n' +
        '        eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure\n' +
        '        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
        '        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n' +
        '        mollit anim id est laborum.\n' +
        '        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n' +
        '        ut aliquip ex ea commodo consequat.'},
    {data: '2013 - 2015', position: 'MARKETING MANAGER',  place: 'Marketing Agency', city: 'United Kingdom', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do\n' +
        '        eiusmod tempor incididunt ut labore et dolore magna aliqua.Duis aute irure\n' +
        '        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
        '        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n' +
        '        mollit anim id est laborum.\n' +
        '        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi\n' +
        '        ut aliquip ex ea commodo consequat.'},
  ]
  public Hobbies : any =
    [
      {photo: '/assets/plane.png', text: 'TRAVELING'},
      {photo: 'assets/game.jpg', text: 'GAMING'},
      {photo: 'assets/music.jpg', text: 'MUSIC'},
      {photo: 'assets/gym.png', text: 'GYMING'},
      {photo: 'assets/paint.png', text: 'PAINTING'}
    ]
}
