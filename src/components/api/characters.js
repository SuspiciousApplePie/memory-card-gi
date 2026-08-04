async function getCharacters(charNames) {
  if (sessionStorage.getItem("charData")) {
    if (JSON.parse(sessionStorage.getItem("charData")).length > 0)
      return JSON.parse(sessionStorage.getItem("charData"));
  }

  const responses = await Promise.all(
    charNames.map((charName) =>
      fetch(`https://genshin.jmp.blue/characters/${charName}/`),
    ),
  );

  responses.forEach((res) => {
    if (!res.ok) throw new Error("Failed to fetch character data. :(");
  });

  const characterData = await Promise.all(
    responses.map(async (res) => {
      const { id, name, title, vision } = await res.json();
      return { id, name, title, vision };
    }),
  );

  sessionStorage.setItem("charData", JSON.stringify(characterData));
  return characterData;
}

async function populateCharacterNames() {
  const res = await fetch("https://genshin.jmp.blue/characters/");
  if (!res.ok) {
    throw new Error("Failed to fetch character names. :(");
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
  return filteredCharNames;
}

export { getCharacters, populateCharacterNames };
