<script setup>
defineProps(['isOpen', 'employeeName']);
defineEmits(['confirm', 'cancel']);
</script>
<template>
  <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm">
    <div class="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl transform transition-all animate-in fade-in zoom-in duration-300">
      <div class="w-20 h-20 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-4xl">
        🗑️
      </div>
      <h3 class="text-2xl font-black text-center text-gray-900 leading-tight">Supprimer ?</h3>
      <p class="text-gray-500 text-center mt-3 text-sm px-4">
        Voulez-vous vraiment retirer <b>{{ employeeName }}</b> de l'équipe ?
      </p>
      
      <div class="flex flex-col gap-3 mt-8">
        <button @click="$emit('confirm')" class="w-full py-4 bg-red-500 text-white font-black rounded-2xl hover:bg-red-600 shadow-lg shadow-red-200 transition-all active:scale-95">
          OUI, SUPPRIMER
        </button>
        <button @click="$emit('cancel')" class="w-full py-4 bg-gray-100 text-gray-500 font-bold rounded-2xl hover:bg-gray-200 transition-colors">
          ANNULER
        </button>
      </div>
    </div>
  </div>
</template>





<style scoped>


</style>