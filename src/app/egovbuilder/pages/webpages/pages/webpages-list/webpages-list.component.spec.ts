import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebpagesListComponent } from './webpages-list.component';

describe('WebpagesListComponent', () => {
  let component: WebpagesListComponent;
  let fixture: ComponentFixture<WebpagesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebpagesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebpagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
