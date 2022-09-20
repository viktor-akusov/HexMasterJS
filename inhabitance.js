export const getSettlement = () => {
    let rnd = Math.floor(Math.random() * 100)
    if (rnd >= 1 && rnd <=3) return 'Sd';
    if (rnd >= 4 && rnd <=5) return 'Th';
    if (rnd >= 6 && rnd <=7) return 'Hm';
    if (rnd >= 8 && rnd <=9) return 'Vl';
    if (rnd == 10) return 'Tw';
    if (rnd == 11) return 'Ct';
    if (rnd >= 12 && rnd <=14) return 'Cs';
    if (rnd >= 15 && rnd <=16) {
        rnd = Math.floor(Math.random() * 100);
        if (rnd >= 1 && rnd <=30) return 'Rv';
        if (rnd >= 31 && rnd <=60) return 'Rc';
        if (rnd >= 61 && rnd <=85) return 'Rs';
        if (rnd >= 86) return 'Rt';
    };
    return null;
}