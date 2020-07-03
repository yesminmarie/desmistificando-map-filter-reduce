const pets = [
    {
        type: 'dog',
        name: 'rex',
        age: 10,
        wight: 30
    },
    {
        type: 'cat',
        name: 'miau',
        age: 4,
        wight: 20
    },
    {
        type: 'fish',
        name: 'gulp',
        age: 1,
        wight: 0.01
    },
    {
        type: 'horse',
        name: 'pé de pano',
        age: 6,
        wight: 100
    },
    {
        type: 'dog',
        name: 'bolinha',
        age: 5,
        wight: 25
    },
]

/**
 * Map
 * Retornar um novo array com a mesma quantidade de elementos
 * que o array inicial
 */

const petNames = pets.map(pet => pet.name)

console.log(petNames)

/**
 * Foreach
 * Não retorna um novo array com a mesma quantidade de elementos
 */

const forEachPetNames = []

pets.forEach(pet => forEachPetNames.push(pet.name))

console.log(forEachPetNames)