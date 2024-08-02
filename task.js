class PrintEditionItem {
    constructor (name,releaseDate,pagesCount){
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
    }
    fix(){
        if (this.state<100/1.5){
            this.state *=1.5;
        }
        else{
            this.state = 100;}
    }

    set repairState(state){
        if (state<0){
            this.state = 0;
        }
        if (state>100){
            this.state = 100;
        }
        this.state = state;
        this._repairState = state;
    }

    get repairState () {
        return this._repairState;
    }

}

/*const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
sherlock.repairState = 22;
console.log(sherlock.releaseDate); //2019
console.log(sherlock.repairState); //100
sherlock.fix();
console.log(sherlock.state); //100*/


class Magazine extends PrintEditionItem{
    constructor(name,releaseDate,pagesCount){
        super(name,releaseDate,pagesCount);
        this.type = 'magazine';
    }
    
}

/*const sherlock1 = new Magazine("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
console.log(sherlock1);*/

class Book extends PrintEditionItem{
    constructor (author, name,releaseDate,pagesCount) {
        super(name,releaseDate,pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

/*const sherlock1 = new Book("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008, 'Artur');
console.log(sherlock1);*/

class NovelBook extends Book{
    constructor (author,name,releaseDate,pagesCount) {
        super(author, name,releaseDate,pagesCount);
        this.type = 'novel';
}
}


class FantasticBook  extends Book{
    constructor (author,name,releaseDate,pagesCount) {
        super(author, name,releaseDate,pagesCount);
        this.type = 'fantastic';
}
}

class DetectiveBook   extends Book{
    constructor (author,name,releaseDate,pagesCount) {
        super(author, name,releaseDate,pagesCount);
        this.type = 'detective';
}
}

/*const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);
console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15*/


class Library {
    constructor(name, books=[]){
        this.name = name;
        this.books = books;
    }

    addBook(book){
        if (book.state > 30){
            this.books.push(book);
        }
        else{
        console.log('книга не соответсвует стандарту, чини');
        }
    }
    
    findBookBy(type,value) {
     
        for (let indexOfBook in this.books){
            let arrayOfBooks = this.books[indexOfBook];
            
            if (arrayOfBooks[type] === value){
                return arrayOfBooks;
            }
        }
        return null;
    }

    giveBookByName(bookName){
        let filter = 'name'

        for (let indexOfBook in this.books){
            let arrayOfBooks = this.books[indexOfBook];
                
            if (arrayOfBooks[filter] === bookName){
                let givenBook = arrayOfBooks;                
                this.books.splice(this.books.indexOf(arrayOfBooks),1);
                return givenBook;
                
            }
        }
        return null;

    }
}

/*
const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
const bookCarTime = library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3


console.log(library.books);

bookCarTime.repairState = 22;
console.log(bookCarTime.repairState);
library.addBook(bookCarTime);
bookCarTime.fix();

console.log(bookCarTime.state);
library.addBook(bookCarTime);
console.log(library.books);

*/
//bookCarTime.repairState = 20;
//console.log(bookCarTime.repairState);



class StudentLog {
    constructor (name){
        this.name = name;
        this.subjects = {}
    }

    getName(){
        return this.name;
    }

    addGrade(grade, subject){

        if (!this.subjects[subject]){
            this.subjects[subject] = [];
        }

        if ( (typeof(grade)!='number') || grade<1 || grade>5){
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
        }
        else{
        this.subjects[subject].push(grade);
        }

        return this.subjects[subject].length;
    }

    getAverageBySubject(subject){
        if (!this.subjects[subject]){
            return 0;
        }
        let sumGrade = 0;

        for(let i in this.subjects[subject]){
            sumGrade += this.subjects[subject][i];
        }
        let averageBySubject = sumGrade / this.subjects[subject].length;
    
        return averageBySubject;
    }

    getTotalAverage(){
        let arrAverage = [];
        let nameSubjects = Object.keys(this.subjects);
        

        for (let name in nameSubjects){
        arrAverage.push(this.getAverageBySubject(nameSubjects[name]));
        
        }

        let totalAverageSum = 0;
        for (let i in arrAverage){
            totalAverageSum += arrAverage[i];
        }


        let totalAverage = totalAverageSum / arrAverage.length;
        return totalAverage;
    }
}
/*
const log = new StudentLog('Олег Никифоров');

console.log(log.addGrade(3, 'algebra'));
// 1

console.log(log.addGrade('отлично!', 'math'));
// Вы пытались поставить оценку "отлично!" по предмету "math". Допускаются только числа от 1 до 5.
// 0

console.log(log.addGrade(4, 'algebra'));
// 2

console.log(log.addGrade(5, 'geometry'));
// 1

console.log(log.addGrade(25, 'geometry'));
// Вы пытались поставить оценку "25" по предмету "geometry". Допускаются только числа от 1 до 5.
// 1

const log = new StudentLog('Олег Никифоров');

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');


console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0
*/


/*

const log = new StudentLog('Олег Никифоров');

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getTotalAverage()); // 3,75
*/