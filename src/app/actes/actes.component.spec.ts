import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActesComponent } from './actes.component';

describe('ActesComponent', () => {
  let component: ActesComponent;
  let fixture: ComponentFixture<ActesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
