'use strict';

import {hashHistory} from 'react-router';
//导入历史导航用以路由跳转

class RemoteInter{
//权限有关远程数据交互的方法
  static objExtend(destination, source) {
    //处理对象相加
    for(var property in source){
      destination[property] = source[property];
    }
    return destination;
  }

  static notFound() {
    //用于处理404的通用方法
    console.log("404 not found");

  }

  static deny() {
    //用于处理403的通用方法
    console.log("you have no permisstion");
    hashHistory.replace("login");
  }

  static serverError() {
      console.log('error 500');
  }

  static jqueryAjax(url, method, data, successfunction, denyfunction, notFoundfunction,serverErrorfunction){
    //ajax 通用模板
    var appkey_data = { app_key: $("#app").attr("appkey") };
    data = this.objExtend(data, appkey_data);
    $.ajax({
      url: url,
      method: method,
      data: data,
      statusCode: {
        404: notFoundfunction,
        200: successfunction,
        403: denyfunction,
        500: serverErrorfunction
      }
    });

  }//end of jqueryAjax

  static getLoginKey(component) {
    //获取包含登录信息的加密信息
    this.jqueryAjax(
      '/shopadmin/sessions/get_login_key',
      'get',
      {},
      function(data){
        console.log("succesedata:"+data);
        if (component=="login") {
            console.log("已经登录，前往首页");
            hashHistory.replace("/");
        }
        if (component=="layout") {
            console.log("已经登录，前往首页");
            hashHistory.replace("/");
        }
        if (component=="NewImage") {
          hashHistory.replace("/images/new");
        }
        if (component=="ImageAdmin") {
          hashHistory.replace("/images");
        }
        if (component=="EditImage") {
          hashHistory.replace("/images/edit");
        }


      },
      function(){
        console.log("you have no permisstion");
        if (component=="login") {
            console.log("已经在login内部，不再跳转");
            return false;
        }
        hashHistory.replace("login");
      }
      ,
      this.notFound(),
      this.serverError()
    );
  }

  static login(email, password) {
    //登录
    this.jqueryAjax(
      '/shopadmin/sessions/create',
      'post',
      {email: email, password: password},
      function(data){
        console.log("succesedata:"+data);
        $("#app").attr("appkey", data);
        hashHistory.replace("/")
      },
      this.deny(),
      this.notFound(),
      this.serverError()
    );

  }// end of login


  static logOut() {
    this.jqueryAjax(
      '/shopadmin/sessions/destroy',
      'get',
      {},
      function(data){
        console.log("success log out:"+data);
        $("#app").attr("appkey", data);
        hashHistory.replace("login")
      },
      this.deny(),
      this.notFound(),
      this.serverError()
    );
  }
}

export { RemoteInter as default };
