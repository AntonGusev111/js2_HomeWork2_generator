const char = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  
  const char1 = {
    name: 'Лучник1',
    type: 'Bowman1',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  
  const char2 = {
    name: 'Лучник2',
    type: 'Bowman2',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  
  const char3 = {
    name: 'Лучник3',
    type: 'Bowman3',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  



class Team {
    
    constructor(charList){
        this.charList = charList;
    }

    *[Symbol.iterator]() {
      for (let item = 0;  item < this.charList.length; item++){
        yield this.charList[item];
      }
    }
  }
  

const team = new Team([char,char1,char2,char3]);
for (let item of team){
  console.log(item)
}