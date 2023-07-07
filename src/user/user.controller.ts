import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Version,
  Req,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as svgCaptcha from 'svg-captcha';

@Controller({
  path: 'user',
  version: '2',
})
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @Version('1')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  /**
   * 生成随机验证码
   */
  @Get('code')
  createCaptcha(@Req() req, @Res() res) {
    console.log(req.session);
    const captcha = svgCaptcha.create({
      size: 4, //生成字符的个数
      fontSize: 50, //文字大小
      width: 100, //图片宽度
      height: 34, // 图片高度
      background: '#fff', //图片背景颜色
    });
    req.session.code = captcha.text; // 存储验证码记录到session
    res.type('image/svg+xml');
    res.send(captcha.data);
  }

  @Post('login')
  login(@Req() req, @Body() body) {
    console.log(req.session);
    console.log('用户信息', body);
    if (req.session?.code?.toLowerCase() === body?.code?.toLowerCase()) {
      return {
        success: true,
        message: '登录成功',
      };
    } else {
      return {
        success: false,
        message: '验证码错误，登录失败',
      };
    }
  }
}
