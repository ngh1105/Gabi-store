import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { DatabaseModule } from 'src/database/database.module';
import { blogProviders } from './blog.providers';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [DatabaseModule, UserModule],
    controllers: [BlogController],
    providers: [
        BlogService,
        ...blogProviders
    ],
})
export class BlogModule { }
