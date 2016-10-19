let dayNames: [string] = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export class TrainingDate {
    weekDay: number = 0;
    hour: number = 0;
    minute: number = 0;
    dayName: string = '';

    location: string = '';

    minuteString: string = '';

    /**
     * just a day of a training
     * @param  {number} weekDay  the day of the week for the training
     * @param  {number} hour     the hour of the training
     * @param  {number} minute   the minute of the training
     * @param  {string} location the location of the training
     * @return {object}          returns self, in case of piping
     */
    constructor(weekDay: number, hour: number, minute: number, location: string){
        this.weekDay = weekDay;
        this.hour = hour;
        this.minute = minute;

        this.minuteString = this.minute + (this.minute < 10 ? '0' : '');

        this.dayName = dayNames[this.weekDay];

        this.location = location;

        return this;
    }
}
