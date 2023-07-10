import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join, extname } from 'path';
console.log('in upload controller ', join(__dirname, '../../public/images'));

/**
 * 使用MulterModule register 注册存放图片的目录
 * 需要用到multer的diskStorage来设置存放目录，其中：
 * destination: 图片存放的路径（是放在打包目录下的，dist/)
 * filename: 图片的名称
 * __dirname 动态获取当前文件所属目录的绝对路径
 * __filename 动态获取当前文件的绝对路径，包含当前文件
 * __dirname和__filename是不受执行 node 命令所属路径影响的
 */

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination: join(__dirname, '../../public/images'),
        filename: (_, file, cb) => {
          const fileName = `${new Date().getTime()}${extname(
            file.originalname,
          )}`;
          return cb(null, fileName);
        },
      }),
    }),
  ],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
