import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BillDetailService } from './bill-detail.service';
import { CreateBillDetailDto } from './dto/create-bill-detail.dto';
import { UpdateBillDetailDto } from './dto/update-bill-detail.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('bill-detail')
@Controller('bill-detail')
export class BillDetailController {
    constructor(private readonly billDetailService: BillDetailService) { }

    
}
