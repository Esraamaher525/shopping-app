import { TestBed } from '@angular/core/testing';

import { ImageServiceService } from "./ImageServiceService";

describe('ImageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageServiceService = TestBed.get(ImageServiceService);
    expect(service).toBeTruthy();
  });
});
