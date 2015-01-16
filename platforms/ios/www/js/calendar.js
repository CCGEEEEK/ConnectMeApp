$(document).ready(function() {
    $('#main-calendar').fullCalendar({
        eventClick: function(calEvent, jsEvent, view) {
            // alert(calEvent.id);
            localStorage.setItem("current_selected_event", calEvent.id);
            window.location.replace("eventDetails.html");
            return false;
        }
    });
     
    $('a.eventLink').click(function() {
        $(this).attr('target', '_blank');
    }); 
     
    function showEventOnCalendar(event) {
        if (event == null) {
            return;
        }
         
        var eventDate = event.date
        if (eventDate.indexOf('-') > -1) {
            //pass
        } else {
            eventDate = eventDate.substr(0, 4) + "-" + eventDate.substr(4);
            eventDate = eventDate.substr(0, 7) + "-" + eventDate.substr(7);
        }
 
        $('#main-calendar').fullCalendar('renderEvent', {
            'title': event.name,
            'allDay': false,
            'start': eventDate,
            'id': event._id.$oid
        }, true);
        $('#main-calendar').find('a.fc-event').attr('target', '_blank');
 
    };
 
    function getUserEvents() {
        var user_id = localStorage.getItem("user_id");
     
        var currentURL = 'http://connectme-env-39mscffus9.elasticbeanstalk.com/api/calendar/getattendingevents/?user_id=' + user_id;
 
        $.ajax({
            type: "GET",
            dataType: "json",
            url: currentURL,
            success: function(data) {
                data.forEach(showEventOnCalendar);
            },
            error: function(data, textStatus, errorThrown) {
                alert("Could not get event data");
            }
         
        });
    }
     
    getUserEvents();
     
});