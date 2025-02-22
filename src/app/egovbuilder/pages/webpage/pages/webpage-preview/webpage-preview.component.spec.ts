import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebpagePreviewComponent } from './webpage-preview.component';

describe('WebpagePreviewComponent', () => {
  let component: WebpagePreviewComponent;
  let fixture: ComponentFixture<WebpagePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebpagePreviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebpagePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
