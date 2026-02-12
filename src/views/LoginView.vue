<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { authService, getuser, currentvalue } from '@/services/authService';
const router = useRouter();
const message = ref(null);
const email = ref('')
const password = ref('')
onMounted(async () => {
  await getuser();
  console.log("Utilisateurs chargés :", currentvalue.value);
});
function connect() {
  message.value = null;
  if (!email.value || !password.value) {
    message.value = 'Veuillez remplir tous les champs';
    return;
  }
  const userFound = currentvalue.value.find(u =>
    u.email === email.value && u.password === password.value
  );

  if (userFound) {
    localStorage.setItem("UserRole", userFound.role);
    localStorage.setItem("UserId", userFound.id);
    authService.login();
    if (userFound.role === "admin") {
      router.push("/dashboard");
    } else {
      router.push(`/employees/${userFound.id}`);
    }

  } else {
    message.value = "Email ou mot de passe incorrect";
  }
}

</script>
<template>
  <!-- Fond : Dégradé doux au lieu du jaune vif -->
  <div class="bg-gradient-to-br from-slate-100 to-indigo-100 dark:from-gray-900 dark:to-slate-900 h-screen overflow-hidden flex items-center justify-center p-4">
    
    <div class="relative bg-white dark:bg-gray-800 lg:w-4/12 md:w-6/12 w-full shadow-2xl rounded-2xl transition-all border border-gray-100 dark:border-gray-700">
      
      <!-- Icône flottante : Indigo au lieu de Gris sombre -->
      <div class="bg-indigo-600 shadow-lg shadow-indigo-200 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl p-5">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="#FFF">
          <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
        </svg>
      </div>

      <form class="p-8 md:p-12 mt-4" @submit.prevent="connect">
        <h2 class="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8 italic">Connexion</h2>

        <!-- Message d'erreur stylisé -->
        <div v-if="message" class="mb-6 p-3 rounded-lg bg-red-50 text-red-600 text-xs font-bold border border-red-100 flex items-center gap-2">
          <span>⚠️</span> {{ message }}
        </div>

        <!-- Input Email -->
        <div class="relative flex items-center mb-6">
          <svg class="absolute ml-4 fill-gray-400" width="20" viewBox="0 0 24 24">
            <path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" />
          </svg>
          <input 
            v-model="email" 
            type="email" 
            class="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl pl-12 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all dark:text-white"
            placeholder="Email Address" 
          />
        </div>

        <!-- Input Password -->
        <div class="relative flex items-center mb-8">
          <svg class="absolute ml-4 fill-gray-400" viewBox="0 0 24 24" width="20">
            <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z" />
          </svg>
          <input 
            type="password" 
            v-model="password" 
            class="w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl pl-12 py-3 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all dark:text-white"
            placeholder="Password" 
          />
        </div>

        <!-- Bouton Login -->
        <button
          class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-indigo-100 transition-all active:scale-95 uppercase tracking-wide">
          Se connecter
        </button>
      </form>

      <div class="pb-8 text-center">
        <p class="text-sm text-gray-500">Accès réservé au personnel</p>
      </div>
    </div>
  </div>
</template>





<style scoped></style>