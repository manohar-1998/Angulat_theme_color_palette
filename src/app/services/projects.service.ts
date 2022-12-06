import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProjectsList } from '../interfaces/projects-list';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private databaseApiBaseUrl = environment.databaseApiBaseUrl;
  private projectDataUrl = `${this.databaseApiBaseUrl}/api/project`; 
  constructor(
    private http : HttpClient
  ) { }

  getAllProjects(): Observable<ProjectsList[]>{
    return this.http.get<ProjectsList[]>(this.projectDataUrl
    )
  }

}
