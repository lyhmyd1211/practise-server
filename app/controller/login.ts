import { Controller } from "egg";
import { print } from "../util";
const tokens = {
  admin: {
    token: "admin-token",
  },
  editor: {
    token: "editor-token",
  },
};
const users = {
  'admin-token': { 'token': 'admin-token', 'user': { 'id': 58, 'name': '管理员', 'phone': '13111111111', 'email': '1@qq.com', 'account': 'admin', 'password': '123456', 'agentId': 12, 'createTime': null, 'userType': '02', 'status': '01', 'roleId': 9, 'roleName': '超级管理员', 'agent': { 'id': 12, 'memberId': 58, 'agentName': '测试', 'agentType': 0, 'extentOfJurisdiction': '110000,120000', 'city': null, 'agentPerson': '管理员', 'agentPhone': '13111111111', 'bindAccount': null, 'accountBalances': 0.00, 'balancesLastChange': '2020-05-21扣减2,750.00元', 'status': 0, 'createTime': 1588155993126, 'branchAgentId': null, 'branchAgent': null, 'openBank': '到达地', 'bankAccount': '555555', 'memberAccount': 'chaoguan', 'memberName': '管理员', 'memberPhone': '13111111111', 'accountBalancesList': [], 'user': null, 'branchAgentBean': null, 'count': null }, 'resource': [108], 'resourceRoles': [{ 'roId': 9, 'label': null, 'reId': 108 }] }},
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}
export default class LoginController extends Controller {
  public async login() {
    print.execute("LoginController");
    const { ctx } = this;
    // 获取 http Request  body 参数
    const { account } = ctx.request.body;
    const token = tokens[account];
    // mock error
    if (!token) {
      ctx.body = {
        code: 60204,
        message: "Account and password are incorrect.",
      };
    }

    ctx.body = {
      code: 0,
      data: token,
    };
  }

  public async session() {
    const { ctx } = this;
    const info = users['admin-token']
    // mock error
    if (!info) {
      ctx.body = {
        code: 50008,
        message: 'Login failed, unable to get user details.'
      }
    }

    ctx.body = {
      code: 0,
      data: info
    }
  }
}
