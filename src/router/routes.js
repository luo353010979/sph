//引入插件组件
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
import Center from "@/pages/Center";

//引入二级路由组件
import MyOrder from "@/pages/Center/MyOrder";
import GroupOrder from "@/pages/Center/GroupOrder";

export default [
  {
    path: "/center",
    component: Center,
    meta: {
      show: true,
    },
    children: [
      {
        path: "myorder",
        component: MyOrder,
      },

      {
        path: "grouporder",
        component: GroupOrder,
      },
      {
        path: "/center",
        redirect: "/center/myorder",
      },
    ],
  },

  {
    path: "/home",
    component: Home,
    meta: {
      show: true,
    },
  },
  {
    path: "/detail/:skuid",
    component: Detail,
    meta: {
      show: true,
    },
  },
  {
    path: "/addcartsuccess",
    component: AddCartSuccess,
    name: "addcartsuccess",
    meta: {
      show: true,
    },
  },

  {
    path: "/shopcart",
    component: ShopCart,
    name: "shopcart",
    meta: {
      show: true,
    },
  },
  {
    path: "/trade",
    component: Trade,
    name: "trade",
    meta: {
      show: true,
    },
    //路由独享守卫
    beforeEnter: (to, from, next) => {
      if (from.path == "/shopcart") {
        next();
      } else {
        next(false);
      }
    },
  },

  {
    path: "/pay",
    component: Pay,
    name: "pay",
    meta: {
      show: true,
    },
    beforeEnter(to, from, next) {
      if (from.path == "trade") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/paysuccess",
    component: PaySuccess,
    name: "paysuccess",
    meta: {
      show: true,
    },
  },

  {
    path: "/search/:keyword?",
    component: Search,
    meta: {
      show: true,
    },
    name: "search",
  },
  {
    path: "/login",
    component: Login,
    meta: {
      show: false,
    },
  },
  {
    path: "/register",
    component: Register,
    meta: {
      show: false,
    },
  },
  //重定向 在项目跑起来的时候，访问/立马让他定向到首页
  {
    path: "*",
    redirect: "/home",
  },
];
