<script setup>


</script>


<template>
  <div class="bg-white">
    <!-- Section Hero -->
    <header class="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white pb-16 pt-24 sm:pb-24 sm:pt-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Gérez vos projets avec <span class="text-indigo-600">élégance</span>
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            La plateforme tout-en-un pour synchroniser vos équipes, suivre vos objectifs et booster votre productivité sans effort.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <RouterLink to="/login" class="rounded-full bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Commencer maintenant
            </RouterLink>
            <RouterLink to="/about" class="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors">
              En savoir plus <span aria-hidden="true">→</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </header>

    <!-- Section Fonctionnalités (Features) -->
    <section class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <h2 class="text-base font-semibold leading-7 text-indigo-600">Plus rapide, plus simple</h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tout ce dont vous avez besoin pour réussir
          </p>
        </div>

        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <!-- Feature 1 -->
            <div class="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <svg xmlns="http://www.w3.org" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="Window-13,10V3L4,14h7v7l9-11h-7z" />
                </svg>
              </div>
              <dt class="text-lg font-semibold leading-7 text-gray-900">Performance Éclair</dt>
              <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p>Optimisé pour la vitesse avec Vue.js et Tailwind CSS pour une expérience utilisateur fluide.</p>
              </dd>
            </div>

            <!-- Feature 2 -->
            <div class="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <svg xmlns="http://www.w3.org" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <dt class="text-lg font-semibold leading-7 text-gray-900">Sécurité Maximale</dt>
              <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p>Vos données sont protégées par les protocoles de chiffrement les plus avancés du marché.</p>
              </dd>
            </div>

            <!-- Feature 3 -->
            <div class="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <svg xmlns="http://www.w3.org" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <dt class="text-lg font-semibold leading-7 text-gray-900">Design Intuitif</dt>
              <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p>Une interface pensée pour l'humain, simple à apprendre et agréable à utiliser au quotidien.</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  </div>
</template>


<style scoped>


</style>