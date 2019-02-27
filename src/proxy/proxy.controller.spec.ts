import { Test, TestingModule } from '@nestjs/testing';
import { createRequest, createResponse } from 'node-mocks-http';
import { ProxyController } from './proxy.controller';
import { ClientRequest, IncomingMessage, ServerResponse } from 'http';

const expectedRewardsApiRequest = {
  on: (eventName)
};
const mockHttpRequest: any = () => expectedRewardsApiRequest;

jest.mock('http', () => ({
  request: mockHttpRequest,
}));

describe('Proxy Controller', () => {
  let controller: ProxyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProxyController],
    }).compile();

    controller = module.get<ProxyController>(ProxyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  test('proxy', () => {
    // Arrange
    const mockIncomingRequest: IncomingMessage = createRequest();
    const expectedOutgoingResponse: ServerResponse = createResponse();

    // Act
    controller.proxy(mockIncomingRequest, expectedOutgoingResponse);

    // Assert
    expect(mockIncomingRequest.pipe).toBeCalledWith(expectedRewardsApiRequest);
    expect(mockRewardsApiResponse.pipe).toBeCalledWith(expectedOutgoingResponse);
  });
});
