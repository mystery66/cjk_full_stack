// pages/news/news.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news: [{
      header: '习近平：我们比历史任何时期都更需要建设世界科技强国',
      image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2729126594,811067681&fm=27&gp=0.jpg',
      icon: '/images/icon_newsicon.png',
      publisher: '人民网',
      paragraph1: '  科技兴则民族兴,科技强则国家强。中国要强,中国人民生活要好,必须有强大科技。习近平在两院院士大会上指出:“我们比历史上任何时期都更接近中华民族伟大复兴的目标,我们比历史上任何时期都更需要建设世界科技强国!”这是习近平综合分析国内外大势、立足我国发展全局作出的重大战略判断。请随“学习中国”小编一起学习。',
      images1: 'http://a2.peoplecdn.cn/ddd5713133a3c146f52f35c54c4e4f7c.jpg@1l',
      paragraph2: '2018年5月28日,中国科学院第十九次院士大会、中国工程院第十四次院士大会在北京人民大会堂隆重开幕。中共中央总书记、国家主席、中央军委主席习近平出席会议并发表重要讲话。',
      paragraph3: '  建设科技强国,是新时代实现中华民族伟大复兴中国梦的必然选择。自古以来,科学技术就以一种不可逆转、不可抗拒的力量推动着人类社会向前发展。从某种意义上说,科技实力决定着世界政治经济力量对比的变化,也决定着各国各民族的前途命运。中华民族是富有创新精神的民族。我们的先人们发明了造纸术、火药、印刷术、指南针,在天文、算学、医学、农学等多个领域创造了累累硕果,为世界贡献了无数科技创新成果,对世界文明进步影响深远、贡献巨大,也使我国长期居于世界强国之列。然而,明代以后,由于封建统治者闭关锁国、夜郎自大,中国同世界科技发展潮流渐行渐远,屡次错失富民强国的历史机遇。鸦片战争之后,中国更是一次次被经济总量、人口规模、领土幅员远远不如自己的国家打败。我国落后挨打的根子之一就是科技落后。今天,我们比历史上任何时期都更接近实现中华民族伟大复兴的目标,比历史上任何时期都更有信心、更有能力实现这个目标。而要实现这个目标,我们就必须坚定不移贯彻科教兴国战略和创新驱动发展战略,坚定不移走科技强国之路。习近平指出:“实现‘两个一百年’奋斗目标,实现中华民族伟大复兴的中国梦,必须坚持走中国特色自主创新道路,面向世界科技前沿、面向经济主战场、面向国家重大需求,加快各领域科技创新,掌握全球科技竞争先机。这是我们提出建设世界科技强国的出发点。”',
      images2: 'http://a2.peoplecdn.cn/8d69ffe5fcc49a5395b07f8c4012fb61.jpg@1l',
      paragraph4: '  我国经济社会发展比历史上任何时期都更需要科技供给。科技是国之利器,国家赖之以强,企业赖之以赢,人民生活赖之以好。经过改革开放30多年努力,我国经济总量已经居世界第二。同时,我国经济发展的不少领域大而不强、大而不优。新形势下,主要依靠资源、资本、劳动力等要素投入支撑经济增长和规模扩张的方式已不可持续,我国发展正面临着动力转换、方式转变、结构调整的繁重任务。现在,我国低成本资源和要素投入形成的驱动力明显减弱,需要依靠更多更好的科技创新为经济发展注入新动力；社会发展面临人口老龄化、消除贫困、保障人民健康等多方面挑战,需要依靠更多更好的科技创新实现经济社会协调发展；生态文明发展面临日益严峻的环境污染,需要依靠更多更好的科技创新建设天蓝、地绿、水清的美丽中国；能源安全、粮食安全、网络安全、生态安全、生物安全、国防安全等风险压力不断增加,需要依靠更多更好的科技创新保障国家安全。',
      images3: 'http://a4.peoplecdn.cn/4ead45c49024f55553f8c8fb68c49273.jpg@1l',
      paragraph5: '  国家对战略科技支撑的需求比以往任何时期都更加迫切。当前,我国需要解决的战略科技问题还很多。比如,材料是制造业的基础,目前我国在先进高端材料研发和生产方面差距甚大,关键高端材料远未实现自主供给。我国很多重要专利药物市场绝大多数被国外公司占据,高端医疗装备主要依赖进口,成为看病贵的主要原因之一。空间技术深刻改变了人类对宇宙的认知,为人类社会进步提供了重要动力,同时浩瀚的天空还有许多未知的奥秘有待探索,必须推动空间科学、空间技术、空间应用全面发展。这样的领域还有很多。党中央已经确定了我国科技面向2030年的长远战略,决定实施一批重大科技项目和工程,要加快推进,围绕国家重大战略需求,着力攻破关键核心技术,抢占事关长远和全局的科技战略制高点。',
      images4: 'http://a3.peoplecdn.cn/7513207cc033e481ccbdde4ab4837ec3.jpg@1l',
      paragraph6: '  国际科技竞争比以往任何时候都更加激烈,走科技强国之路是正确且必要的战略决策。当前,新一轮世界科技革命和产业变革正孕育兴起,将对世界经济政治格局、产业形态、人们生活方式等带来深刻影响,也必将重塑世界科技竞争格局、改变国家力量对比。科技创新成为许多国家谋求竞争优势的核心战略。习近平指出:“如果我们不识变、不应变、不求变,就可能陷入战略被动,错失发展机遇,甚至错过整整一个时代。”我国既面临赶超跨越的难得历史机遇,也面临差距拉大的严峻挑战。惟有勇立世界科技创新潮头,才能赢得发展主动权,为人类文明进步作出更大贡献。习近平指出:“中国要强盛、要复兴,就一定要大力发展科学技术,努力成为世界主要科学中心和创新高地。”2016年5月党中央颁布《国家创新驱动发展战略纲要》,明确提出了我国建设世界科技强国的“三步走”战略目标:第一步,到2020年进入创新型国家行列；第二步,到2030年跻身创新型国家前列；第三步,到2050年建成世界科技创新强国。2016年5月30日,习近平在全国科技创新大会、两院院士大会、中国科协第九次全国代表大会上强调:“我国科技事业发展的目标是,到2020年时使我国进入创新型国家行列,到2030年时使我国进入创新型国家前列,到新中国成立100年时使我国成为世界科技强国。科学技术从来没有像今天这样深刻影响着国家前途命运,从来没有像今天这样深刻影响着人民生活福祉。习近平指出:“当前,全党全国各族人民正在为全面建成小康社会、实现中华民族伟大复兴的中国梦而团结奋斗。我们比以往任何时候都更加需要强大的科技创新力量。”',
    }],
    comment: [
      
      {
      id:0,
      image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3738611942,2062433065&fm=27&gp=0.jpg',
      username: 'Hello World',
      num: '22',
      usercomment: '赞！赞！赞！',
      time: '06-07  20:03',
      // haspraise: false,

    },
    {
      id: 1,
      image: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2233050185,361857994&fm=27&gp=0.jpg',
      username: '向往阳光',
      num: '90',
      usercomment: '中国加油，习大大辛苦了！',
      time: '06-07  17:46',
      // haspraise: false,
    },
    { id: 2,
      image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3536822752,2201330562&fm=27&gp=0.jpg',
      username: '飞翔',
      num: '35',
      usercomment: '大赞祖国！感谢主席！',
      time: '06-08  08:00',
      // haspraise: false,
    },
    { id: 3,
      image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1238306461,4175201788&fm=27&gp=0.jpg',
      username: 'dreaming',
      num: '90',
      usercomment: '支持！',
      time: '06-08  02:46',
      // haspraise: false,
    },
   { id: 4,
      image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2885719463,3098246584&fm=27&gp=0.jpg',
      username: '心似火',
      num: '90',
      usercomment: '干得漂亮',
      time: '06-08  05:30',
      // haspraise: false,
    }],
    userInfo:[],
    adjust: false,
    inputValue: '',
    TotalNum: 0,
    haspraise: false,
    num: []
   
    
  },
  
  bigger(e) {
   let adjust = this.data.adjust;
   this.setData({
     adjust: true
   })
  },

  smaller (e) {
    this.setData({
      adjust:false
    })
  },

  addComment(e) {
    let inputValue = this.data.inputValue;
    let comment = this.data.comment;
    let TotalNum = this.data.TotalNum;
    const  userInfo = app.globalData.userInfo;
    inputValue = e.detail.value;
    // console.log(app.globalData.userInfo);
    const id = comment.length, image = userInfo.avatarUrl, username = userInfo.nickName, 
          num = 0, usercomment = inputValue, time='刚刚', haspraise = false;
    let arr =[{ id, image, username, num, usercomment, time, haspraise }];
    TotalNum++;
    comment.push(arr[0]);
    console.log(comment);
    this.setData({
      comment,
      inputValue: null,
      TotalNum
    })
    
   },
   
     
    
   
   
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     let  TotalNum = this.data.TotalNum;
     let  comment = this.data.comment;
     TotalNum = comment.length;
     this.setData({
       TotalNum
     })
    /**  
     * 获取用户信息  
     */  
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})