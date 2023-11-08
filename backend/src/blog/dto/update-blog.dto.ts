import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateBlogDto } from './create-blog.dto';

export class UpdateBlogDto extends OmitType(
    CreateBlogDto, ['userId'] as const
) {}
