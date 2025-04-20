import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MaterialModule} from './material/material.module'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MaterialModule, MaterialModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'LibraryUI';
}
