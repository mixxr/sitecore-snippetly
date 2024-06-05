load("classpath:moment.js");

(function() {
  let eventType = `[[Event Type | string | VIEW | {order: 1, required: true }  ]]`;
  let pageName = `[[Page Name | string | Home Page | {order: 2, required: true }  ]]`;
  let channelName = `[[Channel | enum(WEB, EMAIL, SMS) | WEB | {order: 3, required: true }  ]]`;
  let lastDays = `[[Last Days | number | 1 | {order: 4, required: true }  ]]`;

  function countEvents(session, startingFrom) {
    let numberOfEvents = 0;
    for (var i = 0; i < session.events.length; i++) {
      var event = session.events[i];
      if (event.type === eventType &&
        event.status === 'PROCESSED' &&
        event.channel === channelName &&
        event.arbitraryData.page === pageName &&
        event.createdAt >= startingFrom) numberOfEvents++;
    }
    return numberOfEvents;
  }



  const fromDate = moment().subtract(lastDays, 'days').format();
  let totEvents = 0;
  for (var i = 0; i < guest.sessions.length; i++)
    totEvents += (guest.sessions[i].endedAt >= fromDate)? countEvents(guest.sessions[i], fromDate):0;

  return totEvents;

})();