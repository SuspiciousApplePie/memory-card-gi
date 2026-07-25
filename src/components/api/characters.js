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

export { getCharacters };
