// Stwórz klasę DatePro, która pozwala na łatwą operację na datach w różnych formatach

class DatePro{

    constructor(dateAsString, inputDateFormat='DD.MM.YYYY'){
        this.seperator = this.findSeperator(dateAsString);
        this.year = this.dateMatch("Y", dateAsString, inputDateFormat) || new Date().getFullYear().toString();
        this.month = this.dateMatch("M", dateAsString, inputDateFormat);
        this.day = this.dateMatch("D", dateAsString, inputDateFormat);
    }

    findSeperator(date){
        const seperator = date.match(/[./-]/g);
        if(!seperator) throw new Error('There is not a valid seperator');
        return seperator[0];
    }

    dateMatch(letter, date, format) {
        if (!date || typeof date !== 'string') throw new Error('There is no date provided');
        if (!format || typeof format !== 'string') throw new Error('There is no date format provided');
        const dateArray = date.split(this.seperator);
        const formatArray = format.split(this.seperator);
        for(let i = 0; i < dateArray.length; i++) {
            if (formatArray[i][0] === "Y" && letter === "Y") return new Date().getFullYear().toString();
            else if (formatArray[i][0] === letter) return dateArray[i];
        }
    }
 
    format(outputStringFormat='DD.MM.YYYY'){
        if(!this.day) throw new Error("Day is not defined");
        if(!this.month) throw new Error("Month is not defined");
        const outputFormatSeparator = this.findSeperator(outputStringFormat);
        const outputFormat =  outputStringFormat.split(outputFormatSeparator);
        const date = outputFormat.map(element => {
            switch(element) {
                case "DD":
                    return this.day;
                case "MM":
                    return this.month;
                case "YY":
                case "YYYY":
                    return this.year;
                default:
                    throw new Error("Invalid date format");
            }
        });
        const outputDate = date.join(outputFormatSeparator);
        return outputDate;
    }
}

// to powinno zadziałać:

const date1 = '23.03'
const formatDate1 = 'DD.MM'
const instance1 = new DatePro(date1, formatDate1)


const date2 = '03/23/20'
const formatDate2 = 'MM/DD/YY'
const instance2 = new DatePro(date2, formatDate2)


const date3 = '23-03-2020'
const formatDate3 = 'DD-MM-YYYY'
const instance3 = new DatePro(date3, formatDate3)


instance1.format() // '23.03.2020'
instance2.format() // '23.03.2020'
instance3.format() // '23.03.2020'