import fetch from '../config/fetch'
/**
 * 账号密码登录
 */
export const accountLogin = (username,password) => fetch('/usermanage/login',{username,password},'POST');
/**
 * 获取我的场景、场景商店、个人私库数据
 */
export const getanalysismodel = (creator,order,type) => fetch('/analysismodel/getanalysismodel',{creator,order,type},'GET');
