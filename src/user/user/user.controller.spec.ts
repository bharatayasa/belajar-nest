import { response } from 'express';
import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import * as httpmoc from 'node-mocks-http'; 

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      imports: [], 
      providers: []
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should can say hallo', async () => {
      const response = await controller.sayHallo('wayan', 'bharata')
      expect(response).toBe('hallo wayan bharata'); 
  })

  it('shoud can view tamplate', async () => {
    const response = httpmoc.createResponse(); 
    controller.viewHallo('bharata', response); 

    expect(response._getRenderView()).toBe('index')
    expect(response._getRenderData()).toEqual({
      name: 'bharata', 
      title: 'Template Engine'
    })
  })
});
