/**
 * 封装通用的业务逻辑、与数据层的交互（如数据库）、其他额外的一些三方请求
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMovieList(): Array<any> {
    return [
      {
        id: 9706,
        title: '「津云社」第十一期：赡养有道',
        userName: '津云客户端',
        userPic:
          'http://pic.rmb.bdstatic.com/c2610825bc830bc148ed441d363cc1af.jpeg?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=32827',
        coverUrl:
          'https://f7.baidu.com/it/u=84965894,866366168&fm=222&app=106&f=JPEG@s_2,w_681,h_381,q_100',
        playUrl:
          'http://vd3.bdstatic.com/mda-nbtdihu465uw3a56/cae_h264_delogo/1646041225292496180/mda-nbtdihu465uw3a56.mp4',
        duration: '05:57',
      },
      {
        id: 4341,
        title: '农村小伙表演让评委们难以置信还要求表演绝活配音秀搞笑剪辑拍摄',
        userName: '一只小鱼吖1',
        userPic:
          'https://pic.rmb.bdstatic.com/bjh/user/784af22724a0f6cfb42fc60471cc2f94.jpeg?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=19909',
        coverUrl:
          'https://f7.baidu.com/it/u=2368325563,1712299965&fm=222&app=108&f=JPEG@s_2,w_681,h_381,q_100',
        playUrl:
          'http://vd3.bdstatic.com/mda-nb75i1ywpfa6xyve/cae_h264_delogo/1644293517724185516/mda-nb75i1ywpfa6xyve.mp4',
        duration: '03:04',
      },
      {
        id: 6452,
        title: '改编歌曲：这俩老表真自恋，为了展示自己帅，互损对方，真搞笑',
        userName: '王家耙耳朵',
        userPic:
          'https://pic.rmb.bdstatic.com/bjh/user/c1ee7b03afd6db95f277d3cb9bea6baf.jpeg?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=21448',
        coverUrl:
          'https://f7.baidu.com/it/u=2281840549,1194311764&fm=222&app=108&f=JPEG@s_2,w_681,h_381,q_100',
        playUrl:
          'http://vd4.bdstatic.com/mda-mmgg9k94p8hqpndg/cae_h264_nowatermark/1639740809255019781/mda-mmgg9k94p8hqpndg.mp4',
        duration: '01:11',
      },
      {
        id: 10551,
        title: '小伙去面试，一时好奇手太欠！把前台小姐姐的橡皮泥捏成一只猪',
        userName: '星仔看影视',
        userPic:
          'http://pic.rmb.bdstatic.com/2d3e8df52bc333a014f2ed48ec93b10c.jpeg?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=20553',
        coverUrl:
          'https://f7.baidu.com/it/u=1609593078,947713074&fm=222&app=108&f=JPEG@s_2,w_681,h_381,q_100',
        playUrl:
          'http://vd2.bdstatic.com/mda-nd81hqyzpqfksgz5/360p/h264_delogo/1649466282604439267/mda-nd81hqyzpqfksgz5.mp4',
        duration: '01:27',
      },
      {
        id: 3021,
        title: '短剧：小伙子一边吃一边等爱人，服务员说，你的爱人下班了',
        userName: '烦贵哥',
        userPic:
          'https://pic.rmb.bdstatic.com/bjh/user/23c44f9270d6070663eeb131d5492dd8.jpeg?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=49585',
        coverUrl:
          'https://f7.baidu.com/it/u=1748426195,1321796293&fm=222&app=108&f=JPEG@s_2,w_681,h_381,q_100',
        playUrl:
          'http://vd2.bdstatic.com/mda-nam3vsb3dwbmt19y/cae_h264_nowatermark_delogo/1642820009983477121/mda-nam3vsb3dwbmt19y.mp4',
        duration: '02:14',
      },
      {
        id: 10971,
        title: '白雪公主丑到后妈不想杀她，两人幸福的生活在一起｜今夜百乐门',
        userName: '综艺吃瓜有料',
        userPic:
          'https://pic.rmb.bdstatic.com/bjh/user/9c7919353840cad4a8be5a4145914a51.jpeg?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=28746',
        coverUrl:
          'https://f7.baidu.com/it/u=610070726,3931587534&fm=222&app=108&f=JPEG@s_2,w_681,h_381,q_100',
        playUrl:
          'http://vd2.bdstatic.com/mda-napbyg4ssvw2c7gb/cae_h264_nowatermark_delogo/1643013814901019604/mda-napbyg4ssvw2c7gb.mp4',
        duration: '01:51',
      },
      {
        id: 14073,
        title: '夫妻日常搞笑段子',
        userName: '搞笑马掌柜',
        userPic:
          'https://pic.rmb.bdstatic.com/bjh/user/81c51841f20015f29a9f347a2d9107ed.jpeg?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=33170',
        coverUrl:
          'https://f7.baidu.com/it/u=914300029,2423883684&fm=222&app=108&f=JPEG@s_2,w_681,h_381,q_100',
        playUrl:
          'http://vd4.bdstatic.com/mda-ndb0b0yuazx89kyw/cae_h264_delogo/1649723259261631104/mda-ndb0b0yuazx89kyw.mp4',
        duration: '01:13',
      },
      {
        id: 1661,
        title: '当我出差提前偷偷回家，竟无意偷听到老婆深藏秘密，这谁能受的了',
        userName: '大型纪实',
        userPic:
          'https://pic.rmb.bdstatic.com/bjh/user/f081c94a7303bbea3dd47e1925cc166a.jpeg?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=5106',
        coverUrl:
          'https://f7.baidu.com/it/u=750829758,453108363&fm=222&app=108&f=JPEG@s_2,w_681,h_381,q_100',
        playUrl:
          'http://vd4.bdstatic.com/mda-mks19gixq9e9jc7t/cae_h264_nowatermark/1637975120228380478/mda-mks19gixq9e9jc7t.mp4',
        duration: '03:42',
      },
      {
        id: 1965,
        title: '男人获得神奇能力，碰到的东西都会变积木，没想到和好友击掌',
        userName: '绽放未来青春',
        userPic:
          'https://pic.rmb.bdstatic.com/bjh/user/41c912a2fdb5a5afb54fd4367d7b34c4.jpeg?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=18279',
        coverUrl:
          'https://f7.baidu.com/it/u=3992807359,676144080&fm=222&app=108&f=JPEG@s_2,w_681,h_381,q_100',
        playUrl:
          'http://vd2.bdstatic.com/mda-nadg1i26m71ii76z/cae_h264_delogo/1642159494112421351/mda-nadg1i26m71ii76z.mp4',
        duration: '01:07',
      },
      {
        id: 3931,
        title: '喜来乐：喜来乐被罚跪搓板，德福灵机一动，一招救下他',
        userName: '古装大片抢先看',
        userPic:
          'https://pic.rmb.bdstatic.com/bjh/user/a45540c9627f76056b91fd8bc8598b0e.jpeg?x-bce-process=image/resize,m_lfit,w_200,h_200&autime=15359',
        coverUrl:
          'https://f7.baidu.com/it/u=2265515309,109872920&fm=222&app=108&f=JPEG@s_2,w_681,h_381,q_100',
        playUrl:
          'http://vd2.bdstatic.com/mda-mkh42w97qh7i87tj/cae_h264_nowatermark/1637206002268996639/mda-mkh42w97qh7i87tj.mp4?v_from_s=hkapp-haokan-hnb',
        duration: '02:07',
      },
    ];
  }
}
