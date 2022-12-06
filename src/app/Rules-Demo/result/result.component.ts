import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FieldsList } from 'src/app/interfaces/fields-list';
import { ProjectsList } from 'src/app/interfaces/projects-list';
import { EmployeeService } from 'src/app/services/employee.service';
import { ProjectsService } from 'src/app/services/projects.service';
import { RuleExecutionService } from 'src/app/services/rule-execution.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  employeeData!: Subscription;
  projectsData!: Subscription;
  fieldTypeData!: Subscription;
  employeeResult: any;
  ruleResult: any;
  fieldTypeResult: any;
  postFields!: FieldsList;
  projectsResult!: ProjectsList[];
  labelForm!: FormGroup;
  @ViewChild('fieldForm') form: any;
  collectedData: any = {
    project_name: '',
    project_id: '',
    status: '',
  };

  constructor(
    private employeeApiService: EmployeeService,
    private ruleApiService: RuleExecutionService,
    private projectsService: ProjectsService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.labelForm = this.formBuilder.group({
      field_label: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255),
        ],
      ],
      field_name: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(255),
        ],
      ],
      field_type: [
        '',
        [
          // Validators.required,
          // Validators.minLength(8),
          // Validators.maxLength(255),
        ],
      ],
    });
    this.employeeData = this.employeeApiService.getEmployeeDetails().subscribe({
      next: (result) => {
        this.employeeResult = result;
      },
      error: (err) => {
        console.log('Employee Error Check =', err);
      },
    });

    this.projectsData = this.projectsService.getAllProjects().subscribe({
      next: (res: ProjectsList[]) => {
        this.projectsResult = res;
      },
      error: (err: any) => {
        console.log('Error', err);
      },
    });

    this.fieldTypeData = this.ruleApiService.getFieldTypeList().subscribe({
      next: (res) => {
        this.fieldTypeResult = res.response;
      },
    });
  }

  // Click funtion for Reactive Form
  createNewField() {
    if (this.labelForm.valid) {
      this.ruleApiService
        .createNewFieldTypeLabel(this.labelForm.value)
        .subscribe({
          next: () => console.log('Data Posted'),
        });
    }
  }

  // Click function for Angular Template Driven Form
  createField(capturedData:any) {
    console.log("Data Check =",capturedData.value,capturedData.valid)
    // this.ruleApiService.createNewFieldTypeLabel(capturedData.value).subscribe({
    //   next: () =>{}
    // });
    this.form.reset();
  }

  executeRule() {
    this.ruleApiService.executeRuleEngine().subscribe({
      next: (result) => {
        this.ruleResult = result;
        console.log('Rule Result Check =', this.ruleResult);
      },
      error: (err) => {
        console.log('Rule Error Check =', err);
      },
    });
  }

  ngOnDestroy() {
    this.employeeData.unsubscribe();
    this.projectsData.unsubscribe();
  }
}
