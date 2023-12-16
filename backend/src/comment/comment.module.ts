import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { DatabaseModule } from 'src/database/database.module';
import { commentProviders } from './comment.providers';
import { UserModule } from 'src/user/user.module';
import { BillDetailModule } from 'src/bill-detail/bill-detail.module';

@Module({
    imports: [DatabaseModule, UserModule, BillDetailModule],
    controllers: [CommentController],
    providers: [
        CommentService,
        ...commentProviders,
    ],
    exports: [CommentService]
})
export class CommentModule { }
