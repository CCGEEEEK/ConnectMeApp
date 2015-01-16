$(document).ready(function() {


	function addToListView(data, is_invited) {
		var component = document.getElementById("eventsList");
		for (var i = 0; i < data.length; i++) {
			event = data[i];
			// alert(event.name);
			if (is_invited) {
				component.innerHTML += '<li><div>' + event.name + '</div></li>';
			} else {
				component.innerHTML += '<li><div>' + event.name + '</div></li>';
			}
		}
	}

	function getUserEvents() {
		var user_id = localStorage.getItem("user_id");
	
		var attendingURL = 'http://connectme-env-39mscffus9.elasticbeanstalk.com/api/calendar/getattendingevents/?user_id=' + user_id;
		var invitedURL = 'http://connectme-env-39mscffus9.elasticbeanstalk.com/api/calendar/getinvitedevents/?user_id=' + user_id;

		$.ajax({
			type: "GET",
			dataType: "json",
			url: invitedURL,
			success: function(data) {
				addToListView(data, true);
			},
			error: function(data, textStatus, errorThrown) {
				alert("Could not get event data");
			}
		
		});
		
		$.ajax({
			type: "GET",
			dataType: "json",
			url: attendingURL,
			success: function(data) {
				addToListView(data, false);
			},
			error: function(data, textStatus, errorThrown) {
				alert("Could not get event data");
			}
		
		});
    }
	
    getUserEvents();
});