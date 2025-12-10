import { Controller, Get, Post, Body, Patch, Param, Delete, Query, InternalServerErrorException, UseGuards } from '@nestjs/common';
import { BillDetailService } from './bill-detail.service';
import { CreateBillDetailDto } from './dto/create-bill-detail.dto';
import { UpdateBillDetailDto } from './dto/update-bill-detail.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AdminGuard } from 'src/auth/auth.guard';

@ApiTags('bill-detail')
@Controller('bill-detail')
export class BillDetailController {
    constructor(private readonly billDetailService: BillDetailService) { }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Get("find-recently")
    findPaginate(@Query('limit') limit: number) {
        try {
            limit = limit ? Number(limit) : 10;
            return this.billDetailService.findPaginate(limit);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }
}
