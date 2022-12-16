//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import stroe from "@/store";
import store from "@/store";
//使用插件
Vue.use(VueRouter);

//先把VueRouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

//重写push|replace
//第一个参数：告诉原来push方法，你往哪里跳（传递哪些参数）
//第二个参数：成功回调
//第三个参数：失败回调
//call||apply区别
//相同点：都可以调用一次函数，都可以篡改函数的上下文一次
//不同点：call与apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

let router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    //代表滚动条在最上方
    return { y: 0 };
  },
});

//全局守卫：前置守卫（在路由跳转前进行判断）
router.beforeEach(async (to, from, next) => {
  //to:要跳转的目标路由信息
  //from:从哪个路由而来的
  //next:放行函数 next()放行 next(path)放行到指定路由 next(false)
  let token = stroe.state.user.token;
  let name = stroe.state.user.userInfo.name;
  if (token) {
    //如果已经登录了 还想去login 直接停留在首页
    if (to.path == "/login" || to.path == "/register") {
      next("/");
    } else {
      //登录了且有用户信息，直接放行
      if (name) {
        next();
      } else {
        //登录了且没有用户信息，在跳转之前获取用户信息
        try {
          await stroe.dispatch("getUserInfo");
          next();
        } catch (error) {
          //token 失效 重新登录
          await store.dispatch("userLogout");
          next("/login");
        }
      }
    }
  } else {
    let toPath = to.path;
    if (
      toPath.indexOf("/trade") != -1 ||
      toPath.indexOf("/pay") != -1 ||
      toPath.indexOf("/center") != -1
    ) {
      next("/login?redirect=" + toPath);
    } else {
      next();
    }
  }
});

export default router;
