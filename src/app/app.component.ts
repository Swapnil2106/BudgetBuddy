import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from "./components/header-component/header-component.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponentComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BudgetBuddy';
}
