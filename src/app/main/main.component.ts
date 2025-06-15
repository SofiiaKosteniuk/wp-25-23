import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {CircleDiagramComponent} from "../circle-diagram/circle-diagram.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CircleDiagramComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  public Education: any[] = [
    {data: '2011 - 2013', name: 'MASTER DEGREE', university: 'Stanford University', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do\n' +
        '        eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure\n' +
        '        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
    {data: '2007 - 2010', name: 'BACHELOR DEGREE', university: 'Chicago University', info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do\n' +
        '        eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure\n' +
        '        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'},
  ]
}
