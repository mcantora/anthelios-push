import { Component, OnInit } from '@angular/core';
import { AppLayoutComponent } from 'app/components/app-layout/app-layout.component';
import { Router } from '@angular/router';
import { ButtonsComponent } from 'app/components/ui/buttons/buttons.component';
@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [AppLayoutComponent, ButtonsComponent],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss',
})
export class AwardsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleClickBack() {
    this.router.navigate(['/home']);
  }
}
