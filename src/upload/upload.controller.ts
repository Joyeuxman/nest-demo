import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
  Res,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
import type { Response } from 'express';
import { zip } from 'compressing';

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
    return { message: '上传成功' };
  }

  /**
   * 使用download直接下载
   */
  @Get('download')
  download(@Res() res: Response) {
    const url = join(__dirname, '../../public/images/1688959956720.jpeg');
    res.download(url, (error) => {
      console.log(`${error ? '下载失败' + error : '下载成功'}`);
    });
  }

  /**
   * 使用文件流的方式下载
   * 使用compress.zip以stream的方式压缩图片为zip
   * 设置响应头 Content-Type application/octet-stream
   * Content-Disposition attchment
   *
   * 前端如何下载
   ```
   const downloadStreamImg = async () => {
    const res = fetch('http://localhost:3000/upload/downloadByStream').then(
      (res) => res.arrayBuffer(),
    );
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new blob([res]), {
      type: 'image/png',
    });
    a.download = 'image.zip';
    a.click();
   };
  ```
   */
  @Get('downloadByStream')
  async downloadByStream(@Res() res: Response) {
    const url = join(__dirname, '../../public/images/1688959956720.jpeg');
    const tarSteam = new zip.Stream();
    await tarSteam.addEntry(url);
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', 'attchment; filename=image.zip');

    tarSteam.pipe(res);
  }
}
