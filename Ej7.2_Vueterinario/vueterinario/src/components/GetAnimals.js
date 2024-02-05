export const getAnimals = async () => {
    try {
        const response = await fetch("http://34.90.153.139/ejercicios/veterinario/getanimals.php");
        return await response.json();
    } catch (error) {
        console.error('Error fetching animals:', error);
        throw error;
    }
};
