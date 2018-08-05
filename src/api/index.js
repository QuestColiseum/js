import makeNewQuest from './requests/makeNewQuest.js';
import fetchQuestLevel from './requests/fetchQuestLevel.js';
import fetchScenario from './requests/fetchScenario.js';
import postHeroSelection from './requests/postHeroSelection.js';

const Api = Object.freeze({
  makeNewQuest,
  fetchQuestLevel,
  fetchScenario,
  postHeroSelection,
});
export default Api;
