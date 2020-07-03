const pets = [
    {
        type: 'dog',
        name: 'rex',
        age: 10,
        weight: 30
    },
    {
        type: 'cat',
        name: 'miau',
        age: 4,
        weight: 20
    },
    {
        type: 'fish',
        name: 'gulp',
        age: 1,
        weight: 1
    },
    {
        type: 'horse',
        name: 'pé de pano',
        age: 6,
        weight: 100
    },
    {
        type: 'dog',
        name: 'bolinha',
        age: 5,
        weight: 25
    },
]

const totalWeightDogs = pets
    .filter(pet => pet.type === 'dog')
    .reduce((total, pet) => {
        return total + pet.weight
    }, 0)

console.log(totalWeightDogs)