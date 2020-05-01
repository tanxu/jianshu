// import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl: 'https://user-gold-cdn.xitu.io/1588177067222972f6f9c1ded073f3399c59e8ec79233.jpg?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1',
    },
    {
      id: 2,
      title: '手绘',
      imgUrl: 'https://user-gold-cdn.xitu.io/2020/5/1/171cfe001a630347?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1',
    }
  ],
  articleList: [
    {
      id: 1,
      title: '读书变现技能养成记（二）——如何把读书升级成专业吸金技能',
      desc: '先要对职业读书人的背景有两个认识： 1、职业读书人得益于现代的信息爆炸，更侧重于筛选。所以职业读书人能产生拆选价值。 2、行业还处于野蛮生长期，...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/2021661-5d0cd4fec1124745.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 2,
      title: '我真的明白了',
      desc: '不知道为何，近期我的情绪会这么不稳定，我也弄不懂我自己了。 前两晚跟即将要离婚的丈夫聊电话，他斩钉截铁说很早之前就不爱我了，所以一定要...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/19716661-fdb8ea0fd9d47ecf.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 3,
      title: '2020如果你还想做自媒体，这些坑我建议你一定不要踩！',
      desc: '1.内容定位 如果你在准备做自媒体的时候，没有想好自己要做的内容，而是东做一个西做一个，没有专注某一领域的内容，最终的结果就是浪费了很多时间和精...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/6171276-3304c2681c7b7995.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 4,
      title: '不幸的婚姻',
      desc: '昨天给家里打电话，我妈跟我说：“你知道吗？你三叔家的那个哥哥跟他媳妇可能过不下去了。今天下午，我去菜园子的时候，正好碰到了你三婶子。她跟我说女...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/1202579-02278d315cafa314?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    },
    {
      id: 5,
      title: '夫妻长期两地分居，女人能坚持多久？',
      desc: '人到中年，生活的压力往往很大，为了谋生，许多夫妻不得不长期两地分居。在不同的地方为了自己、父母，孩子而打拼。 对长期两地分居的夫妻来说，女人要承...',
      imgUrl: 'https://upload-images.jianshu.io/upload_images/16623634-dd2b82b615b125ae?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }
  ],
  recommendList: [
    { id: 1, title: 'xxx', desc: '', href: 'xxx', imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png' },
    { id: 2, title: 'xxx', desc: '', href: 'xxx', imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png' },
    { id: 3, title: 'xxx', desc: '', href: 'xxx', imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png' },
    { id: 4, title: 'xxx', desc: '', href: 'xxx', imgUrl: '//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png' }
  ]
})

export default (state = defaultState, action) => {
  return state;
}