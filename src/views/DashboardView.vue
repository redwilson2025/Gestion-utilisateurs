<script setup>
import EmployeeForm from '@/components/EmployeeForm.vue';
import EmployeeCard from '@/components/EmployeeCard.vue';
import ModalView from './ModalView.vue';
import { ref, onMounted } from 'vue';
import { userService } from '@/services/employeeService';

const employees = ref([]);
const loading = ref(false);
const error = ref(null);

// États pour la modale de suppression
const isModalOpen = ref(false);
const employeeToDelete = ref(null);

async function loadEmployees() {
    loading.value = true;
    error.value = null;
    try {
        employees.value = await userService.getEmployees();
    } catch (err) {
        error.value = "Impossible de charger les employés.";
    } finally {
        loading.value = false;
    }
}

function handleAddEmployee(newEmp) {
    const employeeWithId = { 
        ...newEmp, 
        id: Date.now(),
        image: newEmp.image || `https://robohash.org{Date.now()}` 
    };
    employees.value.unshift(employeeWithId);
}

// ETAPE 1 : Préparation de la suppression (Ouvre la modale)
function prepareDelete(employee) {
    employeeToDelete.value = employee;
    isModalOpen.value = true;
}

// ETAPE 2 : Confirmation finale (Exécutée par la modale)
function confirmDelete() {
    if (employeeToDelete.value) {
        employees.value = employees.value.filter(emp => emp.id !== employeeToDelete.value.id);
        closeModal();
    }
}

function closeModal() {
    isModalOpen.value = false;
    employeeToDelete.value = null;
}

onMounted(loadEmployees);
</script>

<template>
    <div class="p-8 max-w-7xl mx-auto bg-gray-50 min-h-screen relative">
        
        <!-- Modale de Confirmation -->
        <ModalView
            :isOpen="isModalOpen" 
            :employeeName="employeeToDelete ? `${employeeToDelete.firstName} ${employeeToDelete.lastName}` : ''"
            @confirm="confirmDelete"
            @cancel="closeModal"
        />

        <div v-if="error" class="mb-6 p-4 bg-red-100 text-red-700 rounded-2xl border border-red-200">{{ error }}</div>

        <header class="mb-10 flex justify-between items-center">
            <div>
                <h1 class="text-3xl font-bold text-gray-900 tracking-tight">Gestion des Employés</h1>
                <p class="text-gray-500 font-medium">Interface Administrateur</p>
            </div>
            <div class="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-bold">
                {{ employees.length }} Collaborateurs
            </div>
        </header>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div class="lg:col-span-1">
                <div class="sticky top-8 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <h2 class="text-xl font-bold mb-6 text-gray-800">Nouveau Profil</h2>
                    <EmployeeForm @add-employee="handleAddEmployee" />
                </div>
            </div>

            <div class="lg:col-span-2">
                <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div v-for="i in 6" :key="i" class="h-32 bg-white animate-pulse rounded-2xl"></div>
                </div>
                
                <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- On passe l'objet complet à prepareDelete au lieu de l'ID seul -->
                    <EmployeeCard 
                        v-for="user in employees" 
                        :key="user.id" 
                        :employee="user"
                        @delete="prepareDelete(user)" 
                    />
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>


</style>