import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

interface Project {
    name: string;
    link: string;
    image: string;
    technologies: string[];
}

@Component({
  selector: 'app-projects',
  imports: [
    NgForOf
  ],
  templateUrl: './projects.component.html',
  standalone: true,
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  realProjects: Project[] = [
    { name: 'Eshfaa', image: 'assets/projects/eshfaa.png', link: 'https://github.com/ahmedzaki147258/Eshfaa/blob/main/README.md', technologies: ['PHP', 'Laravel', 'MySQL', 'Socket.IO'] },
    { name: 'Black-horse', image: 'assets/projects/blackhorse.png', link: 'https://github.com/ahmedzaki147258/Black-Hores/blob/main/README.md', technologies: ['NodeJS', 'MongoDB', 'Socket.IO'] },
    { name: 'Restaurant-Management', image: 'assets/projects/restaurant.jpg', link: 'https://github.com/ahmedzaki147258/Restaurant-Management/blob/main/README.md', technologies: ['Laravel', 'MySQL'] }
  ];

  myProjects: Project[] = [
    { name: 'Intelligent Learning for preschoolers (GP)', image: 'assets/projects/gp.jpg', link: 'https://github.com/ahmedzaki147258/GraduationProject_AppFlutter', technologies: ['Flutter', 'PHP-MySQL', 'Firebase', 'Python'] },
    { name: 'ECommerce App', image: 'assets/projects/ecommerce1.jpg', link: 'https://github.com/ahmedzaki147258/Ecommerce-flutter', technologies: ['Flutter', 'PHP', 'GetX', 'MySQL'] },
    { name: 'The Blogging Platform (interview task)', image: 'assets/projects/blogging.jpg', link: 'https://github.com/ahmedzaki147258/The-Blogging-Platform', technologies: ['PHP', 'Laravel', 'MySQL'] }
  ];
}
