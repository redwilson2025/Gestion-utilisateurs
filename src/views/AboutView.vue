<script setup>


</script>


<template>
    <div class="bg-white min-h-screen">
        <!-- Hero Section : Ajout d'un dégradé léger -->
        <header class="relative py-24 bg-gradient-to-b from-gray-50 to-white border-b border-gray-100">
            <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                    Nous simplifions la <span class="text-indigo-600">gestion humaine</span>
                </h1>
                <p class="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                    Notre plateforme permet aux entreprises de se concentrer sur l'essentiel : l'épanouissement de leurs
                    talents et la croissance de leurs projets.
                </p>
            </div>
        </header>

        <!-- Stats Section : Amélioration du responsive -->
        <section class="py-16">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <dl class="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 text-center">
                    <div class="flex flex-col gap-y-2 border-l-4 border-indigo-500 pl-6 text-left">
                        <dt class="text-sm font-medium uppercase tracking-wider text-gray-500">Employés gérés</dt>
                        <dd class="text-4xl font-bold tracking-tight text-indigo-600">10,000+</dd>
                    </div>
                    <div class="flex flex-col gap-y-2 border-l-4 border-indigo-500 pl-6 text-left">
                        <dt class="text-sm font-medium uppercase tracking-wider text-gray-500">Temps gagné / mois</dt>
                        <dd class="text-4xl font-bold tracking-tight text-indigo-600">40h</dd>
                    </div>
                    <div class="flex flex-col gap-y-2 border-l-4 border-indigo-500 pl-6 text-left">
                        <dt class="text-sm font-medium uppercase tracking-wider text-gray-500">Satisfaction client</dt>
                        <dd class="text-4xl font-bold tracking-tight text-indigo-600">99.9%</dd>
                    </div>
                </dl>
            </div>
        </section>

        <!-- Content Section : Image corrigée et cartes stylisées -->
        <section class="py-24 bg-white overflow-hidden">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-2 items-center">
                    <div>
                        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Notre Vision</h2>
                        <p class="mt-6 text-lg leading-8 text-gray-600 text-justify leading-relaxed">
                            Fondée avec la conviction que la technologie doit servir l'humain, notre application offre
                            une interface intuitive pour la gestion des collaborateurs. Que vous soyez administrateur ou
                            employé, nous garantissons la sécurité et la transparence de vos données.
                        </p>
                        
                        <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <!-- Carte Sécurité -->
                            <div class="group rounded-xl bg-indigo-50 p-6 border border-indigo-100 hover:bg-indigo-600 transition-all duration-300">
                                <h4 class="font-bold text-indigo-700 group-hover:text-white mb-2">🛡️ Sécurité</h4>
                                <p class="text-sm text-gray-600 group-hover:text-indigo-100">Accès restreints et protection stricte des données personnelles.</p>
                            </div>
                            <!-- Carte Rapidité -->
                            <div class="group rounded-xl bg-indigo-50 p-6 border border-indigo-100 hover:bg-indigo-600 transition-all duration-300">
                                <h4 class="font-bold text-indigo-700 group-hover:text-white mb-2">⚡ Rapidité</h4>
                                <p class="text-sm text-gray-600 group-hover:text-indigo-100">Une interface fluide bâtie avec les dernières technologies (Vue 3).</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="relative">
                        <!-- Image valide venant de Pexels -->
                        <img src="https://images.pexels.com" 
                             alt="Collaboration d'équipe"
                             class="rounded-2xl shadow-2xl ring-1 ring-gray-200 object-cover h-[450px] w-full transform hover:scale-[1.02] transition-transform duration-500">
                        <!-- Décoration derrière l'image -->
                        <div class="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-100 -z-10 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer simple -->
        <footer class="bg-gray-900 py-12 text-center">
            <p class="text-gray-400 text-sm italic">© 2024 HR Management Portal. Bâti avec passion.</p>
        </footer>
    </div>
</template>


<style scoped></style>