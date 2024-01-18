import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TataComponent } from './tata.component';

describe('TataComponent', () => {
  let component: TataComponent;
  let fixture: ComponentFixture<TataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
