import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NginxRequestComponent } from './nginx-request.component';

describe('NginxRequestComponent', () => {
  let component: NginxRequestComponent;
  let fixture: ComponentFixture<NginxRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NginxRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NginxRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
