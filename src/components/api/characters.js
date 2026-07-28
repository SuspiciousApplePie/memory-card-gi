import { shuffle } from "../utils/shuffle";

async function getCharacters(charNames) {
  try {
    const responses = await Promise.all(
      charNames.map((charName) =>
        fetch(`https://genshin.jmp.blue/characters/${charName}/`),
      ),
    );

    responses.forEach((res) => {
      if (!res.ok) throw new Error("Failed to fetch character data");
    });

    const characterData = await Promise.all(
      responses.map((res) => {
        return res.json();
      }),
    );

    const shuffled = shuffle(
      characterData.map(({ id, name, title, vision }) => ({
        id,
        name,
        title,
        vision,
      })),
    );
    return shuffled;
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
