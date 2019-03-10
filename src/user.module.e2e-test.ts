import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { getConnection } from 'typeorm';
import { setupDB } from '../test/tools/setup.tools';
import { UserCategory } from './user/titre/user-category.enum';
import { UserModule } from './user/user.module';
import { UserRepository } from './user/user.repository';

describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    await setupDB();

    const moduleFixture = await Test.createTestingModule({
      imports: [UserModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('/user/:id', () => {
    describe('GET', () => {
      it('Should return a user identified by its id', async () => {
        const userRepository = getConnection().getCustomRepository(
          UserRepository,
        );

        const savedUser = await userRepository.save({
          firstName: 'Georges',
          lastName: 'Abidbol',
          mobilePhone: '0233234567',
          email: 'georges.abidbol@mail.cod',
          category: UserCategory.Standard,
          password: 'azerty',
          isAuthor: true,
        });

        return request(app.getHttpServer())
          .get(`/user/${savedUser.userId}`)
          .expect(200)
          .then(async () => {
            const result = await getConnection()
              .getCustomRepository(UserRepository)
              .findOne(savedUser.userId);
            global.console.log(result);
          });
      });
    });
  });

});
