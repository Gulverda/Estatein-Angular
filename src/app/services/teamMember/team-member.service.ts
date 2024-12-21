import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Makes the service available app-wide
})
export class TeamMemberService {
  // Sample team-member data
  private teamMembers = [
    { name: 'John Doe', role: 'Developer', imageUrl: 'path/to/image1.jpg' },
    { name: 'Jane Smith', role: 'Designer', imageUrl: 'path/to/image2.jpg' },
    { name: 'Mark Taylor', role: 'Manager', imageUrl: 'path/to/image3.jpg' }
  ];

  getTeamMembers() {
    return this.teamMembers;
  }
}
