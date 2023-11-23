import { Controller, Get, Post, Body, Patch,
     Param, Delete, InternalServerErrorException, UseGuards } from '@nestjs/common';
import { BillService } from './bill.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { GuestGuard } from 'src/auth/auth.guard';

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

    @Get()
    findAll() {
        try {
            return this.billService.findAll();
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        try {
            return this.billService.findOne(+id);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateBillDto: UpdateBillDto) {
        try {
            return this.billService.update(+id, updateBillDto);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        try {
            return this.billService.remove(+id);
        }
        catch (err) {
            throw new InternalServerErrorException();
        }
    }
}
