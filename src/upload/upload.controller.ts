import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  /**
   * 上传图片
   * @param file 上传的文件，使用 @UploadedFile装饰器来接收file文件
   * @returns true
   * 使用 @UseInterceptors 装饰器、 FileInterceptor来读取上传的字段名称（其中FileInterceptor是读取单文件，FilesInterceptor是读取多文件）
   */
  @Post('album')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file) {
    console.log('已经上传图片', file);
    return true;
  }
}
