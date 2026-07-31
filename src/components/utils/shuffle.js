function shuffle(characterData) {
  for (let i = characterData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [characterData[i], characterData[j]] = [characterData[j], characterData[i]];
  }

  return characterData;
}
export { shuffle };
