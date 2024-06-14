(function() {
    let eventType = `[[Event Type | string | CUSTOM_DATA | {order: 1, required: true }  ]]`;
    let propName = `[[Property Name | string | budget | {order: 2, required: true }  ]]`;
  
    function getPropValue(session) {
      for (var i = 0; i < session.events.length; i++) {
        var event = session.events[i];
        if (event.type === eventType &&
          event.status === 'PROCESSED' &&
          event.arbitraryData.ext[propName] !== undefined) return event.arbitraryData.ext[propName];
      }
      return undefined;
    }
  
    for (var i = 0; i < guest.sessions.length; i++){
        let val = getPropValue(guest.sessions[i]);
        if (val) return val;
    }
      
    return undefined;
  
  })();