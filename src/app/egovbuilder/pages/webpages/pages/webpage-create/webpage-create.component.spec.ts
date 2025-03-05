import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebpageCreateComponent } from './webpage-create.component';

describe('WebpageCreateComponent', () => {
  let component: WebpageCreateComponent;
  let fixture: ComponentFixture<WebpageCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebpageCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebpageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
