
/*
The visit [[is]] on a hour of the day that [[compares to]] [[IF|{field:compares to, value:is between}]][[number]] and [[until hour]] [[ELSE]][[number]][[/IF]] based on your organization's time zone
*/

(function () {
    load("classpath:moment.js");
    load("classpath:moment-timezone.js");
    var returnValue = false;
    var comparison = false;
    var comparator = "[[is | enum(is, is not) | is | { required: true }]]";
    var operatorValue = "[[compares to | enum(is equal to,is greater than,is less than,is greater than or equal to,is less than or equal to,is between) | | { required: true, placeholder: compares to} ]]";
    var hourOfDay = Number("[[number | number | | { required: true, min: 0, max: 23, placeholder: 0 }]]");
    var hourOfDay2 = Number("[[until hour | number | | { required: true, min: 0, max: 23, placeholder: 0 }]]");
    var tenantTimezone = "";
    if (tenant && tenant.configurations && tenant.configurations.timeZone) {
        tenantTimezone = tenant.configurations.timeZone;
    }
    var tenantTime = moment.tz(tenantTimezone).format('LT');
    var isPM = tenantTime.split(' ')[1] === 'PM'?12:0;
    var tenantHour = Number(tenantTime.split(':')[0]) + isPM;
    
    if (operatorValue === 'is between') {
            comparison = tenantHour >= hourOfDay && tenantHour <= hourOfDay2;
    } else {
        if (operatorValue === 'is equal to') {
           comparison = tenantHour === hourOfDay; 
        } else if (operatorValue === 'is greater than') {
            comparison = tenantHour > hourOfDay;
        } else if (operatorValue === 'is less than') {
            comparison = tenantHour < hourOfDay;
        } else if (operatorValue === 'is greater than or equal to') {
            comparison = tenantHour >= hourOfDay;
        } else if (operatorValue === 'is less than or equal to') {
            comparison = tenantHour <= hourOfDay;
        }
    }
        
    if (comparator === "is") {
        returnValue = comparison;
    } else {
        returnValue = !comparison;
    }
    return returnValue;
})();