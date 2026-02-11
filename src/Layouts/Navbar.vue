<script setup>
import { useRouter } from 'vue-router';
import { authState, authService } from '@/services/authService';
import { watch, ref, onMounted } from 'vue';

const router = useRouter();
const user = authState; 
const role = ref(localStorage.getItem("UserRole")); 

function deconnect() {
    authService.logout();
    role.value = null; 
}


watch(user, (isAuth) => {
  if (!isAuth) {
    router.push('/');
  } else {
    role.value = localStorage.getItem("UserRole");
  }
});
</script>

<template>
    <nav class="bg-white shadow-md border-b border-gray-100">
        <ul class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            
            <li v-if="user" class="flex items-center justify-between w-full w-full">
                <div class="flex space-x-6">
                    <RouterLink class="nav-link" to="/">Home</RouterLink>
                    <RouterLink class="nav-link" to="/about">About</RouterLink>
                    <RouterLink v-if="role === 'admin'" class="nav-link" to="/dashboard">
                        Dashboard 
                    </RouterLink>
                    <RouterLink v-else class="nav-link" to="/employees">
                        Mes Infos 
                    </RouterLink>
                </div>
                
                <div class="flex items-center space-x-4">
                    <span class="text-xs font-bold px-2 py-1 bg-gray-100 text-gray-500 rounded uppercase tracking-wider">
                        {{ role }}
                    </span>
                    <button 
                        @click="deconnect" 
                        class="bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2 rounded-lg text-sm font-semibold transition-all border border-red-100"
                    >
                        Se déconnecter
                    </button>
                </div>
            </li>

            <!-- Cas : Visiteur (Non connecté) -->
            <li v-else class="flex items-center justify-between w-full">
                <div class="flex space-x-6">
                    <RouterLink class="nav-link" to="/">Home</RouterLink>
                    <RouterLink class="nav-link" to="/about">About</RouterLink>
                </div>
                
                <RouterLink 
                    class="bg-indigo-600 text-white hover:bg-indigo-700 px-5 py-2 rounded-lg text-sm font-semibold shadow-sm transition-all" 
                    to="/login"
                >
                    Login
                </RouterLink>
            </li>

        </ul>
    </nav>
</template>

<style scoped>
/* Classe utilitaire pour éviter de répéter les styles Tailwind sur chaque lien */
/* .nav-link {
    @apply text-gray-700 hover:text-indigo-600 font-medium transition-colors;
} */
</style>
