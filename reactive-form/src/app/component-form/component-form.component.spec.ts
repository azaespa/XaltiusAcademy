import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFormComponent } from './component-form.component';

describe('ComponentFormComponent', () => {
  let component: ComponentFormComponent;
  let fixture: ComponentFixture<ComponentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentFormComponent]
    });
    fixture = TestBed.createComponent(ComponentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
