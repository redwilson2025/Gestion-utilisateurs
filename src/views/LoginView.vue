<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { authService,getuser,currentvalue } from '@/services/authService';
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
        authService.login();
        if (userFound.role === "admin") {
            router.push("/dashboard");
        } else {
            router.push("/employees");
        }
        
    } else {
        message.value = "Email ou mot de passe incorrect";
    }
}

</script>
<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="text-center text-3xl font-extrabold text-gray-900">Connexion</h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100">
        <div v-if="message" class="mb-4 p-3 rounded bg-red-50 text-red-700 text-sm border border-red-200">
          {{ message }}
        </div>

        <form @submit.prevent="connect" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input 
              v-model="email" 
              type="email" 
              placeholder="Ex: atuny0@sohu.com"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700">Mot de passe</label>
            <input 
              v-model="password" 
              type="password" 
              placeholder="Mot de passe"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
          </div>

          <button 
            type="submit" 
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors disabled:bg-gray-400"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  </div>
</template>




<style scoped>


</style>