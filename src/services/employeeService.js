export const userService = {
    async getEmployees() {
        try {
            const res = await fetch(`https://dummyjson.com/users`);
            if (!res.ok) throw new Error("Erreur lors de la récupération des données");
            const data = await res.json();
            return data.users; // On retourne directement le tableau d'utilisateurs
        } catch (error) {
            console.error("Service Error:", error);
            throw error; // On propage l'erreur pour que le composant puisse l'afficher
        }
    },

    // Optionnel : DELETE (Simulation côté serveur)
    async deleteEmployee(id) {
        const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        if (!res.ok) throw new Error("Erreur lors de la suppression");
        return await res.json();
    }
};
