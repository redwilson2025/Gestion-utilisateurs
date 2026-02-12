<script setup>
defineProps(['employee']);
defineEmits(['delete']);
const getRoleClass = (role) => {
    if (role === 'admin') return 'bg-purple-100 text-purple-700 border-purple-200';
    return 'bg-blue-100 text-blue-700 border-blue-200';
};
</script>

<template>
    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all relative overflow-hidden group">
        <button 
            @click="$emit('delete', employee.id)"
            class="absolute top-4 right-4 p-2 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white rounded-xl transition-all z-10"
            title="Supprimer définitivement"
        >
            <svg xmlns="http://www.w3.org" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
        </button>

        <div class="flex items-start space-x-4">
            <img :src="employee.image" class="w-20 h-20 rounded-2xl bg-gray-50 object-cover shadow-sm border border-gray-100" />
            
            <div class="flex-1 pr-8">
                <div class="flex flex-wrap items-center gap-2 mb-1">
                    <h3 class="font-bold text-gray-900 text-lg leading-tight">
                        {{ employee.firstName }} {{ employee.lastName }}
                    </h3>
                    <span :class="['text-[10px] uppercase tracking-widest font-extrabold px-2 py-0.5 rounded-full border', getRoleClass(employee.role)]">
                        {{ employee.role || 'Staff' }}
                    </span>
                </div>
                
                <p class="text-sm text-indigo-600 font-semibold italic">
                    {{ employee.company?.title || 'Collaborateur' }}
                </p>
            </div>
        </div>
        <div class="mt-6 pt-4 border-t border-gray-50 grid grid-cols-1 gap-y-3">
            <div class="flex items-center text-xs text-gray-600">
                <span class="w-24 font-bold text-gray-400 uppercase tracking-tighter">Département :</span>
                <span class="font-medium text-gray-800">{{ employee.company?.department || 'N/A' }}</span>
            </div>
            <div class="flex items-center text-xs text-gray-600">
                <span class="w-24 font-bold text-gray-400 uppercase tracking-tighter">Email :</span>
                <span class="font-medium text-gray-800 truncate">{{ employee.email }}</span>
            </div>
        </div>
    </div>
</template>




<style scoped>


</style>