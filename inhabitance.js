const getSettlement = () => {
    let rnd = Math.floor(Math.random() * 100)
    if (rnd >= 1 && rnd <=3) return 'Оп';
    if (rnd >= 4 && rnd <=5) return 'Д1';
    if (rnd >= 6 && rnd <=7) return 'Д2';
    if (rnd >= 8 && rnd <=9) return 'П';
    if (rnd == 10) return 'Г';
    if (rnd == 11) return 'Б';
    if (rnd >= 12 && rnd <=14) return 'З';
    if (rnd >= 15 && rnd <=16) {
        rnd = Math.floor(Math.random() * 100);
        if (rnd >= 1 && rnd <=30) return 'Рд';
        if (rnd >= 31 && rnd <=60) return 'Рз';
        if (rnd >= 61 && rnd <=85) return 'Рс';
        if (rnd >= 86) return 'Рг';
    };
    return null;
}

const inhabitances = [
    {
        symbol: 'Од',
        name: 'Одинокое поселение',
        description: 'население: 1 - 12'
    },
    {
        symbol: 'Д1',
        name: 'Маленькая деревушка',
        description: 'население: 20 - 80'
    },
    {
        symbol: 'Д2',
        name: 'Деревня',
        description: 'население: 100 - 400'
    },
    {
        symbol: 'П',
        name: 'Поселок',
        description: 'население: 600 - 900'
    },
    {
        symbol: 'Г',
        name: 'Город',
        description: 'население: 1500 - 6500'
    },
    {
        symbol: 'Б',
        name: 'Большой город',
        description: 'население: 10000 - 60000'
    },
    {
        symbol: 'З',
        name: 'Замок'
    },
    {
        symbol: 'Рд',
        name: 'Руины деревни'
    },
    {
        symbol: 'Рз',
        name: 'Руины замка'
    },
    {
        symbol: 'Рс',
        name: 'Руины святилища'
    },
    {
        symbol: 'Рг',
        name: 'Руины гробницы'
    }
]

export {getSettlement, inhabitances};