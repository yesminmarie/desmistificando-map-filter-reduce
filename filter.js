const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1
    }
]

const eMenorQueCinco = numero => {
    return numero < 5
}

const newPets2 = pets.filter(({ age }) => eMenorQueCinco(age))
//const newPets1 = pets.filter(pet => eMenorQueCinco(pet.age))
//const filter = pets.filter(item => item.age < 5)

console.log(newPets2);