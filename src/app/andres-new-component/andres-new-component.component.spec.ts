import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndresNewComponentComponent } from './andres-new-component.component';

describe('AndresNewComponentComponent', () => {
  let component: AndresNewComponentComponent;
  let fixture: ComponentFixture<AndresNewComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndresNewComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndresNewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
