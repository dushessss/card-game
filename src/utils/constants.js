export const createDeck = () => {
    let arrayCards = []
    suits.map(suit => {
        for (let i = 2; i < 15; i++) {
            const card = {
                suit: suit,
                rank: i,
                image: `${i}${suit}.svg`
            };
            arrayCards.push(card);
        }
    });
    return arrayCards;
}

const suits = ["heart", "diamond", "spade", "club"];
