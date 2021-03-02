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

  // navigation scripts
  $(".AhHeader__navlines--2nVfs").click(function () {
    if ($(".AhHeader__backbtnNotclicked--1SshO").width() === 0) {
      $(this).addClass("AhHeader__open--ingWU");
      $(".AhHeader__ahmenuwrap--3jcX2").removeClass(
        "AhHeader__mobilenavOff--3PJQe"
      );
      $(".AhHeader__ahmenuwrap--3jcX2").addClass(
        "AhHeader__mobilenavOn--8JUnd"
      );
    } else if ($(".AhHeader__backbtnNotclicked--1SshO").width() !== 0) {
      $(this).removeClass("AhHeader__open--ingWU");
      $(".AhHeader__ahmenuwrap--3jcX2").removeClass(
        "AhHeader__mobilenavOn--8JUnd"
      );
      $(".AhHeader__ahmenuwrap--3jcX2").addClass(
        "AhHeader__mobilenavOff--3PJQe"
      );

      $(".AhHeader__ahmenu-ul--3oSoc").addClass(
        "AhHeader__NomenuClicked--19yu9"
      );
      $(".AhHeader__ahmenu-ul--3oSoc").removeClass(
        "AhHeader__OnemenuClicked--2q01M"
      );
      $(".AhHeader__ahmenu-ul--3oSoc li").addClass(
        "AhHeader__menuUnClicked--4np1L"
      );
      $(".AhHeader__ahmenu-ul--3oSoc li")
        .children("a")
        .removeClass("AhHeader__ahmenu-a--2CdsK");
      $(".AhHeader__ahmenu-ul--3oSoc ul").addClass(
        "AhHeader__submenuOff--1H6pL"
      );
      $(".AhHeader__ahmenu-ul--3oSoc ul").removeClass(
        "AhHeader__submenuOn--7xtTO"
      );
      $(".AhHeader__navitembread--1PiCm").children("div").html("");
    }
  });

  $(".AhHeader__ahmenu-ul--3oSoc > li.AhHeader__main-navitem--3lFQT").click(
    function () {
      if (
        $(".AhHeader__ahmenu-ul--3oSoc").hasClass(
          "AhHeader__NomenuClicked--19yu9"
        )
      ) {
        $(".AhHeader__ahmenu-ul--3oSoc").removeClass(
          "AhHeader__NomenuClicked--19yu9"
        );
        $(".AhHeader__ahmenu-ul--3oSoc").addClass(
          "AhHeader__OnemenuClicked--2q01M"
        );
        $(this).removeClass("AhHeader__menuUnClicked--4np1L");
        $(this).children("a").addClass("AhHeader__ahmenu-a--2CdsK");
        $("ul", this).removeClass("AhHeader__submenuOff--1H6pL");
        $("ul", this).addClass("AhHeader__submenuOn--7xtTO");
        $(".AhHeader__navitembread--1PiCm")
          .children("div")
          .html(
            "<span><span><span class='AhHeader__svgwrap--2ubiB'><svg xmlns='http://www.w3.org/2000/svg' width='6' height='11' viewBox='0 0 6 11'><path fill='#9E9E9E' fill-rule='evenodd' d='M4.911 0L0 5.5 4.911 11 6 9.961 2.018 5.5 6 1.04z'></path></svg></span><span> Back  </span> <span class='AhHeader__backbtn--UI_Lt'>/ </span> </span><span class='AhHeader__backbtn--UI_Lt'> Why choose us</span></span>"
          );
      }
    }
  );

  $(".AhHeader__navitembread--1PiCm")
    .children("div")
    .click(function () {
      if (
        $(".AhHeader__ahmenu-ul--3oSoc").hasClass(
          "AhHeader__OnemenuClicked--2q01M"
        )
      ) {
        $(".AhHeader__ahmenu-ul--3oSoc").addClass(
          "AhHeader__NomenuClicked--19yu9"
        );
        $(".AhHeader__ahmenu-ul--3oSoc").removeClass(
          "AhHeader__OnemenuClicked--2q01M"
        );
        $(".AhHeader__ahmenu-ul--3oSoc li").addClass(
          "AhHeader__menuUnClicked--4np1L"
        );
        $(".AhHeader__ahmenu-ul--3oSoc li")
          .children("a")
          .removeClass("AhHeader__ahmenu-a--2CdsK");
        $(".AhHeader__ahmenu-ul--3oSoc ul").addClass(
          "AhHeader__submenuOff--1H6pL"
        );
        $(".AhHeader__ahmenu-ul--3oSoc ul").removeClass(
          "AhHeader__submenuOn--7xtTO"
        );
        $(".AhHeader__navitembread--1PiCm").children("div").html("");
      }
    });

  $(function () {
    $("#field17").val(getQueryVariable("partnerref"));

    //Latest_SFDC_CampaignID__c
    var submitBtnId = "";
    $(".webinar-form form > .form-design-field").each(function (index, value) {
      if ($(this).find("div").find("input:submit").length) {
        submitBtnId = $(this).attr("id");
      }
    });
    if (submitBtnId !== "") {
      $("body").append(
        "<style>#" + submitBtnId + " { display: block !important; }</style>"
      );
    }
  });

  //ensure submit button is visible
  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (
        decodeURIComponent(pair[0]).toLowerCase() === variable.toLowerCase()
      ) {
        return decodeURIComponent(pair[1]);
      }
    }
  }

  // desc_btn
  $("#descButton").click(function () {
    $("#descContainer").slideToggle("slow");
    $("#descArrow").toggleClass("rotated");
  });
}
