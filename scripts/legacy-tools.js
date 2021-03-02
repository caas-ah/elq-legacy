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

  ("use strict");
  var APP = (window.APP = window.APP || {});
  APP.codeview = (function () {
    function e() {
      a("#select_procedure ul li").click(function (e) {
        var t = a(this).attr("data-code");
        a("#select_procedure ul li").removeClass("active"),
          a(this).addClass("active"),
          a("#procedure_data").val(t),
          a("#select_region").removeClass("inactive"),
          a("#select_proc").addClass("available"),
          a("#select_regn").addClass("available"),
          a("#select_procedure").removeClass("selected"),
          a("#select_region").addClass("selected"),
          a(".sorting").css("display", "none"),
          i &&
            (a("#select_procedure").hide(),
            a("#select_region").show(),
            a(".codeview__mobile-title").removeClass("active"),
            a("#select_regn").addClass("active"),
            a("body").scrollTo(a(".tool-card").offset().top + 80 + "px"));
      });
    }
    function t(e) {
      var t = a("#specialty_data").val(),
        s = a("#region_data").val(),
        l = a("#procedure_data").val(),
        o = a("#payer_data").val(),
        r = a("#set_data").val(),
        n = (a("#loaded_data").val(), 0),
        d = ["medicaid", "medicare", "commercial"],
        v = "";
      a.getJSON(c + t + "_" + s + ".json", function (t) {
        var s, c;
        if (i) {
          s = t[l];
          for (c in d) {
            v = d[c];
            var _ = s[v];
            void 0 === _
              ? (a(".codeview__results--slide." + v + " .graph-low").html(""),
                a(".codeview__results--slide." + v + " .graph-current")
                  .html("Insufficient data to ensure accurate results")
                  .addClass("insufficient"),
                a(".codeview__results--slide." + v + " .graph-high").html(""),
                a(
                  ".codeview__results--slide." +
                    v +
                    " .avg-reimbursement .option-value"
                ).html("?"),
                a(
                  ".codeview__results--slide." + v + " .avg-rvu .option-value"
                ).html("?"),
                a(
                  ".codeview__results--slide." +
                    v +
                    " .codeview__results--slide-graph.inner-slide"
                ).removeClass("showGraph"),
                (n = 1))
              : (a(
                  ".codeview__results--slide." +
                    v +
                    " .codeview__results--slide-graph.inner-slide"
                ).addClass("showGraph"),
                "avg" === r
                  ? (a(".codeview__results--slide." + v + " .graph-low").html(
                      _.allwd_25
                    ),
                    a(".codeview__results--slide." + v + " .graph-current")
                      .html("$" + _.allwd_50)
                      .removeClass("insufficient"),
                    a(".codeview__results--slide." + v + " .graph-high").html(
                      _.allwd_75
                    ))
                  : (a(".codeview__results--slide." + v + " .graph-low").html(
                      _.rvu_allwd_25
                    ),
                    a(".codeview__results--slide." + v + " .graph-current")
                      .html("$" + _.rvu_allwd_50)
                      .removeClass("insufficient"),
                    a(".codeview__results--slide." + v + " .graph-high").html(
                      _.rvu_allwd_75
                    )),
                void 0 === _.allwd_avg
                  ? a(
                      ".codeview__results--slide." +
                        v +
                        " .avg-reimbursement .option-value"
                    ).html("?")
                  : a(
                      ".codeview__results--slide." +
                        v +
                        " .avg-reimbursement .option-value"
                    ).html("$" + _.allwd_avg),
                void 0 === _.rvu_allwd_avg
                  ? a(
                      ".codeview__results--slide." +
                        v +
                        " .avg-rvu .option-value"
                    ).html("?")
                  : a(
                      ".codeview__results--slide." +
                        v +
                        " .avg-rvu .option-value"
                    ).html("$" + _.rvu_allwd_avg));
          }
        } else {
          try {
            s = t[l][o];
          } catch (u) {
            s = void 0;
          }
          void 0 === s
            ? (a(".codeview__results--slide.active .graph-low").html(""),
              a(".codeview__results--slide.active .graph-current")
                .html("Insufficient data to ensure accurate results")
                .addClass("insufficient"),
              a(".codeview__results--slide.active .graph-high").html(""),
              a(".codeview__results--slide-graph.inner-slide").removeClass(
                "showGraph"
              ),
              a(
                ".codeview__results--slide.active .avg-reimbursement .option-value"
              ).html("?"),
              a(".codeview__results--slide.active .avg-rvu .option-value").html(
                "?"
              ),
              a(
                ".codeview__results--slide.active .codeview__results--slide-graph.inner-slide"
              ).removeClass("showGraph"),
              (n = 1))
            : (a(
                ".codeview__results--slide.active .codeview__results--slide-graph.inner-slide"
              ).addClass("showGraph"),
              "avg" === r
                ? (a(".codeview__results--slide.active .graph-low").html(
                    s.allwd_25
                  ),
                  a(".codeview__results--slide.active .graph-current")
                    .html("$" + s.allwd_50)
                    .removeClass("insufficient"),
                  a(".codeview__results--slide.active .graph-high").html(
                    s.allwd_75
                  ))
                : (a(".codeview__results--slide.active .graph-low").html(
                    s.rvu_allwd_25
                  ),
                  a(".codeview__results--slide.active .graph-current")
                    .html("$" + s.rvu_allwd_50)
                    .removeClass("insufficient"),
                  a(".codeview__results--slide.active .graph-high").html(
                    s.rvu_allwd_75
                  )),
              void 0 === s.allwd_avg
                ? a(
                    ".codeview__results--slide.active .avg-reimbursement .option-value"
                  ).html("?")
                : a(
                    ".codeview__results--slide.active .avg-reimbursement .option-value"
                  ).html("$" + s.allwd_avg),
              void 0 === s.rvu_allwd_avg
                ? a(
                    ".codeview__results--slide.active .avg-rvu .option-value"
                  ).html("?")
                : a(
                    ".codeview__results--slide.active .avg-rvu .option-value"
                  ).html("$" + s.rvu_allwd_avg));
        }
        if (1 === n)
          for (c in d)
            try {
              if (void 0 !== t[l][d[c]]) {
                v = d[c];
                break;
              }
            } catch (u) {
              continue;
            }
        "" !== v &&
          1 === e &&
          (a("#payer_data").val(v),
          a(".codeview__results--slide-state div").removeClass("active"),
          a(
            '.codeview__results--slide-state div[data-state="' + v + '"]'
          ).click(),
          i &&
            (a(".codeview__results--slide").removeClass("active"),
            a(".codeview__results--slide").removeClass("slick-active"),
            a(".codeview__results--slide." + v).addClass("active"),
            a(".codeview__results--slide." + v).addClass("slick-active"),
            a(".codeview__slidey").slickGoTo(
              a(".codeview__results--slide." + v).attr("index")
            ),
            a(".codeview__results--slide-state-item").removeClass("active"),
            a(
              '.codeview__results--slide-state-item[data-state="' + v + '"]'
            ).addClass("active")));
      }),
        a("#loaded_data").val("1");
    }
    function s() {
      var t = a("#specialty_data").val(),
        s = a("#sort_data").val();
      "alpha" === s
        ? a.getJSON(c + "procedure_desc_by_specialty.json", function (s) {
            var i = "";
            for (var l in s[t]) {
              var c = s[t][l].code,
                o = s[t][l].desc;
              i +=
                '<li data-code="' +
                c +
                '"><span class="procedure-name">' +
                o +
                '</span><span class="procedure-code">' +
                c +
                "</span></li>";
            }
            a("#select_procedure ul").html(i), e();
          })
        : a.getJSON(c + "procedure_code_by_specialty.json", function (s) {
            var i = "";
            for (var l in s[t]) {
              var c = s[t][l].code,
                o = s[t][l].desc;
              i +=
                '<li data-code="' +
                c +
                '"><span class="procedure-name">' +
                o +
                '</span><span class="procedure-code">' +
                c +
                "</span></li>";
            }
            a("#select_procedure ul").html(i), e();
          });
    }
    var a = window.$,
      i = !1;
    try {
      a(window).width() < 768 && (i = !0);
    } catch (l) {
      document.body.clientWidth < 768 && (i = !0);
    }
    var c = "/assets/data/",
      o = function () {},
      r = {
        updateState: function (e, t) {
          var s = "commercial";
          a('.codeview__results--slide[index="' + parseInt(t) + '"]').hasClass(
            "medicaid"
          )
            ? (s = "medicaid")
            : a(
                '.codeview__results--slide[index="' + parseInt(t) + '"]'
              ).hasClass("medicare") && (s = "medicare"),
            a(".codeview__results--slide-state-item").removeClass("active"),
            a(
              '.codeview__results--slide-state-item[data-state="' + s + '"]'
            ).addClass("active"),
            a(".codeview__results--slide").removeClass("active"),
            a(
              '.codeview__results--slide[index="' + parseInt(t) + '"]'
            ).addClass("active");
        },
        init: function () {
          this.eventHandlers(),
            i &&
              a(".codeview__slidey").slick({
                arrows: !0,
                dots: !0,
                infinite: !0,
                speed: 300,
                lazyLoad: "ondemand",
                onAfterChange: r.updateState,
                slidesToShow: 1,
                slidesToScroll: 1,
              }),
            (c = a(".codeview").attr("data-tool-path"));
        },
        eventHandlers: function () {
          a(".avg-reimbursement").click(function (e) {
            a(".slide-option").removeClass("active"),
              a(".avg-reimbursement").addClass("active"),
              i
                ? (a(".avg-reimbursement .arrow-left .image-arrow-up img").attr(
                    "src",
                    "/assets/images/codeview/" +
                      a(".avg-reimbursement")
                        .attr("data-activeImage")
                        .replace("left", "up")
                        .replace("svg", "png")
                  ),
                  a(".avg-rvu .arrow-left .image-arrow-up img").attr(
                    "src",
                    "/assets/images/codeview/" +
                      a(".avg-rvu")
                        .attr("data-inactiveImage")
                        .replace("left", "up")
                        .replace("svg", "png")
                  ))
                : (a(
                    ".avg-reimbursement .arrow-left .image-arrow-left img"
                  ).attr(
                    "src",
                    "/assets/images/codeview/" +
                      a(".avg-reimbursement").attr("data-activeImage")
                  ),
                  a(".avg-rvu .arrow-left .image-arrow-left img").attr(
                    "src",
                    "/assets/images/codeview/" +
                      a(".avg-rvu").attr("data-inactiveImage")
                  )),
              a("#set_data").val("avg"),
              t(0);
          }),
            a(".avg-rvu").click(function (e) {
              a(".slide-option").removeClass("active"),
                a(".avg-rvu").addClass("active"),
                i
                  ? (a(".avg-rvu .arrow-left .image-arrow-up img").attr(
                      "src",
                      "/assets/images/codeview/" +
                        a(".avg-rvu")
                          .attr("data-activeImage")
                          .replace("left", "up")
                          .replace("svg", "png")
                    ),
                    a(
                      ".avg-reimbursement .arrow-left .image-arrow-up img"
                    ).attr(
                      "src",
                      "/assets/images/codeview/" +
                        a(".avg-reimbursement")
                          .attr("data-inactiveImage")
                          .replace("left", "up")
                          .replace("svg", "png")
                    ))
                  : (a(".avg-rvu .arrow-left .image-arrow-left img").attr(
                      "src",
                      "/assets/images/codeview/" +
                        a(".avg-rvu").attr("data-activeImage")
                    ),
                    a(
                      ".avg-reimbursement .arrow-left .image-arrow-left img"
                    ).attr(
                      "src",
                      "/assets/images/codeview/" +
                        a(".avg-reimbursement").attr("data-inactiveImage")
                    )),
                a("#set_data").val("rvu"),
                t(0);
            }),
            a(".codeview__results--slide-state-item").click(function (e) {
              a(".codeview__results--slide-state-item").removeClass("active"),
                a(this).addClass("active"),
                a(".codeview__results--slide-state-arrow")
                  .removeClass("state-commercial")
                  .removeClass("state-medicare")
                  .removeClass("state-medicaid"),
                a(".codeview__results--slide-state-arrow").addClass(
                  "state-" + a(this).attr("data-state")
                ),
                a("#payer_data").val(a(this).attr("data-state")),
                t(0);
            }),
            a("#select_specialty ul li").click(function (e) {
              var t = a(this).attr("data-specialty"),
                l = a(this).attr("data-specialty-proper");
              a("#select_specialty ul li").removeClass("active"),
                a("#select_specialty ul li")
                  .children(".image")
                  .removeClass("on")
                  .addClass("off"),
                a(this).children(".image").removeClass("off").addClass("on"),
                a(this).addClass("active"),
                a("#specialty_data").val() !== t && a("#loaded_data").val("0"),
                a("#specialty_data").val(t),
                a("#specialty_proper").val(l),
                a("#select_procedure").removeClass("inactive"),
                a("#select_spec").addClass("available"),
                a("#select_proc").addClass("available"),
                a("#select_specialty").removeClass("selected"),
                a("#select_region").removeClass("selected"),
                a("#select_procedure").addClass("selected"),
                a(".sorting").css("display", "block"),
                i &&
                  (a("#select_specialty").css("display", "none"),
                  a("#select_procedure").css("display", "block"),
                  a(".codeview__mobile-title").removeClass("active"),
                  a("#select_proc").addClass("active"),
                  a("body").scrollTo(a(".tool-card").offset().top + 80 + "px")),
                s();
            }),
            a("#select_procedure ul li").click(function (e) {
              var t = a(this).attr("data-code");
              a("#select_procedure ul li").removeClass("active"),
                a(this).addClass("active"),
                a("#procedure_data").val(t),
                a("#select_region").removeClass("inactive"),
                a("#select_proc").addClass("available"),
                a("#select_regn").addClass("available"),
                a("#select_specialty").removeClass("selected"),
                a("#select_procedure").removeClass("selected"),
                a("#select_region").addClass("selected"),
                a(".sorting").css("display", "none"),
                i &&
                  (a("#select_procedure").css("display", "none"),
                  a("#select_region").css("display", "block"),
                  a(".codeview__mobile-title").removeClass("active"),
                  a("#select_regn").addClass("active"),
                  a("body").scrollTo(a(".tool-card").offset().top + 80 + "px"));
            }),
            a("#select_region ul li").click(function (e) {
              var t = a(this).attr("data-region");
              a("#select_region ul li").removeClass("active"),
                a("#select_region ul li")
                  .children(".image")
                  .removeClass("on")
                  .addClass("off"),
                a(this).children(".image").removeClass("off").addClass("on"),
                a(this).addClass("active"),
                a("#region_data").val() !== t && a("#loaded_data").val("0"),
                a("#region_data").val(t),
                a("#codeview__selections .codeview__next-btn").addClass(
                  "enabled"
                ),
                a("#select_specialty").removeClass("selected"),
                a("#select_procedure").removeClass("selected"),
                a("#select_region").removeClass("selected"),
                a(".sorting").css("display", "none"),
                i &&
                  (a("#select_region").css("display", "none"),
                  a("#codeview__selections").css("display", "none"),
                  a("#codeview__results").css("display", "block"),
                  a(".codeview__mobile-title").removeClass("active"),
                  a(".codeview__slidey").slickSetOption("dots", !1, !0),
                  a("body").scrollTo(a(".tool-card").offset().top + 80 + "px"));
            }),
            a(".sorting-item").click(function (e) {
              var t = a(this).attr("data-sort");
              a(".sorting-item").removeClass("active"),
                a(this).addClass("active"),
                a("#sort_data").val(t),
                s();
            }),
            a("#codeview__intro .codeview__next-btn").click(function (e) {
              a("#codeview__intro").css("display", "none"),
                a("#codeview__selections").css("display", "block"),
                a("#select_spec").addClass("active").addClass("available"),
                a("#select_specialty").addClass("selected"),
                a(".codeview__mobile-states").css("visibility", "visible"),
                i &&
                  a("body").scrollTo(a(".tool-card").offset().top + 80 + "px");
            }),
            a("#codeview__selections .codeview__next-btn").click(function (e) {
              var s = a("#specialty_data").val(),
                l = a("#specialty_proper").val();
              if (
                a("#codeview__selections .codeview__next-btn").hasClass(
                  "enabled"
                )
              ) {
                var c = a("#region_data").val();
                a("#codeview__selections").css("display", "none"),
                  a("#codeview__results").css("display", "block"),
                  a("#codeview__results .specialty-selection div")
                    .removeAttr("class")
                    .addClass("image off image-" + s),
                  a(
                    "#codeview__results .specialty-selection .specialty-name"
                  ).html(l),
                  a("#codeview__results .procedure-selection").html(
                    a("#select_procedure ul li.active").html()
                  ),
                  a("#codeview__results .region-selection .image")
                    .removeAttr("class")
                    .addClass("image off image-region image-" + c),
                  a("#codeview__results .region-selection .region-name").html(
                    a("#select_region ul li.active").text()
                  ),
                  i &&
                    a("body").scrollTo(
                      a(".tool-card").offset().top + 80 + "px"
                    ),
                  t(1);
              }
            }),
            a("#codeview__results .codeview__prev-btn").click(function (e) {
              a("#codeview__selections").css("display", "block"),
                a("#codeview__results").css("display", "none"),
                i &&
                  a("body").scrollTo(a(".tool-card").offset().top + 80 + "px");
            }),
            a("#codeview__results .codeview__next-btn").click(function (e) {
              a("#codeview__results .codeview__next-btn").hasClass("enabled") &&
                (a("#codeview__results").css("display", "none"),
                a("#codeview__tips").css("display", "block"),
                i &&
                  a("body").scrollTo(a(".tool-card").offset().top + 80 + "px"));
            }),
            a("#codeview__tips .codeview__prev-btn").click(function (e) {
              a("#codeview__results").css("display", "block"),
                a("#codeview__tips").css("display", "none"),
                i &&
                  a("body").scrollTo(a(".tool-card").offset().top + 80 + "px");
            }),
            a("#select_spec").click(function (e) {
              a(this).hasClass("available") &&
                (a(".codeview__content--slide").css("display", "none"),
                a("#codeview__selections").css("display", "block"),
                a(
                  "#codeview__selections .codeview__selection--wrapper .codeview__selection--content"
                ).css("display", "none"),
                a("#select_specialty").css("display", "block"),
                a("#select_specialty").addClass("selected"),
                a(".codeview__mobile-title").removeClass("active"),
                a(this).addClass("active"),
                i &&
                  a("body").scrollTo(a(".tool-card").offset().top + 80 + "px"));
            }),
            a("#select_proc").click(function (e) {
              a(this).hasClass("available") &&
                (a(".codeview__content--slide").css("display", "none"),
                a("#codeview__selections").css("display", "block"),
                a(
                  "#codeview__selections .codeview__selection--wrapper .codeview__selection--content"
                ).css("display", "none"),
                a("#select_procedure").css("display", "block"),
                a("#select_procedure").addClass("selected"),
                a(".codeview__mobile-title").removeClass("active"),
                a(".sorting").css("display", "block"),
                a(this).addClass("active"),
                i &&
                  a("body").scrollTo(a(".tool-card").offset().top + 80 + "px"));
            }),
            a("#select_regn").click(function (e) {
              a(this).hasClass("available") &&
                (a(".codeview__content--slide").css("display", "none"),
                a("#codeview__selections").css("display", "block"),
                a(
                  "#codeview__selections .codeview__selection--wrapper .codeview__selection--content"
                ).css("display", "none"),
                a("#select_region").css("display", "block"),
                a("#select_region").addClass("selected"),
                a(".codeview__mobile-title").removeClass("active"),
                a(this).addClass("active"),
                i &&
                  a("body").scrollTo(a(".tool-card").offset().top + 80 + "px"));
            });
        },
      },
      n = function () {
        try {
          return document.createEvent("TouchEvent"), !0;
        } catch (e) {
          return !1;
        }
      },
      d = function (e) {
        n() &&
          a.each(e, function (e, t) {
            var s = a(t)[0],
              i = 0;
            s.addEventListener(
              "touchstart",
              function (e) {
                i = this.scrollTop + e.touches[0].pageY;
              },
              !1
            ),
              s.addEventListener(
                "touchmove",
                function (e) {
                  (this.scrollTop = i - e.touches[0].pageY), e.preventDefault();
                },
                !1
              );
          });
      },
      v = function () {
        t();
      },
      _ = function () {
        (a = window.$), o(), r.init(), v();
        var e = a(".codeview .codeview__selection--body ul");
        d(e),
          "pageeditor" === APP.util.SitecoreMode && a("#codeview__tips").show();
      };
    return { init: _ };
  })();
  var not_camel_case = 1,
    APP = (window.APP = window.APP || {});
  APP.revenueCalc = (function () {
    var e,
      t,
      s,
      a,
      i,
      l,
      c = window.$,
      o = !1,
      r = function () {
        return (
          "function" == typeof window.matchMedia &&
          window.matchMedia("(max-width: 767px)").matches
        );
      },
      n = {
        providers: 0,
        specialty: "",
        specialtyDisplay: "",
        collection: 0,
        interactiondate: "",
        revenueIncrease: 0,
      },
      d = {
        visits: 0,
        collections: 0,
        medicare: 0,
        pqri: 0,
      },
      v = {
        icr: 0.06,
        patientNoShow: 0.08,
        muIncentives: 1,
        pqri: 1,
      },
      _ = {
        preAthenaNoShowRate: 0.185,
        ReductionInChartPullsPerMdPerMonth: 208.33,
        MDsPerLabelPrinter: 3,
        AvgCostOfLabelPrinterPerMonth: 8.03,
        AvgCostOfLabelsPerMdPerMonth: 3.86,
        AvgCostOfLaborPerMdPerMonth: 116.56,
        pqriErxIncentive: 0.005,
      },
      u = function (e) {
        switch (e) {
          case "cardiology":
            (d.visits = 245),
              (d.collections = 29175.75),
              (d.medicare = 46.49),
              (d.pqri = 43.97);
            break;
          case "family-practice":
            (d.visits = 213),
              (d.collections = 18135.04),
              (d.medicare = 24.25),
              (d.pqri = 16.69);
            break;
          case "internal-medicine":
            (d.visits = 127),
              (d.collections = 14403.5),
              (d.medicare = 35.3),
              (d.pqri = 43.65);
            break;
          case "multispecialty":
            (d.visits = 149),
              (d.collections = 18538.76),
              (d.medicare = 43.36),
              (d.pqri = 48.6);
            break;
          case "neurology":
            (d.visits = 211),
              (d.collections = 34986.07),
              (d.medicare = 30.96),
              (d.pqri = 26.91);
            break;
          case "ob-gyn":
            (d.visits = 170),
              (d.collections = 32896.5),
              (d.medicare = 4.29),
              (d.pqri = 2.87);
            break;
          case "ophthalmology":
            (d.visits = 341),
              (d.collections = 95489.9),
              (d.medicare = 46.29),
              (d.pqri = 43.76);
            break;
          case "orthopedic-surgery":
            (d.visits = 244),
              (d.collections = 41650.19),
              (d.medicare = 23.94),
              (d.pqri = 20.23);
            break;
          case "pediatric-medicine":
            (d.visits = 203),
              (d.collections = 25194.44),
              (d.medicare = 0.07),
              (d.pqri = 0);
            break;
          default:
          case "other":
            (d.visits = 173),
              (d.collections = 33174.89),
              (d.medicare = 30.24),
              (d.pqri = 23.85);
        }
      },
      p = function (e) {
        var t = 35e3;
        switch (e) {
          case 1:
          case 2:
            t = 5e3;
            break;
          case 3:
            t = 1e4;
            break;
          case 4:
            t = 15e3;
            break;
          case 5:
            t = 20500;
            break;
          case 6:
            t = 25e3;
            break;
          case 7:
            t = 29e3;
            break;
          case 8:
            t = 32e3;
            break;
          case 9:
            t = 34e3;
            break;
          default:
            t = 35e3;
        }
        return t;
      },
      h = function () {
        (o = r()),
          c(".revenue__providers--slider").slider({
            min: 1,
            max: 1e3,
            value: 3,
            range: "min",
            create: function (e, t) {
              a.val(3);
            },
            slide: function (e, t) {
              a.val(t.value);
            },
            change: function (e, t) {
              g(d.collections);
            },
          }),
          a.on("keydown", function (e) {
            c(this);
            c.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
              (65 === e.keyCode && e.ctrlKey === !0) ||
              (e.keyCode >= 35 && e.keyCode <= 39) ||
              ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
                (e.keyCode < 96 || e.keyCode > 105) &&
                e.preventDefault());
          }),
          a.on("change", function (e) {
            var t = c(this),
              s = t.val();
            "" !== s
              ? ((s = parseInt(s)), s > 1e3 ? t.val(1e3) : s < 1 && t.val(1))
              : t.val(1),
              c(".revenue__providers--slider").slider("value", t.val());
          }),
          i.on("focus", function (e) {
            var t = c(this),
              s = t.val();
            "text" === t.attr("type")
              ? (e.preventDefault(),
                t.attr("data-value", s),
                t.val(s.replace("$", "").replace(",", "")),
                t.attr("type", "number"),
                t.trigger("focus"))
              : t.val(t.attr("data-value").replace("$", "").replace(",", ""));
          }),
          i.on("blur", function (e) {
            var t = c(this),
              s = t.val();
            "number" === t.attr("type") &&
              (t.attr("type", "text"),
              t.val("$" + T(s)),
              (n.collection = s),
              y(s));
          }),
          i.on("keydown", function (e) {
            c(this);
            c.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
              (65 === e.keyCode && e.ctrlKey === !0) ||
              (e.keyCode >= 35 && e.keyCode <= 39) ||
              ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
                (e.keyCode < 96 || e.keyCode > 105) &&
                e.preventDefault());
          }),
          e.find(".codeview__next-btn").click(function (e) {
            c(this).hasClass("enabled") && c(this).hasClass("footer-right")
              ? f(0, c(this))
              : c(this).hasClass("footer-right") === !1 && f(0, c(this)),
              e.preventDefault();
          }),
          c(".step-next-btn").click(function (e) {
            f(1, c(this)), e.preventDefault();
          }),
          e.find(".codeview__footer .codeview__prev-btn").click(function (e) {
            o ? (l.hide(), O(), s.show()) : N() && (l.hide(), O(), s.show()),
              e.preventDefault();
          }),
          c("#select_specialty ul li").click(function (e) {
            var t = c(this).attr("data-specialty"),
              a = c(this).attr("data-specialty-proper");
            c("#select_specialty ul li").removeClass("active"),
              c("#select_specialty ul li")
                .children(".image")
                .removeClass("on")
                .addClass("off"),
              c(this).children(".image").removeClass("off").addClass("on"),
              c(this).addClass("active"),
              c("#specialty_data").val() !== t && c("#loaded_data").val("0"),
              c("#select_spec").addClass("available"),
              c("#select_proc").addClass("available"),
              c("#select_specialty").removeClass("selected"),
              s
                .find(".codeview__footer .codeview__next-btn")
                .addClass("enabled"),
              s
                .find("#select_collections")
                .removeClass("inactive")
                .addClass("selected"),
              u(t),
              (n.specialty = t),
              (n.specialtyDisplay = a),
              (n.collection = d.collections),
              g(n.collection),
              f(2);
          }),
          c(".btn-chk").click(function (e) {
            var t = c(this).attr("data-default"),
              s = c(this).attr("data-opt");
            c(".btn-chk[data-default=" + t + "]")
              .not(this)
              .find("span")
              .removeClass("on"),
              c(this).find("span").addClass("on"),
              c(this).siblings(".btn-chk").find("span").removeClass("on"),
              "" !== t && ((v[t] = parseInt(s)), P()),
              c(".btn-chk[data-default=" + t + "][data-opt= " + s + "]")
                .not(this)
                .find("span")
                .addClass("on"),
              e.preventDefault();
          });
        var t;
        c(".btn-hotspot").click(function (e) {
          var s = l.find("." + c(this).attr("data-ref")),
            a = "Your results: " + c(this).siblings("p").html(),
            i = c(".results-title"),
            r = c(this).index(".btn-hotspot"),
            n = !1;
          o === !1 &&
            (i.html(a), c(".revenuecalc__overlay--container").show(), $()),
            l
              .find(".codeview__results--slide-wrapper")
              .css("visibility", "hidden"),
            s.show(),
            o && (l.find(".codeview__results--slide").hide(), (n = !0)),
            (t = l.find(".revenuecalc__overlay--container").slick({
              dots: !0,
              arrows: !0,
              draggable: n,
              customPaging: function (e, t) {
                return '<button type="button" data-role="none"></button>';
              },
              onAfterChange: function () {
                if (o === !1) {
                  var e = c(".revcalc_other-parms--box p")
                    .eq(t.slickCurrentSlide())
                    .html();
                  i.html("Your results: " + e);
                }
              },
            })),
            t.slickGoTo(r),
            t.slickUnfilter().slickFilter(":not(.hiddenSlide)"),
            l.find(".revenuecalc__overlay").show(),
            e.preventDefault();
        }),
          c(".btn-close__revenuecalc__overlay").click(function (e) {
            O(),
              t.slickUnfilter().unslick(),
              l
                .find(".codeview__results--slide-wrapper")
                .css("visibility", "visible"),
              o
                ? l.find(".codeview__results--slide").show()
                : (c(".revenuecalc__overlay--container").hide(), $()),
              l.find(".revenuecalc__overlay").hide(),
              e.preventDefault();
          }),
          c(".codeview__mobile-states").on(
            "click",
            ".codeview__mobile-title",
            function (e) {
              var t = c(this);
              t.hasClass("tabEnabled") && (l.hide(), s.show(), w(t.index())),
                e.preventDefault();
            }
          ),
          c(".codeview__results").mousedown(function () {
            var e = c(".revcalc__results--revenue-increase").html(),
              t = c(
                ".revcalc__results--slide-selections .txt-providers"
              ).html(),
              s = c(
                ".revcalc__results--slide-selections .specialty-name"
              ).html(),
              a = c(
                ".revcalc__results--slide-selections .avg-collections"
              ).html(),
              i = c(".email_share_url").html();
            (window.addthis_config = {
              ui_use_css: !1,
            }),
              (window.addthis_share = {
                email_template: "Revenue_Calc_Results",
                url: i,
                email_vars: {
                  emailRevIncrease: e,
                  emailResultsProviders: t,
                  emailResultsName: s,
                  emailResultsCollections: a,
                  emailUniqueURL: i,
                },
              }),
              window.addthis.toolbox(
                "#social-icons__toolbox-email",
                window.addthis_config,
                window.addthis_share
              );
          });
      },
      m = function (t) {
        var s = e.find(".codeview__mobile-states .codeview__mobile-title");
        s.removeClass("stepSelected"),
          s.eq(t).addClass("stepSelected"),
          s.eq(t).addClass("tabEnabled");
      },
      w = function (e) {
        f(e, c(".codeview__content--slide").eq(e));
      },
      f = function (t, a) {
        var i, l;
        if (0 === t)
          o && m(0),
            a.hasClass("footer-right") && M(),
            (i = a.parents(".codeview__content--slide")),
            (l = i.next(".codeview__content--slide")),
            i.hide(),
            l.show(),
            o &&
              (s.find(".codeview__selection--content").removeClass("selected"),
              e.find(".codeview__mobile-states").show(),
              e.find(".codeview__footer").hide());
        else if (1 === t) {
          if (
            (s.find("#select_providers").removeClass("selected"),
            s
              .find("#select_specialty")
              .removeClass("inactive")
              .addClass("selected"),
            o)
          ) {
            m(1);
            var r = s.find(".codeview__selection--content");
            r.removeClass("selected"),
              e.find(".codeview__footer").hide(),
              r.hide(),
              r.eq(1).show();
          }
          (i = a.parents(".codeview__content--slide")),
            (l = i.next(".codeview__content--slide"));
        } else
          2 === t &&
            o &&
            (m(2),
            s.find("#select_specialty").hide(),
            s.find("#select_collections").removeClass("selected").show(),
            e.find(".codeview__footer").show());
        o &&
          (c(".codeview__selection--content").hide(),
          c(".codeview__selection--content").eq(t).show());
      },
      g = function (e) {
        var t = 1,
          s = c(".revenue__collections--slider");
        (n.providers = parseInt(a.val())),
          (t = k(d.collections * n.providers)),
          s.slider({
            min: 1,
            max: 1e3,
            value: t,
            range: "min",
            slide: function (e, t) {
              (n.collection = 100 * Math.floor(C(t.value) / 100)),
                i.val("$" + T(n.collection));
            },
          }),
          (n.collection =
            100 * Math.floor((d.collections * n.providers) / 100)),
          i.val("$" + T(n.collection));
      },
      y = function (e) {
        var t = k(e);
        c(".revenue__collections--slider").slider("value", t);
      },
      b = function () {
        var e = l.find(".increaseby-slider");
        e.slider({
          min: 0,
          max: 120,
          value: 80,
          range: "min",
          slide: function (e, t) {
            var s = (t.value / 10).toFixed(1);
            l.find(".increaseby-slider-result").text(s + "%"),
              (v.icr = t.value / 1e3),
              P();
          },
          change: function (t, s) {
            t.originalEvent && e.not(c(this)).slider("value", s.value);
          },
        });
        var t = l.find(".noshow-slider");
        t.slider({
          min: 0,
          max: 160,
          value: 80,
          range: "min",
          slide: function (e, t) {
            var s = (t.value / 10).toFixed(1);
            (v.patientNoShow = t.value / 1e3),
              l.find(".noshow-slider-result").text(s + "%"),
              P();
          },
          change: function (e, s) {
            e.originalEvent && t.not(c(this)).slider("value", s.value);
          },
        });
      },
      C = function (e) {
        var t = 1,
          s = 1e3,
          a = Math.log(100),
          i = Math.log(5 * (d.collections * n.providers)),
          l = (i - a) / (s - t);
        return Math.ceil(Math.exp(a + l * (e - t)));
      },
      k = function (e) {
        var t = 1,
          s = 1e3,
          a = Math.log(100),
          i = Math.log(5 * (d.collections * n.providers)),
          l = (i - a) / (s - t),
          c = (Math.log(e) - a) / l + t;
        return Math.ceil(c);
      },
      x = function () {
        var e,
          t = d.visits * n.providers,
          s = n.collection * v.icr,
          a = _.preAthenaNoShowRate - _.preAthenaNoShowRate * v.patientNoShow,
          i = (_.preAthenaNoShowRate - a) * t,
          l = n.collection / t,
          c = i * l,
          o = 0,
          r = n.collection / t,
          u = o * r;
        u = 10 * Math.floor(u / 10);
        var h = 0,
          m = 0;
        if (0 !== d.medicare && 1 === v.muIncentives) {
          var w = (d.medicare / 100) * n.collection,
            f = 12 * w,
            g = f / n.providers,
            y = 0.75 * g,
            b = y * n.providers;
          y >= 11760
            ? ((m = 11760 * n.providers), (h = m))
            : ((m = b), (h = m));
        }
        var C = 0;
        d.pqri > 0 &&
          1 === v.pqri &&
          (C = n.collection * (d.medicare / 100) * _.pqriErxIncentive);
        var k = 0,
          x = p(parseInt(n.providers)),
          P = n.providers * _.ReductionInChartPullsPerMdPerMonth,
          M = x / 12,
          A = P + M,
          T = Math.ceil(n.providers / 3),
          I =
            T * _.AvgCostOfLabelPrinterPerMonth +
            n.providers * _.AvgCostOfLabelsPerMdPerMonth +
            n.providers * _.AvgCostOfLaborPerMdPerMonth,
          D = A - I;
        return (
          (e = Math.ceil(s + c + u + m / 12 + D + C + k)), (e = 12 * e), S(e)
        );
      },
      P = function () {
        var e = x();
        (n.revenueIncrease = e),
          l.find(".revcalc__results--revenue-increase").text("$" + T(e)),
          A();
      },
      M = function () {
        s.find("#select_collections").removeClass("selected"),
          l.find(".txt-providers").text(n.providers + " Providers"),
          l.find(".specialty-name").text(n.specialtyDisplay),
          l
            .find(".image")
            .removeClass()
            .addClass("image on image-" + n.specialty),
          l.find(".avg-collections").text("$" + T(n.collection)),
          "pediatric-medicine" === n.specialty
            ? (l
                .find("[data-ref=revenuecalc__overlay--pqri]")
                .parents(".revcalc_other-parms--box")
                .addClass("disable-parm"),
              l
                .find("[data-default=muIncentives][data-opt=1]")
                .find(".btn-radio")
                .removeClass("on"),
              l
                .find("[data-default=muIncentives][data-opt=0]")
                .find(".btn-radio")
                .addClass("on"),
              l.find(".revenuecalc__overlay--pqri").addClass("hiddenSlide"),
              (v.muIncentives = 0))
            : (l
                .find("[data-ref=revenuecalc__overlay--pqri]")
                .parents(".revcalc_other-parms--box")
                .removeClass("disable-parm"),
              l
                .find("[data-default=muIncentives][data-opt=1]")
                .find(".btn-radio")
                .addClass("on"),
              l
                .find("[data-default=muIncentives][data-opt=0]")
                .find(".btn-radio")
                .removeClass("on"),
              l.find(".revenuecalc__overlay--pqri").removeClass("hiddenSlide"),
              (v.muIncentives = 1)),
          b(),
          P(),
          c(".codeview__mobile-states .codeview__mobile-title").removeClass(
            "stepSelected"
          );
      },
      A = function () {
        (n.interactiondate = D()),
          APP.global.setCookie("revCalcIn", JSON.stringify(n), 30);
      },
      S = function (e) {
        var t = 0;
        return (
          e >= 1e4 && e <= 999999 && ((t = Math.floor(e / 100)), (e = 100 * t)),
          e >= 1e6 && ((t = Math.floor(e / 1e3)), (e = 1e3 * t)),
          e
        );
      },
      T = function (e) {
        return e.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
      },
      I = function () {
        try {
          return document.createEvent("TouchEvent"), !0;
        } catch (e) {
          return !1;
        }
      },
      D = function () {
        var e = new Date(),
          t = "";
        return (t =
          e.getFullYear() +
          "-" +
          R(e.getMonth() + 1) +
          "-" +
          R(e.getDate()) +
          "T" +
          R(e.getHours()) +
          ":" +
          R(e.getMinutes()) +
          ":" +
          R(e.getSeconds()));
      },
      R = function (e) {
        return e < 10 && (e = "0" + e), e;
      },
      q = function (e) {
        I() &&
          c.each(e, function (e, t) {
            var s = c(t)[0],
              a = 0;
            s.addEventListener(
              "touchstart",
              function (e) {
                a = this.scrollTop + e.touches[0].pageY;
              },
              !1
            ),
              s.addEventListener(
                "touchmove",
                function (e) {
                  (this.scrollTop = a - e.touches[0].pageY), e.preventDefault();
                },
                !1
              );
          });
      },
      O = function () {
        var e = c(".results-title");
        e.html("Your results: Summary");
      },
      N = function () {
        var e = c(".revenuecalc__overlay--container"),
          t = c(".codeview__results--slide-wrapper"),
          s = c(".codeview__prev-btn .txt_body");
        return (
          !e.is(":visible") ||
          (t.css("visibility", "visible"),
          e.hide(),
          s.html("Edit all inputs"),
          !1)
        );
      },
      $ = function () {
        var e = c(".codeview__prev-btn .txt_body"),
          t = c(".revenuecalc__overlay--container");
        t.is(":visible")
          ? e.html("Back to summary")
          : e.html("Edit all inputs");
      },
      E = function () {
        (c = window.$),
          (e = c(".revenue-calc")),
          e.parents(".heroOverlay").addClass("revenue-calc"),
          (t = e.find("#codeview__intro")),
          (s = e.find(".codeview__selections")),
          (a = e.find(".revenue__providers--text")),
          (i = e.find(".revenue__collections--text")),
          (l = e.find("#codeview__results"));
        var o = [
          ".revenue-calc.codeview .codeview__selection--body ul",
          ".revenue-calc.codeview .codeview__results .revcalc_other-parms",
        ];
        q(o), h();
      };
    return { init: E };
  })();
  var APP = (window.APP = window.APP || {}),
    isMobile = !1;
  document.body.clientWidth < 768 && (isMobile = !0),
    (APP.practicevitals = (function () {
      var e = window.$,
        t = "/assets/data/",
        s = {
          init: function () {
            this.eventHandlers(),
              this.initCarousel(),
              (t = e(".practicevitals").attr("data-tool-path"));
          },
          initCarousel: function () {
            var t = e(".practicevitals .pv__slider"),
              a = e(".practicevitals .tips__slider"),
              i = e(".practicevitals .pv__control--left"),
              l = e(".practicevitals .pv__control--right");
            t.slick({
              arrows: !0,
              dots: !0,
              infinite: !0,
              speed: 600,
              lazyLoad: "ondemand",
              onAfterChange: s.updateState,
              slidesToShow: 1,
              slidesToScroll: 1,
              asNavFor: ".tips__slider",
            }),
              isMobile || t.slickSetOption("arrows", !1, !0),
              i.click(function (e) {
                t.slickPrev();
              }),
              l.click(function (e) {
                t.slickNext();
              }),
              a.slick({
                dots: !1,
                prevArrow:
                  '<button type="button" class="slick-prev icon icon-arrow_left_previous"></button>',
                nextArrow:
                  '<button type="button" class="slick-next icon icon-arrow_right_previous"></button>',
                infinite: !0,
                speed: 600,
                lazyLoad: "ondemand",
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: ".pv__slider",
              }),
              isMobile &&
                a
                  .slickSetOption("dots", !0, !0)
                  .slickSetOption("arrows", !1, !0);
          },
          eventHandlers: function () {
            var t = e(".practicevitals .codeview__next-btn"),
              a = e(".practicevitals #select_specialty li"),
              i = e(".practicevitals .pv__prev-btn"),
              l = e(".practicevitals .pv__next-btn"),
              c = e(".practicevitals .pv__average__plus"),
              o = e(".practicevitals .tips__close");
            t.click(function (t) {
              isMobile &&
                e(".practicevitals #codeview__intro").css("display", "none"),
                e(".practicevitals #codeview__selections").css(
                  "display",
                  "block"
                ),
                e(".practicevitals__overlay").addClass("active"),
                e(".practicevitals .pv__slider").slickGoTo(0);
            }),
              i.click(function (t) {
                e(".practicevitals .results-title").css("display", "none"),
                  e(".practicevitals #codeview__results").css(
                    "display",
                    "none"
                  ),
                  e(".practicevitals #codeview__selections").css(
                    "display",
                    "none"
                  ),
                  e(".practicevitals__overlay").removeClass("active"),
                  e(".practicevitals #codeview__intro").css("display", "block");
              }),
              a.click(function (t) {
                var a = e(this).attr("data-specialty"),
                  i = e(this).attr("data-specialty-proper");
                e(".byspecialty__name").html(i),
                  s.updateData(a, i),
                  e(".practicevitals #codeview__intro").css("display", "none"),
                  e(".practicevitals #codeview__selections").css(
                    "display",
                    "none"
                  ),
                  e(".practicevitals__overlay").removeClass("active"),
                  e(".practicevitals .results-title").css("display", "block"),
                  e(".practicevitals #codeview__results").css(
                    "display",
                    "block"
                  ),
                  e(".practicevitals .pv__slider").slickSetOption(
                    "dots",
                    !0,
                    !0
                  ),
                  e(".codeview__results--wrapper").addClass(
                    "pv__slider--scroll"
                  );
              }),
              l.click(function (e) {
                r();
              }),
              c.click(function (e) {
                r();
              });
            var r = function () {
              e(".practicevitals #codeview__results").css("display", "none"),
                e(".practicevitals #codeview__tips").css("display", "block"),
                e(".practicevitals .tips__slider").slickSetOption(
                  "infinite",
                  !0,
                  !0
                ),
                e(".practicevitals .results-title").css("display", "none");
            };
            o.click(function (t) {
              e(".practicevitals #codeview__tips").css("display", "none"),
                e(".practicevitals .results-title").css("display", "block"),
                e(".practicevitals #codeview__results").css("display", "block"),
                e(".practicevitals .pv__slider").slickSetOption(
                  "infinite",
                  !0,
                  !0
                );
            });
          },
          updateState: function (t, s) {
            var a = "";
            switch (s) {
              case 0:
                a = "No-show rate";
                break;
              case 1:
                a = "Days in accounts receivable";
                break;
              case 2:
                a = "Turn around time";
                break;
              case 3:
                a = "Revenue Realization Rate";
                break;
              case 4:
                a = "Same-day close rate";
                break;
              case 5:
                a = "Delegation of work";
            }
            e(".practicevitals .results-title__metric").html(a);
          },
          updateData: function (a, i) {
            var l = this,
              c = [],
              o = [];
            this.drawGraph.init(),
              e
                .getJSON(t + "practicevitals_" + a + ".json", function (t) {
                  e.each(t, function (e, s) {
                    c.push(e), o.push(t[e]);
                  }),
                    Object.keys ||
                      (Object.keys = function (e) {
                        var t = [];
                        for (var s in e) e.hasOwnProperty(s) && t.push(s);
                        return t;
                      });
                  var a = Object.keys(o[0])[11].substring(5, 7);
                  s.updateMonths(a);
                  for (var i = 0; i < c.length; i++) {
                    var r,
                      n,
                      d,
                      v,
                      _,
                      u = [],
                      p = 1,
                      h = !1;
                    switch (c[i]) {
                      case "No Show Rate":
                        (v = "noshow"), (_ = !0), (h = !1);
                        break;
                      case "Days in Accounts Receivable":
                        (v = "daysreceivable"), (_ = !1), (h = !1);
                        break;
                      case "Same Day Close Rate":
                        (v = "sameday"), (_ = !0), (h = !1);
                        break;
                      case "Delegation of Work":
                        (v = "delegation"), (_ = !0), (h = !1);
                        break;
                      case "Turn around Time":
                        (v = "daysturn"), (_ = !1), (h = !1);
                        break;
                      case "Revenue Realization Rate":
                        (v = "revreal"), (_ = !0), (h = !1);
                        break;
                      case "No Show Rate-gen":
                        (v = "noshow"), (_ = !0), (h = !0);
                        break;
                      case "Days in Accounts Receivable-gen":
                        (v = "daysreceivable"), (_ = !1), (h = !0);
                        break;
                      case "Same Day Close Rate-gen":
                        (v = "sameday"), (_ = !0), (h = !0);
                        break;
                      case "Delegation of Work-gen":
                        (v = "delegation"), (_ = !0), (h = !0);
                        break;
                      case "Turn around Time-gen":
                        (v = "daysturn"), (_ = !1), (h = !0);
                        break;
                      case "Revenue Realization Rate-gen":
                        (v = "revreal"), (_ = !0), (h = !0);
                        break;
                      default:
                        (v = ""), (_ = !1);
                    }
                    h === !0 &&
                      e(".slide--" + v + " .byspecialty__name").append("*");
                    for (var m in o[i])
                      if (o[i].hasOwnProperty(m)) {
                        var w = o[i][m];
                        u.push(Number(w));
                      }
                    _ && (p = 100),
                      (r = Math.max.apply(Math, u) * p),
                      (r = Math.ceil(1.05 * r)),
                      (d = Math.min.apply(Math, u) * p),
                      (d = Math.floor(0.95 * d)),
                      (n = (r + d) / 2),
                      _
                        ? (r > 100 && ((r = 100), (n = (r + d) / 2)),
                          e(".slide--" + v + " .value--high").html(r + "%"),
                          e(".slide--" + v + " .value--median").html(n + "%"),
                          e(".slide--" + v + " .value--low").html(d + "%"))
                        : (e(".slide--" + v + " .value--high").html(r),
                          e(".slide--" + v + " .value--median").html(n),
                          e(".slide--" + v + " .value--low").html(d));
                    for (var f = 0; f < u.length; f++)
                      (u[f] = u[f] * p), (u[f] = u[f].toFixed(2));
                    var g = s.calcPlotPts(u, r, d);
                    l.drawGraph.drawBoard(i), l.drawGraph.drawLine(i, g);
                  }
                })
                .fail(function (e, t, s) {});
          },
          updateMonths: function (t) {
            var s = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sept",
                "Oct",
                "Nov",
                "Dec",
              ],
              a = parseInt(t),
              i = s.slice(0, a),
              l = s.slice(a, 12);
            l = e.merge(l, i);
            for (var c = 0; c < 12; c += 2)
              e(".month--" + (c + 2)).html(l[c + 1]);
          },
          calcPlotPts: function (e, t, s) {
            for (var a = [], i = 0, l = 162, c = 0; c < e.length; c++)
              (i = ((t - e[c]) / (t - s)).toFixed(2)),
                (a[c] = Math.round(l * i) + 20);
            return a;
          },
          drawGraph: {
            canvasArray: [],
            contextArray: [],
            defineContext: function () {
              e(".practicevitals #codeview__results").css("display", "block"),
                (this.canvasArray = [
                  e("#canvas--noshow")[0],
                  e("#canvas--daysreceivable")[0],
                  e("#canvas--sameday")[0],
                  e("#canvas--delegation")[0],
                  e("#canvas--daysturn")[0],
                  e("#canvas--revreal")[0],
                ]);
              for (var t = 0; t < this.canvasArray.length; t++)
                this.contextArray[t] = this.canvasArray[t].getContext("2d");
            },
            drawBoard: function (e) {
              var t = this.contextArray[e],
                s = 410,
                a = 190,
                i = 10;
              t.beginPath();
              for (var l = 0; l <= s; l += 77)
                t.moveTo(8.5 + l + i, i), t.lineTo(8.5 + l + i, a + i);
              for (var c = 0; c <= a; c += 40)
                t.moveTo(i, 10.5 + c + i), t.lineTo(s + i, 10.5 + c + i);
              (t.lineWidth = 1),
                (t.lineCap = "square"),
                (t.strokeStyle = "#9572AC"),
                t.stroke();
            },
            drawLine: function (e, t) {
              var s = this.contextArray[e],
                a = 16;
              s.beginPath(), s.moveTo(a, t[1]);
              for (var i = 0; i < 11; i++) s.lineTo(a + 39 * (i + 1), t[i + 2]);
              (s.lineWidth = 10),
                (s.lineCap = "round"),
                (s.lineJoin = "round"),
                (s.strokeStyle = "#B9C932"),
                s.stroke();
            },
            clearBoard: function () {
              for (var e = 0; e < this.contextArray.length; e++)
                this.contextArray[e].clearRect(
                  0,
                  0,
                  this.canvasArray[e].width,
                  this.canvasArray[e].height
                );
            },
            init: function () {
              this.clearBoard(), this.defineContext();
            },
          },
        },
        a = function () {
          try {
            return document.createEvent("TouchEvent"), !0;
          } catch (e) {
            return !1;
          }
        },
        i = function (t) {
          a() &&
            e.each(t, function (t, s) {
              var a = e(s)[0],
                i = 0;
              a.addEventListener(
                "touchstart",
                function (e) {
                  i = this.scrollTop + e.touches[0].pageY;
                },
                !1
              ),
                a.addEventListener(
                  "touchmove",
                  function (e) {
                    (this.scrollTop = i - e.touches[0].pageY),
                      e.preventDefault();
                  },
                  !1
                );
            });
        },
        l = function () {
          (e = window.$), s.init();
          var t = [".practicevitals.codeview .codeview__selection--body ul"];
          i(t);
        };
      return { init: l };
    })());
}
