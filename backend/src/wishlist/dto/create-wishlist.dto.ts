import { OmitType, PartialType } from "@nestjs/swagger";
import { WishlistDto } from "./wishlist.dto";

export class CreateWishlistDto extends OmitType(WishlistDto, ['id'] as const) {

}
