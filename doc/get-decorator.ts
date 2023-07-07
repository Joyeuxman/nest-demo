import axios from 'axios';

const Get = (url: string) => {
  return (target: object, key: string | symbol, descriptor: any) => {
    const func = descriptor.value;
    axios
      .get(url)
      .then((res: any) => {
        func(res, true);
      })
      .catch((error) => {
        func(error, false);
      });
  };
};

class Controller {
  @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
  getList(result: any, success: boolean) {
    console.log(
      `请求${success ? '成功' : '失败'},结果是`,
      success ? result?.data?.result : result,
    );
  }
}
