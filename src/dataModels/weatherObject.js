export default function weatherObject(data){
    //current data
    this.currentDate = data.date_epoch;
    this.currentTime = data.time
    this.minTempC = data.day.mintemp_c;
    this.maxTempC = data.day.maxtemp_c;
    this.minTempF = data.day.mintemp_f;
    this.maxTempF = data.day.maxtemp_f;
    this.sunrise = data.astro.sunrise;
    this.sunset = data.astro.sunset;
    this.currentConditionTest = data.day.condition;
    this.currentConditionText = data.day.condition.code;
    this.currentConditionImage = data.day.condition.icon;
}