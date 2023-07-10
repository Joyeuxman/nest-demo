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
  Inject,
  ParseIntPipe,
  ParseUUIDPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from 'src/auth/auth.service';
import { GlobalService } from 'src/global/global.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as svgCaptcha from 'svg-captcha';
import * as uuid from 'uuid';

// 使用随机算法生成一个唯一ID
console.log('uuid.v4', uuid.v4());

// @Controller('user')
@Controller({
  path: 'user',
  version: '2',
})
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
    private readonly globalService: GlobalService,
    @Inject('Dynamic') private readonly dynamicInfo: any,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  /**
   * 根据ID获取用户
   * @param id
   * @returns
   * 管道函数的作用
   * 1. 转换，可以将前端传入的数据转成我们需要的数据
   * 2. 验证，类似于前端rules配置的验证规则
   * nestjs提供的8个内置转换API
   * ValidationPipe
   * ParseIntPipe
   * ParseFloatPipe
   * ParseBoolPipe
   * ParseArrayPipe
   * ParseUUIDPipe
   * ParseEnumPipe
   * DefaultValuePipe
   */

  @Get(':id')
  @Version('1')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    console.log(typeof id, '+++++++++++++++++');
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
   * 子模块之间如何互相使用service???
   * 如：user、auth同为AppModule子模块（其中auth Module已经做了export导出），如何可以让user模块可以使用auth模块的service ???
   * 方式一：
   * 在user Module 的 @Module 中使用imports将 Auth Module导入
   */
  @Get('auth/list')
  getUsetAuthList() {
    return this.authService.getAuthList();
  }

  /**
   * 子模块之间如何互相使用service???
   * 如：user、global同为AppModule子模块（其中global Module已经做了export导出），如何可以让user模块可以使用global模块的service ???
   * 方式二：
   * 将global模块使用 @Global 装饰器修饰一下，让其成为全局模块
   */
  @Get('global/config')
  getConfig() {
    return this.globalService.getConfig();
  }

  @Get('dynamic/info')
  getDynamicInfo() {
    return this.dynamicInfo;
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
