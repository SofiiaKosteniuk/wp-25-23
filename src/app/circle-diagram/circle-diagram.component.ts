import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-circle-diagram',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './circle-diagram.component.html',
  styleUrl: './circle-diagram.component.scss'
})
export class CircleDiagramComponent {
  @Input() percentage = 0;
  @Input() label = '';
}
