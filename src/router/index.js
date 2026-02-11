import { createRouter, createWebHistory } from "vue-router";
import { authService } from "@/services/authService";
import LoginView from "@/views/LoginView.vue";
import DashboardView from "@/views/DashboardView.vue";
import AboutView from "@/views/AboutView.vue";
import EmployeesView from "@/views/EmployeesView.vue";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/login", name: "login", component: LoginView },
    { path: "/about", name: "about", component: AboutView },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
      meta: { requiresAuth: true, isAdmin: true }, 
    },
    {
      path: "/employees",
      name: "employees",
      component: EmployeesView,
      meta: { requiresAuth: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const loggedIn = authService.isAuthenticated();
  const userRole = localStorage.getItem("UserRole"); 
  if (to.meta.requiresAuth && !loggedIn) {
    return next({ name: "login" });
  }
  if (to.name === "login" && loggedIn) {
    return userRole === "admin" 
      ? next({ name: "dashboard" }) 
      : next({ name: "employees" });
  }

  if (to.meta.isAdmin && userRole !== "admin") {
 
    return next({ name: "employees" });
  }
  next();
});

export default router;
