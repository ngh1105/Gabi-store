import { Controller, Get, Post, Body, Patch,
     Param, Delete, InternalServerErrorException, UseGuards } from '@nestjs/common';
import { BillService } from './bill.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AdminGuard, GuestGuard } from 'src/auth/auth.guard';

@ApiTags('bill')
@Controller('bill')
export class BillController {
    constructor(private readonly billService: BillService) { }

    @ApiSecurity('private-key')
    @UseGuards(GuestGuard)
    @Post()
    create(@Body() createBillDto: CreateBillDto) {
        try {
            return this.billService.create(createBillDto);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Get()
    findAll() {
        try {
            return this.billService.findAll();
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(AdminGuard)
    @Get(':id')
    findOne(@Param('id') id: string) {
        try {
            return this.billService.findOne(+id);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @ApiSecurity('private-key')
    @UseGuards(GuestGuard)
    @Get(':idUser/:idBill')
    findOneByUser(@Param('idUser') idUser: string, @Param('idBill') idBill: string) {
        try {
            return this.billService.findOneByUser(+idUser, +idBill);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }
}
