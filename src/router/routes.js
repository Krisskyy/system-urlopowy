const routes = [
  {
    path: "/",
    component: () => import("layouts/Login/LoginPageLayout.vue"),
    children: [
      { 
        path: "",
       component: () => import("pages/Login/LoginPage.vue") 
      },
      {
        path: "/ForgotPassword",
        component: () => import("pages/Login/ForgotPassword.vue"),
      },
      {
        path: "/ChangePassword",
        component: () => import("pages/Login/ChangePassword.vue"),
      },
      {
        path: "/NewPassword",
        component: () => import("pages/Login/NewPassword.vue"),
      },
      {
        path: "/PasswordChanged",
        component: () => import("pages/Login/PasswordChanged.vue"),
      },
    ],
  },

  {
    path: "/main",
    component: () => import("layouts/Main/MainPageLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Main/RequestsPage.vue") },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
