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

//**Exemplo 1

//const totalWeight = pets.reduce((total, pet) => {
//    return total + pet.weight
//}, 0) //0 inicializa o total

//console.log(totalWeight)

//**Exemplo 2

const totalWeight = pets.reduce((total, pet) => {
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    }
}, { totalAge: 0, totalWeight: 0 })

console.log(totalWeight)

//**Exemplo 3

// const totalWeight = pets.reduce((total, pet) => {
//     //se não for cachorro retorna o próprio total
//     if (pet.type != 'dog') return total

//     return total + pet.weight
// }, 0)

console.log(totalWeight)