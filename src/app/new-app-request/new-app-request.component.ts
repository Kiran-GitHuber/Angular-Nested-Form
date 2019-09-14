import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-new-app-request',
  templateUrl: './new-app-request.component.html',
  styleUrls: ['./new-app-request.component.scss']
})
export class NewAppRequestComponent implements OnInit {

  newAppRequestForm: FormGroup;
  public protocolTypes = ['', 'TLS', 'SSL'];

  constructor(private formBuilder: FormBuilder) {
    this.newAppRequestForm = this.createRequestForm(formBuilder);
  }

  createRequestForm(formBuilder: FormBuilder) {
    const NoSepcialChar = /^[^*|\":<>[\]{}`\\()';@&$]+$/;
    return formBuilder.group({
      protocol: '',
      csiId: ['', [Validators.required, Validators.pattern(NoSepcialChar)]],
      packageName: 'citi.com',
      appName: '',
      region: formBuilder.group({
        org: '',
        unit: ''
      }),
      pomXml: formBuilder.group({
        groupId: '',
        artifactId: ''
      }),
      teamDetails: formBuilder.group({
        snowGroup: '',
        teamOwners: '',
        prApprovers: '',
        reviewers: '',
        nonReviewers: ''
      }),
      dependencies: '',
      eks: formBuilder.group({
        deployment: formBuilder.group({
          appName: '',
          environment: '',
          containerName: '',
          containerPort: '',
          environments: formBuilder.array([]),
          volumes: formBuilder.array([])
        }),
        service: formBuilder.group({
          nameSpace: ''
        }),
        ingress: formBuilder.group({
          host: '',
          paths: formBuilder.array([])
        })
      })
    });
  }

/*  patternCheck(control: AbstractControl) {
    const value = control.value;
    const regex =
    return !(value && regex.test(value)) ? {invalidFormat: true} : null;
  }*/

  get EnvironmentValues() {
    return this.newAppRequestForm.get('eks').get('deployment').get('environments') as FormArray;
  }

  get VolumesDetails() {
    return this.newAppRequestForm.get('eks').get('deployment').get('volumes') as FormArray;
  }

  get IngressPaths() {
    return this.newAppRequestForm.get('eks').get('ingress').get('paths') as FormArray;
  }

  ItemsDetails() {
    return new FormGroup({
      key: new FormControl(''),
      path: new FormControl('')
    });
  }

  addEnvironmentValues() {
    const environmentValue = this.formBuilder.group({
      name: '',
      value: ''
    });
    this.EnvironmentValues.push(environmentValue);
  }

  addDeploymentVolumes() {
    const volumes = this.formBuilder.group({
      name: '',
      configMap: this.formBuilder.group({
        name: '',
        items: this.formBuilder.array([
          this.ItemsDetails()
        ])
      })
    });
    this.VolumesDetails.push(volumes);
  }

  addIngressPaths() {
    const ingressPathDetail = this.formBuilder.group({
      path: [''],
      backend: this.formBuilder.group({
        serviceName: '',
        servicePort: ''
      })
    });
    this.IngressPaths.push(ingressPathDetail);
  }

  ConfigKeyValuePairs(v) {
    return;
  }

  addKeyValues(volumes) {
    const keyValuePair = volumes.get('configMap').get('items') as FormArray;
    keyValuePair.push(this.ItemsDetails());
  }

  getItems(form) {
    // console.log(form);
    return form.controls.configMap.controls.items.controls;
  }

  ngOnInit() {
  }


  getErrorCsiId() {
    return this.newAppRequestForm.get('csiId').hasError('required') ? 'Field is required' :
      this.newAppRequestForm.get('csiId').hasError('pattern') ? 'Csi ID should not have any special characters' : '';
  }
}
