import { Component, OnInit } from '@angular/core';
import { Developer } from '../developer';
import { DEVELOPERS } from '../mock-developers';
import { DeveloperService } from '../developer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {

  constructor(
    private developerService: DeveloperService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getDevelopers();
  }

  developers: Developer[];

  selectedDeveloper: Developer;

  getDevelopers(): void {
    this.developerService.getDevelopers()
      .subscribe((developers) => {
        this.developers = developers
      });
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }

    const data = {
      id: this.developers.length + 1,
      name
    }

    this.developerService.addDeveloper(data as Developer)
      .subscribe((developer) => {
        // this.router.navigateByUrl(`developers/${developer.id}`);
      });
  }

  onSelect(developer: Developer): void {
    this.selectedDeveloper = developer;
  }

}
