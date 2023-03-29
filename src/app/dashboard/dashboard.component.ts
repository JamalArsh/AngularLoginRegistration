import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user: string = 'UserName';
  id: string = 'sdgdfghd45g5885';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.canAccess();
  }
}
