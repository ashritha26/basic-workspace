import { async, TestBed } from '@angular/core/testing';
import { FeatureProfileListModule } from './feature-profile-list.module';

describe('FeatureProfileListModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureProfileListModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureProfileListModule).toBeDefined();
  });
});
