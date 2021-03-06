import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ArticleService } from './article/article.service';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [UserModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService, ArticleService],
})
export class AppModule {}
