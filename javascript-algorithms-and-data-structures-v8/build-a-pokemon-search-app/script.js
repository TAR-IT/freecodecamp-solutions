document.getElementById('search-button').addEventListener('click', () => {
    const inputValue = document.getElementById('search-input').value.trim().toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon not found');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('pokemon-name').textContent = data.name.toUpperCase();
            document.getElementById('pokemon-id').textContent = `#${data.id}`;
            document.getElementById('weight').textContent = `Weight: ${data.weight}`;
            document.getElementById('height').textContent = `Height: ${data.height}`;

            const typesElement = document.getElementById('types');
            typesElement.innerHTML = '';
            data.types.forEach(type => {
                const typeElement = document.createElement('div');
                typeElement.textContent = type.type.name.toUpperCase();
                typesElement.appendChild(typeElement);
            });

            document.getElementById('hp').textContent = data.stats[0].base_stat;
            document.getElementById('attack').textContent = data.stats[1].base_stat;
            document.getElementById('defense').textContent = data.stats[2].base_stat;
            document.getElementById('special-attack').textContent = data.stats[3].base_stat;
            document.getElementById('special-defense').textContent = data.stats[4].base_stat;
            document.getElementById('speed').textContent = data.stats[5].base_stat;

            document.getElementById('sprite').src = data.sprites.front_default;
        })
        .catch(error => {
            alert(error.message);
        });
});
