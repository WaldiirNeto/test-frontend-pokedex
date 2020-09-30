export interface PokemonListInterface {
    cards: [{
        id: string,
        name: string,
        nationalPokedexNumber: number,
        imageUrl: string,
        imageUrlHiRes: string
        types: [],
        supertype: string,
        subtype: string,
        evolvesFrom: string,
        hp: number,
        number: number,
        artist: number,
        rarity: number,
        series: number,
        set: string,
        setCode: string,
        attacks: [
            {
                cost: [],
                name: string
                text: string,
                damage: number,
                convertedEnergyCost: number
            },
            {
                cost: [],
                name: string,
                text: string,
                damage: string,
                convertedEnergyCost: number
            }
        ],
        weaknesses: [
            {
                type: string,
                value: string
            }
        ]
    }]
}