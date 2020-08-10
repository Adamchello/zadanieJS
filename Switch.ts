// Stwórz klasę Switch, która służy do wielokrotnej, równorzędnej walidacji 
// - ma metodę .add w której dodajemy warunek do sprawdzenia oraz callback, który ma się wywołać jak zostanie warunek spełniony
// - ma metodę .isValid, która iteruje po wszystkich .cases sprawdzając kążdy dodany wcześniej warunek
// - metoda .isValid, która zwraca true jeśli wszystkie warunki będą na false

// po wykonaniu w metodzie .isValid dany warunek jest usuwany z listy cases


class Switch {
    private cases: any[] = [];
    private conditions: any[] = [];

    add(condition, callback): void{
        this.cases.push([condition, callback]);
    }

    isValid(): boolean{
        this.cases.forEach(Case => {
            if(Case[0]) {
                Case[1]();
                this.conditions.push(false)
            } else {
                this.conditions.push(true)
            }
        })
        this.cases = []

       const temp: boolean[] = this.conditions.filter(el => el === true);
       this.conditions = []
       if (temp.length === 0) {
           return true;
       } else {
           return false;
       }
      
    }
};


// ma to działać tak:
const formChecker = new Switch();
const testValue = 'test';

formChecker.add(testValue.length < 5, ()=>{
    console.error('value is to short')
})

formChecker.add(!testValue.includes('@'), ()=>{
    console.error('value is not an email')
})

formChecker.isValid() // === false
// console.error('value is to short')
// console.error('value is not an email')
// formChecker.cases.length === 0