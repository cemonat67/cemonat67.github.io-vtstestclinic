// replace these values with those generated in your TokBox Account
var apiKey = "47049514";
var sessionId = "1_MX40NzA0OTUxNH5-MTYwODE5NzYzNjI3Mn5Bem5wSWphaWU0YlhuazFvei9uMjgwM1l-fg";
var token = "T1==cGFydG5lcl9pZD00NzA0OTUxNCZzaWc9OTQ3OTkxMjUzZTZiMDFjMTQ4YTkzNTlhNzcwOTRkY2FhNTUxNTM1NjpzZXNzaW9uX2lkPTFfTVg0ME56QTBPVFV4Tkg1LU1UWXdPREU1TnpZek5qSTNNbjVCZW01d1NXcGhhV1UwWWxodWF6RnZlaTl1TWpnd00xbC1mZyZjcmVhdGVfdGltZT0xNjA4MTk4MDUwJm5vbmNlPTAuNTMwOTA4MDAxNTE4NDE2OSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjA4Mjg0NDQ5JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

// (optional) add server code here
initializeSession();
// Handling all of our errors here by alerting them
function handleError(error) {
    if (error) {
      alert(error.message);
    }
  }
  
  function initializeSession() {
    var session = OT.initSession(apiKey, sessionId);
  
    // Subscribe to a newly created stream
    session.on('streamCreated', function(event) {
        session.subscribe(event.stream, 'subscriber', {
          insertMode: 'append',
          width: '100%',
          height: '100%'
        }, handleError);
      });
  
    // Create a publisher
    var publisher = OT.initPublisher('publisher', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  
    // Connect to the session
    session.connect(token, function(error) {
      // If the connection is successful, publish to the session
      if (error) {
        handleError(error);
      } else {
        session.publish(publisher, handleError);
      }
    });
  }
