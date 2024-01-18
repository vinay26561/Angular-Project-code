import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelianceComponent } from './reliance.component';

describe('RelianceComponent', () => {
  let component: RelianceComponent;
  let fixture: ComponentFixture<RelianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelianceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
