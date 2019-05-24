import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestpaginationComponent } from './testpagination.component';

describe('TestpaginationComponent', () => {
  let component: TestpaginationComponent;
  let fixture: ComponentFixture<TestpaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestpaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestpaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
