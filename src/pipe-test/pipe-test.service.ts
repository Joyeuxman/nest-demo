import { Injectable } from '@nestjs/common';
import { CreatePipeTestDto } from './dto/create-pipe-test.dto';
import { UpdatePipeTestDto } from './dto/update-pipe-test.dto';

@Injectable()
export class PipeTestService {
  create(createPipeTestDto: CreatePipeTestDto) {
    return 'This action adds a new pipeTest';
  }

  findAll() {
    return `This action returns all pipeTest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pipeTest`;
  }

  update(id: number, updatePipeTestDto: UpdatePipeTestDto) {
    return `This action updates a #${id} pipeTest`;
  }

  remove(id: number) {
    return `This action removes a #${id} pipeTest`;
  }
}
