import { PartialType } from "@nestjs/swagger";
import { BlogDto } from "./blog.dto";

export class CreateBlogDto extends PartialType(BlogDto) {}
