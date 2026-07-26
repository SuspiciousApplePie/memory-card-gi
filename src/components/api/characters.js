import { shuffle } from "../utils/shuffle";

async function getCharacters(charNames) {
  try {
    const characterData = [];
    for (const charName of charNames) {
      const res = await fetch(
        `https://genshin.jmp.blue/characters/${charName}/`,
      );
      if (!res.ok) {
        throw new Error("Failed to fetch character data");
      }
      const characterDetail = await res.json();
      const { id, name, title, vision } = characterDetail;
      characterData.push({ id, name, title, vision });
    }
    return characterData;
  } catch (error) {
    return error;
  }
}

async function populateCharacterNames() {
  const res = await fetch("https://genshin.jmp.blue/characters/");
  if (!res.ok) {
    throw new Error("Failed to fetch character names.");
  }
  const charNames = await res.json();

  let hasTraveler = false;
  const filteredCharNames = charNames.filter((charName) => {
    if (!charName.startsWith("traveler-")) return true;
    if (!hasTraveler && charName.startsWith("traveler-")) {
      hasTraveler = true;
      return true;
    } else {
      return false;
    }
  });
  return shuffle(filteredCharNames);
}

export { getCharacters, populateCharacterNames };
