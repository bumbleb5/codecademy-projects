const catalog = [];

class Media {
  constructor(title, year) {
    this._title = title;
    this._year = year;
    this._isCheckedOut = false;
    this._ratings = [];
  }

   get title() {
    return this._title;
  }

  get year() {
    return this._year;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(status) {
    if (status === true || status === false) {
      this._isCheckedOut = status;
    } else {
      console.log('Invalid entry: Must be true or false');
    }
  }

  getAverageRating() {
    let ratingSum = this._ratings.reduce((a, b) => a + b, 0);
    return (ratingSum / this._ratings.length);
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this.isCheckedOut;
  }

  addRating(rating) {
    this._ratings.push(rating);
  }

  addToCatalog() {
    catalog.push({title: this._title, isCheckedOut: this._isCheckedOut});
  }
}

class Book extends Media {
  constructor(author, title, year, pages) {
    super(title, year);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }

  addToCatalog() {
    catalog.push({title: this._title, author: this._author, isCheckedOut: this._isCheckedOut});
  }
}

class Movie extends Media {
  constructor(director, title, year, runTime) {
    super(title, year);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }

  addToCatalog() {
    catalog.push({title: this._title, director: this._director, isCheckedOut: this._isCheckedOut});
  }
}

class CD extends Media {
  constructor(artist, title, year, numTracks) {
    super(title, year);
    this._artist = artist;
    this._numTracks = numTracks;
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs;
  }

  addToCatalog() {
    catalog.push({title: this._title, artist: this._artist, isCheckedOut: this._isCheckedOut});
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 2003, 544);

historyOfEverything.toggleCheckOutStatus();
//console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
//console.log(historyOfEverything.getAverageRating());
historyOfEverything.addToCatalog();
//console.log(catalog);

const speed = new Movie('Jan de Bont', 'Speed', 1994, 116);

speed.addToCatalog();

speed.toggleCheckOutStatus();
//console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
//console.log(speed.getAverageRating());

const muleVariations = new CD('Tom Waits', 'Mule Variations', 1999, 18);

muleVariations.addToCatalog();
//console.log(catalog);



