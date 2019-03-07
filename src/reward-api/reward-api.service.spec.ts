import { Test, TestingModule } from '@nestjs/testing';
import { RewardApiService } from './reward-api.service';
import * as http from 'http';

describe('RewardApiService', () => {
  let service: RewardApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RewardApiService],
    }).compile();

    service = module.get<RewardApiService>(RewardApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('request', () => {
    // Arrange
    const actualOptions = {};
    const actualCallback = () => undefined;

    const spy = jest.spyOn(http, 'request');

    // Act
    const expectedResult = service.request(actualOptions, actualCallback);

    // Assert
    expect(spy).toHaveBeenCalledWith(actualOptions, actualCallback);
    expect(expectedResult).toBeInstanceOf(http.ClientRequest);
  });
});
