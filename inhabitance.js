const getSettlement = () => {
    let rnd = Math.floor(Math.random() * 100)
    if (rnd >= 1 && rnd <=3) return 'Од';
    if (rnd >= 4 && rnd <=5) return 'Д1';
    if (rnd >= 6 && rnd <=7) return 'Д2';
    if (rnd >= 8 && rnd <=9) return 'П';
    if (rnd == 10) return 'Г';
    if (rnd == 11) return 'М';
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

export {getSettlement};