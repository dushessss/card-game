export const deckImages = (name) =>{
    return new URL(`../assets/deck/${name}`,import.meta.url).href
}