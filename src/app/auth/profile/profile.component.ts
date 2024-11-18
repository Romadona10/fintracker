import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'; // Import AuthService
import { MatDialog } from '@angular/material/dialog';
import { EditProfileDialogComponent } from 'src/app/dialogs/edit-profile-dialog/edit-profile-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: { name: string; email: string; profileImage: string | null } = { 
    name: '', 
    email: '', 
    profileImage: null 
  };
  
  
  

  constructor(private authService: AuthService, public dialog: MatDialog, private router: Router) {}

  ngOnInit() {
    this.fetchUserProfile();
  }

  
  fetchUserProfile() {
    this.authService.getProfile().subscribe(
      (response) => {
        this.user.name = response.fullName;
        this.user.email = response.email;
        this.user.profileImage = `https://expensetracker-backend-q5pq.onrender.com/uploads/${response.profileImage}`; // profileImage now includes 'uploads/'
      },
      (error) => {
        console.error('Error fetching user profile:', error);
      }
    );
  }
  

  editProfile() {
    const dialogRef = this.dialog.open(EditProfileDialogComponent, {
      width: '400px',
      data: { name: this.user.name, email: this.user.email }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Update user profile with the result from the dialog
        this.user.name = result.name;
        this.user.email = result.email;
      }
    });
  }
}
