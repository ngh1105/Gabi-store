import { OmitType, PartialType } from "@nestjs/swagger";
import { CommentDto } from "./comment.dto";

export class CreateCommentDto extends OmitType(CommentDto, ['id'] as const) {

}
