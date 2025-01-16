import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  imports: [
    NgForOf
  ],
  templateUrl: './skills.component.html',
  standalone: true,
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Laravel', icon: 'fab fa-laravel' },
    { name: 'PHP', icon: 'fab fa-php' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'TypeScript', icon: 'fab fa-js' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'Express.js', icon: 'fab fa-node-js' },
    { name: 'NestJS', icon: 'fas fa-server' },
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'MongoDB', icon: 'fas fa-database' },
    { name: 'Flutter', icon: 'fas fa-mobile-alt' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'GitHub', icon: 'fab fa-github' },
    { name: 'C++', icon: 'fa-regular fa-c' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'C#', icon: 'fas fa-code' },
    { name: 'Firebase', icon: 'fas fa-fire' },
    { name: 'WebSocket', icon: 'fas fa-plug' },
    { name: 'Socket.IO', icon: 'fas fa-network-wired' },
    { name: 'REST API', icon: 'fas fa-cloud' },
    { name: 'JSON', icon: 'fas fa-code' },
  ];
}
