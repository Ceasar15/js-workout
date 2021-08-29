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
        console.log(averageRating);
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

const historyOfEverything = new Book('Bill Bryson', 'A Short of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus()
console.log(historyOfEverything.toggleCheckOutStatus());

let tryToggle = new Media('Babalola');
console.log(tryToggle.toggleCheckOutStatus());
tryToggle.addRating(4);
tryToggle.getAverageRating();