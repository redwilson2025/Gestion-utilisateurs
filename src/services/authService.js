import { ref } from "vue";
export const currentvalue =ref([]);
export const authState = ref(localStorage.getItem("Auth") === "true");
export const authService = {
  login() {
    localStorage.setItem("Auth", "true");
    authState.value = true;
  },

  logout() {
    localStorage.removeItem("Auth");
    authState.value = false;
  },

  isAuthenticated() {
    return authState.value;
  },
};

export async function getuser () {
    try {
        const res = await fetch(`https://dummyjson.com/users`);
        if (!res.ok) throw new Error("Erreur de récupération");
      const data = await res.json();
      currentvalue.value= data.users    

    } catch (error) {
        console.error(error);
    } 
 }