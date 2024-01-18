import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaniComponent } from './adani.component';

describe('AdaniComponent', () => {
  let component: AdaniComponent;
  let fixture: ComponentFixture<AdaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdaniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
