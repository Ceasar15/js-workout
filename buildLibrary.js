class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = []
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(boo) {
        this._isCheckedOut = false;
    }
    toggleCheckOutStatus() {
        if (this._isCheckedOut === false) {
            this._isCheckedOut = true;
            return this._isCheckedOut;
        } else {
            this._isCheckedOut = false;
            return this._isCheckedOut;
        }
    }
    getAverageRating() {
        let ratingSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        const lengthOfArray = this._ratings.length
        let averageRating = ratingSum / lengthOfArray;
        return averageRating;
    }
    addRating(rating) {
        return this._ratings.push(rating);
    }
}

// Book Class
class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }

}

// Movie Class
class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

// Book Instance
const historyOfEverything = new Book('Bill Bryson', 'A Short of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)

console.log(historyOfEverything.getAverageRating());

// Movie Instance
const speed = new Movie('Jan De Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1)
speed.addRating(1)
speed.addRating(5)

console.log(speed.getAverageRating());