import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from "./components/header-component/header-component.component";
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponentComponent, RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BudgetBuddy';
  currentRoute: string = '';

  constructor(private router: Router){
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }
}
