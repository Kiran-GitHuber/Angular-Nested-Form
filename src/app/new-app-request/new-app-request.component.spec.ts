import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAppRequestComponent } from './new-app-request.component';

describe('NewAppRequestComponent', () => {
  let component: NewAppRequestComponent;
  let fixture: ComponentFixture<NewAppRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAppRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAppRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
