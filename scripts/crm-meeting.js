var _____WB$wombat$assign$function_____ = function (name) {
  return (
    (self._wb_wombat &&
      self._wb_wombat.local_init &&
      self._wb_wombat.local_init(name)) ||
    self[name]
  );
};
if (!self.__WB_pmw) {
  self.__WB_pmw = function (obj) {
    this.__WB_source = obj;
    return this;
  };
}
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

  checkDate = function (el) {
    // get the meeting number
    var meetingNum = el.id.substr(el.id.length - 1, 1);

    // determine if both date and time are filled in
    var selectedDate = $("#date_meeting" + meetingNum).val();
    var selectedTime = $("#time_meeting" + meetingNum).val();

    // if both are filled in, then change the class of the parent container
    if (selectedDate.length && selectedDate != "Date" && selectedTime.length) {
      $("#meeting" + meetingNum).addClass("meetingComplete");
    }
  };

  validateMeetingForm = function () {
    var submitSuccess = true;
    var errorText = "";

    // check each one and ensure that both date and time are filled out
    for (var i = 1; i <= 3; i++) {
      $("#meeting" + i).removeClass("meetingError");

      if (
        ($("#date_meeting" + i).val() != "Date" &&
          $("#time_meeting" + i).val() == "") ||
        ($("#date_meeting" + i).val() == "Date" &&
          $("#time_meeting" + i).val() != "")
      ) {
        submitSuccess = false;
        errorText = "Please choose both a date and time.";
        $("#meeting" + i).addClass("meetingError");
      }
    }

    // if all are blank
    if (
      $("#date_meeting1").val() == "Date" &&
      $("#date_meeting2").val() == "Date" &&
      $("#date_meeting3").val() == "Date" &&
      $("#time_meeting1").val() == "" &&
      $("#time_meeting2").val() == "" &&
      $("#time_meeting3").val() == ""
    ) {
      submitSuccess = false;
      errorText =
        "Please choose at least one date and time that would be convenient for you.";
    }

    // if an error, present it and return true/false
    if (errorText.length) {
      $("#errorText").html(errorText);
    }
    return submitSuccess;
  };

  jQuery.fn.setupMeetingValidation = function () {
    // only clear validation notices if there's no server error
    if (!$(".validation_notice").hasClass("server_notice")) {
      $(".validation_notice").hide();
      $(".validation_notice li").hide();
    }

    this.submit(function () {
      var errors = new Array();

      // check each one and ensure that both date and time are filled out
      for (var i = 1; i <= 3; i++) {
        $("#meeting" + i).removeClass("meetingError");

        if (
          ($("#date_meeting" + i).val() != "Date" &&
            $("#time_meeting" + i).val() == "") ||
          ($("#date_meeting" + i).val() == "Date" &&
            $("#time_meeting" + i).val() != "")
        ) {
          errors.push("Meeting " + i + ": Please choose both a date and time.");
        }
      }

      // if all are blank
      if (
        $("#date_meeting1").val() == "Date" &&
        $("#date_meeting2").val() == "Date" &&
        $("#date_meeting3").val() == "Date" &&
        $("#time_meeting1").val() == "" &&
        $("#time_meeting2").val() == "" &&
        $("#time_meeting3").val() == ""
      ) {
        errors.push(
          "Please choose at least one date and time that would be convenient for you."
        );
      }

      if (errors.length > 0) {
        drawMeetingErrors(errors);
        return false;
      } else {
        // disable button
        if ($("button#submit").length > 0) {
          $("button#submit").attr("disabled", "disabled");
          $("button#submit span").html("Please wait");
        }
        // exit
        return true;
      }
    });
  };

  drawMeetingErrors = function (errors) {
    var notice = "";
    notice += '	<div class="validation_inside">';
    notice += "		<h3>Please correct the following errors:</h3>";
    notice += '		<ul class="traditional">';

    for (var i = 0; i < errors.length; i++) {
      notice = notice + "<li>" + errors[i] + "</li>";
    }

    notice += "		</ul>";
    notice += "	</div>";

    $(".validation_notice").html(notice).show();
  };
}
