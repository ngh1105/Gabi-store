import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BillDetailService } from './bill-detail.service';
import { CreateBillDetailDto } from './dto/create-bill-detail.dto';
import { UpdateBillDetailDto } from './dto/update-bill-detail.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('bill-detail')
@Controller('bill-detail')
export class BillDetailController {
    constructor(private readonly billDetailService: BillDetailService) { }

    @Post()
    create(@Body() createBillDetailDto: CreateBillDetailDto) {
        return this.billDetailService.create(createBillDetailDto);
    }

    @Get()
    findAll() {
        return this.billDetailService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.billDetailService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateBillDetailDto: UpdateBillDetailDto) {
        return this.billDetailService.update(+id, updateBillDetailDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.billDetailService.remove(+id);
    }
}
