class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this.numberOfStudents = numberOfStudents;
    }
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }
    set numberOfStudents(num) {
        if (typeof num === 'number') {
            this._numberOfStudents = num;
            return this._numberOfStudents;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.')
        }
    }

    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
    }
    static pickSubstituteTeacher(substituteTeachers) {
        let subsLength = substituteTeachers.length - 1;
        let subsIndex = Math.floor(Math.random() * subsLength);
        return substituteTeachers[subsIndex];
        console.log(subsIndex);
    }
}

const trySchool = new School('Kinbu', 'Middle', 5);
School.pickSubstituteTeacher(['dfdfd', 'fewe', 'werwfsd']);

// Primary Class
class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

// Middle Class
class MiddleSchool extends School {
    constructor(name, level, numberOfStudents) {
        super(name, level, numberOfStudents)
    }
}

// High School
class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents)
        this._sportsTeams = []
    }
    get sportTeams() {
        console.log(this._sportTeams);
    }
}



// PrimarySchool Instance
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked by a parent, guardian, or a family member over the age of 13.');