const Mock = require('../../mock');

let userListData = Mock.mock({
  'data|80-100': [
    {
      id:'@id',
      name:'@cname',
      nickname:'@last',
      phone:/^1[34578]\d{9}$/,
      'age|11-99': 1,
      address:'@county(true)',
      isMale:'@boolean',
      email:'@email',
      createTime:'@datetime',
      avatar() {
        return Mock.Random.image('100x100',Mock.Random.color(),'#757575','png',this.nickname.substr(0,1))
      },
      delFlag:0,
      status:1,
      userType:'1',
      no:'@id',
      remarks:'@cparagraph(1,3)',
    }
  ]
})
