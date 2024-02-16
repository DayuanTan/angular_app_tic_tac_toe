import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';

import { NebularModule } from './nebular/nebular.module';
import { NbThemeModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';

@Component({
  standalone: true,
  imports: [NebularModule, NbThemeModule, NbLayoutModule, NbButtonModule, BoardComponent, SquareComponent, NxWelcomeComponent, RouterModule],
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'myorg';
}
