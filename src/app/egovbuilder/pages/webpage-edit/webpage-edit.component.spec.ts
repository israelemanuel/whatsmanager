import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebpageEditComponent } from './webpage-edit.component';

describe('WebpageEditComponent', () => {
  let component: WebpageEditComponent;
  let fixture: ComponentFixture<WebpageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebpageEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebpageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
