import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PipeTestService } from './pipe-test.service';
import { CreatePipeTestDto } from './dto/create-pipe-test.dto';
import { UpdatePipeTestDto } from './dto/update-pipe-test.dto';
import { PtPipe } from './pt/pt.pipe';

@Controller('pipe-test')
export class PipeTestController {
  constructor(private readonly pipeTestService: PipeTestService) {}

  @Post()
  create(@Body(PtPipe) createPipeTestDto: CreatePipeTestDto) {
    return this.pipeTestService.create(createPipeTestDto);
  }

  @Get()
  findAll() {
    return this.pipeTestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pipeTestService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePipeTestDto: UpdatePipeTestDto,
  ) {
    return this.pipeTestService.update(+id, updatePipeTestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pipeTestService.remove(+id);
  }
}
