
/*
The property named [[Property Name]] exists in an event of [[Event Type]]
*/
(function() {
    let eventType = `[[Event Type | string | CUSTOM_DATA | {order: 1, required: true }  ]]`;
    let propName = `[[Property Name | string | budget | {order: 2, required: true }  ]]`;
  
    function hasPropValue(session) {
      for (var i = 0; i < session.events.length; i++) {
        var event = session.events[i];
        if (event.type === eventType &&
          event.status === 'PROCESSED' &&
          event.arbitraryData.ext &&
          event.arbitraryData.ext[propName] !== undefined &&
          event.arbitraryData.ext[propName] !== null) return true;
      }
      return false;
    }
  
    for (var i = 0; i < guest.sessions.length; i++)
        if (hasPropValue(guest.sessions[i])) return true;
      
    return false;
  
  })();