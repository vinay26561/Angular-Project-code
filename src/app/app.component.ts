import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { TataComponent } from './tata/tata.component';
import { AdaniComponent } from './adani/adani.component';
import { RelianceComponent } from './reliance/reliance.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,StudentComponent,EmployeeComponent,TataComponent,AdaniComponent,RelianceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ganesha';
}
