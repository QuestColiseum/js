export const startGame = () => ({ type: 'START_GAME' });
export const openScenarioMenu = () => ({ type: 'OPEN_SCENARIO_MENU' });
export const openChooseCharacterMenu = () => ({ type: 'OPEN_CHOOSE_CHARACTER_MENU' });

export const invest = () => ({ type: 'INVEST' });
export const spend = () => ({ type: 'SPEND' });
export const recruit = () => ({ type: 'RECRUIT' });
export const upgrade = () => ({ type: 'UPGRADE' });

export const startGameSucceeded = quest => (
  {
    type: 'START_GAME_SUCCEEDED',
    quest
  }
);

export const logError = error => (
  {
    type: 'LOG_ERROR',
    error
  }
);

export const setNewQuestLevel = questLevel => (
  {
    type: 'SET_NEW_QUEST_LEVEL',
    questLevel
  }
);

export const setNewScenario = scenario => (
  {
    type: 'SET_NEW_SCENARIO',
    scenario
  }
);

export const chooseHero = params => (
  {
    type: "CHOOSE_HERO",
    params
  }
);

export const upgradeHero = params => (
  {
    type: "UPGRADE_HERO",
    params
  }
);
