import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, FormArray} from '@angular/forms';

@Component({
  selector: 'app-new-app',
  templateUrl: './new-app.component.html',
  styleUrls: ['./new-app.component.scss']
})
export class NewAppComponent implements OnInit {

  requestForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  this.requestForm = this.createForm(formBuilder);
  }

  createForm(formbuilder: FormBuilder) {
    return formbuilder.group({
      snowGroup: '',
      prApprovers: '',
      teamOwner: '',
      volumes: formbuilder.array([])
    });
  }
  ngOnInit() {
  }

  get VolumesForm() {
    return this.requestForm.get('volumes') as FormArray;
  }

  addVolume() {
    const volumeDetail = this.formBuilder.group({
      name: [''],
      config: ['']
    });
    this.VolumesForm.push(volumeDetail);
  }
}
