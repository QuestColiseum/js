import React from 'react';

const ScenarioMenu = parentProps => {
  parentProps = parentProps.parentProps;
  if (parentProps.currentOpenTab === 'character') {
    return (
      <div>
        <div onClick={()=>{
          parentProps.chooseHero({character_id: 0, scenario_id: parentProps.scenario.id, status: 'recruit'});
        }}>
          Soldier
        </div>
        <div onClick={()=>{
          parentProps.chooseHero({character_id: 1, scenario_id: parentProps.scenario.id, status: 'recruit'});
        }}>
          Witch
        </div>
        <div onClick={()=>{
          parentProps.chooseHero({character_id: 2, scenario_id: parentProps.scenario.id, status: 'recruit'})
        }}>
          Royal Guard
        </div>
        <div onClick={()=>{
          parentProps.chooseHero({character_id: 3, scenario_id: parentProps.scenario.id, status: 'recruit'})
        }}>
          Archer
        </div>
        <div onClick={()=>{
          parentProps.chooseHero({character_id: 4, scenario_id: parentProps.scenario.id, status: 'recruit'});
        }}>
          Paladin
        </div>
        <div onClick={()=>{
          parentProps.chooseHero({character_id: 5, scenario_id: parentProps.scenario.id, status: 'recruit'});
        }}>
          Wizard
        </div>
      </div>
    );
  } else if (parentProps.currentOpenTab === 'scenario') {
    return (
      <div>
        <div onClick={()=>{
          parentProps.invest();
        }}>
          Invest
        </div>
        <div onClick={()=>{
          parentProps.spend();
        }}>
          Spend
        </div>
      </div>
    );
  } else if (parentProps.currentOpenTab === 'spend') {
    return (
      <div>
        <div onClick={()=>{
          parentProps.recruit();
        }}>
          Recruit
        </div>
        <div onClick={()=>{
          parentProps.upgrade();
        }}>
          Upgrade
        </div>
      </div>
    );
  } else {return null;}
}

const Scenario = props => (
  <div>
    <ScenarioMenu parentProps={props} />
  </div>
);
export default Scenario;
