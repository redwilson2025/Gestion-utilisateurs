<script setup>

import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const route = useRoute();
const router = useRouter();

const currentvalue = ref(null);
const UserId = route.params.id;
console.log("ID reçu via l'URL :", route.params.id);
onMounted(async () => {
    try {
        const res = await fetch(`https://dummyjson.com/users/${UserId}`);
        if (!res.ok) throw new Error("Erreur de récupération");
        currentvalue.value = await res.json();


    } catch (error) {
        console.error(error);
    } 
});
console.log(currentvalue);

</script>


<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      
      <!-- État de chargement (Skeleton) -->
      <div v-if="!currentvalue" class="animate-pulse bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <div class="flex items-center space-x-4">
          <div class="rounded-full bg-gray-200 h-24 w-24"></div>
          <div class="flex-1 space-y-4 py-1">
            <div class="h-4 bg-gray-200 rounded w-3/4"></div>
            <div class="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>

      <!-- Carte Profil -->
      <div v-else class="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden transition-all hover:shadow-2xl">
        
        <!-- Header / Banner -->
        <div class="h-32 bg-gradient-to-r from-indigo-600 to-purple-600"></div>

        <div class="px-8 pb-8">
          <div class="relative">
            <!-- Avatar avec bordure -->
            <img 
              :src="currentvalue.image" 
              :alt="currentvalue.firstName"
              class="absolute -top-16 left-0 h-32 w-32 rounded-2xl border-4 border-white bg-gray-100 object-cover shadow-md"
            />
            
            <div class="pt-20">
              <div class="flex justify-between items-start">
                <div>
                  <h1 class="text-3xl font-extrabold text-gray-900">
                    {{ currentvalue.firstName }} {{ currentvalue.lastName }}
                  </h1>
                  <p class="text-indigo-600 font-medium">{{ currentvalue.company?.title || 'Employé' }}</p>
                </div>
                <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Actif
                </span>
              </div>
            </div>
          </div>

          <!-- Grille d'informations -->
          <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-100 pt-8">
            
            <div class="flex items-center space-x-3 text-gray-700">
              <div class="p-2 bg-indigo-50 rounded-lg text-indigo-600">📧</div>
              <div>
                <p class="text-xs text-gray-400 uppercase font-bold tracking-wider">Email Professionnel</p>
                <p class="font-medium">{{ currentvalue.email }}</p>
              </div>
            </div>

            <div class="flex items-center space-x-3 text-gray-700">
              <div class="p-2 bg-indigo-50 rounded-lg text-indigo-600">📞</div>
              <div>
                <p class="text-xs text-gray-400 uppercase font-bold tracking-wider">Téléphone</p>
                <p class="font-medium">{{ currentvalue.phone }}</p>
              </div>
            </div>

            <div class="flex items-center space-x-3 text-gray-700">
              <div class="p-2 bg-indigo-50 rounded-lg text-indigo-600">🏢</div>
              <div>
                <p class="text-xs text-gray-400 uppercase font-bold tracking-wider">Département</p>
                <p class="font-medium">{{ currentvalue.company?.department }}</p>
              </div>
            </div>

            <div class="flex items-center space-x-3 text-gray-700">
              <div class="p-2 bg-indigo-50 rounded-lg text-indigo-600">📍</div>
              <div>
                <p class="text-xs text-gray-400 uppercase font-bold tracking-wider">Ville</p>
                <p class="font-medium">{{ currentvalue.address?.city }}</p>
              </div>
            </div>

          </div>

          <!-- Section Bio/Infos supp -->
          <div class="mt-10 p-5 bg-gray-50 rounded-2xl border border-gray-100">
            <h3 class="text-sm font-bold text-gray-900 uppercase tracking-tight mb-2">Informations complémentaires</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              Utilisateur enregistré sous l'ID #{{ currentvalue.id }}. 
              Né le {{ currentvalue.birthDate }}. 
              Université : {{ currentvalue.university }}.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<style scoped>


</style>