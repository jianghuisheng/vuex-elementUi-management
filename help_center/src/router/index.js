import Vue from "vue";
import Router from "vue-router";

const Home = () => import("@/components/home");
const Login = () => import("@/components/login");
const Mockpage = () => import("@/components/home/mockpage");
const Userlist = () => import("@/components/home/userlist");
const Useradd = () => import("@/components/home/useradd");
const Passwordedit = () => import("@/components/home/passwordedit");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
      children: [
        {
          path: "",
          component: Mockpage
        },
        {
          path: "/userlist",
          component: Userlist
        },
        {
          path: "/useradd",
          component: Useradd
        },
        {
          path: "/passwordedit",
          component: Passwordedit
        }
      ]
    },
    {
      path: "/login",
      component: Login
    }
  ]
});
