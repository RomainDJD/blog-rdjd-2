import { User } from '../user/entity/user.entity';
import { UserCategory } from '../user/titre/user-category.enum';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('Auth Controller', () => {
  let controller: AuthController;
  let authService: AuthService;

  beforeAll(async () => {
    authService = {} as any;
    controller = new AuthController(authService);
  });
});
