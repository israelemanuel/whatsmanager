import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCategoryCreateComponent } from './blog-category-create.component';

describe('BlogCategoryCreateComponent', () => {
  let component: BlogCategoryCreateComponent;
  let fixture: ComponentFixture<BlogCategoryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogCategoryCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCategoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
