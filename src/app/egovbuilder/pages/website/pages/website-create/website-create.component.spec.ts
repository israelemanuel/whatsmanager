import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteCreateComponent } from './website-create.component';

describe('WebsiteCreateComponent', () => {
  let component: WebsiteCreateComponent;
  let fixture: ComponentFixture<WebsiteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsiteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
