var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

!function(a, b) {
    function c(b, c) {
      var e,
        f,
        g,
        h = b.nodeName.toLowerCase();
      return "area" === h
        ? (
          e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase()
          ? (g = a("img[usemap=#" + f + "]")[0], !!g && d(g))
          : !1)
        : (
          /input|select|textarea|button|object/.test(h)
          ? !b.disabled
          : "a" === h
            ? b.href || c
            : c) && d(b)
    }
    function d(b) {
      return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
        return "hidden" === a.css(this, "visibility")
      }).length
    }
    var e = 0,
      f = /^ui-id-\d+$/;
    a.ui = a.ui || {},
    a.extend(a.ui, {
      version: "1.10.4",
      keyCode: {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        NUMPAD_ADD: 107,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        NUMPAD_ENTER: 108,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_SUBTRACT: 109,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
      }
    }),
    a.fn.extend({
      focus: function(b) {
        return function(c, d) {
          return "number" == typeof c
            ? this.each(function() {
              var b = this;
              setTimeout(function() {
                a(b).focus(),
                d && d.call(b)
              }, c)
            })
            : b.apply(this, arguments)
        }
      }(a.fn.focus),
      scrollParent: function() {
        var b;
        return b = a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position"))
          ? this.parents().filter(function() {
            return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
          }).eq(0)
          : this.parents().filter(function() {
            return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
          }).eq(0),
        /fixed/.test(this.css("position")) || !b.length
          ? a(document)
          : b
      },
      zIndex: function(c) {
        if (c !== b)
          return this.css("zIndex", c);
        if (this.length)
          for (var d, e, f = a(this[0]); f.length && f[0] !== document;) {
            if (d = f.css("position"), ("absolute" === d || "relative" === d || "fixed" === d) && (e = parseInt(f.css("zIndex"), 10), !isNaN(e) && 0 !== e))
              return e;
            f = f.parent()
          }
        return 0
      },
      uniqueId: function() {
        return this.each(function() {
          this.id || (this.id = "ui-id-" + ++e)
        })
      },
      removeUniqueId: function() {
        return this.each(function() {
          f.test(this.id) && a(this).removeAttr("id")
        })
      }
    }),
    a.extend(a.expr[":"], {
      data: a.expr.createPseudo
        ? a.expr.createPseudo(function(b) {
          return function(c) {
            return !!a.data(c, b)
          }
        })
        : function(b, c, d) {
          return !!a.data(b, d[3])
        },
      focusable: function(b) {
        return c(b, !isNaN(a.attr(b, "tabindex")))
      },
      tabbable: function(b) {
        var d = a.attr(b, "tabindex"),
          e = isNaN(d);
        return (e || d >= 0) && c(b, !e)
      }
    }),
    a("<a>").outerWidth(1).jquery || a.each([
      "Width", "Height"
    ], function(c, d) {
      function e(b, c, d, e) {
        return a.each(f, function() {
          c -= parseFloat(a.css(b, "padding" + this)) || 0,
          d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0),
          e && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
        }),
        c
      }
      var f = "Width" === d
          ? ["Left", "Right"]
          : [
            "Top", "Bottom"
          ],
        g = d.toLowerCase(),
        h = {
          innerWidth: a.fn.innerWidth,
          innerHeight: a.fn.innerHeight,
          outerWidth: a.fn.outerWidth,
          outerHeight: a.fn.outerHeight
        };
      a.fn["inner" + d] = function(c) {
        return c === b
          ? h["inner" + d].call(this)
          : this.each(function() {
            a(this).css(g, e(this, c) + "px")
          })
      },
      a.fn["outer" + d] = function(b, c) {
        return "number" != typeof b
          ? h["outer" + d].call(this, b)
          : this.each(function() {
            a(this).css(g, e(this, b, !0, c) + "px")
          })
      }
    }),
    a.fn.addBack || (a.fn.addBack = function(a) {
      return this.add(
        null == a
        ? this.prevObject
        : this.prevObject.filter(a))
    }),
    a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
      return function(c) {
        return arguments.length
          ? b.call(this, a.camelCase(c))
          : b.call(this)
      }
    }(a.fn.removeData)),
    a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
    a.support.selectstart = "onselectstart" in document.createElement("div"),
    a.fn.extend({
      disableSelection: function() {
        return this.bind((
          a.support.selectstart
          ? "selectstart"
          : "mousedown") + ".ui-disableSelection", function(a) {
          a.preventDefault()
        })
      },
      enableSelection: function() {
        return this.unbind(".ui-disableSelection")
      }
    }),
    a.extend(a.ui, {
      plugin: {
        add: function(b, c, d) {
          var e,
            f = a.ui[b].prototype;
          for (e in d)
            f.plugins[e] = f.plugins[e] || [],
            f.plugins[e].push([
              c, d[e]
            ])
        },
        call: function(a, b, c) {
          var d,
            e = a.plugins[b];
          if (e && a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType)
            for (d = 0; d < e.length; d++)
              a.options[e[d][0]] && e[d][1].apply(a.element, c)
        }
      },
      hasScroll: function(b, c) {
        if ("hidden" === a(b).css("overflow"))
          return !1;
        var d = c && "left" === c
            ? "scrollLeft"
            : "scrollTop",
          e = !1;
        return b[d] > 0
          ? !0
          : (b[d] = 1, e = b[d] > 0, b[d] = 0, e)
      }
    })
  }(jQuery),
  function(a, b) {
    function c() {
      this._curInst = null,
      this._keyEvent = !1,
      this._disabledInputs = [],
      this._datepickerShowing = !1,
      this._inDialog = !1,
      this._mainDivId = "ui-datepicker-div",
      this._inlineClass = "ui-datepicker-inline",
      this._appendClass = "ui-datepicker-append",
      this._triggerClass = "ui-datepicker-trigger",
      this._dialogClass = "ui-datepicker-dialog",
      this._disableClass = "ui-datepicker-disabled",
      this._unselectableClass = "ui-datepicker-unselectable",
      this._currentClass = "ui-datepicker-current-day",
      this._dayOverClass = "ui-datepicker-days-cell-over",
      this.regional = [],
      this.regional[""] = {
        closeText: "Done",
        prevText: "Prev",
        nextText: "Next",
        currentText: "Today",
        monthNames: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        monthNamesShort: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        dayNames: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        dayNamesShort: [
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat"
        ],
        dayNamesMin: [
          "Su",
          "Mo",
          "Tu",
          "We",
          "Th",
          "Fr",
          "Sa"
        ],
        weekHeader: "Wk",
        dateFormat: "mm/dd/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
      },
      this._defaults = {
        showOn: "focus",
        showAnim: "fadeIn",
        showOptions: {},
        defaultDate: null,
        appendText: "",
        buttonText: "...",
        buttonImage: "",
        buttonImageOnly: !1,
        hideIfNoPrevNext: !1,
        navigationAsDateFormat: !1,
        gotoCurrent: !1,
        changeMonth: !1,
        changeYear: !1,
        yearRange: "c-10:c+10",
        showOtherMonths: !1,
        selectOtherMonths: !1,
        showWeek: !1,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: "+10",
        minDate: null,
        maxDate: null,
        duration: "fast",
        beforeShowDay: null,
        beforeShow: null,
        onSelect: null,
        onChangeMonthYear: null,
        onClose: null,
        numberOfMonths: 1,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        altField: "",
        altFormat: "",
        constrainInput: !0,
        showButtonPanel: !1,
        autoSize: !1,
        disabled: !1
      },
      a.extend(this._defaults, this.regional[""]),
      this.dpDiv = d(a("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }
    function d(b) {
      var c = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
      return b.delegate(c, "mouseout", function() {
        a(this).removeClass("ui-state-hover"),
        -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).removeClass("ui-datepicker-prev-hover"),
        -1 !== this.className.indexOf("ui-datepicker-next") && a(this).removeClass("ui-datepicker-next-hover")
      }).delegate(c, "mouseover", function() {
        a.datepicker._isDisabledDatepicker(
          f.inline
          ? b.parent()[0]
          : f.input[0]) || (a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), a(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).addClass("ui-datepicker-next-hover"))
      })
    }
    function e(b, c) {
      a.extend(b, c);
      for (var d in c)
        null == c[d] && (b[d] = c[d]);
      return b
    }
    a.extend(a.ui, {
      datepicker: {
        version: "1.10.4"
      }
    });
    var f,
      g = "datepicker";
    a.extend(c.prototype, {
      markerClassName: "hasDatepicker",
      maxRows: 4,
      _widgetDatepicker: function() {
        return this.dpDiv
      },
      setDefaults: function(a) {
        return e(this._defaults, a || {}),
        this
      },
      _attachDatepicker: function(b, c) {
        var d,
          e,
          f;
        d = b.nodeName.toLowerCase(),
        e = "div" === d || "span" === d,
        b.id || (this.uuid += 1, b.id = "dp" + this.uuid),
        f = this._newInst(a(b), e),
        f.settings = a.extend({}, c || {}),
        "input" === d
          ? this._connectDatepicker(b, f)
          : e && this._inlineDatepicker(b, f)
      },
      _newInst: function(b, c) {
        var e = b[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
        return {
          id: e,
          input: b,
          selectedDay: 0,
          selectedMonth: 0,
          selectedYear: 0,
          drawMonth: 0,
          drawYear: 0,
          inline: c,
          dpDiv: c
            ? d(a("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
            : this.dpDiv
        }
      },
      _connectDatepicker: function(b, c) {
        var d = a(b);
        c.append = a([]),
        c.trigger = a([]),
        d.hasClass(this.markerClassName) || (this._attachments(d, c), d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(c), a.data(b, g, c), c.settings.disabled && this._disableDatepicker(b))
      },
      _attachments: function(b, c) {
        var d,
          e,
          f,
          g = this._get(c, "appendText"),
          h = this._get(c, "isRTL");
        c.append && c.append.remove(),
        g && (c.append = a("<span class='" + this._appendClass + "'>" + g + "</span>"), b[
          h
            ? "before"
            : "after"
        ](c.append)),
        b.unbind("focus", this._showDatepicker),
        c.trigger && c.trigger.remove(),
        d = this._get(c, "showOn"),
        ("focus" === d || "both" === d) && b.focus(this._showDatepicker),
        ("button" === d || "both" === d) && (e = this._get(c, "buttonText"), f = this._get(c, "buttonImage"), c.trigger = a(
          this._get(c, "buttonImageOnly")
          ? a("<img/>").addClass(this._triggerClass).attr({src: f, alt: e, title: e})
          : a("<button type='button'></button>").addClass(this._triggerClass).html(
            f
            ? a("<img/>").attr({src: f, alt: e, title: e})
            : e)), b[
          h
            ? "before"
            : "after"
        ](c.trigger), c.trigger.click(function() {
          return a.datepicker._datepickerShowing && a.datepicker._lastInput === b[0]
            ? a.datepicker._hideDatepicker()
            : a.datepicker._datepickerShowing && a.datepicker._lastInput !== b[0]
              ? (a.datepicker._hideDatepicker(), a.datepicker._showDatepicker(b[0]))
              : a.datepicker._showDatepicker(b[0]),
          !1
        }))
      },
      _autoSize: function(a) {
        if (this._get(a, "autoSize") && !a.inline) {
          var b,
            c,
            d,
            e,
            f = new Date(2009, 11, 20),
            g = this._get(a, "dateFormat");
          g.match(/[DM]/) && (b = function(a) {
            for (c = 0, d = 0, e = 0; e < a.length; e++)
              a[e].length > c && (c = a[e].length, d = e);
            return d
          }, f.setMonth(b(this._get(
            a, g.match(/MM/)
            ? "monthNames"
            : "monthNamesShort"))), f.setDate(b(this._get(
            a, g.match(/DD/)
            ? "dayNames"
            : "dayNamesShort")) + 20 - f.getDay())),
          a.input.attr("size", this._formatDate(a, f).length)
        }
      },
      _inlineDatepicker: function(b, c) {
        var d = a(b);
        d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv), a.data(b, g, c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), this._updateAlternate(c), c.settings.disabled && this._disableDatepicker(b), c.dpDiv.css("display", "block"))
      },
      _dialogDatepicker: function(b, c, d, f, h) {
        var i,
          j,
          k,
          l,
          m,
          n = this._dialogInst;
        return n || (this.uuid += 1, i = "dp" + this.uuid, this._dialogInput = a("<input type='text' id='" + i + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), a("body").append(this._dialogInput), n = this._dialogInst = this._newInst(this._dialogInput, !1), n.settings = {}, a.data(this._dialogInput[0], g, n)),
        e(n.settings, f || {}),
        c = c && c.constructor === Date
          ? this._formatDate(n, c)
          : c,
        this._dialogInput.val(c),
        this._pos = h
          ? h.length
            ? h
            : [h.pageX, h.pageY]
          : null,
        this._pos || (j = document.documentElement.clientWidth, k = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, m = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [
          j / 2 - 100 + l,
          k / 2 - 150 + m
        ]),
        this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"),
        n.settings.onSelect = d,
        this._inDialog = !0,
        this.dpDiv.addClass(this._dialogClass),
        this._showDatepicker(this._dialogInput[0]),
        a.blockUI && a.blockUI(this.dpDiv),
        a.data(this._dialogInput[0], g, n),
        this
      },
      _destroyDatepicker: function(b) {
        var c,
          d = a(b),
          e = a.data(b, g);
        d.hasClass(this.markerClassName) && (
          c = b.nodeName.toLowerCase(), a.removeData(b, g), "input" === c
          ? (e.append.remove(), e.trigger.remove(), d.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp))
          : ("div" === c || "span" === c) && d.removeClass(this.markerClassName).empty())
      },
      _enableDatepicker: function(b) {
        var c,
          d,
          e = a(b),
          f = a.data(b, g);
        e.hasClass(this.markerClassName) && (
          c = b.nodeName.toLowerCase(), "input" === c
          ? (b.disabled = !1, f.trigger.filter("button").each(function() {
            this.disabled = !1
          }).end().filter("img").css({opacity: "1.0", cursor: ""}))
          : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().removeClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)),
        this._disabledInputs = a.map(this._disabledInputs, function(a) {
          return a === b
            ? null
            : a
        }))
      },
      _disableDatepicker: function(b) {
        var c,
          d,
          e = a(b),
          f = a.data(b, g);
        e.hasClass(this.markerClassName) && (
          c = b.nodeName.toLowerCase(), "input" === c
          ? (b.disabled = !0, f.trigger.filter("button").each(function() {
            this.disabled = !0
          }).end().filter("img").css({opacity: "0.5", cursor: "default"}))
          : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().addClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)),
        this._disabledInputs = a.map(this._disabledInputs, function(a) {
          return a === b
            ? null
            : a
        }),
        this._disabledInputs[this._disabledInputs.length] = b)
      },
      _isDisabledDatepicker: function(a) {
        if (!a)
          return !1;
        for (var b = 0; b < this._disabledInputs.length; b++)
          if (this._disabledInputs[b] === a)
            return !0;
      return !1
      },
      _getInst: function(b) {
        try {
          return a.data(b, g)
        } catch (c) {
          throw "Missing instance data for this datepicker"
        }
      },
      _optionDatepicker: function(c, d, f) {
        var g,
          h,
          i,
          j,
          k = this._getInst(c);
        return 2 === arguments.length && "string" == typeof d
          ? "defaults" === d
            ? a.extend({}, a.datepicker._defaults)
            : k
              ? "all" === d
                ? a.extend({}, k.settings)
                : this._get(k, d)
              : null
          : (g = d || {}, "string" == typeof d && (g = {}, g[d] = f), void(k && (this._curInst === k && this._hideDatepicker(), h = this._getDateDatepicker(c, !0), i = this._getMinMaxDate(k, "min"), j = this._getMinMaxDate(k, "max"), e(k.settings, g), null !== i && g.dateFormat !== b && g.minDate === b && (k.settings.minDate = this._formatDate(k, i)), null !== j && g.dateFormat !== b && g.maxDate === b && (k.settings.maxDate = this._formatDate(k, j)), "disabled" in g && (
            g.disabled
            ? this._disableDatepicker(c)
            : this._enableDatepicker(c)), this._attachments(a(c), k), this._autoSize(k), this._setDate(k, h), this._updateAlternate(k), this._updateDatepicker(k))))
      },
      _changeDatepicker: function(a, b, c) {
        this._optionDatepicker(a, b, c)
      },
      _refreshDatepicker: function(a) {
        var b = this._getInst(a);
        b && this._updateDatepicker(b)
      },
      _setDateDatepicker: function(a, b) {
        var c = this._getInst(a);
        c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c))
      },
      _getDateDatepicker: function(a, b) {
        var c = this._getInst(a);
        return c && !c.inline && this._setDateFromField(c, b),
        c
          ? this._getDate(c)
          : null
      },
      _doKeyDown: function(b) {
        var c,
          d,
          e,
          f = a.datepicker._getInst(b.target),
          g = !0,
          h = f.dpDiv.is(".ui-datepicker-rtl");
        if (f._keyEvent = !0, a.datepicker._datepickerShowing)
          switch (b.keyCode) {
            case 9:
              a.datepicker._hideDatepicker(),
              g = !1;
              break;
            case 13:
              return e = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", f.dpDiv),
              e[0] && a.datepicker._selectDay(b.target, f.selectedMonth, f.selectedYear, e[0]),
              c = a.datepicker._get(f, "onSelect"),
              c
                ? (d = a.datepicker._formatDate(f), c.apply(
                  f.input
                  ? f.input[0]
                  : null,
                [d, f]))
                : a.datepicker._hideDatepicker(),
              !1;
            case 27:
              a.datepicker._hideDatepicker();
              break;
            case 33:
              a.datepicker._adjustDate(
                b.target, b.ctrlKey
                ? -a.datepicker._get(f, "stepBigMonths")
                : -a.datepicker._get(f, "stepMonths"),
              "M");
              break;
            case 34:
              a.datepicker._adjustDate(
                b.target, b.ctrlKey
                ? + a.datepicker._get(f, "stepBigMonths")
                : + a.datepicker._get(f, "stepMonths"),
              "M");
              break;
            case 35:
              (b.ctrlKey || b.metaKey) && a.datepicker._clearDate(b.target),
              g = b.ctrlKey || b.metaKey;
              break;
            case 36:
              (b.ctrlKey || b.metaKey) && a.datepicker._gotoToday(b.target),
              g = b.ctrlKey || b.metaKey;
              break;
            case 37:
              (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(
                b.target, h
                ? 1
                : -1,
              "D"),
              g = b.ctrlKey || b.metaKey,
              b.originalEvent.altKey && a.datepicker._adjustDate(
                b.target, b.ctrlKey
                ? -a.datepicker._get(f, "stepBigMonths")
                : -a.datepicker._get(f, "stepMonths"),
              "M");
              break;
            case 38:
              (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, -7, "D"),
              g = b.ctrlKey || b.metaKey;
              break;
            case 39:
              (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(
                b.target, h
                ? -1
                : 1,
              "D"),
              g = b.ctrlKey || b.metaKey,
              b.originalEvent.altKey && a.datepicker._adjustDate(
                b.target, b.ctrlKey
                ? + a.datepicker._get(f, "stepBigMonths")
                : + a.datepicker._get(f, "stepMonths"),
              "M");
              break;
            case 40:
              (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, 7, "D"),
              g = b.ctrlKey || b.metaKey;
              break;
            default:
              g = !1
          }
        else
          36 === b.keyCode && b.ctrlKey
            ? a.datepicker._showDatepicker(this)
            : g = !1;
        g && (b.preventDefault(), b.stopPropagation())
      },
      _doKeyPress: function(b) {
        var c,
          d,
          e = a.datepicker._getInst(b.target);
        return a.datepicker._get(e, "constrainInput")
          ? (c = a.datepicker._possibleChars(a.datepicker._get(e, "dateFormat")), d = String.fromCharCode(
            null == b.charCode
            ? b.keyCode
            : b.charCode), b.ctrlKey || b.metaKey || " " > d || !c || c.indexOf(d) > -1)
          : void 0
      },
      _doKeyUp: function(b) {
        var c,
          d = a.datepicker._getInst(b.target);
        if (d.input.val() !== d.lastVal)
          try {
            c = a.datepicker.parseDate(
              a.datepicker._get(d, "dateFormat"), d.input
              ? d.input.val()
              : null,
            a.datepicker._getFormatConfig(d)),
            c && (a.datepicker._setDateFromField(d), a.datepicker._updateAlternate(d), a.datepicker._updateDatepicker(d))
          } catch (e) {}
        return !0
      },
      _showDatepicker: function(b) {
        if (b = b.target || b, "input" !== b.nodeName.toLowerCase() && (b = a("input", b.parentNode)[0]), !a.datepicker._isDisabledDatepicker(b) && a.datepicker._lastInput !== b) {
          var c,
            d,
            f,
            g,
            h,
            i,
            j;
          c = a.datepicker._getInst(b),
          a.datepicker._curInst && a.datepicker._curInst !== c && (a.datepicker._curInst.dpDiv.stop(!0, !0), c && a.datepicker._datepickerShowing && a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])),
          d = a.datepicker._get(c, "beforeShow"),
          f = d
            ? d.apply(b, [b, c])
            : {},
          f !== !1 && (e(c.settings, f), c.lastVal = null, a.datepicker._lastInput = b, a.datepicker._setDateFromField(c), a.datepicker._inDialog && (b.value = ""), a.datepicker._pos || (a.datepicker._pos = a.datepicker._findPos(b), a.datepicker._pos[1] += b.offsetHeight), g = !1, a(b).parents().each(function() {
            return g |= "fixed" === a(this).css("position"),
            !g
          }), h = {
            left: a.datepicker._pos[0],
            top: a.datepicker._pos[1]
          }, a.datepicker._pos = null, c.dpDiv.empty(), c.dpDiv.css({position: "absolute", display: "block", top: "-1000px"}), a.datepicker._updateDatepicker(c), h = a.datepicker._checkOffset(c, h, g), c.dpDiv.css({
            position: a.datepicker._inDialog && a.blockUI
              ? "static"
              : g
                ? "fixed"
                : "absolute",
            display: "none",
            left: h.left + "px",
            top: h.top + "px"
          }), c.inline || (
            i = a.datepicker._get(c, "showAnim"), j = a.datepicker._get(c, "duration"), c.dpDiv.zIndex(a(b).zIndex() + 1), a.datepicker._datepickerShowing = !0, a.effects && a.effects.effect[i]
            ? c.dpDiv.show(i, a.datepicker._get(c, "showOptions"), j)
            : c.dpDiv[i || "show"](
              i
              ? j
              : null),
          a.datepicker._shouldFocusInput(c) && c.input.focus(),
          a.datepicker._curInst = c))
        }
      },
      _updateDatepicker: function(b) {
        this.maxRows = 4,
        f = b,
        b.dpDiv.empty().append(this._generateHTML(b)),
        this._attachHandlers(b),
        b.dpDiv.find("." + this._dayOverClass + " a").mouseover();
        var c,
          d = this._getNumberOfMonths(b),
          e = d[1],
          g = 17;
        b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),
        e > 1 && b.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", g * e + "em"),
        b.dpDiv[(
            1 !== d[0] || 1 !== d[1]
            ? "add"
            : "remove") + "Class"]("ui-datepicker-multi"),
        b.dpDiv[(
            this._get(b, "isRTL")
            ? "add"
            : "remove") + "Class"]("ui-datepicker-rtl"),
        b === a.datepicker._curInst && a.datepicker._datepickerShowing && a.datepicker._shouldFocusInput(b) && b.input.focus(),
        b.yearshtml && (c = b.yearshtml, setTimeout(function() {
          c === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml),
          c = b.yearshtml = null
        }, 0))
      },
      _shouldFocusInput: function(a) {
        return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus")
      },
      _checkOffset: function(b, c, d) {
        var e = b.dpDiv.outerWidth(),
          f = b.dpDiv.outerHeight(),
          g = b.input
            ? b.input.outerWidth()
            : 0,
          h = b.input
            ? b.input.outerHeight()
            : 0,
          i = document.documentElement.clientWidth + (
            d
            ? 0
            : a(document).scrollLeft()),
          j = document.documentElement.clientHeight + (
            d
            ? 0
            : a(document).scrollTop());
        return c.left -= this._get(b, "isRTL")
          ? e - g
          : 0,
        c.left -= d && c.left === b.input.offset().left
          ? a(document).scrollLeft()
          : 0,
        c.top -= d && c.top === b.input.offset().top + h
          ? a(document).scrollTop()
          : 0,
        c.left -= Math.min(
          c.left, c.left + e > i && i > e
          ? Math.abs(c.left + e - i)
          : 0),
        c.top -= Math.min(
          c.top, c.top + f > j && j > f
          ? Math.abs(f + h)
          : 0),
        c
      },
      _findPos: function(b) {
        for (var c, d = this._getInst(b), e = this._get(d, "isRTL"); b && ("hidden" === b.type || 1 !== b.nodeType || a.expr.filters.hidden(b));)
          b = b[
            e
              ? "previousSibling"
              : "nextSibling"
          ];
        return c = a(b).offset(),
        [c.left, c.top]
      },
      _hideDatepicker: function(b) {
        var c,
          d,
          e,
          f,
          h = this._curInst;
        !h || b && h !== a.data(b, g) || this._datepickerShowing && (
          c = this._get(h, "showAnim"), d = this._get(h, "duration"), e = function() {
          a.datepicker._tidyDialog(h)
        }, a.effects && (a.effects.effect[c] || a.effects[c])
          ? h.dpDiv.hide(c, a.datepicker._get(h, "showOptions"), d, e)
          : h.dpDiv[
            "slideDown" === c
              ? "slideUp"
              : "fadeIn" === c
                ? "fadeOut"
                : "hide"
          ](
            c
            ? d
            : null,
          e),
        c || e(),
        this._datepickerShowing = !1,
        f = this._get(h, "onClose"),
        f && f.apply(
          h.input
          ? h.input[0]
          : null,
        [
          h.input
            ? h.input.val()
            : "",
          h
        ]),
        this._lastInput = null,
        this._inDialog && (this._dialogInput.css({position: "absolute", left: "0", top: "-100px"}), a.blockUI && (a.unblockUI(), a("body").append(this.dpDiv))),
        this._inDialog = !1)
      },
      _tidyDialog: function(a) {
        a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
      },
      _checkExternalClick: function(b) {
        if (a.datepicker._curInst) {
          var c = a(b.target),
            d = a.datepicker._getInst(c[0]);
          (c[0].id !== a.datepicker._mainDivId && 0 === c.parents("#" + a.datepicker._mainDivId).length && !c.hasClass(a.datepicker.markerClassName) && !c.closest("." + a.datepicker._triggerClass).length && a.datepicker._datepickerShowing && (!a.datepicker._inDialog || !a.blockUI) || c.hasClass(a.datepicker.markerClassName) && a.datepicker._curInst !== d) && a.datepicker._hideDatepicker()
        }
      },
      _adjustDate: function(b, c, d) {
        var e = a(b),
          f = this._getInst(e[0]);
        this._isDisabledDatepicker(e[0]) || (this._adjustInstDate(f, c + (
          "M" === d
          ? this._get(f, "showCurrentAtPos")
          : 0), d), this._updateDatepicker(f))
      },
      _gotoToday: function(b) {
        var c,
          d = a(b),
          e = this._getInst(d[0]);
        this._get(e, "gotoCurrent") && e.currentDay
          ? (e.selectedDay = e.currentDay, e.drawMonth = e.selectedMonth = e.currentMonth, e.drawYear = e.selectedYear = e.currentYear)
          : (c = new Date, e.selectedDay = c.getDate(), e.drawMonth = e.selectedMonth = c.getMonth(), e.drawYear = e.selectedYear = c.getFullYear()),
        this._notifyChange(e),
        this._adjustDate(d)
      },
      _selectMonthYear: function(b, c, d) {
        var e = a(b),
          f = this._getInst(e[0]);
        f["selected" + (
            "M" === d
            ? "Month"
            : "Year")] = f["draw" + (
            "M" === d
            ? "Month"
            : "Year")] = parseInt(c.options[c.selectedIndex].value, 10),
        this._notifyChange(f),
        this._adjustDate(e)
      },
      _selectDay: function(b, c, d, e) {
        var f,
          g = a(b);
        a(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(g[0]) || (f = this._getInst(g[0]), f.selectedDay = f.currentDay = a("a", e).html(), f.selectedMonth = f.currentMonth = c, f.selectedYear = f.currentYear = d, this._selectDate(b, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
      },
      _clearDate: function(b) {
        var c = a(b);
        this._selectDate(c, "")
      },
      _selectDate: function(b, c) {
        var d,
          e = a(b),
          f = this._getInst(e[0]);
        c = null != c
          ? c
          : this._formatDate(f),
        f.input && f.input.val(c),
        this._updateAlternate(f),
        d = this._get(f, "onSelect"),
        d
          ? d.apply(
            f.input
            ? f.input[0]
            : null,
          [c, f])
          : f.input && f.input.trigger("change"),
        f.inline
          ? this._updateDatepicker(f)
          : (this._hideDatepicker(), this._lastInput = f.input[0], "object" != typeof f.input[0] && f.input.focus(), this._lastInput = null)
      },
      _updateAlternate: function(b) {
        var c,
          d,
          e,
          f = this._get(b, "altField");
        f && (c = this._get(b, "altFormat") || this._get(b, "dateFormat"), d = this._getDate(b), e = this.formatDate(c, d, this._getFormatConfig(b)), a(f).each(function() {
          a(this).val(e)
        }))
      },
      noWeekends: function(a) {
        var b = a.getDay();
        return [
          b > 0 && 6 > b,
          ""
        ]
      },
      iso8601Week: function(a) {
        var b,
          c = new Date(a.getTime());
        return c.setDate(c.getDate() + 4 - (c.getDay() || 7)),
        b = c.getTime(),
        c.setMonth(0),
        c.setDate(1),
        Math.floor(Math.round((b - c) / 864e5) / 7) + 1
      },
      parseDate: function(b, c, d) {
        if (null == b || null == c)
          throw "Invalid arguments";
        if (
          c = "object" == typeof c
          ? c.toString()
          : c + "",
        "" === c)
          return null;
        var e,
          f,
          g,
          h,
          i = 0,
          j = (
            d
            ? d.shortYearCutoff
            : null) || this._defaults.shortYearCutoff,
          k = "string" != typeof j
            ? j
            : (new Date).getFullYear() % 100 + parseInt(j, 10),
          l = (
            d
            ? d.dayNamesShort
            : null) || this._defaults.dayNamesShort,
          m = (
            d
            ? d.dayNames
            : null) || this._defaults.dayNames,
          n = (
            d
            ? d.monthNamesShort
            : null) || this._defaults.monthNamesShort,
          o = (
            d
            ? d.monthNames
            : null) || this._defaults.monthNames,
          p = -1,
          q = -1,
          r = -1,
          s = -1,
          t = !1,
          u = function(a) {
            var c = e + 1 < b.length && b.charAt(e + 1) === a;
            return c && e++,
            c
          },
          v = function(a) {
            var b = u(a),
              d = "@" === a
                ? 14
                : "!" === a
                  ? 20
                  : "y" === a && b
                    ? 4
                    : "o" === a
                      ? 3
                      : 2,
              e = new RegExp("^\\d{1," + d + "}"),
              f = c.substring(i).match(e);
            if (!f)
              throw "Missing number at position " + i;
            return i += f[0].length,
            parseInt(f[0], 10)
          },
          w = function(b, d, e) {
            var f = -1,
              g = a.map(
                u(b)
                ? e
                : d,
              function(a, b) {
                return [
                  [b, a]
                ]
              }).sort(function(a, b) {
                return -(a[1].length - b[1].length)
              });
            if (a.each(g, function(a, b) {
              var d = b[1];
              return c.substr(i, d.length).toLowerCase() === d.toLowerCase()
                ? (f = b[0], i += d.length, !1)
                : void 0
            }), -1 !== f)
              return f + 1;
            throw "Unknown name at position " + i
          },
          x = function() {
            if (c.charAt(i) !== b.charAt(e))
              throw "Unexpected literal at position " + i;
            i++
          };
        for (e = 0; e < b.length; e++)
          if (t)
            "'" !== b.charAt(e) || u("'")
              ? x()
              : t = !1;
          else
            switch (b.charAt(e)) {
              case "d":
                r = v("d");
                break;
              case "D":
                w("D", l, m);
                break;
              case "o":
                s = v("o");
                break;
              case "m":
                q = v("m");
                break;
              case "M":
                q = w("M", n, o);
                break;
              case "y":
                p = v("y");
                break;
              case "@":
                h = new Date(v("@")),
                p = h.getFullYear(),
                q = h.getMonth() + 1,
                r = h.getDate();
                break;
              case "!":
                h = new Date((v("!") - this._ticksTo1970) / 1e4),
                p = h.getFullYear(),
                q = h.getMonth() + 1,
                r = h.getDate();
                break;
              case "'":
                u("'")
                  ? x()
                  : t = !0;
                break;
              default:
                x()
            }
          if (i < c.length && (g = c.substr(i), !/^\s+/.test(g)))
          throw "Extra/unparsed characters found in date: " + g;
        if (
          -1 === p
          ? p = (new Date).getFullYear()
          : 100 > p && (p += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (
            k >= p
            ? 0
            : -100)),
        s > -1)
          for (q = 1, r = s;;) {
            if (f = this._getDaysInMonth(p, q - 1), f >= r)
              break;
            q++,
            r -= f
          }
        if (h = this._daylightSavingAdjust(new Date(p, q - 1, r)), h.getFullYear() !== p || h.getMonth() + 1 !== q || h.getDate() !== r)
          throw "Invalid date";
        return h
      },
      ATOM: "yy-mm-dd",
      COOKIE: "D, dd M yy",
      ISO_8601: "yy-mm-dd",
      RFC_822: "D, d M y",
      RFC_850: "DD, dd-M-y",
      RFC_1036: "D, d M y",
      RFC_1123: "D, d M yy",
      RFC_2822: "D, d M yy",
      RSS: "D, d M y",
      TICKS: "!",
      TIMESTAMP: "@",
      W3C: "yy-mm-dd",
      _ticksTo1970: 24 *(718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
      formatDate: function(a, b, c) {
        if (!b)
          return "";
        var d,
          e = (
            c
            ? c.dayNamesShort
            : null) || this._defaults.dayNamesShort,
          f = (
            c
            ? c.dayNames
            : null) || this._defaults.dayNames,
          g = (
            c
            ? c.monthNamesShort
            : null) || this._defaults.monthNamesShort,
          h = (
            c
            ? c.monthNames
            : null) || this._defaults.monthNames,
          i = function(b) {
            var c = d + 1 < a.length && a.charAt(d + 1) === b;
            return c && d++,
            c
          },
          j = function(a, b, c) {
            var d = "" + b;
            if (i(a))
              for (; d.length < c;)
                d = "0" + d;
          return d
          },
          k = function(a, b, c, d) {
            return i(a)
              ? d[b]
              : c[b]
          },
          l = "",
          m = !1;
        if (b)
          for (d = 0; d < a.length; d++)
            if (m)
              "'" !== a.charAt(d) || i("'")
                ? l += a.charAt(d)
                : m = !1;
            else
              switch (a.charAt(d)) {
                case "d":
                  l += j("d", b.getDate(), 2);
                  break;
                case "D":
                  l += k("D", b.getDay(), e, f);
                  break;
                case "o":
                  l += j("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                  break;
                case "m":
                  l += j("m", b.getMonth() + 1, 2);
                  break;
                case "M":
                  l += k("M", b.getMonth(), g, h);
                  break;
                case "y":
                  l += i("y")
                    ? b.getFullYear()
                    : (
                      b.getYear() % 100 < 10
                      ? "0"
                      : "") + b.getYear() % 100;
                  break;
                case "@":
                  l += b.getTime();
                  break;
                case "!":
                  l += 1e4 * b.getTime() + this._ticksTo1970;
                  break;
                case "'":
                  i("'")
                    ? l += "'"
                    : m = !0;
                  break;
                default:
                  l += a.charAt(d)
              }
            return l
      },
      _possibleChars: function(a) {
        var b,
          c = "",
          d = !1,
          e = function(c) {
            var d = b + 1 < a.length && a.charAt(b + 1) === c;
            return d && b++,
            d
          };
        for (b = 0; b < a.length; b++)
          if (d)
            "'" !== a.charAt(b) || e("'")
              ? c += a.charAt(b)
              : d = !1;
          else
            switch (a.charAt(b)) {
              case "d":
              case "m":
              case "y":
              case "@":
                c += "0123456789";
                break;
              case "D":
              case "M":
                return null;
              case "'":
                e("'")
                  ? c += "'"
                  : d = !0;
                break;
              default:
                c += a.charAt(b)
            }
          return c
      },
      _get: function(a, c) {
        return a.settings[c] !== b
          ? a.settings[c]
          : this._defaults[c]
      },
      _setDateFromField: function(a, b) {
        if (a.input.val() !== a.lastVal) {
          var c = this._get(a, "dateFormat"),
            d = a.lastVal = a.input
              ? a.input.val()
              : null,
            e = this._getDefaultDate(a),
            f = e,
            g = this._getFormatConfig(a);
          try {
            f = this.parseDate(c, d, g) || e
          } catch (h) {
            d = b
              ? ""
              : d
          }
          a.selectedDay = f.getDate(),
          a.drawMonth = a.selectedMonth = f.getMonth(),
          a.drawYear = a.selectedYear = f.getFullYear(),
          a.currentDay = d
            ? f.getDate()
            : 0,
          a.currentMonth = d
            ? f.getMonth()
            : 0,
          a.currentYear = d
            ? f.getFullYear()
            : 0,
          this._adjustInstDate(a)
        }
      },
      _getDefaultDate: function(a) {
        return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
      },
      _determineDate: function(b, c, d) {
        var e = function(a) {
            var b = new Date;
            return b.setDate(b.getDate() + a),
            b
          },
          f = function(c) {
            try {
              return a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), c, a.datepicker._getFormatConfig(b))
            } catch (d) {}
            for (var e = (
              c.toLowerCase().match(/^c/)
              ? a.datepicker._getDate(b)
              : null) || new Date, f = e.getFullYear(), g = e.getMonth(), h = e.getDate(), i = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, j = i.exec(c); j;) {
              switch (j[2] || "d") {
                case "d":
                case "D":
                  h += parseInt(j[1], 10);
                  break;
                case "w":
                case "W":
                  h += 7 * parseInt(j[1], 10);
                  break;
                case "m":
                case "M":
                  g += parseInt(j[1], 10),
                  h = Math.min(h, a.datepicker._getDaysInMonth(f, g));
                  break;
                case "y":
                case "Y":
                  f += parseInt(j[1], 10),
                  h = Math.min(h, a.datepicker._getDaysInMonth(f, g))
              }
              j = i.exec(c)
            }
            return new Date(f, g, h)
          },
          g = null == c || "" === c
            ? d
            : "string" == typeof c
              ? f(c)
              : "number" == typeof c
                ? isNaN(c)
                  ? d
                  : e(c)
                : new Date(c.getTime());
        return g = g && "Invalid Date" === g.toString()
          ? d
          : g,
        g && (g.setHours(0), g.setMinutes(0), g.setSeconds(0), g.setMilliseconds(0)),
        this._daylightSavingAdjust(g)
      },
      _daylightSavingAdjust: function(a) {
        return a
          ? (a.setHours(
            a.getHours() > 12
            ? a.getHours() + 2
            : 0), a)
          : null
      },
      _setDate: function(a, b, c) {
        var d = !b,
          e = a.selectedMonth,
          f = a.selectedYear,
          g = this._restrictMinMax(a, this._determineDate(a, b, new Date));
        a.selectedDay = a.currentDay = g.getDate(),
        a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(),
        a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(),
        e === a.selectedMonth && f === a.selectedYear || c || this._notifyChange(a),
        this._adjustInstDate(a),
        a.input && a.input.val(
          d
          ? ""
          : this._formatDate(a))
      },
      _getDate: function(a) {
        var b = !a.currentYear || a.input && "" === a.input.val()
          ? null
          : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
        return b
      },
      _attachHandlers: function(b) {
        var c = this._get(b, "stepMonths"),
          d = "#" + b.id.replace(/\\\\/g, "\\");
        b.dpDiv.find("[data-handler]").map(function() {
          var b = {
            prev: function() {
              a.datepicker._adjustDate(d, -c, "M")
            },
            next: function() {
              a.datepicker._adjustDate(d, + c, "M")
            },
            hide: function() {
              a.datepicker._hideDatepicker()
            },
            today: function() {
              a.datepicker._gotoToday(d)
            },
            selectDay: function() {
              return a.datepicker._selectDay(d, + this.getAttribute("data-month"), + this.getAttribute("data-year"), this),
              !1
            },
            selectMonth: function() {
              return a.datepicker._selectMonthYear(d, this, "M"),
              !1
            },
            selectYear: function() {
              return a.datepicker._selectMonthYear(d, this, "Y"),
              !1
            }
          };
          a(this).bind(this.getAttribute("data-event"), b[this.getAttribute("data-handler")])
        })
      },
      _generateHTML: function(a) {
        var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u,
          v,
          w,
          x,
          y,
          z,
          A,
          B,
          C,
          D,
          E,
          F,
          G,
          H,
          I,
          J,
          K,
          L,
          M,
          N,
          O = new Date,
          P = this._daylightSavingAdjust(new Date(O.getFullYear(), O.getMonth(), O.getDate())),
          Q = this._get(a, "isRTL"),
          R = this._get(a, "showButtonPanel"),
          S = this._get(a, "hideIfNoPrevNext"),
          T = this._get(a, "navigationAsDateFormat"),
          U = this._getNumberOfMonths(a),
          V = this._get(a, "showCurrentAtPos"),
          W = this._get(a, "stepMonths"),
          X = 1 !== U[0] || 1 !== U[1],
          Y = this._daylightSavingAdjust(
            a.currentDay
            ? new Date(a.currentYear, a.currentMonth, a.currentDay)
            : new Date(9999, 9, 9)),
          Z = this._getMinMaxDate(a, "min"),
          $ = this._getMinMaxDate(a, "max"),
          _ = a.drawMonth - V,
          ab = a.drawYear;
        if (0 > _ && (_ += 12, ab--), $)
          for (
            b = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - U[0] * U[1] + 1, $.getDate())), b = Z && Z > b
            ? Z
            : b; this._daylightSavingAdjust(new Date(ab, _, 1)) > b;)
            _--,
            0 > _ && (_ = 11, ab--);
      for (
          a.drawMonth = _, a.drawYear = ab, c = this._get(a, "prevText"), c = T
          ? this.formatDate(c, this._daylightSavingAdjust(new Date(ab, _ - W, 1)), this._getFormatConfig(a))
          : c,
        d = this._canAdjustMonth(a, -1, ab, _)
          ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (
            Q
            ? "e"
            : "w") + "'>" + c + "</span></a>"
          : S
            ? ""
            : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (
              Q
              ? "e"
              : "w") + "'>" + c + "</span></a>",
        e = this._get(a, "nextText"),
        e = T
          ? this.formatDate(e, this._daylightSavingAdjust(new Date(ab, _ + W, 1)), this._getFormatConfig(a))
          : e,
        f = this._canAdjustMonth(a, 1, ab, _)
          ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (
            Q
            ? "w"
            : "e") + "'>" + e + "</span></a>"
          : S
            ? ""
            : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (
              Q
              ? "w"
              : "e") + "'>" + e + "</span></a>",
        g = this._get(a, "currentText"),
        h = this._get(a, "gotoCurrent") && a.currentDay
          ? Y
          : P,
        g = T
          ? this.formatDate(g, h, this._getFormatConfig(a))
          : g,
        i = a.inline
          ? ""
          : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") + "</button>",
        j = R
          ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (
            Q
            ? i
            : "") + (
            this._isInRange(a, h)
            ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + g + "</button>"
            : "") + (
            Q
            ? ""
            : i) + "</div>"
          : "",
        k = parseInt(this._get(a, "firstDay"), 10),
        k = isNaN(k)
          ? 0
          : k,
        l = this._get(a, "showWeek"),
        m = this._get(a, "dayNames"),
        n = this._get(a, "dayNamesMin"),
        o = this._get(a, "monthNames"),
        p = this._get(a, "monthNamesShort"),
        q = this._get(a, "beforeShowDay"),
        r = this._get(a, "showOtherMonths"),
        s = this._get(a, "selectOtherMonths"),
        t = this._getDefaultDate(a),
        u = "",
        w = 0; w < U[0]; w++) {
          for (x = "", this.maxRows = 4, y = 0; y < U[1]; y++) {
            if (z = this._daylightSavingAdjust(new Date(ab, _, a.selectedDay)), A = " ui-corner-all", B = "", X) {
              if (B += "<div class='ui-datepicker-group", U[1] > 1)
                switch (y) {
                  case 0:
                    B += " ui-datepicker-group-first",
                    A = " ui-corner-" + (
                      Q
                      ? "right"
                      : "left");
                    break;
                  case U[1] - 1:
                    B += " ui-datepicker-group-last",
                    A = " ui-corner-" + (
                      Q
                      ? "left"
                      : "right");
                    break;
                  default:
                    B += " ui-datepicker-group-middle",
                    A = ""
                }
              B += "'>"
            }
            for (
              B += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + A + "'>" + (
                /all|left/.test(A) && 0 === w
                ? Q
                  ? f
                  : d
                : "") + (
                /all|right/.test(A) && 0 === w
                ? Q
                  ? d
                  : f
                : "") + this._generateMonthYearHeader(a, _, ab, Z, $, w > 0 || y > 0, o, p) + "</div><table class='ui-datepicker-calendar'><thead><tr>", C = l
              ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>"
              : "",
            v = 0; 7 > v; v++)
              D = (v + k) % 7,
              C += "<th" + (
                (v + k + 6) % 7 >= 5
                ? " class='ui-datepicker-week-end'"
                : "") + "><span title='" + m[D] + "'>" + n[D] + "</span></th>";
            for (
              B += C + "</tr></thead><tbody>", E = this._getDaysInMonth(ab, _), ab === a.selectedYear && _ === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, E)), F = (this._getFirstDayOfMonth(ab, _) - k + 7) % 7, G = Math.ceil((F + E) / 7), H = X && this.maxRows > G
              ? this.maxRows
              : G,
            this.maxRows = H,
            I = this._daylightSavingAdjust(new Date(ab, _, 1 - F)),
            J = 0; H > J; J++) {
              for (
                B += "<tr>", K = l
                ? "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(I) + "</td>"
                : "",
              v = 0; 7 > v; v++)
                L = q
                  ? q.apply(
                    a.input
                    ? a.input[0]
                    : null,
                  [I])
                  : [
                    !0,
                    ""
                  ],
                M = I.getMonth() !== _,
                N = M && !s || !L[0] || Z && Z > I || $ && I > $,
                K += "<td class='" + (
                  (v + k + 6) % 7 >= 5
                  ? " ui-datepicker-week-end"
                  : "") + (
                  M
                  ? " ui-datepicker-other-month"
                  : "") + (
                  I.getTime() === z.getTime() && _ === a.selectedMonth && a._keyEvent || t.getTime() === I.getTime() && t.getTime() === z.getTime()
                  ? " " + this._dayOverClass
                  : "") + (
                  N
                  ? " " + this._unselectableClass + " ui-state-disabled"
                  : "") + (
                  M && !r
                  ? ""
                  : " " + L[1] + (
                    I.getTime() === Y.getTime()
                    ? " " + this._currentClass
                    : "") + (
                    I.getTime() === P.getTime()
                    ? " ui-datepicker-today"
                    : "")) + "'" + (
                  M && !r || !L[2]
                  ? ""
                  : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (
                  N
                  ? ""
                  : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (
                  M && !r
                  ? "&#xa0;"
                  : N
                    ? "<span class='ui-state-default'>" + I.getDate() + "</span>"
                    : "<a class='ui-state-default" + (
                      I.getTime() === P.getTime()
                      ? " ui-state-highlight"
                      : "") + (
                      I.getTime() === Y.getTime()
                      ? " ui-state-active"
                      : "") + (
                      M
                      ? " ui-priority-secondary"
                      : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>",
                I.setDate(I.getDate() + 1),
                I = this._daylightSavingAdjust(I);
              B += K + "</tr>"
            }
            _++,
            _ > 11 && (_ = 0, ab++),
            B += "</tbody></table>" + (
              X
              ? "</div>" + (
                U[0] > 0 && y === U[1] - 1
                ? "<div class='ui-datepicker-row-break'></div>"
                : "")
              : ""),
            x += B
          }
          u += x
        }
        return u += j,
        a._keyEvent = !1,
        u
      },
      _generateMonthYearHeader: function(a, b, c, d, e, f, g, h) {
        var i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = this._get(a, "changeMonth"),
          r = this._get(a, "changeYear"),
          s = this._get(a, "showMonthAfterYear"),
          t = "<div class='ui-datepicker-title'>",
          u = "";
        if (f || !q)
          u += "<span class='ui-datepicker-month'>" + g[b] + "</span>";
        else {
          for (i = d && d.getFullYear() === c, j = e && e.getFullYear() === c, u += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", k = 0; 12 > k; k++)
            (!i || k >= d.getMonth()) && (!j || k <= e.getMonth()) && (u += "<option value='" + k + "'" + (
              k === b
              ? " selected='selected'"
              : "") + ">" + h[k] + "</option>");
          u += "</select>"
        }
        if (s || (t += u + (
          !f && q && r
          ? ""
          : "&#xa0;")), !a.yearshtml)
          if (a.yearshtml = "", f || !r)
            t += "<span class='ui-datepicker-year'>" + c + "</span>";
          else {
            for (
              l = this._get(a, "yearRange").split(":"), m = (new Date).getFullYear(), n = function(a) {
              var b = a.match(/c[+\-].*/)
                ? c + parseInt(a.substring(1), 10)
                : a.match(/[+\-].*/)
                  ? m + parseInt(a, 10)
                  : parseInt(a, 10);
              return isNaN(b)
                ? m
                : b
            }, o = n(l[0]), p = Math.max(o, n(l[1] || "")), o = d
              ? Math.max(o, d.getFullYear())
              : o,
            p = e
              ? Math.min(p, e.getFullYear())
              : p,
            a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; p >= o; o++)
              a.yearshtml += "<option value='" + o + "'" + (
                o === c
                ? " selected='selected'"
                : "") + ">" + o + "</option>";
            a.yearshtml += "</select>",
            t += a.yearshtml,
            a.yearshtml = null
          }
        return t += this._get(a, "yearSuffix"),
        s && (t += (
          !f && q && r
          ? ""
          : "&#xa0;") + u),
        t += "</div>"
      },
      _adjustInstDate: function(a, b, c) {
        var d = a.drawYear + (
            "Y" === c
            ? b
            : 0),
          e = a.drawMonth + (
            "M" === c
            ? b
            : 0),
          f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + (
            "D" === c
            ? b
            : 0),
          g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
        a.selectedDay = g.getDate(),
        a.drawMonth = a.selectedMonth = g.getMonth(),
        a.drawYear = a.selectedYear = g.getFullYear(),
        ("M" === c || "Y" === c) && this._notifyChange(a)
      },
      _restrictMinMax: function(a, b) {
        var c = this._getMinMaxDate(a, "min"),
          d = this._getMinMaxDate(a, "max"),
          e = c && c > b
            ? c
            : b;
        return d && e > d
          ? d
          : e
      },
      _notifyChange: function(a) {
        var b = this._get(a, "onChangeMonthYear");
        b && b.apply(
          a.input
          ? a.input[0]
          : null,
        [
          a.selectedYear, a.selectedMonth + 1,
          a
        ])
      },
      _getNumberOfMonths: function(a) {
        var b = this._get(a, "numberOfMonths");
        return null == b
          ? [1, 1]
          : "number" == typeof b
            ? [1, b]
            : b
      },
      _getMinMaxDate: function(a, b) {
        return this._determineDate(a, this._get(a, b + "Date"), null)
      },
      _getDaysInMonth: function(a, b) {
        return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
      },
      _getFirstDayOfMonth: function(a, b) {
        return new Date(a, b, 1).getDay()
      },
      _canAdjustMonth: function(a, b, c, d) {
        var e = this._getNumberOfMonths(a),
          f = this._daylightSavingAdjust(new Date(c, d + (
            0 > b
            ? b
            : e[0] * e[1]), 1));
        return 0 > b && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())),
        this._isInRange(a, f)
      },
      _isInRange: function(a, b) {
        var c,
          d,
          e = this._getMinMaxDate(a, "min"),
          f = this._getMinMaxDate(a, "max"),
          g = null,
          h = null,
          i = this._get(a, "yearRange");
        return i && (c = i.split(":"), d = (new Date).getFullYear(), g = parseInt(c[0], 10), h = parseInt(c[1], 10), c[0].match(/[+\-].*/) && (g += d), c[1].match(/[+\-].*/) && (h += d)),
        (!e || b.getTime() >= e.getTime()) && (!f || b.getTime() <= f.getTime()) && (!g || b.getFullYear() >= g) && (!h || b.getFullYear() <= h)
      },
      _getFormatConfig: function(a) {
        var b = this._get(a, "shortYearCutoff");
        return b = "string" != typeof b
          ? b
          : (new Date).getFullYear() % 100 + parseInt(b, 10), {
          shortYearCutoff: b,
          dayNamesShort: this._get(a, "dayNamesShort"),
          dayNames: this._get(a, "dayNames"),
          monthNamesShort: this._get(a, "monthNamesShort"),
          monthNames: this._get(a, "monthNames")
        }
      },
      _formatDate: function(a, b, c, d) {
        b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
        var e = b
          ? "object" == typeof b
            ? b
            : this._daylightSavingAdjust(new Date(d, c, b))
          : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
        return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a))
      }
    }),
    a.fn.datepicker = function(b) {
      if (!this.length)
        return this;
      a.datepicker.initialized || (a(document).mousedown(a.datepicker._checkExternalClick), a.datepicker.initialized = !0),
      0 === a("#" + a.datepicker._mainDivId).length && a("body").append(a.datepicker.dpDiv);
      var c = Array.prototype.slice.call(arguments, 1);
      return "string" != typeof b || "isDisabled" !== b && "getDate" !== b && "widget" !== b
        ? "option" === b && 2 === arguments.length && "string" == typeof arguments[1]
          ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c))
          : this.each(function() {
            "string" == typeof b
              ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this].concat(c))
              : a.datepicker._attachDatepicker(this, b)
          })
        : a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c))
    },
    a.datepicker = new c,
    a.datepicker.initialized = !1,
    a.datepicker.uuid = (new Date).getTime(),
    a.datepicker.version = "1.10.4"
  }(jQuery),
  function() {
    "use strict";
    function a(a) {
      var b,
        c = [
          "Webkit", "Moz", "O", "ms"
        ],
        d = document.createElement("div"),
        e = a in d.style;
      if (!e)
        for (a = a.charAt(0).toUpperCase() + a.substr(1), b = 0; b < c.length && !(e = c[b] + a in d.style); b += 1)
        ;
        return e
    }
    var b;
    a("fontFeatureSettings") || (b = {
      previous: "&#xe602;",
      next: "&#xe603;",
      contact: "&#xe604;",
      menu: "&#xe605;",
      close: "&#xe60d;",
      search: "&#xe60e;",
      facebook: "&#xe60f;",
      linkedin: "&#xe610;",
      twitter: "&#xe611;",
      youtube: "&#xe612;",
      0: 0
    }, delete b[0], window.icomoonLiga = function(a) {
      var c,
        d,
        e,
        f,
        g;
      for (a = a || document.getElementsByTagName("*"), a.length || (a = [a]), e = 0; d = a[e], d; e += 1)
        if (c = d.className, /icon/.test(c) && (f = d.innerHTML, f && f.length > 1)) {
          for (g in b)
            b.hasOwnProperty(g) && (f = f.replace(new RegExp(g, "g"), b[g]));
          d.innerHTML = f
        }
      }, window.icomoonLiga())
  }(),
  function(a) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], a)
      : "undefined" != typeof exports
        ? module.exports = a(require("jquery"))
        : a(jQuery)
  }(function(a) {
    "use strict";
    var b = window.Slick || {};
    b = function() {
      function b(b, d) {
        var e,
          f,
          g = this;
        if (g.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: a(b),
          appendDots: a(b),
          arrows: !0,
          asNavFor: null,
          prevArrow: '<button type="button" data-role="none" class="slick-prev icon">previous</button>',
          nextArrow: '<button type="button" data-role="none" class="slick-next icon">next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function(a, b) {
            return '<button type="button" data-role="none">' + (
            b + 1) + "</button>"
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          fade: !1,
          focusOnSelect: !1,
          infinite: !0,
          lazyLoad: "ondemand",
          onBeforeChange: null,
          onAfterChange: null,
          onInit: null,
          onReInit: null,
          pauseOnHover: !0,
          pauseOnDotsHover: !1,
          responsive: null,
          rtl: !1,
          slide: "div",
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300,
          swipe: !0,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          vertical: !1,
          waitForAnimate: !0
        }, g.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentSlide: 0,
          currentLeft: null,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          $list: null,
          touchObject: {},
          transformsEnabled: !1
        }, a.extend(g, g.initials), g.activeBreakpoint = null, g.animType = null, g.animProp = null, g.breakpoints = [], g.breakpointSettings = [], g.cssTransitions = !1, g.paused = !1, g.positionProp = null, g.$slider = a(b), g.$slidesCache = null, g.transformType = null, g.transitionType = null, g.windowWidth = 0, g.windowTimer = null, g.options = a.extend({}, g.defaults, d), g.originalSettings = g.options, e = g.options.responsive || null, e && e.length > -1) {
          for (f in e)
            e.hasOwnProperty(f) && (g.breakpoints.push(e[f].breakpoint), g.breakpointSettings[e[f].breakpoint] = e[f].settings);
          g.breakpoints.sort(function(a, b) {
            return b - a
          })
        }
        g.autoPlay = a.proxy(g.autoPlay, g),
        g.autoPlayClear = a.proxy(g.autoPlayClear, g),
        g.changeSlide = a.proxy(g.changeSlide, g),
        g.selectHandler = a.proxy(g.selectHandler, g),
        g.setPosition = a.proxy(g.setPosition, g),
        g.swipeHandler = a.proxy(g.swipeHandler, g),
        g.dragHandler = a.proxy(g.dragHandler, g),
        g.keyHandler = a.proxy(g.keyHandler, g),
        g.autoPlayIterator = a.proxy(g.autoPlayIterator, g),
        g.instanceUid = c++,
        g.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
        g.init()
      }
      var c = 0;
      return b
    }(),
    b.prototype.addSlide = function(b, c, d) {
      var e = this;
      if ("boolean" == typeof c)
        d = c,
        c = null;
      else if (0 > c || c >= e.slideCount)
        return !1;
      e.unload(),
      "number" == typeof c
        ? 0 === c && 0 === e.$slides.length
          ? a(b).appendTo(e.$slideTrack)
          : d
            ? a(b).insertBefore(e.$slides.eq(c))
            : a(b).insertAfter(e.$slides.eq(c))
        : d === !0
          ? a(b).prependTo(e.$slideTrack)
          : a(b).appendTo(e.$slideTrack),
      e.$slides = e.$slideTrack.children(this.options.slide),
      e.$slideTrack.children(this.options.slide).detach(),
      e.$slideTrack.append(e.$slides),
      e.$slides.each(function(b, c) {
        a(c).attr("index", b)
      }),
      e.$slidesCache = e.$slides,
      e.reinit()
    },
    b.prototype.animateSlide = function(b, c) {
      var d = {},
        e = this;
      if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
        var f = e.$slides.eq(e.currentSlide).outerHeight(!0);
        e.$list.animate({
          height: f
        }, e.options.speed)
      }
      e.options.rtl === !0 && e.options.vertical === !1 && (b = -b),
      e.transformsEnabled === !1
        ? e.options.vertical === !1
          ? e.$slideTrack.animate({
            left: b
          }, e.options.speed, e.options.easing, c)
          : e.$slideTrack.animate({
            top: b
          }, e.options.speed, e.options.easing, c)
        : e.cssTransitions === !1
          ? a({animStart: e.currentLeft}).animate({
            animStart: b
          }, {
            duration: e.options.speed,
            easing: e.options.easing,
            step: function(a) {
              e.options.vertical === !1
                ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d))
                : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
            },
            complete: function() {
              c && c.call()
            }
          })
          : (
            e.applyTransition(), d[e.animType] = e.options.vertical === !1
            ? "translate3d(" + b + "px, 0px, 0px)"
            : "translate3d(0px," + b + "px, 0px)",
          e.$slideTrack.css(d),
          c && setTimeout(function() {
            e.disableTransition(),
            c.call()
          }, e.options.speed))
    },
    b.prototype.applyTransition = function(a) {
      var b = this,
        c = {};
      c[b.transitionType] = b.options.fade === !1
        ? b.transformType + " " + b.options.speed + "ms " + b.options.cssEase
        : "opacity " + b.options.speed + "ms " + b.options.cssEase,
      b.options.fade === !1
        ? b.$slideTrack.css(c)
        : b.$slides.eq(a).css(c)
    },
    b.prototype.autoPlay = function() {
      var a = this;
      a.autoPlayTimer && clearInterval(a.autoPlayTimer),
      a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
    },
    b.prototype.autoPlayClear = function() {
      var a = this;
      a.autoPlayTimer && clearInterval(a.autoPlayTimer)
    },
    b.prototype.autoPlayIterator = function() {
      var b = this,
        c = null != b.options.asNavFor
          ? a(b.options.asNavFor).getSlick()
          : null;
      b.options.infinite === !1
        ? 1 === b.direction
          ? (b.currentSlide + 1 === b.slideCount - 1 && (b.direction = 0), b.slideHandler(b.currentSlide + b.options.slidesToScroll), null != c && c.slideHandler(c.currentSlide + c.options.slidesToScroll))
          : (b.currentSlide - 1 === 0 && (b.direction = 1), b.slideHandler(b.currentSlide - b.options.slidesToScroll), null != c && c.slideHandler(c.currentSlide - c.options.slidesToScroll))
        : (b.slideHandler(b.currentSlide + b.options.slidesToScroll), null != c && c.slideHandler(c.currentSlide + c.options.slidesToScroll))
    },
    b.prototype.buildArrows = function() {
      var b = this;
      b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow = a(b.options.prevArrow), b.$nextArrow = a(b.options.nextArrow), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.appendTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled"))
    },
    b.prototype.buildDots = function() {
      var b,
        c,
        d = this;
      if (d.options.dots === !0 && d.slideCount > d.options.slidesToShow) {
        for (c = '<ul class="' + d.options.dotsClass + '">', b = 0; b <= d.getDotCount(); b += 1)
          c += "<li>" + d.options.customPaging.call(this, d, b) + "</li>";
        c += "</ul>",
        d.$dots = a(c).appendTo(d.options.appendDots),
        d.$dots.find("li").first().addClass("slick-active")
      }
    },
    b.prototype.buildOut = function() {
      var b = this;
      b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
      b.slideCount = b.$slides.length,
      b.$slides.each(function(b, c) {
        a(c).attr("index", b)
      }),
      b.$slidesCache = b.$slides,
      b.$slider.addClass("slick-slider"),
      b.$slideTrack = 0 === b.slideCount
        ? a('<div class="slick-track"/>').appendTo(b.$slider)
        : b.$slides.wrapAll('<div class="slick-track"/>').parent(),
      b.$list = b.$slideTrack.wrap('<div class="slick-list"/>').parent(),
      b.$slideTrack.css("opacity", 0),
      b.options.centerMode === !0 && (b.options.slidesToScroll = 1, b.options.slidesToShow % 2 === 0 && (b.options.slidesToShow = 3)),
      a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"),
      b.setupInfinite(),
      b.buildArrows(),
      b.buildDots(),
      b.updateDots(),
      b.options.accessibility === !0 && b.$list.prop("tabIndex", 0),
      b.setSlideClasses(
        "number" == typeof this.currentSlide
        ? this.currentSlide
        : 0),
      b.options.draggable === !0 && b.$list.addClass("draggable")
    },
    b.prototype.checkResponsive = function() {
      var b,
        c,
        d = this;
      if (d.originalSettings.responsive && d.originalSettings.responsive.length > -1 && null !== d.originalSettings.responsive) {
        c = null;
        for (b in d.breakpoints)
          d.breakpoints.hasOwnProperty(b) && a(window).width() < d.breakpoints[b] && (c = d.breakpoints[b]);
        null !== c
          ? null !== d.activeBreakpoint
            ? c !== d.activeBreakpoint && (d.activeBreakpoint = c, d.options = a.extend({}, d.options, d.breakpointSettings[c]), d.refresh())
            : (d.activeBreakpoint = c, d.options = a.extend({}, d.options, d.breakpointSettings[c]), d.refresh())
          : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = a.extend({}, d.options, d.originalSettings), d.refresh())
      }
    },
    b.prototype.changeSlide = function(b) {
      var c = this,
        d = a(b.target),
        e = null != c.options.asNavFor
          ? a(c.options.asNavFor).getSlick()
          : null;
      switch (d.is("a") && b.preventDefault(), b.data.message) {
        case "previous":
          c.slideCount > c.options.slidesToShow && (c.slideHandler(c.currentSlide - c.options.slidesToScroll), null != e && e.slideHandler(e.currentSlide - e.options.slidesToScroll));
          break;
        case "next":
          c.slideCount > c.options.slidesToShow && (c.slideHandler(c.currentSlide + c.options.slidesToScroll), null != e && e.slideHandler(e.currentSlide + e.options.slidesToScroll));
          break;
        case "index":
          var f = 0 === b.data.index
            ? 0
            : b.data.index || a(b.target).parent().index() * c.options.slidesToScroll;
          c.slideHandler(f),
          null != e && e.slideHandler(f);
        default:
          return !1
      }
    },
    b.prototype.destroy = function() {
      var b = this;
      b.autoPlayClear(),
      b.touchObject = {},
      a(".slick-cloned", b.$slider).remove(),
      b.$dots && b.$dots.remove(),
      b.$prevArrow && (b.$prevArrow.remove(), b.$nextArrow.remove()),
      b.$slides.parent().hasClass("slick-track") && b.$slides.unwrap().unwrap(),
      b.$slides.removeClass("slick-slide slick-active slick-visible").css("width", ""),
      b.$slider.removeClass("slick-slider"),
      b.$slider.removeClass("slick-initialized"),
      b.$list.off(".slick"),
      a(window).off(".slick-" + b.instanceUid),
      a(document).off(".slick-" + b.instanceUid)
    },
    b.prototype.disableTransition = function(a) {
      var b = this,
        c = {};
      c[b.transitionType] = "",
      b.options.fade === !1
        ? b.$slideTrack.css(c)
        : b.$slides.eq(a).css(c)
    },
    b.prototype.fadeSlide = function(a, b) {
      var c = this;
      c.cssTransitions === !1
        ? (c.$slides.eq(a).css({zIndex: 1e3}), c.$slides.eq(a).animate({
          opacity: 1
        }, c.options.speed, c.options.easing, b))
        : (c.applyTransition(a), c.$slides.eq(a).css({opacity: 1, zIndex: 1e3}), b && setTimeout(function() {
          c.disableTransition(a),
          b.call()
        }, c.options.speed))
    },
    b.prototype.filterSlides = function(a) {
      var b = this;
      null !== a && (b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
    },
    b.prototype.getCurrent = function() {
      var a = this;
      return a.currentSlide
    },
    b.prototype.getDotCount = function() {
      var a,
        b = this,
        c = 0,
        d = 0,
        e = 0;
      for (
        a = b.options.infinite === !0
        ? b.slideCount + b.options.slidesToShow - b.options.slidesToScroll
        : b.slideCount; a > c;)
        e++,
        d += b.options.slidesToScroll,
        c = d + b.options.slidesToShow;
      return e
    },
    b.prototype.getLeft = function(a) {
      var b,
        c,
        d = this,
        e = 0;
      return d.slideOffset = 0,
      c = d.$slides.first().outerHeight(),
      d.options.infinite === !0
        ? (d.slideCount > d.options.slidesToShow && (d.slideOffset = d.slideWidth * d.options.slidesToShow * -1, e = c * d.options.slidesToShow * -1), d.slideCount % d.options.slidesToScroll !== 0 && a + d.options.slidesToScroll > d.slideCount && d.slideCount > d.options.slidesToShow && (d.slideOffset = d.slideCount % d.options.slidesToShow * d.slideWidth * -1, e = d.slideCount % d.options.slidesToShow * c * -1))
        : d.slideCount % d.options.slidesToShow !== 0 && a + d.options.slidesToScroll > d.slideCount && d.slideCount > d.options.slidesToShow && (d.slideOffset = d.options.slidesToShow * d.slideWidth - d.slideCount % d.options.slidesToShow * d.slideWidth, e = d.slideCount % d.options.slidesToShow * c),
      d.options.centerMode === !0 && d.options.infinite === !0
        ? d.slideOffset += d.slideWidth * Math.floor(d.options.slidesToShow / 2) - d.slideWidth
        : d.options.centerMode === !0 && (d.slideOffset += d.slideWidth * Math.floor(d.options.slidesToShow / 2)),
      b = d.options.vertical === !1
        ? a * d.slideWidth * -1 + d.slideOffset
        : a * c * -1 + e
    },
    b.prototype.init = function() {
      var b = this;
      a(b.$slider).hasClass("slick-initialized") || (a(b.$slider).addClass("slick-initialized"), b.buildOut(), b.setProps(), b.startLoad(), b.loadSlider(), b.initializeEvents(), b.checkResponsive()),
      null !== b.options.onInit && b.options.onInit.call(this, b)
    },
    b.prototype.initArrowEvents = function() {
      var a = this;
      a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
        message: "previous"
      }, a.changeSlide), a.$nextArrow.on("click.slick", {
        message: "next"
      }, a.changeSlide))
    },
    b.prototype.initDotEvents = function() {
      var b = this;
      b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
        message: "index"
      }, b.changeSlide),
      b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", b.autoPlayClear).on("mouseleave.slick", b.autoPlay)
    },
    b.prototype.initializeEvents = function() {
      var b = this;
      b.initArrowEvents(),
      b.initDotEvents(),
      b.$list.on("touchstart.slick mousedown.slick", {
        action: "start"
      }, b.swipeHandler),
      b.$list.on("touchmove.slick mousemove.slick", {
        action: "move"
      }, b.swipeHandler),
      b.$list.on("touchend.slick mouseup.slick", {
        action: "end"
      }, b.swipeHandler),
      b.$list.on("touchcancel.slick mouseleave.slick", {
        action: "end"
      }, b.swipeHandler),
      b.options.pauseOnHover === !0 && b.options.autoplay === !0 && (b.$list.on("mouseenter.slick", b.autoPlayClear), b.$list.on("mouseleave.slick", b.autoPlay)),
      b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler),
      b.options.focusOnSelect === !0 && a(b.options.slide, b.$slideTrack).on("click.slick", b.selectHandler),
      a(window).on("orientationchange.slick.slick-" + b.instanceUid, function() {
        b.checkResponsive(),
        b.setPosition()
      }),
      a(window).on("resize.slick.slick-" + b.instanceUid, function() {
        a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
          b.windowWidth = a(window).width(),
          b.checkResponsive(),
          b.setPosition()
        }, 50))
      }),
      a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition),
      a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
    },
    b.prototype.initUI = function() {
      var a = this;
      a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()),
      a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(),
      a.options.autoplay === !0 && a.autoPlay()
    },
    b.prototype.keyHandler = function(a) {
      var b = this;
      37 === a.keyCode
        ? b.changeSlide({
          data: {
            message: "previous"
          }
        })
        : 39 === a.keyCode && b.changeSlide({
          data: {
            message: "next"
          }
        })
    },
    b.prototype.lazyLoad = function() {
      function b(b) {
        a("img[data-lazy]", b).each(function() {
          var b = a(this),
            c = a(this).attr("data-lazy") + "?" + (
            new Date).getTime();
          b.load(function() {
            b.animate({
              opacity: 1
            }, 200)
          }).css({opacity: 0}).attr("src", c).removeAttr("data-lazy").removeClass("slick-loading")
        })
      }
      var c,
        d,
        e,
        f,
        g = this;
      g.options.centerMode === !0
        ? g.options.infinite === !0
          ? (e = g.currentSlide + (g.options.slidesToShow / 2 + 1), f = e + g.options.slidesToShow + 2)
          : (e = Math.max(0, g.currentSlide - (g.options.slidesToShow / 2 + 1)), f = 2 + (g.options.slidesToShow / 2 + 1) + g.currentSlide)
        : (
          e = g.options.infinite
          ? g.options.slidesToShow + g.currentSlide
          : g.currentSlide,
        f = e + g.options.slidesToShow,
        g.options.fade === !0 && (e > 0 && e--, f <= g.slideCount && f++)),
      c = g.$slider.find(".slick-slide").slice(e, f),
      b(c),
      g.slideCount <= g.options.slidesToShow
        ? (d = g.$slider.find(".slick-slide"), b(d))
        : g.currentSlide >= g.slideCount - g.options.slidesToShow
          ? (d = g.$slider.find(".slick-cloned").slice(0, g.options.slidesToShow), b(d))
          : 0 === g.currentSlide && (d = g.$slider.find(".slick-cloned").slice(-1 * g.options.slidesToShow), b(d))
    },
    b.prototype.loadSlider = function() {
      var a = this;
      a.setPosition(),
      a.$slideTrack.css({opacity: 1}),
      a.$slider.removeClass("slick-loading"),
      a.initUI(),
      "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
    },
    b.prototype.postSlide = function(a) {
      var b = this;
      null !== b.options.onAfterChange && b.options.onAfterChange.call(this, b, a),
      b.animating = !1,
      b.setPosition(),
      b.swipeLeft = null,
      b.options.autoplay === !0 && b.paused === !1 && b.autoPlay()
    },
    b.prototype.progressiveLazyLoad = function() {
      var b,
        c,
        d = this;
      b = a("img[data-lazy]").length,
      b > 0 && (c = a("img[data-lazy]", d.$slider).first(), c.attr("src", c.attr("data-lazy")).removeClass("slick-loading").load(function() {
        c.removeAttr("data-lazy"),
        d.progressiveLazyLoad()
      }).error(function() {
        c.removeAttr("data-lazy"),
        d.progressiveLazyLoad()
      }))
    },
    b.prototype.refresh = function() {
      var b = this,
        c = b.currentSlide;
      b.destroy(),
      a.extend(b, b.initials),
      b.currentSlide = c,
      b.init()
    },
    b.prototype.reinit = function() {
      var b = this;
      b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"),
      b.slideCount = b.$slides.length,
      b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll),
      b.setProps(),
      b.setupInfinite(),
      b.buildArrows(),
      b.updateArrows(),
      b.initArrowEvents(),
      b.buildDots(),
      b.updateDots(),
      b.initDotEvents(),
      b.options.focusOnSelect === !0 && a(b.options.slide, b.$slideTrack).on("click.slick", b.selectHandler),
      b.setSlideClasses(0),
      b.setPosition(),
      null !== b.options.onReInit && b.options.onReInit.call(this, b)
    },
    b.prototype.removeSlide = function(a, b) {
      var c = this;
      return "boolean" == typeof a
        ? (
          b = a, a = b === !0
          ? 0
          : c.slideCount - 1)
        : a = b === !0
          ? --a
          : a,
      c.slideCount < 1 || 0 > a || a > c.slideCount - 1
        ? !1
        : (c.unload(), c.$slideTrack.children(this.options.slide).eq(a).remove(), c.$slides = c.$slideTrack.children(this.options.slide), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.append(c.$slides), c.$slidesCache = c.$slides, void c.reinit())
    },
    b.prototype.setCSS = function(a) {
      var b,
        c,
        d = this,
        e = {};
      d.options.rtl === !0 && (a = -a),
      b = "left" == d.positionProp
        ? a + "px"
        : "0px",
      c = "top" == d.positionProp
        ? a + "px"
        : "0px",
      e[d.positionProp] = a,
      d.transformsEnabled === !1
        ? d.$slideTrack.css(e)
        : (
          e = {}, d.cssTransitions === !1
          ? (e[d.animType] = "translate(" + b + ", " + c + ")", d.$slideTrack.css(e))
          : (e[d.animType] = "translate3d(" + b + ", " + c + ", 0px)", d.$slideTrack.css(e)))
    },
    b.prototype.setDimensions = function() {
      var a = this;
      a.options.vertical === !1
        ? a.options.centerMode === !0 && a.$list.css({
          padding: "0px " + a.options.centerPadding
        })
        : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
          padding: a.options.centerPadding + " 0px"
        })),
      a.listWidth = a.$list.width(),
      a.listHeight = a.$list.height(),
      a.options.vertical === !1
        ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length)))
        : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
      var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
      a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
    },
    b.prototype.setFade = function() {
      var b,
        c = this;
      c.$slides.each(function(d, e) {
        b = c.slideWidth * d * -1,
        a(e).css({position: "relative", left: b, top: 0, zIndex: 800, opacity: 0})
      }),
      c.$slides.eq(c.currentSlide).css({zIndex: 900, opacity: 1})
    },
    b.prototype.setHeight = function() {
      var a = this;
      if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
        var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
        a.$list.css("height", b)
      }
    },
    b.prototype.setPosition = function() {
      var a = this;
      a.setDimensions(),
      a.setHeight(),
      a.options.fade === !1
        ? a.setCSS(a.getLeft(a.currentSlide))
        : a.setFade()
    },
    b.prototype.setProps = function() {
      var a = this,
        b = document.body.style;
      a.positionProp = a.options.vertical === !0
        ? "top"
        : "left",
      "top" === a.positionProp
        ? a.$slider.addClass("slick-vertical")
        : a.$slider.removeClass("slick-vertical"),
      (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0),
      void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)),
      void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)),
      void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)),
      void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)),
      void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"),
      a.transformsEnabled = null !== a.animType && a.animType !== !1
    },
    b.prototype.setSlideClasses = function(a) {
      var b,
        c,
        d,
        e,
        f = this;
      f.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"),
      c = f.$slider.find(".slick-slide"),
      f.options.centerMode === !0
        ? (b = Math.floor(f.options.slidesToShow / 2), f.options.infinite === !0 && (
          a >= b && a <= f.slideCount - 1 - b
          ? f.$slides.slice(a - b, a + b + 1).addClass("slick-active")
          : (d = f.options.slidesToShow + a, c.slice(d - b + 1, d + b + 2).addClass("slick-active")),
        0 === a
          ? c.eq(c.length - 1 - f.options.slidesToShow).addClass("slick-center")
          : a === f.slideCount - 1 && c.eq(f.options.slidesToShow).addClass("slick-center")), f.$slides.eq(a).addClass("slick-center"))
        : a >= 0 && a <= f.slideCount - f.options.slidesToShow
          ? f.$slides.slice(a, a + f.options.slidesToShow).addClass("slick-active")
          : c.length <= f.options.slidesToShow
            ? c.addClass("slick-active")
            : (
              e = f.slideCount % f.options.slidesToShow, d = f.options.infinite === !0
              ? f.options.slidesToShow + a
              : a,
            f.options.slidesToShow == f.options.slidesToScroll && f.slideCount - a < f.options.slidesToShow
              ? c.slice(d - (f.options.slidesToShow - e), d + e).addClass("slick-active")
              : c.slice(d, d + f.options.slidesToShow).addClass("slick-active")),
      "ondemand" === f.options.lazyLoad && f.lazyLoad()
    },
    b.prototype.setupInfinite = function() {
      var b,
        c,
        d,
        e = this;
      if ((e.options.fade === !0 || e.options.vertical === !0) && (e.options.centerMode = !1), e.options.infinite === !0 && e.options.fade === !1 && (c = null, e.slideCount > e.options.slidesToShow)) {
        for (
          d = e.options.centerMode === !0
          ? e.options.slidesToShow + 1
          : e.options.slidesToShow,
        b = e.slideCount; b > e.slideCount - d; b -= 1)
          c = b - 1,
          a(e.$slides[c]).clone(!0).attr("id", "").attr("index", c - e.slideCount).prependTo(e.$slideTrack).addClass("slick-cloned");
        for (b = 0; d > b; b += 1)
          c = b,
          a(e.$slides[c]).clone(!0).attr("id", "").attr("index", c + e.slideCount).appendTo(e.$slideTrack).addClass("slick-cloned");
        e.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
          a(this).attr("id", "")
        })
      }
    },
    b.prototype.selectHandler = function(b) {
      var c = this,
        d = null != c.options.asNavFor
          ? a(c.options.asNavFor).getSlick()
          : null,
        e = parseInt(a(b.target).closest(".slick-slide").attr("index"));
      if (e || (e = 0), !(c.slideCount <= c.options.slidesToShow) && (c.slideHandler(e), null != d)) {
        if (d.slideCount <= d.options.slidesToShow)
          return;
        d.slideHandler(e)
      }
    },
    b.prototype.slideHandler = function(a) {
      var b,
        c,
        d,
        e,
        f = null,
        g = this;
      return g.animating === !0 && g.options.waitForAnimate === !0
        ? !1
        : (
          b = a, f = g.getLeft(b), d = g.getLeft(g.currentSlide), e = g.slideCount % g.options.slidesToScroll !== 0
          ? g.options.slidesToScroll
          : 0,
        g.currentLeft = null === g.swipeLeft
          ? d
          : g.swipeLeft,
        g.options.infinite === !1 && g.options.centerMode === !1 && (0 > a || a > g.slideCount - g.options.slidesToShow + e)
          ? (g.options.fade === !1 && (b = g.currentSlide, g.animateSlide(d, function() {
            g.postSlide(b)
          })), !1)
          : g.options.infinite === !1 && g.options.centerMode === !0 && (0 > a || a > g.slideCount - g.options.slidesToScroll)
            ? (g.options.fade === !1 && (b = g.currentSlide, g.animateSlide(d, function() {
              g.postSlide(b)
            })), !1)
            : (
              g.options.autoplay === !0 && clearInterval(g.autoPlayTimer), c = 0 > b
              ? g.slideCount % g.options.slidesToScroll !== 0
                ? g.slideCount - g.slideCount % g.options.slidesToScroll
                : g.slideCount - g.options.slidesToScroll
              : b > g.slideCount - 1
                ? 0
                : b,
            g.animating = !0,
            null !== g.options.onBeforeChange && a !== g.currentSlide && g.options.onBeforeChange.call(this, g, g.currentSlide, c),
            g.currentSlide = c,
            g.setSlideClasses(g.currentSlide),
            g.updateDots(),
            g.updateArrows(),
            g.options.fade === !0
              ? (g.fadeSlide(c, function() {
                g.postSlide(c)
              }), !1)
              : void g.animateSlide(f, function() {
                g.postSlide(c)
              })))
    },
    b.prototype.startLoad = function() {
      var a = this;
      a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()),
      a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(),
      a.$slider.addClass("slick-loading")
    },
    b.prototype.swipeDirection = function() {
      var a,
        b,
        c,
        d,
        e = this;
      return a = e.touchObject.startX - e.touchObject.curX,
      b = e.touchObject.startY - e.touchObject.curY,
      c = Math.atan2(b, a),
      d = Math.round(180 * c / Math.PI),
      0 > d && (d = 360 - Math.abs(d)),
      45 >= d && d >= 0
        ? "left"
        : 360 >= d && d >= 315
          ? "left"
          : d >= 135 && 225 >= d
            ? "right"
            : "vertical"
    },
    b.prototype.swipeEnd = function(b) {
      var c = this,
        d = null != c.options.asNavFor
          ? a(c.options.asNavFor).getSlick()
          : null;
      if (c.dragging = !1, void 0 === c.touchObject.curX)
        return !1;
      if (c.touchObject.swipeLength >= c.touchObject.minSwipe)
        switch (a(b.target).on("click.slick", function(b) {
          b.stopImmediatePropagation(),
          b.stopPropagation(),
          b.preventDefault(),
          a(b.target).off("click.slick")
        }), c.swipeDirection()) {
          case "left":
            c.slideHandler(c.currentSlide + c.options.slidesToScroll),
            null != d && d.slideHandler(d.currentSlide + d.options.slidesToScroll),
            c.touchObject = {};
            break;
          case "right":
            c.slideHandler(c.currentSlide - c.options.slidesToScroll),
            null != d && d.slideHandler(d.currentSlide - d.options.slidesToScroll),
            c.touchObject = {}
        }
      else
        c.touchObject.startX !== c.touchObject.curX && (c.slideHandler(c.currentSlide), null != d && d.slideHandler(d.currentSlide), c.touchObject = {})
    },
    b.prototype.swipeHandler = function(a) {
      var b = this;
      if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse")))
        switch (
          b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches
          ? a.originalEvent.touches.length
          : 1,
        b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold,
        a.data.action) {
          case "start":
            b.swipeStart(a);
            break;
          case "move":
            b.swipeMove(a);
            break;
          case "end":
            b.swipeEnd(a)
        }
      },
    b.prototype.swipeMove = function(a) {
      var b,
        c,
        d,
        e,
        f = this;
      return e = void 0 !== a.originalEvent
        ? a.originalEvent.touches
        : null,
      b = f.getLeft(f.currentSlide),
      !f.dragging || e && 1 !== e.length
        ? !1
        : (
          f.touchObject.curX = void 0 !== e
          ? e[0].pageX
          : a.clientX,
        f.touchObject.curY = void 0 !== e
          ? e[0].pageY
          : a.clientY,
        f.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(f.touchObject.curX - f.touchObject.startX, 2))),
        c = f.swipeDirection(),
        "vertical" !== c
          ? (
            void 0 !== a.originalEvent && f.touchObject.swipeLength > 4 && a.preventDefault(), d = f.touchObject.curX > f.touchObject.startX
            ? 1
            : -1,
          f.swipeLeft = f.options.vertical === !1
            ? b + f.touchObject.swipeLength * d
            : b + f.touchObject.swipeLength * (f.$list.height() / f.listWidth) * d,
          f.options.fade === !0 || f.options.touchMove === !1
            ? !1
            : f.animating === !0
              ? (f.swipeLeft = null, !1)
              : void f.setCSS(f.swipeLeft))
          : void 0)
    },
    b.prototype.swipeStart = function(a) {
      var b,
        c = this;
      return 1 !== c.touchObject.fingerCount || c.slideCount <= c.options.slidesToShow
        ? (c.touchObject = {}, !1)
        : (
          void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (b = a.originalEvent.touches[0]), c.touchObject.startX = c.touchObject.curX = void 0 !== b
          ? b.pageX
          : a.clientX,
        c.touchObject.startY = c.touchObject.curY = void 0 !== b
          ? b.pageY
          : a.clientY,
        void(c.dragging = !0))
    },
    b.prototype.unfilterSlides = function() {
      var a = this;
      null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
    },
    b.prototype.unload = function() {
      var b = this;
      a(".slick-cloned", b.$slider).remove(),
      b.$dots && b.$dots.remove(),
      b.$prevArrow && (b.$prevArrow.remove(), b.$nextArrow.remove()),
      b.$slides.removeClass("slick-slide slick-active slick-visible").css("width", "")
    },
    b.prototype.updateArrows = function() {
      var a = this;
      a.options.arrows === !0 && a.options.infinite !== !0 && a.slideCount > a.options.slidesToShow && (
        a.$prevArrow.removeClass("slick-disabled"), a.$nextArrow.removeClass("slick-disabled"), 0 === a.currentSlide
        ? (a.$prevArrow.addClass("slick-disabled"), a.$nextArrow.removeClass("slick-disabled"))
        : a.currentSlide >= a.slideCount - a.options.slidesToShow && (a.$nextArrow.addClass("slick-disabled"), a.$prevArrow.removeClass("slick-disabled")))
    },
    b.prototype.updateDots = function() {
      var a = this;
      null !== a.$dots && (a.$dots.find("li").removeClass("slick-active"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active"))
    },
    a.fn.slick = function(a) {
      var c = this;
      return c.each(function(c, d) {
        d.slick = new b(d, a)
      })
    },
    a.fn.slickAdd = function(a, b, c) {
      var d = this;
      return d.each(function(d, e) {
        e.slick.addSlide(a, b, c)
      })
    },
    a.fn.slickCurrentSlide = function() {
      var a = this;
      return a.get(0).slick.getCurrent()
    },
    a.fn.slickFilter = function(a) {
      var b = this;
      return b.each(function(b, c) {
        c.slick.filterSlides(a)
      })
    },
    a.fn.slickGoTo = function(a) {
      var b = this;
      return b.each(function(b, c) {
        c.slick.changeSlide({
          data: {
            message: "index",
            index: a
          }
        })
      })
    },
    a.fn.slickNext = function() {
      var a = this;
      return a.each(function(a, b) {
        b.slick.changeSlide({
          data: {
            message: "next"
          }
        })
      })
    },
    a.fn.slickPause = function() {
      var a = this;
      return a.each(function(a, b) {
        b.slick.autoPlayClear(),
        b.slick.paused = !0
      })
    },
    a.fn.slickPlay = function() {
      var a = this;
      return a.each(function(a, b) {
        b.slick.paused = !1,
        b.slick.autoPlay()
      })
    },
    a.fn.slickPrev = function() {
      var a = this;
      return a.each(function(a, b) {
        b.slick.changeSlide({
          data: {
            message: "previous"
          }
        })
      })
    },
    a.fn.slickRemove = function(a, b) {
      var c = this;
      return c.each(function(c, d) {
        d.slick.removeSlide(a, b)
      })
    },
    a.fn.slickGetOption = function(a) {
      var b = this;
      return b.get(0).slick.options[a]
    },
    a.fn.slickSetOption = function(a, b, c) {
      var d = this;
      return d.each(function(d, e) {
        e.slick.options[a] = b,
        c === !0 && (e.slick.unload(), e.slick.reinit())
      })
    },
    a.fn.slickUnfilter = function() {
      var a = this;
      return a.each(function(a, b) {
        b.slick.unfilterSlides()
      })
    },
    a.fn.unslick = function() {
      var a = this;
      return a.each(function(a, b) {
        b.slick && b.slick.destroy()
      })
    },
    a.fn.getSlick = function() {
      var a = null,
        b = this;
      return b.each(function(b, c) {
        a = c.slick
      }),
      a
    }
  }),
  function(a) {
    "use strict";
    a(["jquery"], function(a) {
      function b(b) {
        return a.isFunction(b) || "object" == typeof b
          ? b
          : {
            top: b,
            left: b
          }
      }
      var c = a.scrollTo = function(b, c, d) {
        return a(window).scrollTo(b, c, d)
      };
      return c.defaults = {
        axis: "xy",
        duration: parseFloat(a.fn.jquery) >= 1.3
          ? 0
          : 1,
        limit: !0
      },
      c.window = function() {
        return a(window)._scrollable()
      },
      a.fn._scrollable = function() {
        return this.map(function() {
          var b = this,
            c = !b.nodeName || -1 != a.inArray(b.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
          if (!c)
            return b;
          var d = (b.contentWindow || b).document || b.ownerDocument || b;
          return /webkit/i.test(navigator.userAgent) || "BackCompat" == d.compatMode
            ? d.body
            : d.documentElement
        })
      },
      a.fn.scrollTo = function(d, e, f) {
        return "object" == typeof e && (f = e, e = 0),
        "function" == typeof f && (f = {
          onAfter: f
        }),
        "max" == d && (d = 9e9),
        f = a.extend({}, c.defaults, f),
        e = e || f.duration,
        f.queue = f.queue && f.axis.length > 1,
        f.queue && (e /= 2),
        f.offset = b(f.offset),
        f.over = b(f.over),
        this._scrollable().each(function() {
          function g(a) {
            j.animate(l, e, f.easing, a && function() {
              a.call(this, k, f)
            })
          }
          if (null != d) {
            var h,
              i = this,
              j = a(i),
              k = d,
              l = {},
              m = j.is("html,body");
            switch (typeof k) {
              case "number":
              case "string":
                if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(k)) {
                  k = b(k);
                  break
                }
                if (
                  k = m
                  ? a(k)
                  : a(k, this),
                !k.length)
                  return;
                case "object":
                (k.is || k.style) && (h = (k = a(k)).offset())
            }
            var n = a.isFunction(f.offset) && f.offset(i, k) || f.offset;
            a.each(f.axis.split(""), function(a, b) {
              var d = "x" == b
                  ? "Left"
                  : "Top",
                e = d.toLowerCase(),
                o = "scroll" + d,
                p = i[o],
                q = c.max(i, b);
              if (h)
                l[o] = h[e] + (
                  m
                  ? 0
                  : p - j.offset()[e]),
                f.margin && (l[o] -= parseInt(k.css("margin" + d)) || 0, l[o] -= parseInt(k.css("border" + d + "Width")) || 0),
                l[o] += n[e] || 0,
                f.over[e] && (l[o] += k[
                  "x" == b
                    ? "width"
                    : "height"
                ]() * f.over[e]);
              else {
                var r = k[e];
                l[o] = r.slice && "%" == r.slice(-1)
                  ? parseFloat(r) / 100 * q
                  : r
              }
              f.limit && /^\d+$/.test(l[o]) && (
                l[o] = l[o] <= 0
                ? 0
                : Math.min(l[o], q)),
              !a && f.queue && (p != l[o] && g(f.onAfterFirst), delete l[o])
            }),
            g(f.onAfter)
          }
        }).end()
      },
      c.max = function(b, c) {
        var d = "x" == c
            ? "Width"
            : "Height",
          e = "scroll" + d;
        if (!a(b).is("html,body"))
          return b[e] - a(b)[d.toLowerCase()]();
        var f = "client" + d,
          g = b.ownerDocument.documentElement,
          h = b.ownerDocument.body;
        return Math.max(g[e], h[e]) - Math.min(g[f], h[f])
      },
      c
    })
  }(
    "function" == typeof define && define.amd
    ? define
    : function(a, b) {
      "undefined" != typeof module && module.exports
        ? module.exports = b(require("jquery"))
        : b(jQuery)
    }),
  function(a) {
    "function" == typeof define && define.amd
      ? define(["jquery"], a)
      : a(jQuery)
  }(function(a) {
    function b(b, d) {
      var e,
        f,
        g,
        h = b.nodeName.toLowerCase();
      return "area" === h
        ? (
          e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase()
          ? (g = a("img[usemap='#" + f + "']")[0], !!g && c(g))
          : !1)
        : (
          /input|select|textarea|button|object/.test(h)
          ? !b.disabled
          : "a" === h
            ? b.href || d
            : d) && c(b)
    }
    function c(b) {
      return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
        return "hidden" === a.css(this, "visibility")
      }).length
    }
    a.ui = a.ui || {},
    a.extend(a.ui, {
      version: "1.11.2",
      keyCode: {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
      }
    }),
    a.fn.extend({
      scrollParent: function(b) {
        var c = this.css("position"),
          d = "absolute" === c,
          e = b
            ? /(auto|scroll|hidden)/
            : /(auto|scroll)/,
          f = this.parents().filter(function() {
            var b = a(this);
            return d && "static" === b.css("position")
              ? !1
              : e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
          }).eq(0);
        return "fixed" !== c && f.length
          ? f
          : a(this[0].ownerDocument || document)
      },
      uniqueId: function() {
        var a = 0;
        return function() {
          return this.each(function() {
            this.id || (this.id = "ui-id-" + ++a)
          })
        }
      }(),
      removeUniqueId: function() {
        return this.each(function() {
          /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
        })
      }
    }),
    a.extend(a.expr[":"], {
      data: a.expr.createPseudo
        ? a.expr.createPseudo(function(b) {
          return function(c) {
            return !!a.data(c, b)
          }
        })
        : function(b, c, d) {
          return !!a.data(b, d[3])
        },
      focusable: function(c) {
        return b(c, !isNaN(a.attr(c, "tabindex")))
      },
      tabbable: function(c) {
        var d = a.attr(c, "tabindex"),
          e = isNaN(d);
        return (e || d >= 0) && b(c, !e)
      }
    }),
    a("<a>").outerWidth(1).jquery || a.each([
      "Width", "Height"
    ], function(b, c) {
      function d(b, c, d, f) {
        return a.each(e, function() {
          c -= parseFloat(a.css(b, "padding" + this)) || 0,
          d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0),
          f && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
        }),
        c
      }
      var e = "Width" === c
          ? ["Left", "Right"]
          : [
            "Top", "Bottom"
          ],
        f = c.toLowerCase(),
        g = {
          innerWidth: a.fn.innerWidth,
          innerHeight: a.fn.innerHeight,
          outerWidth: a.fn.outerWidth,
          outerHeight: a.fn.outerHeight
        };
      a.fn["inner" + c] = function(b) {
        return void 0 === b
          ? g["inner" + c].call(this)
          : this.each(function() {
            a(this).css(f, d(this, b) + "px")
          })
      },
      a.fn["outer" + c] = function(b, e) {
        return "number" != typeof b
          ? g["outer" + c].call(this, b)
          : this.each(function() {
            a(this).css(f, d(this, b, !0, e) + "px")
          })
      }
    }),
    a.fn.addBack || (a.fn.addBack = function(a) {
      return this.add(
        null == a
        ? this.prevObject
        : this.prevObject.filter(a))
    }),
    a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
      return function(c) {
        return arguments.length
          ? b.call(this, a.camelCase(c))
          : b.call(this)
      }
    }(a.fn.removeData)),
    a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
    a.fn.extend({
      focus: function(b) {
        return function(c, d) {
          return "number" == typeof c
            ? this.each(function() {
              var b = this;
              setTimeout(function() {
                a(b).focus(),
                d && d.call(b)
              }, c)
            })
            : b.apply(this, arguments)
        }
      }(a.fn.focus),
      disableSelection: function() {
        var a = "onselectstart" in document.createElement("div")
          ? "selectstart"
          : "mousedown";
        return function() {
          return this.bind(a + ".ui-disableSelection", function(a) {
            a.preventDefault()
          })
        }
      }(),
      enableSelection: function() {
        return this.unbind(".ui-disableSelection")
      },
      zIndex: function(b) {
        if (void 0 !== b)
          return this.css("zIndex", b);
        if (this.length)
          for (var c, d, e = a(this[0]); e.length && e[0] !== document;) {
            if (c = e.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(e.css("zIndex"), 10), !isNaN(d) && 0 !== d))
              return d;
            e = e.parent()
          }
        return 0
      }
    }),
    a.ui.plugin = {
      add: function(b, c, d) {
        var e,
          f = a.ui[b].prototype;
        for (e in d)
          f.plugins[e] = f.plugins[e] || [],
          f.plugins[e].push([
            c, d[e]
          ])
      },
      call: function(a, b, c, d) {
        var e,
          f = a.plugins[b];
        if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
          for (e = 0; f.length > e; e++)
            a.options[f[e][0]] && f[e][1].apply(a.element, c)
      }
    };
    var d = 0,
      e = Array.prototype.slice;
    a.cleanData = function(b) {
      return function(c) {
        var d,
          e,
          f;
        for (f = 0; null != (e = c[f]); f++)
          try {
            d = a._data(e, "events"),
            d && d.remove && a(e).triggerHandler("remove")
          } catch (g) {}
        b(c)
      }
    }(a.cleanData),
    a.widget = function(b, c, d) {
      var e,
        f,
        g,
        h,
        i = {},
        j = b.split(".")[0];
      return b = b.split(".")[1],
      e = j + "-" + b,
      d || (d = c, c = a.Widget),
      a.expr[":"][e.toLowerCase()] = function(b) {
        return !!a.data(b, e)
      },
      a[j] = a[j] || {},
      f = a[j][b],
      g = a[j][b] = function(a, b) {
        return this._createWidget
          ? void(arguments.length && this._createWidget(a, b))
          : new g(a, b)
      },
      a.extend(g, f, {
        version: d.version,
        _proto: a.extend({}, d),
        _childConstructors: []
      }),
      h = new c,
      h.options = a.widget.extend({}, h.options),
      a.each(d, function(b, d) {
        return a.isFunction(d)
          ? void(i[b] = function() {
            var a = function() {
                return c.prototype[b].apply(this, arguments)
              },
              e = function(a) {
                return c.prototype[b].apply(this, a)
              };
            return function() {
              var b,
                c = this._super,
                f = this._superApply;
              return this._super = a,
              this._superApply = e,
              b = d.apply(this, arguments),
              this._super = c,
              this._superApply = f,
              b
            }
          }())
          : void(i[b] = d)
      }),
      g.prototype = a.widget.extend(h, {
        widgetEventPrefix: f
          ? h.widgetEventPrefix || b
          : b
      }, i, {
        constructor: g,
        namespace: j,
        widgetName: b,
        widgetFullName: e
      }),
      f
        ? (a.each(f._childConstructors, function(b, c) {
          var d = c.prototype;
          a.widget(d.namespace + "." + d.widgetName, g, c._proto)
        }), delete f._childConstructors)
        : c._childConstructors.push(g),
      a.widget.bridge(b, g),
      g
    },
    a.widget.extend = function(b) {
      for (var c, d, f = e.call(arguments, 1), g = 0, h = f.length; h > g; g++)
        for (c in f[g])
          d = f[g][c],
          f[g].hasOwnProperty(c) && void 0 !== d && (
            b[c] = a.isPlainObject(d)
            ? a.isPlainObject(b[c])
              ? a.widget.extend({}, b[c], d)
              : a.widget.extend({}, d)
            : d);
      return b
    },
    a.widget.bridge = function(b, c) {
      var d = c.prototype.widgetFullName || b;
      a.fn[b] = function(f) {
        var g = "string" == typeof f,
          h = e.call(arguments, 1),
          i = this;
        return f = !g && h.length
          ? a.widget.extend.apply(null, [f].concat(h))
          : f,
        this.each(
          g
          ? function() {
            var c,
              e = a.data(this, d);
            return "instance" === f
              ? (i = e, !1)
              : e
                ? a.isFunction(e[f]) && "_" !== f.charAt(0)
                  ? (
                    c = e[f].apply(e, h), c !== e && void 0 !== c
                    ? (
                      i = c && c.jquery
                      ? i.pushStack(c.get())
                      : c,
                    !1)
                    : void 0)
                  : a.error("no such method '" + f + "' for " + b + " widget instance")
                : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + f + "'")
          }
          : function() {
            var b = a.data(this, d);
            b
              ? (b.option(f || {}), b._init && b._init())
              : a.data(this, d, new c(f, this))
          }),
        i
      }
    },
    a.Widget = function() {},
    a.Widget._childConstructors = [],
    a.Widget.prototype = {
      widgetName: "widget",
      widgetEventPrefix: "",
      defaultElement: "<div>",
      options: {
        disabled: !1,
        create: null
      },
      _createWidget: function(b, c) {
        c = a(c || this.defaultElement || this)[0],
        this.element = a(c),
        this.uuid = d++,
        this.eventNamespace = "." + this.widgetName + this.uuid,
        this.bindings = a(),
        this.hoverable = a(),
        this.focusable = a(),
        c !== this && (a.data(c, this.widgetFullName, this), this._on(!0, this.element, {
          remove: function(a) {
            a.target === c && this.destroy()
          }
        }), this.document = a(
          c.style
          ? c.ownerDocument
          : c.document || c), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)),
        this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b),
        this._create(),
        this._trigger("create", null, this._getCreateEventData()),
        this._init()
      },
      _getCreateOptions: a.noop,
      _getCreateEventData: a.noop,
      _create: a.noop,
      _init: a.noop,
      destroy: function() {
        this._destroy(),
        this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)),
        this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
        this.bindings.unbind(this.eventNamespace),
        this.hoverable.removeClass("ui-state-hover"),
        this.focusable.removeClass("ui-state-focus")
      },
      _destroy: a.noop,
      widget: function() {
        return this.element
      },
      option: function(b, c) {
        var d,
          e,
          f,
          g = b;
        if (0 === arguments.length)
          return a.widget.extend({}, this.options);
        if ("string" == typeof b)
          if (g = {}, d = b.split("."), b = d.shift(), d.length) {
            for (e = g[b] = a.widget.extend({}, this.options[b]), f = 0; d.length - 1 > f; f++)
              e[d[f]] = e[d[f]] || {}
            ,
            e = e[d[f]];
            if (b = d.pop(), 1 === arguments.length)
              return void 0 === e[b]
                ? null
                : e[b];
            e[b] = c
          }
        else {
          if (1 === arguments.length)
            return void 0 === this.options[b]
              ? null
              : this.options[b];
          g[b] = c
        }
        return this._setOptions(g),
        this
      },
      _setOptions: function(a) {
        var b;
        for (b in a)
          this._setOption(b, a[b]);
        return this
      },
      _setOption: function(a, b) {
        return this.options[a] = b,
        "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))),
        this
      },
      enable: function() {
        return this._setOptions({
          disabled: !1
        })
      },
      disable: function() {
        return this._setOptions({
          disabled: !0
        })
      },
      _on: function(b, c, d) {
        var e,
          f = this;
        "boolean" != typeof b && (d = c, c = b, b = !1),
        d
          ? (c = e = a(c), this.bindings = this.bindings.add(c))
          : (d = c, c = this.element, e = this.widget()),
        a.each(d, function(d, g) {
          function h() {
            return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled")
              ? (
                "string" == typeof g
                ? f[g]
                : g).apply(f, arguments)
              : void 0
          }
          "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
          var i = d.match(/^([\w:-]*)\s*(.*)$/),
            j = i[1] + f.eventNamespace,
            k = i[2];
          k
            ? e.delegate(k, j, h)
            : c.bind(j, h)
        })
      },
      _off: function(b, c) {
        c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
        b.unbind(c).undelegate(c),
        this.bindings = a(this.bindings.not(b).get()),
        this.focusable = a(this.focusable.not(b).get()),
        this.hoverable = a(this.hoverable.not(b).get())
      },
      _delay: function(a, b) {
        function c() {
          return (
            "string" == typeof a
            ? d[a]
            : a).apply(d, arguments)
        }
        var d = this;
        return setTimeout(c, b || 0)
      },
      _hoverable: function(b) {
        this.hoverable = this.hoverable.add(b),
        this._on(b, {
          mouseenter: function(b) {
            a(b.currentTarget).addClass("ui-state-hover")
          },
          mouseleave: function(b) {
            a(b.currentTarget).removeClass("ui-state-hover")
          }
        })
      },
      _focusable: function(b) {
        this.focusable = this.focusable.add(b),
        this._on(b, {
          focusin: function(b) {
            a(b.currentTarget).addClass("ui-state-focus")
          },
          focusout: function(b) {
            a(b.currentTarget).removeClass("ui-state-focus")
          }
        })
      },
      _trigger: function(b, c, d) {
        var e,
          f,
          g = this.options[b];
        if (d = d || {}, c = a.Event(c), c.type = (
          b === this.widgetEventPrefix
          ? b
          : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
          for (e in f)
            e in c || (c[e] = f[e]);
      return this.element.trigger(c, d),
        !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
      }
    },
    a.each({
      show: "fadeIn",
      hide: "fadeOut"
    }, function(b, c) {
      a.Widget.prototype["_" + b] = function(d, e, f) {
        "string" == typeof e && (e = {
          effect: e
        });
        var g,
          h = e
            ? e === !0 || "number" == typeof e
              ? c
              : e.effect || c
            : b;
        e = e || {},
        "number" == typeof e && (e = {
          duration: e
        }),
        g = !a.isEmptyObject(e),
        e.complete = f,
        e.delay && d.delay(e.delay),
        g && a.effects && a.effects.effect[h]
          ? d[b](e)
          : h !== b && d[h]
            ? d[h](e.duration, e.easing, f)
            : d.queue(function(c) {
              a(this)[b](),
              f && f.call(d[0]),
              c()
            })
      }
    }),
    a.widget;
    var f = !1;
    a(document).mouseup(function() {
      f = !1
    }),
    a.widget("ui.mouse", {
      version: "1.11.2",
      options: {
        cancel: "input,textarea,button,select,option",
        distance: 1,
        delay: 0
      },
      _mouseInit: function() {
        var b = this;
        this.element.bind("mousedown." + this.widgetName, function(a) {
          return b._mouseDown(a)
        }).bind("click." + this.widgetName, function(c) {
          return !0 === a.data(c.target, b.widgetName + ".preventClickEvent")
            ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1)
            : void 0
        }),
        this.started = !1
      },
      _mouseDestroy: function() {
        this.element.unbind("." + this.widgetName),
        this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
      },
      _mouseDown: function(b) {
        if (!f) {
          this._mouseMoved = !1,
          this._mouseStarted && this._mouseUp(b),
          this._mouseDownEvent = b;
          var c = this,
            d = 1 === b.which,
            e = "string" == typeof this.options.cancel && b.target.nodeName
              ? a(b.target).closest(this.options.cancel).length
              : !1;
          return d && !e && this._mouseCapture(b)
            ? (
              this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
              c.mouseDelayMet = !0
            }, this.options.delay)), this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(b) !== !1, !this._mouseStarted)
              ? (b.preventDefault(), !0)
              : (!0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(a) {
                return c._mouseMove(a)
              }, this._mouseUpDelegate = function(a) {
                return c._mouseUp(a)
              }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), b.preventDefault(), f = !0, !0))
            : !0
        }
      },
      _mouseMove: function(b) {
        if (this._mouseMoved) {
          if (a.ui.ie && (!document.documentMode || 9 > document.documentMode) && !b.button)
            return this._mouseUp(b);
          if (!b.which)
            return this._mouseUp(b)
        }
        return (b.which || b.button) && (this._mouseMoved = !0),
        this._mouseStarted
          ? (this._mouseDrag(b), b.preventDefault())
          : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (
            this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted
            ? this._mouseDrag(b)
            : this._mouseUp(b)), !this._mouseStarted)
      },
      _mouseUp: function(b) {
        return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
        this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)),
        f = !1,
        !1
      },
      _mouseDistanceMet: function(a) {
        return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
      },
      _mouseDelayMet: function() {
        return this.mouseDelayMet
      },
      _mouseStart: function() {},
      _mouseDrag: function() {},
      _mouseStop: function() {},
      _mouseCapture: function() {
        return !0
      }
    }),
    function() {
      function b(a, b, c) {
        return [
          parseFloat(a[0]) * (
            n.test(a[0])
            ? b / 100
            : 1),
          parseFloat(a[1]) * (
            n.test(a[1])
            ? c / 100
            : 1)
        ]
      }
      function c(b, c) {
        return parseInt(a.css(b, c), 10) || 0
      }
      function d(b) {
        var c = b[0];
        return 9 === c.nodeType
          ? {
            width: b.width(),
            height: b.height(),
            offset: {
              top: 0,
              left: 0
            }
          }
          : a.isWindow(c)
            ? {
              width: b.width(),
              height: b.height(),
              offset: {
                top: b.scrollTop(),
                left: b.scrollLeft()
              }
            }
            : c.preventDefault
              ? {
                width: 0,
                height: 0,
                offset: {
                  top: c.pageY,
                  left: c.pageX
                }
              }
              : {
                width: b.outerWidth(),
                height: b.outerHeight(),
                offset: b.offset()
              }
      }
      a.ui = a.ui || {};
      var e,
        f,
        g = Math.max,
        h = Math.abs,
        i = Math.round,
        j = /left|center|right/,
        k = /top|center|bottom/,
        l = /[\+\-]\d+(\.[\d]+)?%?/,
        m = /^\w+/,
        n = /%$/,
        o = a.fn.position;
      a.position = {
        scrollbarWidth: function() {
          if (void 0 !== e)
            return e;
          var b,
            c,
            d = a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
            f = d.children()[0];
          return a("body").append(d),
          b = f.offsetWidth,
          d.css("overflow", "scroll"),
          c = f.offsetWidth,
          b === c && (c = d[0].clientWidth),
          d.remove(),
          e = b - c
        },
        getScrollInfo: function(b) {
          var c = b.isWindow || b.isDocument
              ? ""
              : b.element.css("overflow-x"),
            d = b.isWindow || b.isDocument
              ? ""
              : b.element.css("overflow-y"),
            e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth,
            f = "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight;
          return {
            width: f
              ? a.position.scrollbarWidth()
              : 0,
            height: e
              ? a.position.scrollbarWidth()
              : 0
          }
        },
        getWithinInfo: function(b) {
          var c = a(b || window),
            d = a.isWindow(c[0]),
            e = !!c[0] && 9 === c[0].nodeType;
          return {
            element: c,
            isWindow: d,
            isDocument: e,
            offset: c.offset() || {
              left: 0,
              top: 0
            },
            scrollLeft: c.scrollLeft(),
            scrollTop: c.scrollTop(),
            width: d || e
              ? c.width()
              : c.outerWidth(),
            height: d || e
              ? c.height()
              : c.outerHeight()
          }
        }
      },
      a.fn.position = function(e) {
        if (!e || !e.of)
          return o.apply(this, arguments);
        e = a.extend({}, e);
        var n,
          p,
          q,
          r,
          s,
          t,
          u = a(e.of),
          v = a.position.getWithinInfo(e.within),
          w = a.position.getScrollInfo(v),
          x = (e.collision || "flip").split(" "),
          y = {};
        return t = d(u),
        u[0].preventDefault && (e.at = "left top"),
        p = t.width,
        q = t.height,
        r = t.offset,
        s = a.extend({}, r),
        a.each([
          "my", "at"
        ], function() {
          var a,
            b,
            c = (e[this] || "").split(" ");
          1 === c.length && (
            c = j.test(c[0])
            ? c.concat(["center"])
            : k.test(c[0])
              ? ["center"].concat(c)
              : ["center", "center"]),
          c[0] = j.test(c[0])
            ? c[0]
            : "center",
          c[1] = k.test(c[1])
            ? c[1]
            : "center",
          a = l.exec(c[0]),
          b = l.exec(c[1]),
          y[this] = [
            a
              ? a[0]
              : 0,
            b
              ? b[0]
              : 0
          ],
          e[this] = [
            m.exec(c[0])[0],
            m.exec(c[1])[0]
          ]
        }),
        1 === x.length && (x[1] = x[0]),
        "right" === e.at[0]
          ? s.left += p
          : "center" === e.at[0] && (s.left += p / 2),
        "bottom" === e.at[1]
          ? s.top += q
          : "center" === e.at[1] && (s.top += q / 2),
        n = b(y.at, p, q),
        s.left += n[0],
        s.top += n[1],
        this.each(function() {
          var d,
            j,
            k = a(this),
            l = k.outerWidth(),
            m = k.outerHeight(),
            o = c(this, "marginLeft"),
            t = c(this, "marginTop"),
            z = l + o + c(this, "marginRight") + w.width,
            A = m + t + c(this, "marginBottom") + w.height,
            B = a.extend({}, s),
            C = b(y.my, k.outerWidth(), k.outerHeight());
          "right" === e.my[0]
            ? B.left -= l
            : "center" === e.my[0] && (B.left -= l / 2),
          "bottom" === e.my[1]
            ? B.top -= m
            : "center" === e.my[1] && (B.top -= m / 2),
          B.left += C[0],
          B.top += C[1],
          f || (B.left = i(B.left), B.top = i(B.top)),
          d = {
            marginLeft: o,
            marginTop: t
          },
          a.each([
            "left", "top"
          ], function(b, c) {
            a.ui.position[x[b]] && a.ui.position[x[b]][c](B, {
              targetWidth: p,
              targetHeight: q,
              elemWidth: l,
              elemHeight: m,
              collisionPosition: d,
              collisionWidth: z,
              collisionHeight: A,
              offset: [
                n[0] + C[0],
                n[1] + C[1]
              ],
              my: e.my,
              at: e.at,
              within: v,
              elem: k
            })
          }),
          e.using && (j = function(a) {
            var b = r.left - B.left,
              c = b + p - l,
              d = r.top - B.top,
              f = d + q - m,
              i = {
                target: {
                  element: u,
                  left: r.left,
                  top: r.top,
                  width: p,
                  height: q
                },
                element: {
                  element: k,
                  left: B.left,
                  top: B.top,
                  width: l,
                  height: m
                },
                horizontal: 0 > c
                  ? "left"
                  : b > 0
                    ? "right"
                    : "center",
                vertical: 0 > f
                  ? "top"
                  : d > 0
                    ? "bottom"
                    : "middle"
              };
            l > p && p > h(b + c) && (i.horizontal = "center"),
            m > q && q > h(d + f) && (i.vertical = "middle"),
            i.important = g(h(b), h(c)) > g(h(d), h(f))
              ? "horizontal"
              : "vertical",
            e.using.call(this, a, i)
          }),
          k.offset(a.extend(B, {using: j}))
        })
      },
      a.ui.position = {
        fit: {
          left: function(a, b) {
            var c,
              d = b.within,
              e = d.isWindow
                ? d.scrollLeft
                : d.offset.left,
              f = d.width,
              h = a.left - b.collisionPosition.marginLeft,
              i = e - h,
              j = h + b.collisionWidth - f - e;
            b.collisionWidth > f
              ? i > 0 && 0 >= j
                ? (c = a.left + i + b.collisionWidth - f - e, a.left += i - c)
                : a.left = j > 0 && 0 >= i
                  ? e
                  : i > j
                    ? e + f - b.collisionWidth
                    : e
              : i > 0
                ? a.left += i
                : j > 0
                  ? a.left -= j
                  : a.left = g(a.left - h, a.left)
          },
          top: function(a, b) {
            var c,
              d = b.within,
              e = d.isWindow
                ? d.scrollTop
                : d.offset.top,
              f = b.within.height,
              h = a.top - b.collisionPosition.marginTop,
              i = e - h,
              j = h + b.collisionHeight - f - e;
            b.collisionHeight > f
              ? i > 0 && 0 >= j
                ? (c = a.top + i + b.collisionHeight - f - e, a.top += i - c)
                : a.top = j > 0 && 0 >= i
                  ? e
                  : i > j
                    ? e + f - b.collisionHeight
                    : e
              : i > 0
                ? a.top += i
                : j > 0
                  ? a.top -= j
                  : a.top = g(a.top - h, a.top)
          }
        },
        flip: {
          left: function(a, b) {
            var c,
              d,
              e = b.within,
              f = e.offset.left + e.scrollLeft,
              g = e.width,
              i = e.isWindow
                ? e.scrollLeft
                : e.offset.left,
              j = a.left - b.collisionPosition.marginLeft,
              k = j - i,
              l = j + b.collisionWidth - g - i,
              m = "left" === b.my[0]
                ? -b.elemWidth
                : "right" === b.my[0]
                  ? b.elemWidth
                  : 0,
              n = "left" === b.at[0]
                ? b.targetWidth
                : "right" === b.at[0]
                  ? -b.targetWidth
                  : 0,
              o = -2 * b.offset[0];
            0 > k
              ? (c = a.left + m + n + o + b.collisionWidth - g - f, (0 > c || h(k) > c) && (a.left += m + n + o))
              : l > 0 && (d = a.left - b.collisionPosition.marginLeft + m + n + o - i, (d > 0 || l > h(d)) && (a.left += m + n + o))
          },
          top: function(a, b) {
            var c,
              d,
              e = b.within,
              f = e.offset.top + e.scrollTop,
              g = e.height,
              i = e.isWindow
                ? e.scrollTop
                : e.offset.top,
              j = a.top - b.collisionPosition.marginTop,
              k = j - i,
              l = j + b.collisionHeight - g - i,
              m = "top" === b.my[1],
              n = m
                ? -b.elemHeight
                : "bottom" === b.my[1]
                  ? b.elemHeight
                  : 0,
              o = "top" === b.at[1]
                ? b.targetHeight
                : "bottom" === b.at[1]
                  ? -b.targetHeight
                  : 0,
              p = -2 * b.offset[1];
            0 > k
              ? (d = a.top + n + o + p + b.collisionHeight - g - f, a.top + n + o + p > k && (0 > d || h(k) > d) && (a.top += n + o + p))
              : l > 0 && (c = a.top - b.collisionPosition.marginTop + n + o + p - i, a.top + n + o + p > l && (c > 0 || l > h(c)) && (a.top += n + o + p))
          }
        },
        flipfit: {
          left: function() {
            a.ui.position.flip.left.apply(this, arguments),
            a.ui.position.fit.left.apply(this, arguments)
          },
          top: function() {
            a.ui.position.flip.top.apply(this, arguments),
            a.ui.position.fit.top.apply(this, arguments)
          }
        }
      },
      function() {
        var b,
          c,
          d,
          e,
          g,
          h = document.getElementsByTagName("body")[0],
          i = document.createElement("div");
        b = document.createElement(
          h
          ? "div"
          : "body"),
        d = {
          visibility: "hidden",
          width: 0,
          height: 0,
          border: 0,
          margin: 0,
          background: "none"
        },
        h && a.extend(d, {
          position: "absolute",
          left: "-1000px",
          top: "-1000px"
        });
        for (g in d)
          b.style[g] = d[g];
        b.appendChild(i),
        c = h || document.documentElement,
        c.insertBefore(b, c.firstChild),
        i.style.cssText = "position: absolute; left: 10.7432222px;",
        e = a(i).offset().left,
        f = e > 10 && 11 > e,
        b.innerHTML = "",
        c.removeChild(b)
      }()
    }(),
    a.ui.position,
    a.widget("ui.draggable", a.ui.mouse, {
      version: "1.11.2",
      widgetEventPrefix: "drag",
      options: {
        addClasses: !0,
        appendTo: "parent",
        axis: !1,
        connectToSortable: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        iframeFix: !1,
        opacity: !1,
        refreshPositions: !1,
        revert: !1,
        revertDuration: 500,
        scope: "default",
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        snap: !1,
        snapMode: "both",
        snapTolerance: 20,
        stack: !1,
        zIndex: !1,
        drag: null,
        start: null,
        stop: null
      },
      _create: function() {
        "original" === this.options.helper && this._setPositionRelative(),
        this.options.addClasses && this.element.addClass("ui-draggable"),
        this.options.disabled && this.element.addClass("ui-draggable-disabled"),
        this._setHandleClassName(),
        this._mouseInit()
      },
      _setOption: function(a, b) {
        this._super(a, b),
        "handle" === a && (this._removeHandleClassName(), this._setHandleClassName())
      },
      _destroy: function() {
        return (this.helper || this.element).is(".ui-draggable-dragging")
          ? void(this.destroyOnClear = !0)
          : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), void this._mouseDestroy())
      },
      _mouseCapture: function(b) {
        var c = this.options;
        return this._blurActiveElement(b),
        this.helper || c.disabled || a(b.target).closest(".ui-resizable-handle").length > 0
          ? !1
          : (
            this.handle = this._getHandle(b), this.handle
            ? (this._blockFrames(
              c.iframeFix === !0
              ? "iframe"
              : c.iframeFix), !0)
            : !1)
      },
      _blockFrames: function(b) {
        this.iframeBlocks = this.document.find(b).map(function() {
          var b = a(this);
          return a("<div>").css("position", "absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]
        })
      },
      _unblockFrames: function() {
        this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
      },
      _blurActiveElement: function(b) {
        var c = this.document[0];
        if (this.handleElement.is(b.target))
          try {
            c.activeElement && "body" !== c.activeElement.nodeName.toLowerCase() && a(c.activeElement).blur()
          } catch (d) {}
        },
      _mouseStart: function(b) {
        var c = this.options;
        return this.helper = this._createHelper(b),
        this.helper.addClass("ui-draggable-dragging"),
        this._cacheHelperProportions(),
        a.ui.ddmanager && (a.ui.ddmanager.current = this),
        this._cacheMargins(),
        this.cssPosition = this.helper.css("position"),
        this.scrollParent = this.helper.scrollParent(!0),
        this.offsetParent = this.helper.offsetParent(),
        this.hasFixedAncestor = this.helper.parents().filter(function() {
          return "fixed" === a(this).css("position")
        }).length > 0,
        this.positionAbs = this.element.offset(),
        this._refreshOffsets(b),
        this.originalPosition = this.position = this._generatePosition(b, !1),
        this.originalPageX = b.pageX,
        this.originalPageY = b.pageY,
        c.cursorAt && this._adjustOffsetFromHelper(c.cursorAt),
        this._setContainment(),
        this._trigger("start", b) === !1
          ? (this._clear(), !1)
          : (this._cacheHelperProportions(), a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, b), this._normalizeRightBottom(), this._mouseDrag(b, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, b), !0)
      },
      _refreshOffsets: function(a) {
        this.offset = {
          top: this.positionAbs.top - this.margins.top,
          left: this.positionAbs.left - this.margins.left,
          scroll: !1,
          parent: this._getParentOffset(),
          relative: this._getRelativeOffset()
        },
        this.offset.click = {
          left: a.pageX - this.offset.left,
          top: a.pageY - this.offset.top
        }
      },
      _mouseDrag: function(b, c) {
        if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(b, !0), this.positionAbs = this._convertPositionTo("absolute"), !c) {
          var d = this._uiHash();
          if (this._trigger("drag", b, d) === !1)
            return this._mouseUp({}),
            !1;
          this.position = d.position
        }
        return this.helper[0].style.left = this.position.left + "px",
        this.helper[0].style.top = this.position.top + "px",
        a.ui.ddmanager && a.ui.ddmanager.drag(this, b),
        !1
      },
      _mouseStop: function(b) {
        var c = this,
          d = !1;
        return a.ui.ddmanager && !this.options.dropBehaviour && (d = a.ui.ddmanager.drop(this, b)),
        this.dropped && (d = this.dropped, this.dropped = !1),
        "invalid" === this.options.revert && !d || "valid" === this.options.revert && d || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, d)
          ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
            c._trigger("stop", b) !== !1 && c._clear()
          })
          : this._trigger("stop", b) !== !1 && this._clear(),
        !1
      },
      _mouseUp: function(b) {
        return this._unblockFrames(),
        a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b),
        this.handleElement.is(b.target) && this.element.focus(),
        a.ui.mouse.prototype._mouseUp.call(this, b)
      },
      cancel: function() {
        return this.helper.is(".ui-draggable-dragging")
          ? this._mouseUp({})
          : this._clear(),
        this
      },
      _getHandle: function(b) {
        return this.options.handle
          ? !!a(b.target).closest(this.element.find(this.options.handle)).length
          : !0
      },
      _setHandleClassName: function() {
        this.handleElement = this.options.handle
          ? this.element.find(this.options.handle)
          : this.element,
        this.handleElement.addClass("ui-draggable-handle")
      },
      _removeHandleClassName: function() {
        this.handleElement.removeClass("ui-draggable-handle")
      },
      _createHelper: function(b) {
        var c = this.options,
          d = a.isFunction(c.helper),
          e = d
            ? a(c.helper.apply(this.element[0], [b]))
            : "clone" === c.helper
              ? this.element.clone().removeAttr("id")
              : this.element;
        return e.parents("body").length || e.appendTo(
          "parent" === c.appendTo
          ? this.element[0].parentNode
          : c.appendTo),
        d && e[0] === this.element[0] && this._setPositionRelative(),
        e[0] === this.element[0] || /(fixed|absolute)/.test(e.css("position")) || e.css("position", "absolute"),
        e
      },
      _setPositionRelative: function() {
        /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
      },
      _adjustOffsetFromHelper: function(b) {
        "string" == typeof b && (b = b.split(" ")),
        a.isArray(b) && (b = {
          left: + b[0],
          top: + b[1] || 0
        }),
        "left" in b && (this.offset.click.left = b.left + this.margins.left),
        "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left),
        "top" in b && (this.offset.click.top = b.top + this.margins.top),
        "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
      },
      _isRootNode: function(a) {
        return /(html|body)/i.test(a.tagName) || a === this.document[0]
      },
      _getParentOffset: function() {
        var b = this.offsetParent.offset(),
          c = this.document[0];
        return "absolute" === this.cssPosition && this.scrollParent[0] !== c && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()),
        this._isRootNode(this.offsetParent[0]) && (b = {
          top: 0,
          left: 0
        }), {
          top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
          left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
        }
      },
      _getRelativeOffset: function() {
        if ("relative" !== this.cssPosition)
          return {top: 0, left: 0};
        var a = this.element.position(),
          b = this._isRootNode(this.scrollParent[0]);
        return {
          top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + (
            b
            ? 0
            : this.scrollParent.scrollTop()),
          left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + (
            b
            ? 0
            : this.scrollParent.scrollLeft())
        }
      },
      _cacheMargins: function() {
        this.margins = {
          left: parseInt(this.element.css("marginLeft"), 10) || 0,
          top: parseInt(this.element.css("marginTop"), 10) || 0,
          right: parseInt(this.element.css("marginRight"), 10) || 0,
          bottom: parseInt(this.element.css("marginBottom"), 10) || 0
        }
      },
      _cacheHelperProportions: function() {
        this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight()
        }
      },
      _setContainment: function() {
        var b,
          c,
          d,
          e = this.options,
          f = this.document[0];
        return this.relativeContainer = null,
        e.containment
          ? "window" === e.containment
            ? void(this.containment = [
              a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
              a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,
              a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left,
              a(window).scrollTop() + (a(window).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
            ])
            : "document" === e.containment
              ? void(this.containment = [
                0, 0, a(f).width() - this.helperProportions.width - this.margins.left,
                (a(f).height() || f.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
              ])
              : e.containment.constructor === Array
                ? void(this.containment = e.containment)
                : ("parent" === e.containment && (e.containment = this.helper[0].parentNode), c = a(e.containment), d = c[0], void(d && (b = /(scroll|auto)/.test(c.css("overflow")), this.containment = [
                  (parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0),
                  (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0),
                  (
                    b
                    ? Math.max(d.scrollWidth, d.offsetWidth)
                    : d.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right,
                  (
                    b
                    ? Math.max(d.scrollHeight, d.offsetHeight)
                    : d.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom
                ], this.relativeContainer = c)))
          : void(this.containment = null)
      },
      _convertPositionTo: function(a, b) {
        b || (b = this.position);
        var c = "absolute" === a
            ? 1
            : -1,
          d = this._isRootNode(this.scrollParent[0]);
        return {
          top: b.top + this.offset.relative.top * c + this.offset.parent.top * c - (
            "fixed" === this.cssPosition
            ? -this.offset.scroll.top
            : d
              ? 0
              : this.offset.scroll.top) * c,
          left: b.left + this.offset.relative.left * c + this.offset.parent.left * c - (
            "fixed" === this.cssPosition
            ? -this.offset.scroll.left
            : d
              ? 0
              : this.offset.scroll.left) * c
        }
      },
      _generatePosition: function(a, b) {
        var c,
          d,
          e,
          f,
          g = this.options,
          h = this._isRootNode(this.scrollParent[0]),
          i = a.pageX,
          j = a.pageY;
        return h && this.offset.scroll || (this.offset.scroll = {
          top: this.scrollParent.scrollTop(),
          left: this.scrollParent.scrollLeft()
        }),
        b && (this.containment && (
          this.relativeContainer
          ? (d = this.relativeContainer.offset(), c = [
            this.containment[0] + d.left,
            this.containment[1] + d.top,
            this.containment[2] + d.left,
            this.containment[3] + d.top
          ])
          : c = this.containment,
        a.pageX - this.offset.click.left < c[0] && (i = c[0] + this.offset.click.left),
        a.pageY - this.offset.click.top < c[1] && (j = c[1] + this.offset.click.top),
        a.pageX - this.offset.click.left > c[2] && (i = c[2] + this.offset.click.left),
        a.pageY - this.offset.click.top > c[3] && (j = c[3] + this.offset.click.top)), g.grid && (
          e = g.grid[1]
          ? this.originalPageY + Math.round((j - this.originalPageY) / g.grid[1]) * g.grid[1]
          : this.originalPageY,
        j = c
          ? e - this.offset.click.top >= c[1] || e - this.offset.click.top > c[3]
            ? e
            : e - this.offset.click.top >= c[1]
              ? e - g.grid[1]
              : e + g.grid[1]
          : e,
        f = g.grid[0]
          ? this.originalPageX + Math.round((i - this.originalPageX) / g.grid[0]) * g.grid[0]
          : this.originalPageX,
        i = c
          ? f - this.offset.click.left >= c[0] || f - this.offset.click.left > c[2]
            ? f
            : f - this.offset.click.left >= c[0]
              ? f - g.grid[0]
              : f + g.grid[0]
          : f), "y" === g.axis && (i = this.originalPageX), "x" === g.axis && (j = this.originalPageY)), {
          top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (
            "fixed" === this.cssPosition
            ? -this.offset.scroll.top
            : h
              ? 0
              : this.offset.scroll.top),
          left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (
            "fixed" === this.cssPosition
            ? -this.offset.scroll.left
            : h
              ? 0
              : this.offset.scroll.left)
        }
      },
      _clear: function() {
        this.helper.removeClass("ui-draggable-dragging"),
        this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
        this.helper = null,
        this.cancelHelperRemoval = !1,
        this.destroyOnClear && this.destroy()
      },
      _normalizeRightBottom: function() {
        "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")),
        "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
      },
      _trigger: function(b, c, d) {
        return d = d || this._uiHash(),
        a.ui.plugin.call(this, b, [
          c, d, this
        ], !0),
        /^(drag|start|stop)/.test(b) && (this.positionAbs = this._convertPositionTo("absolute"), d.offset = this.positionAbs),
        a.Widget.prototype._trigger.call(this, b, c, d)
      },
      plugins: {},
      _uiHash: function() {
        return {helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs}
      }
    }),
    a.ui.plugin.add("draggable", "connectToSortable", {
      start: function(b, c, d) {
        var e = a.extend({}, c, {item: d.element});
        d.sortables = [],
        a(d.options.connectToSortable).each(function() {
          var c = a(this).sortable("instance");
          c && !c.options.disabled && (d.sortables.push(c), c.refreshPositions(), c._trigger("activate", b, e))
        })
      },
      stop: function(b, c, d) {
        var e = a.extend({}, c, {item: d.element});
        d.cancelHelperRemoval = !1,
        a.each(d.sortables, function() {
          var a = this;
          a.isOver
            ? (a.isOver = 0, d.cancelHelperRemoval = !0, a.cancelHelperRemoval = !1, a._storedCSS = {
              position: a.placeholder.css("position"),
              top: a.placeholder.css("top"),
              left: a.placeholder.css("left")
            }, a._mouseStop(b), a.options.helper = a.options._helper)
            : (a.cancelHelperRemoval = !0, a._trigger("deactivate", b, e))
        })
      },
      drag: function(b, c, d) {
        a.each(d.sortables, function() {
          var e = !1,
            f = this;
          f.positionAbs = d.positionAbs,
          f.helperProportions = d.helperProportions,
          f.offset.click = d.offset.click,
          f._intersectsWith(f.containerCache) && (e = !0, a.each(d.sortables, function() {
            return this.positionAbs = d.positionAbs,
            this.helperProportions = d.helperProportions,
            this.offset.click = d.offset.click,
            this !== f && this._intersectsWith(this.containerCache) && a.contains(f.element[0], this.element[0]) && (e = !1),
            e
          })),
          e
            ? (f.isOver || (f.isOver = 1, f.currentItem = c.helper.appendTo(f.element).data("ui-sortable-item", !0), f.options._helper = f.options.helper, f.options.helper = function() {
              return c.helper[0]
            }, b.target = f.currentItem[0], f._mouseCapture(b, !0), f._mouseStart(b, !0, !0), f.offset.click.top = d.offset.click.top, f.offset.click.left = d.offset.click.left, f.offset.parent.left -= d.offset.parent.left - f.offset.parent.left, f.offset.parent.top -= d.offset.parent.top - f.offset.parent.top, d._trigger("toSortable", b), d.dropped = f.element, a.each(d.sortables, function() {
              this.refreshPositions()
            }), d.currentItem = d.element, f.fromOutside = d), f.currentItem && (f._mouseDrag(b), c.position = f.position))
            : f.isOver && (f.isOver = 0, f.cancelHelperRemoval = !0, f.options._revert = f.options.revert, f.options.revert = !1, f._trigger("out", b, f._uiHash(f)), f._mouseStop(b, !0), f.options.revert = f.options._revert, f.options.helper = f.options._helper, f.placeholder && f.placeholder.remove(), d._refreshOffsets(b), c.position = d._generatePosition(b, !0), d._trigger("fromSortable", b), d.dropped = !1, a.each(d.sortables, function() {
              this.refreshPositions()
            }))
        })
      }
    }),
    a.ui.plugin.add("draggable", "cursor", {
      start: function(b, c, d) {
        var e = a("body"),
          f = d.options;
        e.css("cursor") && (f._cursor = e.css("cursor")),
        e.css("cursor", f.cursor)
      },
      stop: function(b, c, d) {
        var e = d.options;
        e._cursor && a("body").css("cursor", e._cursor)
      }
    }),
    a.ui.plugin.add("draggable", "opacity", {
      start: function(b, c, d) {
        var e = a(c.helper),
          f = d.options;
        e.css("opacity") && (f._opacity = e.css("opacity")),
        e.css("opacity", f.opacity)
      },
      stop: function(b, c, d) {
        var e = d.options;
        e._opacity && a(c.helper).css("opacity", e._opacity)
      }
    }),
    a.ui.plugin.add("draggable", "scroll", {
      start: function(a, b, c) {
        c.scrollParentNotHidden || (c.scrollParentNotHidden = c.helper.scrollParent(!1)),
        c.scrollParentNotHidden[0] !== c.document[0] && "HTML" !== c.scrollParentNotHidden[0].tagName && (c.overflowOffset = c.scrollParentNotHidden.offset())
      },
      drag: function(b, c, d) {
        var e = d.options,
          f = !1,
          g = d.scrollParentNotHidden[0],
          h = d.document[0];
        g !== h && "HTML" !== g.tagName
          ? (e.axis && "x" === e.axis || (
            d.overflowOffset.top + g.offsetHeight - b.pageY < e.scrollSensitivity
            ? g.scrollTop = f = g.scrollTop + e.scrollSpeed
            : b.pageY - d.overflowOffset.top < e.scrollSensitivity && (g.scrollTop = f = g.scrollTop - e.scrollSpeed)), e.axis && "y" === e.axis || (
            d.overflowOffset.left + g.offsetWidth - b.pageX < e.scrollSensitivity
            ? g.scrollLeft = f = g.scrollLeft + e.scrollSpeed
            : b.pageX - d.overflowOffset.left < e.scrollSensitivity && (g.scrollLeft = f = g.scrollLeft - e.scrollSpeed)))
          : (e.axis && "x" === e.axis || (
            b.pageY - a(h).scrollTop() < e.scrollSensitivity
            ? f = a(h).scrollTop(a(h).scrollTop() - e.scrollSpeed)
            : a(window).height() - (b.pageY - a(h).scrollTop()) < e.scrollSensitivity && (f = a(h).scrollTop(a(h).scrollTop() + e.scrollSpeed))), e.axis && "y" === e.axis || (
            b.pageX - a(h).scrollLeft() < e.scrollSensitivity
            ? f = a(h).scrollLeft(a(h).scrollLeft() - e.scrollSpeed)
            : a(window).width() - (b.pageX - a(h).scrollLeft()) < e.scrollSensitivity && (f = a(h).scrollLeft(a(h).scrollLeft() + e.scrollSpeed)))),
        f !== !1 && a.ui.ddmanager && !e.dropBehaviour && a.ui.ddmanager.prepareOffsets(d, b)
      }
    }),
    a.ui.plugin.add("draggable", "snap", {
      start: function(b, c, d) {
        var e = d.options;
        d.snapElements = [],
        a(
          e.snap.constructor !== String
          ? e.snap.items || ":data(ui-draggable)"
          : e.snap).each(function() {
          var b = a(this),
            c = b.offset();
          this !== d.element[0] && d.snapElements.push({item: this, width: b.outerWidth(), height: b.outerHeight(), top: c.top, left: c.left})
        })
      },
      drag: function(b, c, d) {
        var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o = d.options,
          p = o.snapTolerance,
          q = c.offset.left,
          r = q + d.helperProportions.width,
          s = c.offset.top,
          t = s + d.helperProportions.height;
        for (m = d.snapElements.length - 1; m >= 0; m--)
          i = d.snapElements[m].left - d.margins.left,
          j = i + d.snapElements[m].width,
          k = d.snapElements[m].top - d.margins.top,
          l = k + d.snapElements[m].height,
          i - p > r || q > j + p || k - p > t || s > l + p || !a.contains(d.snapElements[m].item.ownerDocument, d.snapElements[m].item)
            ? (d.snapElements[m].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, a.extend(d._uiHash(), {snapItem: d.snapElements[m].item})), d.snapElements[m].snapping = !1)
            : ("inner" !== o.snapMode && (e = p >= Math.abs(k - t), f = p >= Math.abs(l - s), g = p >= Math.abs(i - r), h = p >= Math.abs(j - q), e && (c.position.top = d._convertPositionTo("relative", {
              top: k - d.helperProportions.height,
              left: 0
            }).top), f && (c.position.top = d._convertPositionTo("relative", {
              top: l,
              left: 0
            }).top), g && (c.position.left = d._convertPositionTo("relative", {
              top: 0,
              left: i - d.helperProportions.width
            }).left), h && (c.position.left = d._convertPositionTo("relative", {
              top: 0,
              left: j
            }).left)), n = e || f || g || h, "outer" !== o.snapMode && (e = p >= Math.abs(k - s), f = p >= Math.abs(l - t), g = p >= Math.abs(i - q), h = p >= Math.abs(j - r), e && (c.position.top = d._convertPositionTo("relative", {
              top: k,
              left: 0
            }).top), f && (c.position.top = d._convertPositionTo("relative", {
              top: l - d.helperProportions.height,
              left: 0
            }).top), g && (c.position.left = d._convertPositionTo("relative", {
              top: 0,
              left: i
            }).left), h && (c.position.left = d._convertPositionTo("relative", {
              top: 0,
              left: j - d.helperProportions.width
            }).left)), !d.snapElements[m].snapping && (e || f || g || h || n) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, a.extend(d._uiHash(), {snapItem: d.snapElements[m].item})), d.snapElements[m].snapping = e || f || g || h || n)
        }
    }),
    a.ui.plugin.add("draggable", "stack", {
      start: function(b, c, d) {
        var e,
          f = d.options,
          g = a.makeArray(a(f.stack)).sort(function(b, c) {
            return (parseInt(a(b).css("zIndex"), 10) || 0) - (parseInt(a(c).css("zIndex"), 10) || 0)
          });
        g.length && (e = parseInt(a(g[0]).css("zIndex"), 10) || 0, a(g).each(function(b) {
          a(this).css("zIndex", e + b)
        }), this.css("zIndex", e + g.length))
      }
    }),
    a.ui.plugin.add("draggable", "zIndex", {
      start: function(b, c, d) {
        var e = a(c.helper),
          f = d.options;
        e.css("zIndex") && (f._zIndex = e.css("zIndex")),
        e.css("zIndex", f.zIndex)
      },
      stop: function(b, c, d) {
        var e = d.options;
        e._zIndex && a(c.helper).css("zIndex", e._zIndex)
      }
    }),
    a.ui.draggable,
    a.widget("ui.slider", a.ui.mouse, {
      version: "1.11.2",
      widgetEventPrefix: "slide",
      options: {
        animate: !1,
        distance: 0,
        max: 100,
        min: 0,
        orientation: "horizontal",
        range: !1,
        step: 1,
        value: 0,
        values: null,
        change: null,
        slide: null,
        start: null,
        stop: null
      },
      numPages: 5,
      _create: function() {
        this._keySliding = !1,
        this._mouseSliding = !1,
        this._animateOff = !0,
        this._handleIndex = null,
        this._detectOrientation(),
        this._mouseInit(),
        this._calculateNewMax(),
        this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"),
        this._refresh(),
        this._setOption("disabled", this.options.disabled),
        this._animateOff = !1
      },
      _refresh: function() {
        this._createRange(),
        this._createHandles(),
        this._setupEvents(),
        this._refreshValue()
      },
      _createHandles: function() {
        var b,
          c,
          d = this.options,
          e = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
          f = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
          g = [];
        for (c = d.values && d.values.length || 1, e.length > c && (e.slice(c).remove(), e = e.slice(0, c)), b = e.length; c > b; b++)
          g.push(f);
        this.handles = e.add(a(g.join("")).appendTo(this.element)),
        this.handle = this.handles.eq(0),
        this.handles.each(function(b) {
          a(this).data("ui-slider-handle-index", b)
        })
      },
      _createRange: function() {
        var b = this.options,
          c = "";
        b.range
          ? (
            b.range === !0 && (
            b.values
            ? b.values.length && 2 !== b.values.length
              ? b.values = [
                b.values[0], b.values[0]
              ]
              : a.isArray(b.values) && (b.values = b.values.slice(0))
              : b.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length
            ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left: "", bottom: ""})
            : (this.range = a("<div></div>").appendTo(this.element), c = "ui-slider-range ui-widget-header ui-corner-all"),
          this.range.addClass(c + (
            "min" === b.range || "max" === b.range
            ? " ui-slider-range-" + b.range
            : "")))
          : (this.range && this.range.remove(), this.range = null)
      },
      _setupEvents: function() {
        this._off(this.handles),
        this._on(this.handles, this._handleEvents),
        this._hoverable(this.handles),
        this._focusable(this.handles)
      },
      _destroy: function() {
        this.handles.remove(),
        this.range && this.range.remove(),
        this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),
        this._mouseDestroy()
      },
      _mouseCapture: function(b) {
        var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = this,
          l = this.options;
        return l.disabled
          ? !1
          : (
            this.elementSize = {
            width: this.element.outerWidth(),
            height: this.element.outerHeight()
          }, this.elementOffset = this.element.offset(), c = {
            x: b.pageX,
            y: b.pageY
          }, d = this._normValueFromMouse(c), e = this._valueMax() - this._valueMin() + 1, this.handles.each(function(b) {
            var c = Math.abs(d - k.values(b));
            (e > c || e === c && (b === k._lastChangedValue || k.values(b) === l.min)) && (e = c, f = a(this), g = b)
          }), h = this._start(b, g), h === !1
            ? !1
            : (
              this._mouseSliding = !0, this._handleIndex = g, f.addClass("ui-state-active").focus(), i = f.offset(), j = !a(b.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = j
              ? {
                left: 0,
                top: 0
              }
              : {
                left: b.pageX - i.left - f.width() / 2,
                top: b.pageY - i.top - f.height() / 2 - (parseInt(f.css("borderTopWidth"), 10) || 0) - (parseInt(f.css("borderBottomWidth"), 10) || 0) + (parseInt(f.css("marginTop"), 10) || 0)
              },
            this.handles.hasClass("ui-state-hover") || this._slide(b, g, d),
            this._animateOff = !0,
            !0))
      },
      _mouseStart: function() {
        return !0
      },
      _mouseDrag: function(a) {
        var b = {
            x: a.pageX,
            y: a.pageY
          },
          c = this._normValueFromMouse(b);
        return this._slide(a, this._handleIndex, c),
        !1
      },
      _mouseStop: function(a) {
        return this.handles.removeClass("ui-state-active"),
        this._mouseSliding = !1,
        this._stop(a, this._handleIndex),
        this._change(a, this._handleIndex),
        this._handleIndex = null,
        this._clickOffset = null,
        this._animateOff = !1,
        !1
      },
      _detectOrientation: function() {
        this.orientation = "vertical" === this.options.orientation
          ? "vertical"
          : "horizontal"
      },
      _normValueFromMouse: function(a) {
        var b,
          c,
          d,
          e,
          f;
        return "horizontal" === this.orientation
          ? (b = this.elementSize.width, c = a.x - this.elementOffset.left - (
            this._clickOffset
            ? this._clickOffset.left
            : 0))
          : (b = this.elementSize.height, c = a.y - this.elementOffset.top - (
            this._clickOffset
            ? this._clickOffset.top
            : 0)),
        d = c / b,
        d > 1 && (d = 1),
        0 > d && (d = 0),
        "vertical" === this.orientation && (d = 1 - d),
        e = this._valueMax() - this._valueMin(),
        f = this._valueMin() + d * e,
        this._trimAlignValue(f)
      },
      _start: function(a, b) {
        var c = {
          handle: this.handles[b],
          value: this.value()
        };
        return this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()),
        this._trigger("start", a, c)
      },
      _slide: function(a, b, c) {
        var d,
          e,
          f;
        this.options.values && this.options.values.length
          ? (d = this.values(
            b
            ? 0
            : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === b && c > d || 1 === b && d > c) && (c = d), c !== this.values(b) && (e = this.values(), e[b] = c, f = this._trigger("slide", a, {
            handle: this.handles[b],
            value: c,
            values: e
          }), d = this.values(
            b
            ? 0
            : 1), f !== !1 && this.values(b, c)))
          : c !== this.value() && (f = this._trigger("slide", a, {
            handle: this.handles[b],
            value: c
          }), f !== !1 && this.value(c))
      },
      _stop: function(a, b) {
        var c = {
          handle: this.handles[b],
          value: this.value()
        };
        this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()),
        this._trigger("stop", a, c)
      },
      _change: function(a, b) {
        if (!this._keySliding && !this._mouseSliding) {
          var c = {
            handle: this.handles[b],
            value: this.value()
          };
          this.options.values && this.options.values.length && (c.value = this.values(b), c.values = this.values()),
          this._lastChangedValue = b,
          this._trigger("change", a, c)
        }
      },
      value: function(a) {
        return arguments.length
          ? (this.options.value = this._trimAlignValue(a), this._refreshValue(), void this._change(null, 0))
          : this._value()
      },
      values: function(b, c) {
        var d,
          e,
          f;
        if (arguments.length > 1)
          return this.options.values[b] = this._trimAlignValue(c),
          this._refreshValue(),
          void this._change(null, b);
        if (!arguments.length)
          return this._values();
        if (!a.isArray(arguments[0]))
          return this.options.values && this.options.values.length
            ? this._values(b)
            : this.value();
        for (d = this.options.values, e = arguments[0], f = 0; d.length > f; f += 1)
          d[f] = this._trimAlignValue(e[f]),
          this._change(null, f);
        this._refreshValue()
      },
      _setOption: function(b, c) {
        var d,
          e = 0;
        switch ("range" === b && this.options.range === !0 && (
          "min" === c
          ? (this.options.value = this._values(0), this.options.values = null)
          : "max" === c && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), a.isArray(this.options.values) && (e = this.options.values.length), "disabled" === b && this.element.toggleClass("ui-state-disabled", !!c), this._super(b, c), b) {
          case "orientation":
            this._detectOrientation(),
            this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation),
            this._refreshValue(),
            this.handles.css(
              "horizontal" === c
              ? "bottom"
              : "left",
            "");
            break;
          case "value":
            this._animateOff = !0,
            this._refreshValue(),
            this._change(null, 0),
            this._animateOff = !1;
            break;
          case "values":
            for (this._animateOff = !0, this._refreshValue(), d = 0; e > d; d += 1)
              this._change(null, d);
            this._animateOff = !1;
            break;
          case "step":
          case "min":
          case "max":
            this._animateOff = !0,
            this._calculateNewMax(),
            this._refreshValue(),
            this._animateOff = !1;
            break;
          case "range":
            this._animateOff = !0,
            this._refresh(),
            this._animateOff = !1
        }
      },
      _value: function() {
        var a = this.options.value;
        return a = this._trimAlignValue(a)
      },
      _values: function(a) {
        var b,
          c,
          d;
        if (arguments.length)
          return b = this.options.values[a],
          b = this._trimAlignValue(b);
        if (this.options.values && this.options.values.length) {
          for (c = this.options.values.slice(), d = 0; c.length > d; d += 1)
            c[d] = this._trimAlignValue(c[d]);
          return c
        }
        return []
      },
      _trimAlignValue: function(a) {
        if (this._valueMin() >= a)
          return this._valueMin();
        if (a >= this._valueMax())
          return this._valueMax();
        var b = this.options.step > 0
            ? this.options.step
            : 1,
          c = (a - this._valueMin()) % b,
          d = a - c;
        return 2 * Math.abs(c) >= b && (
          d += c > 0
          ? b
          : -b),
        parseFloat(d.toFixed(5))
      },
      _calculateNewMax: function() {
        var a = (this.options.max - this._valueMin()) % this.options.step;
        this.max = this.options.max - a
      },
      _valueMin: function() {
        return this.options.min
      },
      _valueMax: function() {
        return this.max
      },
      _refreshValue: function() {
        var b,
          c,
          d,
          e,
          f,
          g = this.options.range,
          h = this.options,
          i = this,
          j = this._animateOff
            ? !1
            : h.animate,
          k = {};
        this.options.values && this.options.values.length
          ? this.handles.each(function(d) {
            c = 100 * ((i.values(d) - i._valueMin()) / (i._valueMax() - i._valueMin())),
            k[
              "horizontal" === i.orientation
                ? "left"
                : "bottom"
            ] = c + "%",
            a(this).stop(1, 1)[
              j
                ? "animate"
                : "css"
            ](k, h.animate),
            i.options.range === !0 && (
              "horizontal" === i.orientation
              ? (0 === d && i.range.stop(1, 1)[
                j
                  ? "animate"
                  : "css"
              ]({
                left: c + "%"
              }, h.animate), 1 === d && i.range[
                j
                  ? "animate"
                  : "css"
              ]({
                width: c - b + "%"
              }, {
                queue: !1,
                duration: h.animate
              }))
              : (0 === d && i.range.stop(1, 1)[
                j
                  ? "animate"
                  : "css"
              ]({
                bottom: c + "%"
              }, h.animate), 1 === d && i.range[
                j
                  ? "animate"
                  : "css"
              ]({
                height: c - b + "%"
              }, {
                queue: !1,
                duration: h.animate
              }))),
            b = c
          })
          : (
            d = this.value(), e = this._valueMin(), f = this._valueMax(), c = f !== e
            ? 100 * ((d - e) / (f - e))
            : 0,
          k[
            "horizontal" === this.orientation
              ? "left"
              : "bottom"
          ] = c + "%",
          this.handle.stop(1, 1)[
            j
              ? "animate"
              : "css"
          ](k, h.animate),
          "min" === g && "horizontal" === this.orientation && this.range.stop(1, 1)[
            j
              ? "animate"
              : "css"
          ]({
            width: c + "%"
          }, h.animate),
          "max" === g && "horizontal" === this.orientation && this.range[
            j
              ? "animate"
              : "css"
          ]({
            width: 100 - c + "%"
          }, {
            queue: !1,
            duration: h.animate
          }),
          "min" === g && "vertical" === this.orientation && this.range.stop(1, 1)[
            j
              ? "animate"
              : "css"
          ]({
            height: c + "%"
          }, h.animate),
          "max" === g && "vertical" === this.orientation && this.range[
            j
              ? "animate"
              : "css"
          ]({
            height: 100 - c + "%"
          }, {
            queue: !1,
            duration: h.animate
          }))
      },
      _handleEvents: {
        keydown: function(b) {
          var c,
            d,
            e,
            f,
            g = a(b.target).data("ui-slider-handle-index");
          switch (b.keyCode) {
            case a.ui.keyCode.HOME:
            case a.ui.keyCode.END:
            case a.ui.keyCode.PAGE_UP:
            case a.ui.keyCode.PAGE_DOWN:
            case a.ui.keyCode.UP:
            case a.ui.keyCode.RIGHT:
            case a.ui.keyCode.DOWN:
            case a.ui.keyCode.LEFT:
              if (b.preventDefault(), !this._keySliding && (this._keySliding = !0, a(b.target).addClass("ui-state-active"), c = this._start(b, g), c === !1))
                return
            }
          switch (
            f = this.options.step, d = e = this.options.values && this.options.values.length
            ? this.values(g)
            : this.value(),
          b.keyCode) {
            case a.ui.keyCode.HOME:
              e = this._valueMin();
              break;
            case a.ui.keyCode.END:
              e = this._valueMax();
              break;
            case a.ui.keyCode.PAGE_UP:
              e = this._trimAlignValue(d + (this._valueMax() - this._valueMin()) / this.numPages);
              break;
            case a.ui.keyCode.PAGE_DOWN:
              e = this._trimAlignValue(d - (this._valueMax() - this._valueMin()) / this.numPages);
              break;
            case a.ui.keyCode.UP:
            case a.ui.keyCode.RIGHT:
              if (d === this._valueMax())
                return;
              e = this._trimAlignValue(d + f);
              break;
            case a.ui.keyCode.DOWN:
            case a.ui.keyCode.LEFT:
              if (d === this._valueMin())
                return;
              e = this._trimAlignValue(d - f)
          }
          this._slide(b, g, e)
        },
        keyup: function(b) {
          var c = a(b.target).data("ui-slider-handle-index");
          this._keySliding && (this._keySliding = !1, this._stop(b, c), this._change(b, c), a(b.target).removeClass("ui-state-active"))
        }
      }
    })
  }),
  !function(a) {
    function b(a, b) {
      if (!(a.originalEvent.touches.length > 1)) {
        a.preventDefault();
        var c = a.originalEvent.changedTouches[0],
          d = document.createEvent("MouseEvents");
        d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null),
        a.target.dispatchEvent(d)
      }
    }
    if (a.support.touch = "ontouchend" in document, a.support.touch) {
      var c,
        d = a.ui.mouse.prototype,
        e = d._mouseInit,
        f = d._mouseDestroy;
      d._touchStart = function(a) {
        var d = this;
        !c && d._mouseCapture(a.originalEvent.changedTouches[0]) && (c = !0, d._touchMoved = !1, b(a, "mouseover"), b(a, "mousemove"), b(a, "mousedown"))
      },
      d._touchMove = function(a) {
        c && (this._touchMoved = !0, b(a, "mousemove"))
      },
      d._touchEnd = function(a) {
        c && (b(a, "mouseup"), b(a, "mouseout"), this._touchMoved || b(a, "click"), c = !1)
      },
      d._mouseInit = function() {
        var b = this;
        b.element.bind({
          touchstart: a.proxy(b, "_touchStart"),
          touchmove: a.proxy(b, "_touchMove"),
          touchend: a.proxy(b, "_touchEnd")
        }),
        e.call(b)
      },
      d._mouseDestroy = function() {
        var b = this;
        b.element.unbind({
          touchstart: a.proxy(b, "_touchStart"),
          touchmove: a.proxy(b, "_touchMove"),
          touchend: a.proxy(b, "_touchEnd")
        }),
        f.call(b)
      }
    }
  }(jQuery),
  !function(a) {
    "function" == typeof define && define.amd
      ? define(["jquery"], a)
      : a(jQuery)
  }(function(a) {
    "undefined" == typeof a && "undefined" != typeof window.jQuery && (a = window.jQuery);
    var b = {
        attr: function(a, b, c) {
          var d,
            e = {},
            f = this.msieversion(),
            g = new RegExp("^" + b, "i");
          if ("undefined" == typeof a || "undefined" == typeof a[0])
            return {};
          for (var h in a[0].attributes)
            if (d = a[0].attributes[h], "undefined" != typeof d && null !== d && (!f || f >= 8 || d.specified) && g.test(d.name)) {
              if ("undefined" != typeof c && new RegExp(c + "$", "i").test(d.name))
                return !0;
              e[this.camelize(d.name.replace(b, ""))] = this.deserializeValue(d.value)
            }
          return "undefined" == typeof c
            ? e
            : !1
        },
        setAttr: function(a, b, c, d) {
          a[0].setAttribute(this.dasherize(b + c), String(d))
        },
        get: function(a, b) {
          for (var c = 0, d = (b || "").split("."); this.isObject(a) || this.isArray(a);)
            if (a = a[d[c++]], c === d.length)
              return a;
        return void 0
        },
        hash: function(a) {
          return String(Math.random()).substring(
            2, a
            ? a + 2
            : 9)
        },
        isArray: function(a) {
          return "[object Array]" === Object.prototype.toString.call(a)
        },
        isObject: function(a) {
          return a === Object(a)
        },
        deserializeValue: function(b) {
          var c;
          try {
            return b
              ? "true" == b || (
                "false" == b
                ? !1
                : "null" == b
                  ? null
                  : isNaN(c = Number(b))
                    ? /^[\[\{]/.test(b)
                      ? a.parseJSON(b)
                      : b
                    : c)
              : b
          } catch (d) {
            return b
          }
        },
        camelize: function(a) {
          return a.replace(/-+(.)?/g, function(a, b) {
            return b
              ? b.toUpperCase()
              : ""
          })
        },
        dasherize: function(a) {
          return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        },
        msieversion: function() {
          var a = window.navigator.userAgent,
            b = a.indexOf("MSIE ");
          return b > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)
            ? parseInt(a.substring(b + 5, a.indexOf(".", b)), 10)
            : 0
        }
      },
      c = {
        namespace: "data-parsley-",
        inputs: "input, textarea, select",
        excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
        priorityEnabled: !0,
        uiEnabled: !0,
        validationThreshold: 3,
        focus: "first",
        trigger: !1,
        errorClass: "parsley-error",
        successClass: "parsley-success",
        classHandler: function() {},
        errorsContainer: function() {},
        errorsWrapper: '<ul class="parsley-errors-list"></ul>',
        errorTemplate: "<li></li>"
      },
      d = function() {};
    d.prototype = {
      asyncSupport: !1,
      actualizeOptions: function() {
        return this.options = this.OptionsFactory.get(this),
        this
      },
      validateThroughValidator: function(a, b, c) {
        return window.ParsleyValidator.validate.apply(window.ParsleyValidator, [a, b, c])
      },
      subscribe: function(b, c) {
        return a.listenTo(this, b.toLowerCase(), c),
        this
      },
      unsubscribe: function(b) {
        return a.unsubscribeTo(this, b.toLowerCase()),
        this
      },
      reset: function() {
        if ("ParsleyForm" !== this.__class__)
          return a.emit("parsley:field:reset", this);
        for (var b = 0; b < this.fields.length; b++)
          a.emit("parsley:field:reset", this.fields[b]);
        a.emit("parsley:form:reset", this)
      },
      destroy: function() {
        if ("ParsleyForm" !== this.__class__)
          return this.$element.removeData("Parsley"),
          this.$element.removeData("ParsleyFieldMultiple"),
          void a.emit("parsley:field:destroy", this);
        for (var b = 0; b < this.fields.length; b++)
          this.fields[b].destroy();
        this.$element.removeData("Parsley"),
        a.emit("parsley:form:destroy", this)
      }
    };
    var e = function() {
      var a = {},
        b = function(a) {
          this.__class__ = "Validator",
          this.__version__ = "1.0.0",
          this.options = a || {},
          this.bindingKey = this.options.bindingKey || "_validatorjsConstraint"
        };
      b.prototype = {
        constructor: b,
        validate: function(a, b, c) {
          if ("string" != typeof a && "object" != typeof a)
            throw new Error("You must validate an object or a string");
          return "string" == typeof a || g(a)
            ? this._validateString(a, b, c)
            : this.isBinded(a)
              ? this._validateBindedObject(a, b)
              : this._validateObject(a, b, c)
        },
        bind: function(a, b) {
          if ("object" != typeof a)
            throw new Error("Must bind a Constraint to an object");
          return a[this.bindingKey] = new c(b),
          this
        },
        unbind: function(a) {
          return "undefined" == typeof a._validatorjsConstraint
            ? this
            : (delete a[this.bindingKey], this)
        },
        isBinded: function(a) {
          return "undefined" != typeof a[this.bindingKey]
        },
        getBinded: function(a) {
          return this.isBinded(a)
            ? a[this.bindingKey]
            : null
        },
        _validateString: function(a, b, c) {
          var f,
            h = [];
          g(b) || (b = [b]);
          for (var i = 0; i < b.length; i++) {
            if (!(b[i] instanceof e))
              throw new Error("You must give an Assert or an Asserts array to validate a string");
            f = b[i].check(a, c),
            f instanceof d && h.push(f)
          }
          return h.length
            ? h
            : !0
        },
        _validateObject: function(a, b, d) {
          if ("object" != typeof b)
            throw new Error("You must give a constraint to validate an object");
          return b instanceof c
            ? b.check(a, d)
            : new c(b).check(a, d)
        },
        _validateBindedObject: function(a, b) {
          return a[this.bindingKey].check(a, b)
        }
      },
      b.errorCode = {
        must_be_a_string: "must_be_a_string",
        must_be_an_array: "must_be_an_array",
        must_be_a_number: "must_be_a_number",
        must_be_a_string_or_array: "must_be_a_string_or_array"
      };
      var c = function(a, b) {
        if (this.__class__ = "Constraint", this.options = b || {}, this.nodes = {}, a)
          try {
            this._bootstrap(a)
          } catch (c) {
            throw new Error("Should give a valid mapping object to Constraint", c, a)
          }
        };
      c.prototype = {
        constructor: c,
        check: function(a, b) {
          var c,
            d = {};
          for (var h in this.nodes) {
            for (
              var i = !1, j = this.get(h), k = g(j)
              ? j
              : [j],
            l = k.length - 1; l >= 0; l--)
              "Required" !== k[l].__class__ || (i = k[l].requiresValidation(b));
            if (this.has(h, a) || this.options.strict || i)
              try {
                this.has(
                  h, this.options.strict || i
                  ? a
                  : void 0) || (new e).HaveProperty(h).validate(a),
                c = this._check(h, a[h], b),
                (g(c) && c.length > 0 || !g(c) && !f(c)) && (d[h] = c)
              } catch (m) {
                d[h] = m
              }
            }
          return f(d)
            ? !0
            : d
        },
        add: function(a, b) {
          if (b instanceof e || g(b) && b[0] instanceof e)
            return this.nodes[a] = b,
            this;
          if ("object" == typeof b && !g(b))
            return this.nodes[a] = b instanceof c
              ? b
              : new c(b),
            this;
          throw new Error("Should give an Assert, an Asserts array, a Constraint", b)
        },
        has: function(a, b) {
          return b = "undefined" != typeof b
            ? b
            : this.nodes,
          "undefined" != typeof b[a]
        },
        get: function(a, b) {
          return this.has(a)
            ? this.nodes[a]
            : b || null
        },
        remove: function(a) {
          var b = [];
          for (var c in this.nodes)
            c !== a && (b[c] = this.nodes[c]);
          return this.nodes = b,
          this
        },
        _bootstrap: function(a) {
          if (a instanceof c)
            return this.nodes = a.nodes;
          for (var b in a)
            this.add(b, a[b])
        },
        _check: function(a, b, d) {
          if (this.nodes[a] instanceof e)
            return this._checkAsserts(b, [this.nodes[a]], d);
          if (g(this.nodes[a]))
            return this._checkAsserts(b, this.nodes[a], d);
          if (this.nodes[a] instanceof c)
            return this.nodes[a].check(b, d);
          throw new Error("Invalid node", this.nodes[a])
        },
        _checkAsserts: function(a, b, c) {
          for (var d, e = [], f = 0; f < b.length; f++)
            d = b[f].check(a, c),
            "undefined" != typeof d && !0 !== d && e.push(d);
          return e
        }
      };
      var d = function(a, b, c) {
        if (this.__class__ = "Violation", !(a instanceof e))
          throw new Error("Should give an assertion implementing the Assert interface");
        this.assert = a,
        this.value = b,
        "undefined" != typeof c && (this.violation = c)
      };
      d.prototype = {
        show: function() {
          var a = {
            assert: this.assert.__class__,
            value: this.value
          };
          return this.violation && (a.violation = this.violation),
          a
        },
        __toString: function() {
          return "undefined" != typeof this.violation && (this.violation = '", ' + this.getViolation().constraint + " expected was " + this.getViolation().expected),
          this.assert.__class__ + ' assert failed for "' + this.value + this.violation || ""
        },
        getViolation: function() {
          var a,
            b;
          for (a in this.violation)
            b = this.violation[a];
          return {constraint: a, expected: b}
        }
      };
      var e = function(a) {
        this.__class__ = "Assert",
        this.__parentClass__ = this.__class__,
        this.groups = [],
        "undefined" != typeof a && this.addGroup(a)
      };
      e.prototype = {
        construct: e,
        requiresValidation: function(a) {
          return a && !this.hasGroup(a)
            ? !1
            : !a && this.hasGroups()
              ? !1
              : !0
        },
        check: function(a, b) {
          if (this.requiresValidation(b))
            try {
              return this.validate(a, b)
            } catch (c) {
              return c
            }
          },
        hasGroup: function(a) {
          return g(a)
            ? this.hasOneOf(a)
            : "Any" === a
              ? !0
              : this.hasGroups()
                ? -1 !== this.groups.indexOf(a)
                : "Default" === a
        },
        hasOneOf: function(a) {
          for (var b = 0; b < a.length; b++)
            if (this.hasGroup(a[b]))
              return !0;
        return !1
        },
        hasGroups: function() {
          return this.groups.length > 0
        },
        addGroup: function(a) {
          return g(a)
            ? this.addGroups(a)
            : (this.hasGroup(a) || this.groups.push(a), this)
        },
        removeGroup: function(a) {
          for (var b = [], c = 0; c < this.groups.length; c++)
            a !== this.groups[c] && b.push(this.groups[c]);
          return this.groups = b,
          this
        },
        addGroups: function(a) {
          for (var b = 0; b < a.length; b++)
            this.addGroup(a[b]);
          return this
        },
        HaveProperty: function(a) {
          return this.__class__ = "HaveProperty",
          this.node = a,
          this.validate = function(a) {
            if ("undefined" == typeof a[this.node])
              throw new d(this, a, {value: this.node});
            return !0
          },
          this
        },
        Blank: function() {
          return this.__class__ = "Blank",
          this.validate = function(a) {
            if ("string" != typeof a)
              throw new d(this, a, {value: b.errorCode.must_be_a_string});
            if ("" !== a.replace(/^\s+/g, "").replace(/\s+$/g, ""))
              throw new d(this, a);
            return !0
          },
          this
        },
        Callback: function(a) {
          if (
            this.__class__ = "Callback", this.arguments = Array.prototype.slice.call(arguments), 1 === this.arguments.length
            ? this.arguments = []
            : this.arguments.splice(0, 1),
          "function" != typeof a)
            throw new Error("Callback must be instanciated with a function");
          return this.fn = a,
          this.validate = function(a) {
            var b = this.fn.apply(this, [a].concat(this.arguments));
            if (!0 !== b)
              throw new d(this, a, {result: b});
            return !0
          },
          this
        },
        Choice: function(a) {
          if (this.__class__ = "Choice", !g(a) && "function" != typeof a)
            throw new Error("Choice must be instanciated with an array or a function");
          return this.list = a,
          this.validate = function(a) {
            for (
              var b = "function" == typeof this.list
              ? this.list()
              : this.list,
            c = 0; c < b.length; c++)
              if (a === b[c])
                return !0;
          throw new d(this, a, {choices: b})
          },
          this
        },
        Collection: function(a) {
          return this.__class__ = "Collection",
          this.constraint = "undefined" != typeof a
            ? a instanceof e
              ? a
              : new c(a)
            : !1,
          this.validate = function(a, c) {
            var e,
              h = new b,
              i = 0,
              j = {},
              k = this.groups.length
                ? this.groups
                : c;
            if (!g(a))
              throw new d(this, array, {value: b.errorCode.must_be_an_array});
            for (var l = 0; l < a.length; l++)
              e = this.constraint
                ? h.validate(a[l], this.constraint, k)
                : h.validate(a[l], k),
              f(e) || (j[i] = e),
              i++;
            return f(j)
              ? !0
              : j
          },
          this
        },
        Count: function(a) {
          return this.__class__ = "Count",
          this.count = a,
          this.validate = function(a) {
            if (!g(a))
              throw new d(this, a, {value: b.errorCode.must_be_an_array});
            var c = "function" == typeof this.count
              ? this.count(a)
              : this.count;
            if (isNaN(Number(c)))
              throw new Error("Count must be a valid interger", c);
            if (c !== a.length)
              throw new d(this, a, {count: c});
            return !0
          },
          this
        },
        Email: function() {
          return this.__class__ = "Email",
          this.validate = function(a) {
            var c = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
            if ("string" != typeof a)
              throw new d(this, a, {value: b.errorCode.must_be_a_string});
            if (!c.test(a))
              throw new d(this, a);
            return !0
          },
          this
        },
        EqualTo: function(a) {
          if (this.__class__ = "EqualTo", "undefined" == typeof a)
            throw new Error("EqualTo must be instanciated with a value or a function");
          return this.reference = a,
          this.validate = function(a) {
            var b = "function" == typeof this.reference
              ? this.reference(a)
              : this.reference;
            if (b !== a)
              throw new d(this, a, {value: b});
            return !0
          },
          this
        },
        GreaterThan: function(a) {
          if (this.__class__ = "GreaterThan", "undefined" == typeof a)
            throw new Error("Should give a threshold value");
          return this.threshold = a,
          this.validate = function(a) {
            if ("" === a || isNaN(Number(a)))
              throw new d(this, a, {value: b.errorCode.must_be_a_number});
            if (this.threshold >= a)
              throw new d(this, a, {threshold: this.threshold});
            return !0
          },
          this
        },
        GreaterThanOrEqual: function(a) {
          if (this.__class__ = "GreaterThanOrEqual", "undefined" == typeof a)
            throw new Error("Should give a threshold value");
          return this.threshold = a,
          this.validate = function(a) {
            if ("" === a || isNaN(Number(a)))
              throw new d(this, a, {value: b.errorCode.must_be_a_number});
            if (this.threshold > a)
              throw new d(this, a, {threshold: this.threshold});
            return !0
          },
          this
        },
        InstanceOf: function(a) {
          if (this.__class__ = "InstanceOf", "undefined" == typeof a)
            throw new Error("InstanceOf must be instanciated with a value");
          return this.classRef = a,
          this.validate = function(a) {
            if (1 != a instanceof this.classRef)
              throw new d(this, a, {classRef: this.classRef});
            return !0
          },
          this
        },
        Length: function(a) {
          if (this.__class__ = "Length", !a.min && !a.max)
            throw new Error("Lenth assert must be instanciated with a { min: x, max: y } object");
          return this.min = a.min,
          this.max = a.max,
          this.validate = function(a) {
            if ("string" != typeof a && !g(a))
              throw new d(this, a, {value: b.errorCode.must_be_a_string_or_array});
            if ("undefined" != typeof this.min && this.min === this.max && a.length !== this.min)
              throw new d(this, a, {
                min: this.min,
                max: this.max
              });
            if ("undefined" != typeof this.max && a.length > this.max)
              throw new d(this, a, {max: this.max});
            if ("undefined" != typeof this.min && a.length < this.min)
              throw new d(this, a, {min: this.min});
            return !0
          },
          this
        },
        LessThan: function(a) {
          if (this.__class__ = "LessThan", "undefined" == typeof a)
            throw new Error("Should give a threshold value");
          return this.threshold = a,
          this.validate = function(a) {
            if ("" === a || isNaN(Number(a)))
              throw new d(this, a, {value: b.errorCode.must_be_a_number});
            if (this.threshold <= a)
              throw new d(this, a, {threshold: this.threshold});
            return !0
          },
          this
        },
        LessThanOrEqual: function(a) {
          if (this.__class__ = "LessThanOrEqual", "undefined" == typeof a)
            throw new Error("Should give a threshold value");
          return this.threshold = a,
          this.validate = function(a) {
            if ("" === a || isNaN(Number(a)))
              throw new d(this, a, {value: b.errorCode.must_be_a_number});
            if (this.threshold < a)
              throw new d(this, a, {threshold: this.threshold});
            return !0
          },
          this
        },
        NotNull: function() {
          return this.__class__ = "NotNull",
          this.validate = function(a) {
            if (null === a || "undefined" == typeof a)
              throw new d(this, a);
            return !0
          },
          this
        },
        NotBlank: function() {
          return this.__class__ = "NotBlank",
          this.validate = function(a) {
            if ("string" != typeof a)
              throw new d(this, a, {value: b.errorCode.must_be_a_string});
            if ("" === a.replace(/^\s+/g, "").replace(/\s+$/g, ""))
              throw new d(this, a);
            return !0
          },
          this
        },
        Null: function() {
          return this.__class__ = "Null",
          this.validate = function(a) {
            if (null !== a)
              throw new d(this, a);
            return !0
          },
          this
        },
        Range: function(a, b) {
          if (this.__class__ = "Range", "undefined" == typeof a || "undefined" == typeof b)
            throw new Error("Range assert expects min and max values");
          return this.min = a,
          this.max = b,
          this.validate = function(a) {
            try {
              return "string" == typeof a && isNaN(Number(a)) || g(a)
                ? (new e).Length({min: this.min, max: this.max}).validate(a)
                : (new e).GreaterThanOrEqual(this.min).validate(a) && (new e).LessThanOrEqual(this.max).validate(a),
              !0
            } catch (b) {
              throw new d(this, a, b.violation)
            }
            return !0
          },
          this
        },
        Regexp: function(a, c) {
          if (this.__class__ = "Regexp", "undefined" == typeof a)
            throw new Error("You must give a regexp");
          return this.regexp = a,
          this.flag = c || "",
          this.validate = function(a) {
            if ("string" != typeof a)
              throw new d(this, a, {value: b.errorCode.must_be_a_string});
            if (!new RegExp(this.regexp, this.flag).test(a))
              throw new d(this, a, {
                regexp: this.regexp,
                flag: this.flag
              });
            return !0
          },
          this
        },
        Required: function() {
          return this.__class__ = "Required",
          this.validate = function(a) {
            if ("undefined" == typeof a)
              throw new d(this, a);
            try {
              "string" == typeof a
                ? (new e).NotNull().validate(a) && (new e).NotBlank().validate(a)
                : !0 === g(a) && (new e).Length({min: 1}).validate(a)
            } catch (b) {
              throw new d(this, a)
            }
            return !0
          },
          this
        },
        Unique: function(a) {
          return this.__class__ = "Unique",
          "object" == typeof a && (this.key = a.key),
          this.validate = function(a) {
            var c,
              e = [];
            if (!g(a))
              throw new d(this, a, {value: b.errorCode.must_be_an_array});
            for (var f = 0; f < a.length; f++)
              if (
                c = "object" == typeof a[f]
                ? a[f][this.key]
                : a[f],
              "undefined" != typeof c) {
                if (-1 !== e.indexOf(c))
                  throw new d(this, a, {value: c});
                e.push(c)
              }
            return !0
          },
          this
        }
      },
      a.Assert = e,
      a.Validator = b,
      a.Violation = d,
      a.Constraint = c,
      Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
        if (null === this)
          throw new TypeError;
        var b = Object(this),
          c = b.length >>> 0;
        if (0 === c)
          return -1;
        var d = 0;
        if (arguments.length > 1 && (
          d = Number(arguments[1]), d != d
          ? d = 0
          : 0 !== d && 1 / 0 != d && d != -1 / 0 && (d = (d > 0 || -1) * Math.floor(Math.abs(d)))), d >= c)
          return -1;
        for (
          var e = d >= 0
          ? d
          : Math.max(c - Math.abs(d), 0); c > e; e++)
          if (e in b && b[e] === a)
            return e;
      return -1
      });
      var f = function(a) {
          for (var b in a)
            return !1;
          return !0
        },
        g = function(a) {
          return "[object Array]" === Object.prototype.toString.call(a)
        };
      return "function" == typeof define && define.amd
        ? define("vendors/validator.js/dist/validator", [], function() {
          return a
        })
        : "undefined" != typeof module && module.exports
          ? module.exports = a
          : window[
            "undefined" != typeof validatorjs_ns
              ? validatorjs_ns
              : "Validator"
          ] = a,
      a
    }();
    e = "undefined" != typeof e
      ? e
      : "undefined" != typeof module
        ? module.exports
        : null;
    var f = function(a, b) {
      this.__class__ = "ParsleyValidator",
      this.Validator = e,
      this.locale = "en",
      this.init(a || {}, b || {})
    };
    f.prototype = {
      init: function(b, c) {
        this.catalog = c;
        for (var d in b)
          this.addValidator(d, b[d].fn, b[d].priority, b[d].requirementsTransformer);
        a.emit("parsley:validator:init")
      },
      setLocale: function(a) {
        if ("undefined" == typeof this.catalog[a])
          throw new Error(a + " is not available in the catalog");
        return this.locale = a,
        this
      },
      addCatalog: function(a, b, c) {
        return "object" == typeof b && (this.catalog[a] = b),
        !0 === c
          ? this.setLocale(a)
          : this
      },
      addMessage: function(a, b, c) {
        return "undefined" == typeof this.catalog[a] && (this.catalog[a] = {}),
        this.catalog[a][b.toLowerCase()] = c,
        this
      },
      validate: function() {
        return (new this.Validator.Validator).validate.apply(new e.Validator, arguments)
      },
      addValidator: function(b, c, d, f) {
        return this.validators[b.toLowerCase()] = function(b) {
          return a.extend((new e.Assert).Callback(c, b), {
            priority: d,
            requirementsTransformer: f
          })
        },
        this
      },
      updateValidator: function(a, b, c, d) {
        return this.addValidator(a, b, c, d)
      },
      removeValidator: function(a) {
        return delete this.validators[a],
        this
      },
      getErrorMessage: function(a) {
        var b;
        return b = "type" === a.name
          ? this.catalog[this.locale][a.name][a.requirements]
          : this.formatMessage(this.catalog[this.locale][a.name], a.requirements),
        "" !== b
          ? b
          : this.catalog[this.locale].defaultMessage
      },
      formatMessage: function(a, b) {
        if ("object" == typeof b) {
          for (var c in b)
            a = this.formatMessage(a, b[c]);
          return a
        }
        return "string" == typeof a
          ? a.replace(new RegExp("%s", "i"), b)
          : ""
      },
      validators: {
        notblank: function() {
          return a.extend((new e.Assert).NotBlank(), {priority: 2})
        },
        required: function() {
          return a.extend((new e.Assert).Required(), {priority: 512})
        },
        type: function(b) {
          var c;
          switch (b) {
            case "email":
              c = (new e.Assert).Email();
              break;
            case "range":
            case "number":
              c = (new e.Assert).Regexp("^-?(?:\\d+|\\d{1,3}(?:,\\d{3})+)?(?:\\.\\d+)?$");
              break;
            case "integer":
              c = (new e.Assert).Regexp("^-?\\d+$");
              break;
            case "digits":
              c = (new e.Assert).Regexp("^\\d+$");
              break;
            case "alphanum":
              c = (new e.Assert).Regexp("^\\w+$", "i");
              break;
            case "url":
              c = (new e.Assert).Regexp("(https?:\\/\\/)?(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,4}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)", "i");
              break;
            default:
              throw new Error("validator type `" + b + "` is not supported")
          }
          return a.extend(c, {priority: 256})
        },
        pattern: function(b) {
          var c = "";
          return /^\/.*\/(?:[gimy]*)$/.test(b) && (c = b.replace(/.*\/([gimy]*)$/, "$1"), b = b.replace(new RegExp("^/(.*?)/" + c + "$"), "$1")),
          a.extend((new e.Assert).Regexp(b, c), {priority: 64})
        },
        minlength: function(b) {
          return a.extend((new e.Assert).Length({min: b}), {
            priority: 30,
            requirementsTransformer: function() {
              return "string" != typeof b || isNaN(b)
                ? b
                : parseInt(b, 10)
            }
          })
        },
        maxlength: function(b) {
          return a.extend((new e.Assert).Length({max: b}), {
            priority: 30,
            requirementsTransformer: function() {
              return "string" != typeof b || isNaN(b)
                ? b
                : parseInt(b, 10)
            }
          })
        },
        length: function(b) {
          return a.extend((new e.Assert).Length({min: b[0], max: b[1]}), {priority: 32})
        },
        mincheck: function(a) {
          return this.minlength(a)
        },
        maxcheck: function(a) {
          return this.maxlength(a)
        },
        check: function(a) {
          return this.length(a)
        },
        min: function(b) {
          return a.extend((new e.Assert).GreaterThanOrEqual(b), {
            priority: 30,
            requirementsTransformer: function() {
              return "string" != typeof b || isNaN(b)
                ? b
                : parseInt(b, 10)
            }
          })
        },
        max: function(b) {
          return a.extend((new e.Assert).LessThanOrEqual(b), {
            priority: 30,
            requirementsTransformer: function() {
              return "string" != typeof b || isNaN(b)
                ? b
                : parseInt(b, 10)
            }
          })
        },
        range: function(b) {
          return a.extend((new e.Assert).Range(b[0], b[1]), {
            priority: 32,
            requirementsTransformer: function() {
              for (var a = 0; a < b.length; a++)
                b[a] = "string" != typeof b[a] || isNaN(b[a])
                  ? b[a]
                  : parseInt(b[a], 10);
              return b
            }
          })
        },
        equalto: function(b) {
          return a.extend((new e.Assert).EqualTo(b), {
            priority: 256,
            requirementsTransformer: function() {
              return a(b).length
                ? a(b).val()
                : b
            }
          })
        }
      }
    };
    var g = function() {
      this.__class__ = "ParsleyUI"
    };
    g.prototype = {
      listen: function() {
        return a.listen("parsley:form:init", this, this.setupForm),
        a.listen("parsley:field:init", this, this.setupField),
        a.listen("parsley:field:validated", this, this.reflow),
        a.listen("parsley:form:validated", this, this.focus),
        a.listen("parsley:field:reset", this, this.reset),
        a.listen("parsley:form:destroy", this, this.destroy),
        a.listen("parsley:field:destroy", this, this.destroy),
        this
      },
      reflow: function(a) {
        if ("undefined" != typeof a._ui && !1 !== a._ui.active) {
          var b = this._diff(a.validationResult, a._ui.lastValidationResult);
          a._ui.lastValidationResult = a.validationResult,
          a._ui.validatedOnce = !0,
          this.manageStatusClass(a),
          this.manageErrorsMessages(a, b),
          this.actualizeTriggers(a),
          (b.kept.length || b.added.length) && "undefined" == typeof a._ui.failedOnce && this.manageFailingFieldTrigger(a)
        }
      },
      getErrorsMessages: function(a) {
        if (!0 === a.validationResult)
          return [];
        for (var b = [], c = 0; c < a.validationResult.length; c++)
          b.push(this._getErrorMessage(a, a.validationResult[c].assert));
        return b
      },
      manageStatusClass: function(a) {
        !0 === a.validationResult
          ? this._successClass(a)
          : a.validationResult.length > 0
            ? this._errorClass(a)
            : this._resetClass(a)
      },
      manageErrorsMessages: function(b, c) {
        if ("undefined" == typeof b.options.errorsMessagesDisabled) {
          if ("undefined" != typeof b.options.errorMessage)
            return c.added.length || c.kept.length
              ? (0 === b._ui.$errorsWrapper.find(".parsley-custom-error-message").length && b._ui.$errorsWrapper.append(a(b.options.errorTemplate).addClass("parsley-custom-error-message")), b._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(b.options.errorMessage))
              : b._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
          for (var d = 0; d < c.removed.length; d++)
            this.removeError(b, c.removed[d].assert.name, !0);
          for (d = 0; d < c.added.length; d++)
            this.addError(b, c.added[d].assert.name, void 0, c.added[d].assert, !0);
          for (d = 0; d < c.kept.length; d++)
            this.updateError(b, c.kept[d].assert.name, void 0, c.kept[d].assert, !0)
        }
      },
      addError: function(b, c, d, e, f) {
        b._ui.$errorsWrapper.addClass("filled").append(a(b.options.errorTemplate).addClass("parsley-" + c).html(d || this._getErrorMessage(b, e))),
        !0 !== f && this._errorClass(b)
      },
      updateError: function(a, b, c, d, e) {
        a._ui.$errorsWrapper.addClass("filled").find(".parsley-" + b).html(c || this._getErrorMessage(a, d)),
        !0 !== e && this._errorClass(a)
      },
      removeError: function(a, b, c) {
        a._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + b).remove(),
        !0 !== c && this.manageStatusClass(a)
      },
      focus: function(a) {
        if (!0 === a.validationResult || "none" === a.options.focus)
          return a._focusedField = null;
        a._focusedField = null;
        for (var b = 0; b < a.fields.length; b++)
          if (!0 !== a.fields[b].validationResult && a.fields[b].validationResult.length > 0 && "undefined" == typeof a.fields[b].options.noFocus) {
            if ("first" === a.options.focus)
              return a._focusedField = a.fields[b].$element,
              a._focusedField.focus();
            a._focusedField = a.fields[b].$element
          }
        return null === a._focusedField
          ? null
          : a._focusedField.focus()
      },
      _getErrorMessage: function(a, b) {
        var c = b.name + "Message";
        return "undefined" != typeof a.options[c]
          ? window.ParsleyValidator.formatMessage(a.options[c], b.requirements)
          : window.ParsleyValidator.getErrorMessage(b)
      },
      _diff: function(a, b, c) {
        for (var d = [], e = [], f = 0; f < a.length; f++) {
          for (var g = !1, h = 0; h < b.length; h++)
            if (a[f].assert.name === b[h].assert.name) {
              g = !0;
              break
            }
          g
            ? e.push(a[f])
            : d.push(a[f])
        }
        return {
          kept: e,
          added: d,
          removed: c
            ? []
            : this._diff(b, a, !0).added
        }
      },
      setupForm: function(b) {
        b.$element.on("submit.Parsley", !1, a.proxy(b.onSubmitValidate, b)),
        !1 !== b.options.uiEnabled && b.$element.attr("novalidate", "")
      },
      setupField: function(b) {
        var c = {
          active: !1
        };
        !1 !== b.options.uiEnabled && (c.active = !0, b.$element.attr(b.options.namespace + "id", b.__id__), c.$errorClassHandler = this._manageClassHandler(b), c.errorsWrapperId = "parsley-id-" + (
          "undefined" != typeof b.options.multiple
          ? "multiple-" + b.options.multiple
          : b.__id__), c.$errorsWrapper = a(b.options.errorsWrapper).attr("id", c.errorsWrapperId), c.lastValidationResult = [], c.validatedOnce = !1, c.validationInformationVisible = !1, b._ui = c, b.$element.is(b.options.excluded) || this._insertErrorWrapper(b), this.actualizeTriggers(b))
      },
      _manageClassHandler: function(b) {
        if ("string" == typeof b.options.classHandler && a(b.options.classHandler).length)
          return a(b.options.classHandler);
        var c = b.options.classHandler(b);
        return "undefined" != typeof c && c.length
          ? c
          : "undefined" == typeof b.options.multiple || b.$element.is("select")
            ? b.$element
            : b.$element.parent()
      },
      _insertErrorWrapper: function(b) {
        var c;
        if ("string" == typeof b.options.errorsContainer) {
          if (a(b.options.errorsContainer).length)
            return a(b.options.errorsContainer).append(b._ui.$errorsWrapper)
        } else
          "function" == typeof b.options.errorsContainer && (c = b.options.errorsContainer(b));
        return "undefined" != typeof c && c.length
          ? c.append(b._ui.$errorsWrapper)
          : "undefined" == typeof b.options.multiple
            ? b.$element.after(b._ui.$errorsWrapper)
            : b.$element.parent().after(b._ui.$errorsWrapper)
      },
      actualizeTriggers: function(b) {
        var c = this;
        if (
          b.options.multiple
          ? a("[" + b.options.namespace + 'multiple="' + b.options.multiple + '"]').each(function() {
            a(this).off(".Parsley")
          })
          : b.$element.off(".Parsley"),
        !1 !== b.options.trigger) {
          var d = b.options.trigger.replace(/^\s+/g, "").replace(/\s+$/g, "");
          "" !== d && (
            b.options.multiple
            ? a("[" + b.options.namespace + 'multiple="' + b.options.multiple + '"]').each(function() {
              a(this).on(d.split(" ").join(".Parsley ") + ".Parsley", !1, a.proxy(
                "function" == typeof b.eventValidate
                ? b.eventValidate
                : c.eventValidate,
              b))
            })
            : b.$element.on(d.split(" ").join(".Parsley ") + ".Parsley", !1, a.proxy(
              "function" == typeof b.eventValidate
              ? b.eventValidate
              : this.eventValidate,
            b)))
        }
      },
      eventValidate: function(a) {
        new RegExp("key").test(a.type) && !this._ui.validationInformationVisible && this.getValue().length <= this.options.validationThreshold || (this._ui.validatedOnce = !0, this.validate())
      },
      manageFailingFieldTrigger: function(b) {
        return b._ui.failedOnce = !0,
        b.options.multiple && a("[" + b.options.namespace + 'multiple="' + b.options.multiple + '"]').each(function() {
          return new RegExp("change", "i").test(a(this).parsley().options.trigger || "")
            ? void 0
            : a(this).on("change.ParsleyFailedOnce", !1, a.proxy(b.validate, b))
        }),
        b.$element.is("select") && !new RegExp("change", "i").test(b.options.trigger || "")
          ? b.$element.on("change.ParsleyFailedOnce", !1, a.proxy(b.validate, b))
          : new RegExp("keyup", "i").test(b.options.trigger || "")
            ? void 0
            : b.$element.on("keyup.ParsleyFailedOnce", !1, a.proxy(b.validate, b))
      },
      reset: function(b) {
        b.$element.off(".Parsley"),
        b.$element.off(".ParsleyFailedOnce"),
        "undefined" != typeof b._ui && "ParsleyForm" !== b.__class__ && (b._ui.$errorsWrapper.children().each(function() {
          a(this).remove()
        }), this._resetClass(b), b._ui.validatedOnce = !1, b._ui.lastValidationResult = [], b._ui.validationInformationVisible = !1)
      },
      destroy: function(a) {
        this.reset(a),
        "ParsleyForm" !== a.__class__ && ("undefined" != typeof a._ui && a._ui.$errorsWrapper.remove(), delete a._ui)
      },
      _successClass: function(a) {
        a._ui.validationInformationVisible = !0,
        a._ui.$errorClassHandler.removeClass(a.options.errorClass).addClass(a.options.successClass)
      },
      _errorClass: function(a) {
        a._ui.validationInformationVisible = !0,
        a._ui.$errorClassHandler.removeClass(a.options.successClass).addClass(a.options.errorClass)
      },
      _resetClass: function(a) {
        a._ui.$errorClassHandler.removeClass(a.options.successClass).removeClass(a.options.errorClass)
      }
    };
    var h = function(c, d, e, f) {
      this.__class__ = "OptionsFactory",
      this.__id__ = b.hash(4),
      this.formOptions = null,
      this.fieldOptions = null,
      this.staticOptions = a.extend(!0, {}, c, d, e, {namespace: f})
    };
    h.prototype = {
      get: function(a) {
        if ("undefined" == typeof a.__class__)
          throw new Error("Parsley Instance expected");
        switch (a.__class__) {
          case "Parsley":
            return this.staticOptions;
          case "ParsleyForm":
            return this.getFormOptions(a);
          case "ParsleyField":
          case "ParsleyFieldMultiple":
            return this.getFieldOptions(a);
          default:
            throw new Error("Instance " + a.__class__ + " is not supported")
        }
      },
      getFormOptions: function(c) {
        return this.formOptions = b.attr(c.$element, this.staticOptions.namespace),
        a.extend({}, this.staticOptions, this.formOptions)
      },
      getFieldOptions: function(c) {
        return this.fieldOptions = b.attr(c.$element, this.staticOptions.namespace),
        null === this.formOptions && "undefined" != typeof c.parent && (this.formOptions = this.getFormOptions(c.parent)),
        a.extend({}, this.staticOptions, this.formOptions, this.fieldOptions)
      }
    };
    var i = function(c, d) {
      if (this.__class__ = "ParsleyForm", this.__id__ = b.hash(4), "OptionsFactory" !== b.get(d, "__class__"))
        throw new Error("You must give an OptionsFactory instance");
      this.OptionsFactory = d,
      this.$element = a(c),
      this.validationResult = null,
      this.options = this.OptionsFactory.get(this)
    };
    i.prototype = {
      onSubmitValidate: function(b) {
        return this.validate(void 0, void 0, b),
        !1 === this.validationResult && b instanceof a.Event && (b.stopImmediatePropagation(), b.preventDefault()),
        this
      },
      validate: function(b, c, d) {
        this.submitEvent = d,
        this.validationResult = !0;
        var e = [];
        this._refreshFields(),
        a.emit("parsley:form:validate", this);
        for (var f = 0; f < this.fields.length; f++)
          (!b || this._isFieldInGroup(this.fields[f], b)) && (e = this.fields[f].validate(c), !0 !== e && e.length > 0 && this.validationResult && (this.validationResult = !1));
        return a.emit("parsley:form:validated", this),
        this.validationResult
      },
      isValid: function(a, b) {
        this._refreshFields();
        for (var c = 0; c < this.fields.length; c++)
          if ((!a || this._isFieldInGroup(this.fields[c], a)) && !1 === this.fields[c].isValid(b))
            return !1;
      return !0
      },
      _isFieldInGroup: function(c, d) {
        return b.isArray(c.options.group)
          ? -1 !== a.inArray(c.options.group, d)
          : c.options.group === d
      },
      _refreshFields: function() {
        return this.actualizeOptions()._bindFields()
      },
      _bindFields: function() {
        var a = this;
        return this.fields = [],
        this.fieldsMappedById = {},
        this.$element.find(this.options.inputs).each(function() {
          var b = new window.Parsley(this, {}, a);
          "ParsleyField" !== b.__class__ && "ParsleyFieldMultiple" !== b.__class__ || b.$element.is(b.options.excluded) || "undefined" == typeof a.fieldsMappedById[b.__class__ + "-" + b.__id__] && (a.fieldsMappedById[b.__class__ + "-" + b.__id__] = b, a.fields.push(b))
        }),
        this
      }
    };
    var j = function(c, d, e, f, g) {
        if (!new RegExp("ParsleyField").test(b.get(c, "__class__")))
          throw new Error("ParsleyField or ParsleyFieldMultiple instance expected");
        if ("function" != typeof window.ParsleyValidator.validators[d] && "Assert" !== window.ParsleyValidator.validators[d](e).__parentClass__)
          throw new Error("Valid validator expected");
        var h = function(a, c) {
          return "undefined" != typeof a.options[c + "Priority"]
            ? a.options[c + "Priority"]
            : b.get(window.ParsleyValidator.validators[c](e), "priority") || 2
        };
        return f = f || h(c, d),
        "function" == typeof window.ParsleyValidator.validators[d](e).requirementsTransformer && (e = window.ParsleyValidator.validators[d](e).requirementsTransformer()),
        a.extend(window.ParsleyValidator.validators[d](e), {
          name: d,
          requirements: e,
          priority: f,
          groups: [f],
          isDomConstraint: g || b.attr(c.$element, c.options.namespace, d)
        })
      },
      k = function(c, d, e) {
        this.__class__ = "ParsleyField",
        this.__id__ = b.hash(4),
        this.$element = a(c),
        "undefined" != typeof e
          ? (this.parent = e, this.OptionsFactory = this.parent.OptionsFactory, this.options = this.OptionsFactory.get(this))
          : (this.OptionsFactory = d, this.options = this.OptionsFactory.get(this)),
        this.constraints = [],
        this.constraintsByName = {},
        this.validationResult = [],
        this._bindConstraints()
      };
    k.prototype = {
      validate: function(b) {
        return this.value = this.getValue(),
        a.emit("parsley:field:validate", this),
        a.emit("parsley:field:" + (
          this.isValid(b, this.value)
          ? "success"
          : "error"), this),
        a.emit("parsley:field:validated", this),
        this.validationResult
      },
      isValid: function(a, b) {
        this.refreshConstraints();
        var c = this._getConstraintsSortedPriorities();
        if (b = b || this.getValue(), 0 === b.length && !this._isRequired() && "undefined" == typeof this.options.validateIfEmpty && !0 !== a)
          return this.validationResult = [];
        if (!1 === this.options.priorityEnabled)
          return !0 === (this.validationResult = this.validateThroughValidator(b, this.constraints, "Any"));
        for (var d = 0; d < c.length; d++)
          if (!0 !== (this.validationResult = this.validateThroughValidator(b, this.constraints, c[d])))
            return !1;
      return !0
      },
      getValue: function() {
        var a;
        return a = "undefined" != typeof this.options.value
          ? this.options.value
          : this.$element.val(),
        "undefined" == typeof a || null === a
          ? ""
          : !0 === this.options.trimValue
            ? a.replace(/^\s+|\s+$/g, "")
            : a
      },
      refreshConstraints: function() {
        return this.actualizeOptions()._bindConstraints()
      },
      addConstraint: function(a, b, c, d) {
        if (a = a.toLowerCase(), "function" == typeof window.ParsleyValidator.validators[a]) {
          var e = new j(this, a, b, c, d);
          "undefined" !== this.constraintsByName[e.name] && this.removeConstraint(e.name),
          this.constraints.push(e),
          this.constraintsByName[e.name] = e
        }
        return this
      },
      removeConstraint: function(a) {
        for (var b = 0; b < this.constraints.length; b++)
          if (a === this.constraints[b].name) {
            this.constraints.splice(b, 1);
            break
          }
        return this
      },
      updateConstraint: function(a, b, c) {
        return this.removeConstraint(a).addConstraint(a, b, c)
      },
      _bindConstraints: function() {
        for (var a = [], b = 0; b < this.constraints.length; b++)
          !1 === this.constraints[b].isDomConstraint && a.push(this.constraints[b]);
        this.constraints = a;
        for (var c in this.options)
          this.addConstraint(c, this.options[c]);
        return this._bindHtml5Constraints()
      },
      _bindHtml5Constraints: function() {
        (this.$element.hasClass("required") || this.$element.attr("required")) && this.addConstraint("required", !0, void 0, !0),
        "string" == typeof this.$element.attr("pattern") && this.addConstraint("pattern", this.$element.attr("pattern"), void 0, !0),
        "undefined" != typeof this.$element.attr("min") && "undefined" != typeof this.$element.attr("max")
          ? this.addConstraint("range", [
            this.$element.attr("min"), this.$element.attr("max")
          ], void 0, !0)
          : "undefined" != typeof this.$element.attr("min")
            ? this.addConstraint("min", this.$element.attr("min"), void 0, !0)
            : "undefined" != typeof this.$element.attr("max") && this.addConstraint("max", this.$element.attr("max"), void 0, !0);
        var a = this.$element.attr("type");
        return "undefined" == typeof a
          ? this
          : "number" === a
            ? this.addConstraint("type", "integer", void 0, !0)
            : new RegExp(a, "i").test("email url range")
              ? this.addConstraint("type", a, void 0, !0)
              : this
      },
      _isRequired: function() {
        return "undefined" == typeof this.constraintsByName.required
          ? !1
          : !1 !== this.constraintsByName.required.requirements
      },
      _getConstraintsSortedPriorities: function() {
        for (var a = [], b = 0; b < this.constraints.length; b++)
          -1 === a.indexOf(this.constraints[b].priority) && a.push(this.constraints[b].priority);
        return a.sort(function(a, b) {
          return b - a
        }),
        a
      }
    };
    var l = function() {
      this.__class__ = "ParsleyFieldMultiple"
    };
    l.prototype = {
      addElement: function(a) {
        return this.$elements.push(a),
        this
      },
      refreshConstraints: function() {
        var b;
        if (this.constraints = [], this.$element.is("select"))
          return this.actualizeOptions()._bindConstraints(),
          this;
        for (var c = 0; c < this.$elements.length; c++)
          if (a("html").has(this.$elements[c]).length) {
            b = this.$elements[c].data("ParsleyFieldMultiple").refreshConstraints().constraints;
            for (var d = 0; d < b.length; d++)
              this.addConstraint(b[d].name, b[d].requirements, b[d].priority, b[d].isDomConstraint)
          }
        else
          this.$elements.splice(c, 1);
        return this
      },
      getValue: function() {
        if ("undefined" != typeof this.options.value)
          return this.options.value;
        if (this.$element.is("input[type=radio]"))
          return a("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]:checked').val() || "";
        if (this.$element.is("input[type=checkbox]")) {
          var b = [];
          return a("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]:checked').each(function() {
            b.push(a(this).val())
          }),
          b.length
            ? b
            : []
        }
        return this.$element.is("select") && null === this.$element.val()
          ? []
          : this.$element.val()
      },
      _init: function(a) {
        return this.$elements = [this.$element],
        this.options.multiple = a,
        this
      }
    };
    var m = a({}),
      n = {};
    a.listen = function(a) {
      if ("undefined" == typeof n[a] && (n[a] = []), "function" == typeof arguments[1])
        return n[a].push({fn: arguments[1]});
      if ("object" == typeof arguments[1] && "function" == typeof arguments[2])
        return n[a].push({fn: arguments[2], ctxt: arguments[1]});
      throw new Error("Wrong parameters")
    },
    a.listenTo = function(a, b, c) {
      if ("undefined" == typeof n[b] && (n[b] = []), !(a instanceof k || a instanceof i))
        throw new Error("Must give Parsley instance");
      if ("string" != typeof b || "function" != typeof c)
        throw new Error("Wrong parameters");
      n[b].push({instance: a, fn: c})
    },
    a.unsubscribe = function(a, b) {
      if ("undefined" != typeof n[a]) {
        if ("string" != typeof a || "function" != typeof b)
          throw new Error("Wrong arguments");
        for (var c = 0; c < n[a].length; c++)
          if (n[a][c].fn === b)
            return n[a].splice(c, 1)
      }
    },
    a.unsubscribeTo = function(a, b) {
      if ("undefined" != typeof n[b]) {
        if (!(a instanceof k || a instanceof i))
          throw new Error("Must give Parsley instance");
        for (var c = 0; c < n[b].length; c++)
          if ("undefined" != typeof n[b][c].instance && n[b][c].instance.__id__ === a.__id__)
            return n[b].splice(c, 1)
      }
    },
    a.unsubscribeAll = function(a) {
      "undefined" != typeof n[a] && delete n[a]
    },
    a.emit = function(a, b) {
      if ("undefined" != typeof n[a])
        for (var c = 0; c < n[a].length; c++)
          if ("undefined" != typeof n[a][c].instance) {
            if (b instanceof k || b instanceof i)
              if (n[a][c].instance.__id__ !== b.__id__) {
                if (n[a][c].instance instanceof i && b instanceof k)
                  for (var d = 0; d < n[a][c].instance.fields.length; d++)
                    if (n[a][c].instance.fields[d].__id__ === b.__id__) {
                      n[a][c].fn.apply(m, Array.prototype.slice.call(arguments, 1));
                      continue
                    }
                  } else
                n[a][c].fn.apply(m, Array.prototype.slice.call(arguments, 1))
          }
        else
        n[a][c].fn.apply(
          "undefined" != typeof n[a][c].ctxt
          ? n[a][c].ctxt
          : m,
        Array.prototype.slice.call(arguments, 1))
    },
    a.subscribed = function() {
      return n
    },
    window.ParsleyConfig = window.ParsleyConfig || {},
    window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {},
    window.ParsleyConfig.i18n.en = a.extend(window.ParsleyConfig.i18n.en || {}, {
      defaultMessage: "This value seems to be invalid.",
      type: {
        email: "This value should be a valid email.",
        url: "This value should be a valid url.",
        number: "This value should be a valid number.",
        integer: "This value should be a valid integer.",
        digits: "This value should be digits.",
        alphanum: "This value should be alphanumeric."
      },
      notblank: "This value should not be blank.",
      required: "This value is required.",
      pattern: "This value seems to be invalid.",
      min: "This value should be greater than or equal to %s.",
      max: "This value should be lower than or equal to %s.",
      range: "This value should be between %s and %s.",
      minlength: "This value is too short. It should have %s characters or more.",
      maxlength: "This value is too long. It should have %s characters or fewer.",
      length: "This value length is invalid. It should be between %s and %s characters long.",
      mincheck: "You must select at least %s choices.",
      maxcheck: "You must select %s choices or fewer.",
      check: "You must select between %s and %s choices.",
      equalto: "This value should be the same."
    }),
    "undefined" != typeof window.ParsleyValidator && window.ParsleyValidator.addCatalog("en", window.ParsleyConfig.i18n.en, !0);
    var o = function(c, d, e) {
      if (this.__class__ = "Parsley", this.__version__ = "2.0.5", this.__id__ = b.hash(4), "undefined" == typeof c)
        throw new Error("You must give an element");
      if ("undefined" != typeof e && "ParsleyForm" !== e.__class__)
        throw new Error("Parent instance must be a ParsleyForm instance");
      return this.init(a(c), d, e)
    };
    o.prototype = {
      init: function(a, d, e) {
        if (!a.length)
          throw new Error("You must bind Parsley on an existing element.");
        if (this.$element = a, this.$element.data("Parsley")) {
          var f = this.$element.data("Parsley");
          return "undefined" != typeof e && (f.parent = e),
          f
        }
        return this.OptionsFactory = new h(c, b.get(window, "ParsleyConfig") || {}, d, this.getNamespace(d)),
        this.options = this.OptionsFactory.get(this),
        this.$element.is("form") || b.attr(this.$element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs)
          ? this.bind("parsleyForm")
          : this.$element.is(this.options.inputs) && !this.$element.is(this.options.excluded)
            ? this.isMultiple()
              ? this.handleMultiple(e)
              : this.bind("parsleyField", e)
            : this
      },
      isMultiple: function() {
        return this.$element.is("input[type=radio], input[type=checkbox]") && "undefined" == typeof this.options.multiple || this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")
      },
      handleMultiple: function(c) {
        var d,
          e,
          f,
          g = this;
        if (
          this.options = a.extend(
            this.options, c
            ? c.OptionsFactory.get(c)
            : {},
          b.attr(this.$element, this.options.namespace)), this.options.multiple
          ? e = this.options.multiple
          : "undefined" != typeof this.$element.attr("name") && this.$element.attr("name").length
            ? e = d = this.$element.attr("name")
            : "undefined" != typeof this.$element.attr("id") && this.$element.attr("id").length && (e = this.$element.attr("id")),
        this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple"))
          return this.bind("parsleyFieldMultiple", c, e || this.__id__);
        if ("undefined" == typeof e)
          return this;
        if (e = e.replace(/(:|\.|\[|\]|\$)/g, ""), "undefined" != typeof d && a('input[name="' + d + '"]').each(function() {
          a(this).is("input[type=radio], input[type=checkbox]") && a(this).attr(g.options.namespace + "multiple", e)
        }), a("[" + this.options.namespace + "multiple=" + e + "]").length)
          for (var h = 0; h < a("[" + this.options.namespace + "multiple=" + e + "]").length; h++)
            if ("undefined" != typeof a(a("[" + this.options.namespace + "multiple=" + e + "]").get(h)).data("Parsley")) {
              f = a(a("[" + this.options.namespace + "multiple=" + e + "]").get(h)).data("Parsley"),
              this.$element.data("ParsleyFieldMultiple") || (f.addElement(this.$element), this.$element.attr(this.options.namespace + "id", f.__id__));
              break
            }
          return this.bind("parsleyField", c, e, !0),
        f || this.bind("parsleyFieldMultiple", c, e)
      },
      getNamespace: function(a) {
        return "undefined" != typeof this.$element.data("parsleyNamespace")
          ? this.$element.data("parsleyNamespace")
          : "undefined" != typeof b.get(a, "namespace")
            ? a.namespace
            : "undefined" != typeof b.get(window, "ParsleyConfig.namespace")
              ? window.ParsleyConfig.namespace
              : c.namespace
      },
      bind: function(c, e, f, g) {
        var h;
        switch (c) {
          case "parsleyForm":
            h = a.extend(new i(this.$element, this.OptionsFactory), new d, window.ParsleyExtend)._bindFields();
            break;
          case "parsleyField":
            h = a.extend(new k(this.$element, this.OptionsFactory, e), new d, window.ParsleyExtend);
            break;
          case "parsleyFieldMultiple":
            h = a.extend(new k(this.$element, this.OptionsFactory, e), new d, new l, window.ParsleyExtend)._init(f);
            break;
          default:
            throw new Error(c + "is not a supported Parsley type")
        }
        return "undefined" != typeof f && b.setAttr(this.$element, this.options.namespace, "multiple", f),
        "undefined" != typeof g
          ? (this.$element.data("ParsleyFieldMultiple", h), h)
          : (new RegExp("ParsleyF", "i").test(h.__class__) && (this.$element.data("Parsley", h), a.emit("parsley:" + (
            "parsleyForm" === c
            ? "form"
            : "field") + ":init", h)), h)
      }
    },
    a.fn.parsley = a.fn.psly = function(b) {
      if (this.length > 1) {
        var c = [];
        return this.each(function() {
          c.push(a(this).parsley(b))
        }),
        c
      }
      return a(this).length
        ? new o(this, b)
        : []
    },
    window.ParsleyUI = "function" == typeof b.get(window, "ParsleyConfig.ParsleyUI")
      ? (new window.ParsleyConfig.ParsleyUI).listen()
      : (new g).listen(),
    "undefined" == typeof window.ParsleyExtend && (window.ParsleyExtend = {}),
    "undefined" == typeof window.ParsleyConfig && (window.ParsleyConfig = {}),
    window.Parsley = window.psly = o,
    window.ParsleyUtils = b,
    window.ParsleyValidator = new f(window.ParsleyConfig.validators, window.ParsleyConfig.i18n),
    !1 !== b.get(window, "ParsleyConfig.autoBind") && a(document).ready(function() {
      a("[data-parsley-validate]").length && a("[data-parsley-validate]").parsley()
    })
  }),
  function(a) {
    "function" == typeof define && define.amd
      ? define(["jquery"], a)
      : "object" == typeof exports
        ? module.exports = a(require("jquery"))
        : a(jQuery || Zepto)
  }(function(a) {
    var b = function(b, c, d) {
      b = a(b);
      var e,
        f = this,
        g = b.val();
      c = "function" == typeof c
        ? c(b.val(), void 0, b, d)
        : c;
      var h = {
        invalid: [],
        getCaret: function() {
          try {
            var a,
              c = 0,
              d = b.get(0),
              e = document.selection,
              f = d.selectionStart;
            return e && -1 === navigator.appVersion.indexOf("MSIE 10")
              ? (a = e.createRange(), a.moveStart(
                "character", b.is("input")
                ? -b.val().length
                : -b.text().length), c = a.text.length)
              : (f || "0" === f) && (c = f),
            c
          } catch (g) {}
        },
        setCaret: function(a) {
          try {
            if (b.is(":focus")) {
              var c,
                d = b.get(0);
              d.setSelectionRange
                ? d.setSelectionRange(a, a)
                : d.createTextRange && (c = d.createTextRange(), c.collapse(!0), c.moveEnd("character", a), c.moveStart("character", a), c.select())
            }
          } catch (e) {}
        },
        events: function() {
          b.on("keyup.mask", h.behaviour).on("paste.mask drop.mask", function() {
            setTimeout(function() {
              b.keydown().keyup()
            }, 100)
          }).on("change.mask", function() {
            b.data("changed", !0)
          }).on("blur.mask", function() {
            g === b.val() || b.data("changed") || b.triggerHandler("change"),
            b.data("changed", !1)
          }).on("keydown.mask, blur.mask", function() {
            g = b.val()
          }).on("focus.mask", function(b) {
            !0 === d.selectOnFocus && a(b.target).select()
          }).on("focusout.mask", function() {
            d.clearIfNotMatch && !e.test(h.val()) && h.val("")
          })
        },
        getRegexMask: function() {
          for (var a, b, d, e, g = [], h = 0; h < c.length; h++)
            (a = f.translation[c.charAt(h)])
              ? (
                b = a.pattern.toString().replace(/.{1}$|^.{1}/g, ""), d = a.optional, (a = a.recursive)
                ? (g.push(c.charAt(h)), e = {
                  digit: c.charAt(h),
                  pattern: b
                })
                : g.push(
                  d || a
                  ? b + "?"
                  : b))
              : g.push(c.charAt(h).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
          return g = g.join(""),
          e && (g = g.replace(RegExp("(" + e.digit + "(.*" + e.digit + ")?)"), "($1)?").replace(RegExp(e.digit, "g"), e.pattern)),
          RegExp(g)
        },
        destroyEvents: function() {
          b.off("keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
        },
        val: function(a) {
          var c = b.is("input")
            ? "val"
            : "text";
          return 0 < arguments.length
            ? (b[c]() !== a && b[c](a), c = b)
            : c = b[c](),
          c
        },
        getMCharsBeforeCount: function(a, b) {
          for (var d = 0, e = 0, g = c.length; g > e && a > e; e++)
            f.translation[c.charAt(e)] || (
              a = b
              ? a + 1
              : a,
            d++);
          return d
        },
        caretPos: function(a, b, d, e) {
          return f.translation[c.charAt(Math.min(a - 1, c.length - 1))]
            ? Math.min(a + d - b - e, d)
            : h.caretPos(a + 1, b, d, e)
        },
        behaviour: function(b) {
          b = b || window.event,
          h.invalid = [];
          var c = b.keyCode || b.which;
          if (-1 === a.inArray(c, f.byPassKeys)) {
            var d = h.getCaret(),
              e = h.val().length,
              g = e > d,
              i = h.getMasked(),
              j = i.length,
              k = h.getMCharsBeforeCount(j - 1) - h.getMCharsBeforeCount(e - 1);
            return h.val(i),
            !g || 65 === c && b.ctrlKey || (8 !== c && 46 !== c && (d = h.caretPos(d, e, j, k)), h.setCaret(d)),
            h.callbacks(b)
          }
        },
        getMasked: function(a) {
          var b,
            e,
            g = [],
            i = h.val(),
            j = 0,
            k = c.length,
            l = 0,
            m = i.length,
            n = 1,
            o = "push",
            p = -1;
          for (
            d.reverse
            ? (o = "unshift", n = -1, b = 0, j = k - 1, l = m - 1, e = function() {
              return j > -1 && l > -1
            })
            : (b = k - 1, e = function() {
              return k > j && m > l
            }); e();) {
            var q = c.charAt(j),
              r = i.charAt(l),
              s = f.translation[q];
            s
              ? (
                r.match(s.pattern)
                ? (g[o](r), s.recursive && (
                  -1 === p
                  ? p = j
                  : j === b && (j = p - n),
                b === p && (j -= n)), j += n)
                : s.optional
                  ? (j += n, l -= n)
                  : s.fallback
                    ? (g[o](s.fallback), j += n, l -= n)
                    : h.invalid.push({p: l, v: r, e: s.pattern}),
              l += n)
              : (a || g[o](q), r === q && (l += n), j += n)
          }
          return a = c.charAt(b),
          k !== m + 1 || f.translation[a] || g.push(a),
          g.join("")
        },
        callbacks: function(a) {
          var e = h.val(),
            f = e !== g,
            i = [
              e, a, b, d
            ],
            j = function(a, b, c) {
              "function" == typeof d[a] && b && d[a].apply(this, c)
            };
          j("onChange", !0 === f, i),
          j("onKeyPress", !0 === f, i),
          j("onComplete", e.length === c.length, i),
          j("onInvalid", 0 < h.invalid.length, [e, a, b, h.invalid, d])
        }
      };
      f.mask = c,
      f.options = d,
      f.remove = function() {
        var a = h.getCaret();
        return h.destroyEvents(),
        h.val(f.getCleanVal()),
        h.setCaret(a - h.getMCharsBeforeCount(a)),
        b
      },
      f.getCleanVal = function() {
        return h.getMasked(!0)
      },
      f.init = function(c) {
        c = c || !1,
        d = d || {},
        f.byPassKeys = a.jMaskGlobals.byPassKeys,
        f.translation = a.jMaskGlobals.translation,
        f.translation = a.extend({}, f.translation, d.translation),
        f = a.extend(!0, {}, f, d),
        e = h.getRegexMask(),
        !1 === c
          ? (d.placeholder && b.attr("placeholder", d.placeholder), b.attr("autocomplete", "off"), h.destroyEvents(), h.events(), c = h.getCaret(), h.val(h.getMasked()), h.setCaret(c + h.getMCharsBeforeCount(c, !0)))
          : (h.events(), h.val(h.getMasked()))
      },
      f.init(!b.is("input"))
    };
    a.maskWatchers = {};
    var c = function() {
        var c = a(this),
          e = {},
          f = c.attr("data-mask");
        return c.attr("data-mask-reverse") && (e.reverse = !0),
        c.attr("data-mask-clearifnotmatch") && (e.clearIfNotMatch = !0),
        "true" === c.attr("data-mask-selectonfocus") && (e.selectOnFocus = !0),
        d(c, f, e)
          ? c.data("mask", new b(this, f, e))
          : void 0
      },
      d = function(b, c, d) {
        d = d || {};
        var e = a(b).data("mask"),
          f = JSON.stringify;
        b = a(b).val() || a(b).text();
        try {
          return "function" == typeof c && (c = c(b)),
          "object" != typeof e || f(e.options) !== f(d) || e.mask !== c
        } catch (g) {}
      };
    a.fn.mask = function(c, e) {
      e = e || {};
      var f = this.selector,
        g = a.jMaskGlobals,
        h = a.jMaskGlobals.watchInterval,
        i = function() {
          return d(this, c, e)
            ? a(this).data("mask", new b(this, c, e))
            : void 0
        };
      return a(this).each(i),
      f && "" !== f && g.watchInputs && (clearInterval(a.maskWatchers[f]), a.maskWatchers[f] = setInterval(function() {
        a(document).find(f).each(i)
      }, h)),
      this
    },
    a.fn.unmask = function() {
      return clearInterval(a.maskWatchers[this.selector]),
      delete a.maskWatchers[this.selector],
      this.each(function() {
        var b = a(this).data("mask");
        b && b.remove().removeData("mask")
      })
    },
    a.fn.cleanVal = function() {
      return this.data("mask").getCleanVal()
    },
    a.applyDataMask = function(b) {
      b = b || a.jMaskGlobals.maskElements,
      (
        b instanceof a
        ? b
        : a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(c)
    };
    var e = {
      maskElements: "input,td,span,div",
      dataMaskAttr: "*[data-mask]",
      dataMask: !0,
      watchInterval: 300,
      watchInputs: !0,
      watchDataMask: !1,
      byPassKeys: [
        9,
        16,
        17,
        18,
        36,
        37,
        38,
        39,
        40,
        91
      ],
      translation: {
        0: {
          pattern: /\d/
        },
        9: {
          pattern: /\d/,
          optional: !0
        },
        "#": {
          pattern: /\d/,
          recursive: !0
        },
        A: {
          pattern: /[a-zA-Z0-9]/
        },
        S: {
          pattern: /[a-zA-Z]/
        }
      }
    };
    a.jMaskGlobals = a.jMaskGlobals || {},
    e = a.jMaskGlobals = a.extend(!0, {}, e, a.jMaskGlobals),
    e.dataMask && a.applyDataMask(),
    setInterval(function() {
      a.jMaskGlobals.watchDataMask && a.applyDataMask()
    }, e.watchInterval)
  });
  var APP = window.APP = window.APP || {};
  APP.core = {},
  APP.core.controller = function() {
    var a = "",
      b = function(b) {
        a = b
      },
      c = function() {
        return a
      },
      d = function() {
        var a = APP,
          b = c(),
          d = "init";
        "" !== b && a[b] && "function" == typeof a[b][d] && a[b][d]()
      },
      e = function() {
        console.log("APP.controller.init");
        var a = $(".js-page-controller-action").first().data("actionName");
        console.log("APP.controller.init | route name = " + a),
        b(a),
        d();
        for (var c = $(".js-component-controller-action"), e = 0; e < c.length; e++)
          a = $(c[e]).data("actionName"),
          b(a),
          d(),
          console.log("APP.controller.init | controller name = " + a)
      };
    return {init: e}
  }();
  
  var APP = window.APP = window.APP || {};
  !function() {
    for (var a, b = function() {}, c = [
      "assert",
      "clear",
      "count",
      "debug",
      "dir",
      "dirxml",
      "error",
      "exception",
      "group",
      "groupCollapsed",
      "groupEnd",
      "info",
      "log",
      "markTimeline",
      "profile",
      "profileEnd",
      "table",
      "time",
      "timeEnd",
      "timeStamp",
      "trace",
      "warn"
    ], d = c.length, e = window.console = window.console || {}; d--;)
      a = c[d],
      e[a] || (e[a] = b);
    $(".iosClick").click(function() {
      return e.log("true"),
      !1
    });
    var f = navigator.userAgent;
    /(iPhone|iPad|iPod)/.test(f) && f.indexOf("OS 6") > 0 && $("html").addClass("ios6"),
    /(iPhone|iPad|iPod)/.test(f) && f.indexOf("OS 7") > 0 && $("html").addClass("ios7"),
    (/MSIE (\d+\.\d+);/.test(f) || /Trident.*rv[ :]*11\./.test(f)) && $("html").addClass("ie"),
    f.indexOf("Mozilla/5.0") > -1 && f.indexOf("Android ") > -1 && f.indexOf("AppleWebKit") > -1 && ($("html").addClass("android"), -1 === f.indexOf("Chrome") && $("html").addClass("anbrowser")),
    -1 !== navigator.userAgent.indexOf("Safari") && -1 === navigator.userAgent.indexOf("Chrome") && $("html").addClass("safari");
    var g = $("html");
    g.hasClass("lt-ie9") && (setTimeout(function() {
      g.addClass("ie8FontFix")
    }, 2e3), setTimeout(function() {
      $(".icon, .subnav__link:after").each(function() {})
    }, 2e3), setTimeout(function() {
      $("body").scrollTo(0)
    }, 3e3)),
    $(".btnborder-number").on("click", function(a) {
      a.preventDefault()
    })
  }(),
  APP.util = {},
  APP.util = {
    isTouchDevice: !1,
    isiOS7: !1,
    SitecoreMode: "visitor",
    init: function() {
      console.log("APP.util.init");
      var a = function() {
          try {
            return document.createEvent("TouchEvent"),
            !0
          } catch (a) {
            return !1
          }
        },
        b = function() {
          return window.Sitecore
            ? window.Sitecore.PageModes.PageEditor
              ? "pageeditor"
              : "preview"
            : "visitor"
        },
        c = function() {
          return $("html").hasClass("ios7")
        },
        d = {
          phone: function() {
            var a = 1,
              b = $(".telephone-bak");
            b.off("keypress").on("keypress", function(b) {
              d.keycode($(this), b, a)
            }),
            b.off("focusout").on("focusout", function() {
              var b = $(this).val().split("");
              14 !== b.length && ($(this).val(""), a = 1)
            })
          },
          keycode: function(a, b, c) {
            var d = this,
              e = b.which;
            if (console.log(e), e >= 1) {
              if (-1 !== $.inArray(e, [8, 9, 27, 13, 190]) || 65 === e && b.ctrlKey === !0 || e >= 35 && 39 >= e)
                return;
              c = a.val().length;
              var f = String.fromCharCode(e),
                g = /^[0-9]+$/.test(f);
              !g || c > 13 || "" === e || 46 === e || 40 === e || 41 === e
                ? b.preventDefault()
                : d.maskArea(a, c)
            }
          },
          maskArea: function(a, b) {
            var c = a.val();
            1 === b
              ? c = "(" + c
              : 4 === b
                ? c += ") "
                : 9 === b && (c += "-"),
            a.val(c)
          }
        },
        e = function() {
          APP.util.isTouchDevice = a(),
          APP.util.SitecoreMode = b(),
          APP.util.isiOS7 = c()
        };
      return {run: e, maskFormPhone: d.phone}
    }(),
    formFocusFirstField: function(a) {
      var b = $(a).find('input[type="text"]:visible').first();
      b.attr("autofocus", "autofocus"),
      b.trigger("touchstart"),
      b.focus()
    }
  };
  
  var APP = window.APP = window.APP || {};
  APP.global = function() {
    var a = function(a, b, c) {
        var d = "";
        if (c && c > 0) {
          var e = new Date;
          e.setTime(e.getTime() + 24 * c * 60 * 60 * 1e3),
          d = "; expires=" + e.toGMTString()
        }
        document.cookie = a + "=" + b + d + "; path=/"
      },
      b = function(a) {
        var b,
          c = document.cookie.split(";");
        return $.each(c, function(c, d) {
          d.match(a) && $.trim(d.split("=")[0]) === a && (b = d.split("=")[1])
        }),
        b
      },
      c = function(a) {
        this.set(a, "", -1)
      },
      d = function() {},
      e = function() {
        APP.core.controller.init()
      },
      f = function() {
        APP.util.init.run(),
        d(),
        e()
      };
    return {init: f, setCookie: a, getCookie: b, removeCookie: c, initGlobalComponents: d}
  }(),
  
  $(document).ready(APP.global.init);
  
  var APP = window.APP = window.APP || {},
    win = $(window),
    mininav = !1;
  APP.navigation = function() {
    var a = function() {
        return "function" == typeof window.matchMedia
          ? window.matchMedia("(min-width:768px)").matches
          : !1
      },
      b = $(".header__item--menu"),
      c = $(".navigation"),
      d = $(".wrapper"),
      e = $(".header"),
      f = $(".minilink"),
      g = $(".navigation__item--tab .item--main"),
      h = $(".navigation__subnav"),
      i = $(".hub-nav").filter(":visible"),
      j = $(".header__item--logo"),
      k = a(),
      l = win.scrollTop(),
      m = $("html").hasClass("anbrowser"),
      n = 0,
      o = function() {
        r.setPosition(),
        d.toggleClass("menu--open"),
        e.toggleClass("menu--open"),
        c.toggleClass("menu--open"),
        c.toggleClass("shadow-left"),
        d.hasClass("menu--open")
          ? setTimeout(function() {
            $("body").on("touchmove", function(a) {
              var b = window.innerHeight;
              (!c.has($(a.target)).length || b > 320 && b > $(".navigation__main").height()) && a.preventDefault()
            }),
            $(".navigation").height($(window).height()),
            m && setTimeout(function() {
              c.css("position", "absolute")
            }, 1e3)
          }, 900)
          : ($("body").off("touchmove"), m && c.css("position", "fixed")),
        r.isHubPage || (c.animate({
          scrollTop: 0
        }, 300, "swing"), h.slideUp(), g.removeClass("active"), c.find(".icon-arrow_up").removeClass("icon-arrow_up"))
      },
      p = function(a) {
        switch (a.type) {
          case "swiperight":
            o()
        }
        "function" == typeof jQuery().hammer && $(".header").hammer().unbind("swiperight", p)
      },
      q = function() {
  
        function m(a) {
          $("#overlay").css("z-index", "50"),
          h.slideUp(600, "swing"),
          g.removeClass("active"),
          h.removeClass("scroll-y"),
          $(a).removeClass("active"),
          $(a).next().find(".subnav__wrapper").removeClass("active"),
          $(a).next().find(".subnav__leaf").removeClass("active"),
          $(a).toggleClass("icon-arrow_up"),
          $(".overlay").fadeOut("slow", function() {
            $(this).remove()
          }),
          k && $("html, body").removeClass("stopScroll"),
          $("html").css("overflow-y", "")
        }
        function o(a) {
          var b = 124,
            c = 68,
            e = b - c,
            f = a > e,
            g = $(".header");
          b -= a,
          g.hasClass("keepMininav")
            ? n = 1
            : k && a >= 0 && (
              0 === n
              ? (
                e >= a
                ? (g.css("top", -a + "px"), j.css("top", a + "px"), a > 10 && 111 - a > 63 && j.css("line-height", 111 - a + "px"), i.css("margin-top", 57 - a + "px"), i.length > 0 && i.is(":visible") && (d.css("padding-top", 57 - a + "px"), $(".social-icons").css("top", 57 - a + "px")))
                : (g.css("top", -e + "px"), j.css({
                  top: e + "px",
                  "line-height": ""
                }), i.css("margin-top", "0")),
              !mininav && f
                ? (g.addClass("mininav"), j.css("line-height", ""), mininav = !0)
                : mininav && 10 > a && (j.css("line-height", ""), g.removeClass("mininav"), mininav = !1))
              : a > e && (n = 0))
        }
        if (1 === $(".wrapper .cta__content--nav-pinned").length && $(".social-icons").css("top", "36px"), e.hasClass("mininav") && (n = 1, 0 === $(".hub-nav").length && e.removeClass("mininav")), g.on("click", function(a) {
          a.preventDefault();
          var b = $('<div id="overlay" class="overlay"></div>').hide(),
            d = ($(this).offset().top, $(window).height());
          if ($(this).hasClass("active"))
            m(this);
          else {
            $("header").css("z-index", "2001"),
            $("#overlay").css("z-index", "1000"),
            g.each(function() {
              $(this).next().css("z-index", "10"),
              $(this).hasClass("active") && m(this)
            }),
            $(".item--main .icon-nav_next:after").hide(),
            $(".item--main .icon-nav_next:after").show(),
            $(this).next().css("z-index", "40"),
            $(this).next().stop(!0, !0).slideToggle("slow", "swing", function() {
              $(this).find(".subnav__wrapper").addClass("active"),
              $(this).find(".subnav__leaf").addClass("active")
            }),
            $(this).addClass("active"),
            $(this).toggleClass("icon-arrow_up"),
            (k || window.innerWidth > 767) && ($("html, body").addClass("stopScroll"), ($(this).hasClass("item--practice") || $(this).hasClass("item--enterprise") || $(this).hasClass("item--insights") || $(this).hasClass("item--about")) && ($("body").append(b), $(".overlay").fadeIn("slow"), $("#overlay").on("click", function(a) {
              a.preventDefault(),
              m(this)
            })), .85 * d + 124 > d && h.addClass("scroll-y"), console.log($(window).height()), console.log("math: ", 124 + .85 * $(window).height()));
            var e = 52;
            c.scrollTo($(this).parent().index() * e + "px", 600)
          }
        }), $("#HeaderMainSearch").keyup(function(a) {
          var c = a.which;
          13 === c && a.preventDefault(),
          (13 === c || 188 === c || 186 === c) && b()
        }), $(".navigation .search__button.icon").click(function(a) {
          a.preventDefault(),
          b()
        }), f.on("click", function(a) {
          a.preventDefault();
          var b = win.scrollTop() / 2;
          $.scrollTo("body", b)
        }), $("header .subnav__close").on("click", function(a) {
          a.preventDefault(),
          m(this)
        }), $("#overlay").on("click", function(a) {
          a.preventDefault(),
          m(this)
        }), win.resize(function() {
          k = a(),
          $("body").off("touchmove"),
          i = $(".hub-nav").filter(":visible");
          var b = $(".header");
          b.hasClass("keepMininav") || b.hasClass("mininav") || (
            i.length > 0
            ? d.css("padding-top", 57 - win.scrollTop() + "px")
            : d.removeAttr("style"))
        }), win.scroll(function() {
          var a = win.scrollTop();
          o(a)
        }), 0 !== l && o(l), /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          var p;
          $(window).resize(function() {
            clearTimeout(p),
            p = setTimeout(function() {
              $(".navigation").height($(window).height())
            }, 210)
          })
        }
      },
      r = {
        isHubPage: !1,
        isPractice: !1,
        isEnterprise: !1,
        toShow: "",
        hubName: location.pathname.split("/")[1],
        init: function() {
          console.log("APP.navigation.mobileMenu.init"),
          "practice" === this.hubName
            ? (this.isPractice = !0, this.isHubPage = !0, this.toShow = ".navigation__subnav--practice")
            : "enterprise" === this.hubName && (this.isEnterprise = !0, this.isHubPage = !0, this.toShow = ".navigation__subnav--enterprise")
        },
        setPosition: function() {
          if (this.isHubPage) {
            console.log("APP.navigation.mobileMenu.setPosition");
            var a = c.find(this.toShow),
              b = a.prev(),
              d = 0;
            b.addClass("icon-arrow_up active"),
            d = 0 + 57 * a.parent().index(),
            console.log("offset", d),
            a.css({display: "block", "z-index": "40"}),
            c.animate({
              scrollTop: d
            }, 0)
          }
        }
      },
      s = function() {
        console.log("APP.navigation"),
        q(),
        r.init()
      };
    return b.on("click", function(a) {
      a.preventDefault();
      var b = "function" == typeof jQuery().hammer;
      k || e.hasClass("menu--open")
        ? (b && $(".header").hammer().unbind("swiperight", p), o())
        : (o(), b && $(".header").hammer().bind("swiperight", p))
    }), {init: s}
  }();
  
  
  // main nav dropdown animation
  var APP = window.APP = window.APP || {};
  APP.siteSearchFilterMenu = function() {
    var a = function() {
        var a = {
          tabTrigger: $(".site-search-filter-menu .selected a"),
          icon: $(".site-search-filter-menu .sidebar-nav-mobile li a .icon"),
          listIcon: $(".site-search-filter-menu .sidebar-nav-mobile li"),
          listIconSelected: $(".site-search-filter-menu .sidebar-nav-mobile li.selected"),
          nav: $(".site-search-filter-menu .sidebar-nav-mobile"),
          init: function() {
            this.eventHandler(),
            this.resize()
          },
          isMobile: function() {
            var a = !1,
              b = $(window).width();
            return 768 > b && (a = !0),
            a
          },
          eventHandler: function() {
            var a = 0,
              b = this;
            this.tabTrigger.click(function(c) {
              var d = b.nav.position().top;
              b.isMobile() && (
                c.preventDefault(), 1 === a
                ? (a = 0, b.icon.removeClass("icon-arrow_down"), b.icon.addClass("icon-arrow_up"))
                : (a++, b.icon.addClass("icon-arrow_down"), b.icon.removeClass("icon-arrow_up"), $("html, body").animate({
                  scrollTop: d + "px"
                }, 1500)),
              b.listIcon.not(".selected").slideToggle("slow"))
            }),
            $(".site-search-filter-menu .sidebar-nav .filter-show-all").click(function(a) {
              $('.site-search-filter-menu .sidebar-nav input[type="checkbox"]').prop("checked", !1),
              $("#SearchForm").submit(),
              a.preventDefault()
            }),
            this.tabTrigger.click()
          },
          resize: function() {
            var a,
              b = this;
            $(window).resize(function() {
              clearTimeout(a),
              a = setTimeout(function() {
                b.icon.removeClass("icon-arrow_down"),
                b.icon.addClass("icon-arrow_up"),
                b.isMobile() === !1
                  ? b.listIcon.not(".selected").show()
                  : b.listIcon.not(".selected").hide()
              }, 210)
            })
          }
        };
        a.init()
      },
      b = function() {
        console.log("APP.siteSearchFilterMenu"),
        a()
      };
    return {init: b}
  }();
  
  
  // form hide
  var APP = window.APP = window.APP || {};
  APP.webinarForm = function() {
    function a() {
      var a = !1;
      $(".webinar-form form > .form-design-field").each(function() {
        "Hidden Fields" === $(this).find("div").find("h3").text() && (a = !0),
        $(this).find("div").find("input:submit").length && (a = !1),
        a && $(this).hide()
      })
    }
  
    var b = function() {
        function a(a) {
          for (var b = window.location.search.substring(1), c = b.split("&"), d = 0; d < c.length; d++) {
            var e = c[d].split("=");
            if (decodeURIComponent(e[0]) === a)
              return decodeURIComponent(e[1])
          }
        }
        $("#field55").val(a("partnerref"))
      },
      c = function() {
        console.log("APP.webinarForm"),
        b(),
        a()
      };
    return {init: c}
  }();
  
  
  // meganav collapse
  var APP = window.APP = window.APP || {};
  APP.megafooter = function() {
    var a = function() {},
      b = {
        navItems: $(".megafooter__section--item.first"),
        nav: $(".megafooter"),
        navAnchors: $(".megafooter__section--item.first div"),
        goTopBtn: $(".goToTop a"),
        init: function() {
          if (this.eventHandlers(), this.fixNavOnResize(), $(window).width() < 768) {
            var a = $(".megafooter__section--item.first");
            a.not(".active").children("ul, li").slideToggle(200)
          }
        },
        fixNavOnResize: function() {
          $(window).width() < 768
            ? this.navItems.not(".first").hide()
            : this.navItems.show()
        },
        isMobile: function() {
          var a = !1,
            b = 1024,
            c = $(window).width();
          return b > c && (a = !0),
          a
        },
        setNavClass: function(a) {
          if ($(window).width() < 768) {
            var b = !1,
              c = $(".megafooter__section--item.first.active"),
              d = 0;
            $(a).parent().hasClass("active") && (b = !0),
            c.children("ul, li").slideToggle(200),
            c.eq(0).find(".icon").removeClass("icon-arrow_up").addClass("icon-arrow_down"),
            c.removeClass("active"),
            b
              ? d = $(".megafooter__section--item.first").position().top - 20
              : ($(a).parent().addClass("active"), $(a).parent().find(".icon").removeClass("icon-arrow_down").addClass("icon-arrow_up"), $(a).parent().children("ul, li").slideToggle(200), d = $(".megafooter__section--item.first").position().top)
          }
        },
        updateFirstItem: function(a) {
          $(a).find(".medium"),
          $(".megafooter__section--item.first")
        },
        eventHandlers: function() {
          var a = this;
          this.navAnchors.click(function(b){{var c=$(this).parent().hasClass("first");$(this).parent().hasClass("active")}if(a.setNavClass(this),a.isMobile()){console.log($(this).offset().top);var d=this;setTimeout(function(){$("html, body").animate({scrollTop:$(d).offset().top-65+"px"},400)},0),a.updateFirstItem(this),c,b.preventDefault()}});
          var b;
          $(window).resize(function() {
            clearTimeout(b),
            b = setTimeout(function() {
              a.fixNavOnResize()
            }, 210)
          })
        }
      },
      c = function() {
        console.log("APP.megafooter"),
        b.init(),
        a()
      };
    return c(), {init: c}
  }();
  

}