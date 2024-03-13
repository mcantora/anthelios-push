import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ButtonsComponent } from '../../components/ui/buttons/buttons.component';
import { InputComponent } from '../../components/ui/input/input.component';
import { AuthLayoutComponent } from 'app/components/auth-layout/auth-layout.component';
import { AuthService } from '../auth.service';
import { tokenStorage } from 'utils/storage';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [RouterLink, ButtonsComponent, InputComponent, AuthLayoutComponent],
})
export class LoginComponent implements OnInit {
  public currentValue: string = '';
  message: any;

  email: string = '';
  password: string = '';

  errorMessage: string = '';

  isLoading: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    if (tokenStorage()) {
      this.router.navigate(['/home']);
    }
  }

  onChange(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.email = newValue;
  }

  onChangePassword(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.password = newValue;
  }

  requestPermission() {
    const messaging = getMessaging();

    getToken(messaging, { vapidKey: environment.firebaseConfig.vapidKey })
      .then((currentToken) => {
        if (currentToken) {
        } else {
          console.log(
            'No registration token available. Request permission to generate one.'
          );
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
      });
  }

  listenForMessages() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      this.message = payload;
    });
  }

  onSubmit() {
    this.isLoading = true;

    this.authService
      .postLogin({
        email: this.email,
        password: this.password,
      })
      .subscribe((response) => {
        if (response.code === 'ok') {
          this.requestPermission();
          this.listenForMessages();
          const route =
            localStorage.getItem('onboardingSeen') === 'true'
              ? '/home'
              : '/onboarding';
          this.router.navigate([route]);
        } else {
          this.errorMessage = 'El email o la contraseña son incorrectos';
        }
        this.isLoading = false;
      });
  }
}
