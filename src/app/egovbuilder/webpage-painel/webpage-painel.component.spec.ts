import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebpagePainelComponent } from './webpage-painel.component';

describe('WebpagePainelComponent', () => {
  let component: WebpagePainelComponent;
  let fixture: ComponentFixture<WebpagePainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebpagePainelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebpagePainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
