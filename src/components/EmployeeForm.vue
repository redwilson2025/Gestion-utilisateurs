<script setup>
import { ref } from 'vue';

const emit = defineEmits(['add-employee']);

const defaultImage = 'https://robohash.org';

const newEmployee = ref({
    firstName: '',
    lastName: '',
    email: '',
    company: { title: '', department: '' },
    image: '' // On laisse vide au départ
});

const submitForm = () => {
    if (!newEmployee.value.firstName || !newEmployee.value.email) return;

    // Si aucune image n'est saisie, on met l'image par défaut
    const finalData = { 
        ...newEmployee.value, 
        image: newEmployee.value.image || defaultImage 
    };

    emit('add-employee', finalData);

    // Reset
    newEmployee.value = {
        firstName: '',
        lastName: '',
        email: '',
        company: { title: '', department: '' },
        image: ''
    };
};
</script>

<template>
    <form @submit.prevent="submitForm" class="space-y-4">
        <!-- Section Preview de l'image -->
        <div class="flex items-center space-x-4 mb-6 p-3 bg-indigo-50 rounded-xl border border-indigo-100">
            <img :src="newEmployee.image || defaultImage" 
                 class="w-16 h-16 rounded-lg object-cover bg-white border-2 border-indigo-200" 
                 alt="Preview">
            <div>
                <p class="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Aperçu de la photo</p>
                <p class="text-xs text-gray-500 italic">L'image se mettra à jour via l'URL</p>
            </div>
        </div>

        <!-- Champs Nom / Prénom -->
        <div class="grid grid-cols-2 gap-4">
            <div>
                <label class="block text-xs font-bold text-gray-400 uppercase mb-1">Prénom</label>
                <input v-model="newEmployee.firstName" type="text" required
                    class="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-sm"
                    placeholder="Jean">
            </div>
            <div>
                <label class="block text-xs font-bold text-gray-400 uppercase mb-1">Nom</label>
                <input v-model="newEmployee.lastName" type="text" required
                    class="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-sm"
                    placeholder="Dupont">
            </div>
        </div>

        <!-- Champ Image URL (Le nouveau champ) -->
        <div>
            <label class="block text-xs font-bold text-gray-400 uppercase mb-1">URL de la photo</label>
            <div class="relative">
                <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">🖼️</span>
                <input v-model="newEmployee.image" type="url"
                    class="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-sm"
                    placeholder="https://images.com">
            </div>
        </div>

        <!-- Champ Email -->
        <div>
            <label class="block text-xs font-bold text-gray-400 uppercase mb-1">Email</label>
            <input v-model="newEmployee.email" type="email" required
                class="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-sm"
                placeholder="jean.dupont@entreprise.com">
        </div>

        <!-- Poste / Département -->
        <div class="grid grid-cols-2 gap-4 text-sm">
            <div>
                <label class="block text-xs font-bold text-gray-400 uppercase mb-1">Poste</label>
                <input v-model="newEmployee.company.title" type="text"
                    class="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    placeholder="Développeur">
            </div>
            <div>
                <label class="block text-xs font-bold text-gray-400 uppercase mb-1">Département</label>
                <input v-model="newEmployee.company.department" type="text"
                    class="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    placeholder="IT">
            </div>
        </div>

        <button type="submit" 
            class="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95 mt-4">
            ➕ Créer le profil
        </button>
    </form>
</template>



<style scoped>


</style>