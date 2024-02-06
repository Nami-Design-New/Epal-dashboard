function getChartColorsArray(e) {
    if (null !== document.getElementById(e))
      return (
        (e = document.getElementById(e).getAttribute("data-colors")),
        (e = JSON.parse(e)).map(function (e) {
          var t = e.replace(" ", "");
          return -1 === t.indexOf(",")
            ? getComputedStyle(document.documentElement).getPropertyValue(t) || t
            : 2 == (e = e.split(",")).length
            ? "rgba(" +
              getComputedStyle(document.documentElement).getPropertyValue(e[0]) +
              "," +
              e[1] +
              ")"
            : t;
        })
      );
  }
  var upadatedonutchart,
    chartPieBasicColors = getChartColorsArray("simple_pie_chart"),
    chartDonutBasicColors =
      (chartPieBasicColors &&
        ((options = {
          series: [44, 55, 13],
          chart: { height: 412, type: "pie" },
          labels: ["Expenses", "Payments", "Cashout"],
          legend: { position: "bottom" },
          dataLabels: { dropShadow: { enabled: !1 } },
          colors: chartPieBasicColors,
        }),
        (chart = new ApexCharts(
          document.querySelector("#simple_pie_chart"),
          options
        )).render()),
      getChartColorsArray("simple_dount_chart")),
    chartDonutupdatingColors =
      (chartDonutBasicColors &&
        ((options = {
          series: [44, 55, 13],
          chart: { height: 412, type: "donut" },
          labels: ["Expenses", "Payments", "Cashout"],
          legend: { position: "bottom" },
          dataLabels: { dropShadow: { enabled: !1 } },
          colors: chartDonutBasicColors,
        }),
        (chart = new ApexCharts(
          document.querySelector("#simple_dount_chart"),
          options
        )).render()),
      getChartColorsArray("updating_donut_chart"));
  
  //////
  var linechartBasicColors = getChartColorsArray("line_chart_basic"),
    linechartZoomColors =
      (linechartBasicColors &&
        ((options = {
          series: [
            { name: "Desktops", data: [10, 41, 35, 51, 49, 62, 69, 91, 148] },
          ],
          chart: {
            height: 350,
            type: "line",
            zoom: { enabled: !1 },
            toolbar: { show: !1 },
          },
          markers: { size: 4 },
          dataLabels: { enabled: !1 },
          stroke: { curve: "straight" },
          colors: linechartBasicColors,
          title: {
            text: "Product Trends by Month",
            align: "left",
            style: { fontWeight: 500 },
          },
          xaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
            ],
          },
        }),
        (chart = new ApexCharts(
          document.querySelector("#line_chart_basic"),
          options
        )).render()),
      getChartColorsArray("line_chart_zoomable")),
    linechartDatalabelColors =
      (linechartZoomColors &&
        ((options = {
          series: [
            {
              name: "XYZ MOTORS",
              data: [
                { x: new Date("2018-01-12").getTime(), y: 140 },
                { x: new Date("2018-01-13").getTime(), y: 147 },
                { x: new Date("2018-01-14").getTime(), y: 150 },
                { x: new Date("2018-01-15").getTime(), y: 154 },
                { x: new Date("2018-01-16").getTime(), y: 160 },
                { x: new Date("2018-01-17").getTime(), y: 165 },
                { x: new Date("2018-01-18").getTime(), y: 162 },
                { x: new Date("2018-01-20").getTime(), y: 159 },
                { x: new Date("2018-01-21").getTime(), y: 164 },
                { x: new Date("2018-01-22").getTime(), y: 160 },
                { x: new Date("2018-01-23").getTime(), y: 165 },
                { x: new Date("2018-01-24").getTime(), y: 169 },
                { x: new Date("2018-01-25").getTime(), y: 172 },
                { x: new Date("2018-01-26").getTime(), y: 177 },
                { x: new Date("2018-01-27").getTime(), y: 173 },
                { x: new Date("2018-01-28").getTime(), y: 169 },
                { x: new Date("2018-01-29").getTime(), y: 163 },
                { x: new Date("2018-01-30").getTime(), y: 158 },
                { x: new Date("2018-02-01").getTime(), y: 153 },
                { x: new Date("2018-02-02").getTime(), y: 149 },
                { x: new Date("2018-02-03").getTime(), y: 144 },
                { x: new Date("2018-02-05").getTime(), y: 150 },
                { x: new Date("2018-02-06").getTime(), y: 155 },
                { x: new Date("2018-02-07").getTime(), y: 159 },
                { x: new Date("2018-02-08").getTime(), y: 163 },
                { x: new Date("2018-02-09").getTime(), y: 156 },
                { x: new Date("2018-02-11").getTime(), y: 151 },
                { x: new Date("2018-02-12").getTime(), y: 157 },
                { x: new Date("2018-02-13").getTime(), y: 161 },
                { x: new Date("2018-02-14").getTime(), y: 150 },
                { x: new Date("2018-02-15").getTime(), y: 154 },
                { x: new Date("2018-02-16").getTime(), y: 160 },
                { x: new Date("2018-02-17").getTime(), y: 165 },
                { x: new Date("2018-02-18").getTime(), y: 162 },
                { x: new Date("2018-02-20").getTime(), y: 159 },
                { x: new Date("2018-02-21").getTime(), y: 164 },
                { x: new Date("2018-02-22").getTime(), y: 160 },
                { x: new Date("2018-02-23").getTime(), y: 165 },
                { x: new Date("2018-02-24").getTime(), y: 169 },
                { x: new Date("2018-02-25").getTime(), y: 172 },
                { x: new Date("2018-02-26").getTime(), y: 177 },
                { x: new Date("2018-02-27").getTime(), y: 173 },
                { x: new Date("2018-02-28").getTime(), y: 169 },
                { x: new Date("2018-02-29").getTime(), y: 163 },
                { x: new Date("2018-02-30").getTime(), y: 162 },
                { x: new Date("2018-03-01").getTime(), y: 158 },
                { x: new Date("2018-03-02").getTime(), y: 152 },
                { x: new Date("2018-03-03").getTime(), y: 147 },
                { x: new Date("2018-03-05").getTime(), y: 142 },
                { x: new Date("2018-03-06").getTime(), y: 147 },
                { x: new Date("2018-03-07").getTime(), y: 151 },
                { x: new Date("2018-03-08").getTime(), y: 155 },
                { x: new Date("2018-03-09").getTime(), y: 159 },
                { x: new Date("2018-03-11").getTime(), y: 162 },
                { x: new Date("2018-03-12").getTime(), y: 157 },
                { x: new Date("2018-03-13").getTime(), y: 161 },
                { x: new Date("2018-03-14").getTime(), y: 166 },
                { x: new Date("2018-03-15").getTime(), y: 169 },
                { x: new Date("2018-03-16").getTime(), y: 172 },
                { x: new Date("2018-03-17").getTime(), y: 177 },
                { x: new Date("2018-03-18").getTime(), y: 181 },
                { x: new Date("2018-03-20").getTime(), y: 178 },
                { x: new Date("2018-03-21").getTime(), y: 173 },
                { x: new Date("2018-03-22").getTime(), y: 169 },
                { x: new Date("2018-03-23").getTime(), y: 163 },
                { x: new Date("2018-03-24").getTime(), y: 159 },
                { x: new Date("2018-03-25").getTime(), y: 164 },
                { x: new Date("2018-03-26").getTime(), y: 168 },
                { x: new Date("2018-03-27").getTime(), y: 172 },
                { x: new Date("2018-03-28").getTime(), y: 169 },
                { x: new Date("2018-03-29").getTime(), y: 163 },
                { x: new Date("2018-03-30").getTime(), y: 162 },
                { x: new Date("2018-04-01").getTime(), y: 158 },
                { x: new Date("2018-04-02").getTime(), y: 152 },
                { x: new Date("2018-04-03").getTime(), y: 147 },
                { x: new Date("2018-04-05").getTime(), y: 142 },
                { x: new Date("2018-04-06").getTime(), y: 147 },
                { x: new Date("2018-04-07").getTime(), y: 151 },
                { x: new Date("2018-04-08").getTime(), y: 155 },
                { x: new Date("2018-04-09").getTime(), y: 159 },
                { x: new Date("2018-04-11").getTime(), y: 162 },
                { x: new Date("2018-04-12").getTime(), y: 157 },
                { x: new Date("2018-04-13").getTime(), y: 161 },
                { x: new Date("2018-04-14").getTime(), y: 166 },
                { x: new Date("2018-04-15").getTime(), y: 169 },
                { x: new Date("2018-04-16").getTime(), y: 172 },
                { x: new Date("2018-04-17").getTime(), y: 177 },
                { x: new Date("2018-04-18").getTime(), y: 181 },
                { x: new Date("2018-04-20").getTime(), y: 178 },
                { x: new Date("2018-04-21").getTime(), y: 173 },
                { x: new Date("2018-04-22").getTime(), y: 169 },
                { x: new Date("2018-04-23").getTime(), y: 163 },
                { x: new Date("2018-04-24").getTime(), y: 159 },
                { x: new Date("2018-04-25").getTime(), y: 164 },
                { x: new Date("2018-04-26").getTime(), y: 168 },
                { x: new Date("2018-04-27").getTime(), y: 172 },
                { x: new Date("2018-04-28").getTime(), y: 169 },
                { x: new Date("2018-04-29").getTime(), y: 163 },
                { x: new Date("2018-04-30").getTime(), y: 162 },
                { x: new Date("2018-05-01").getTime(), y: 158 },
                { x: new Date("2018-05-02").getTime(), y: 152 },
                { x: new Date("2018-05-03").getTime(), y: 147 },
                { x: new Date("2018-05-04").getTime(), y: 142 },
                { x: new Date("2018-05-05").getTime(), y: 147 },
                { x: new Date("2018-05-07").getTime(), y: 151 },
                { x: new Date("2018-05-08").getTime(), y: 155 },
                { x: new Date("2018-05-09").getTime(), y: 159 },
                { x: new Date("2018-05-11").getTime(), y: 162 },
                { x: new Date("2018-05-12").getTime(), y: 157 },
                { x: new Date("2018-05-13").getTime(), y: 161 },
                { x: new Date("2018-05-14").getTime(), y: 166 },
                { x: new Date("2018-05-15").getTime(), y: 169 },
                { x: new Date("2018-05-16").getTime(), y: 172 },
                { x: new Date("2018-05-17").getTime(), y: 177 },
                { x: new Date("2018-05-18").getTime(), y: 181 },
                { x: new Date("2018-05-20").getTime(), y: 178 },
                { x: new Date("2018-05-21").getTime(), y: 173 },
                { x: new Date("2018-05-22").getTime(), y: 169 },
                { x: new Date("2018-05-23").getTime(), y: 163 },
                { x: new Date("2018-05-24").getTime(), y: 159 },
                { x: new Date("2018-05-25").getTime(), y: 164 },
                { x: new Date("2018-05-26").getTime(), y: 168 },
                { x: new Date("2018-05-27").getTime(), y: 172 },
                { x: new Date("2018-05-28").getTime(), y: 169 },
                { x: new Date("2018-05-29").getTime(), y: 163 },
                { x: new Date("2018-05-30").getTime(), y: 162 },
              ],
            },
          ],
          chart: {
            type: "area",
            stacked: !1,
            height: 350,
            zoom: { type: "x", enabled: !0, autoScaleYaxis: !0 },
            toolbar: { autoSelected: "zoom" },
          },
          colors: linechartZoomColors,
          dataLabels: { enabled: !1 },
          markers: { size: 0 },
          title: {
            text: "Stock Price Movement",
            align: "left",
            style: { fontWeight: 500 },
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              inverseColors: !1,
              opacityFrom: 0.5,
              opacityTo: 0,
              stops: [0, 90, 100],
            },
          },
          yaxis: {
            showAlways: !0,
            labels: {
              show: !0,
              formatter: function (e) {
                return (e / 1e6).toFixed(0);
              },
            },
            title: { text: "Price", style: { fontWeight: 500 } },
          },
          xaxis: { type: "datetime" },
          tooltip: {
            shared: !1,
            y: {
              formatter: function (e) {
                return (e / 1e6).toFixed(0);
              },
            },
          },
        }),
        (chart = new ApexCharts(
          document.querySelector("#line_chart_zoomable"),
          options
        )).render()),
      getChartColorsArray("line_chart_datalabel")),
    linechartDashedColors =
      (linechartDatalabelColors &&
        ((options = {
          chart: {
            height: 380,
            type: "line",
            zoom: { enabled: !1 },
            toolbar: { show: !1 },
          },
          colors: linechartDatalabelColors,
          dataLabels: { enabled: !1 },
          stroke: { width: [3, 3], curve: "straight" },
          series: [
            {
              name: "Current Year",
              data: [14, 11, 16, 12, 17, 13, 12, 14, 18, 16, 12, 20],
            },
            {
              name: "Previous Year",
              data: [26, 24, 32, 36, 33, 31, 33, 34, 31, 36, 32, 37],
            },
          ],
          title: {
            text: "Payment per month",
            align: "left",
            style: { fontWeight: 500 },
          },
          grid: {
            row: { colors: ["transparent", "transparent"], opacity: 0.2 },
            borderColor: "#f1f1f1",
          },
          markers: { style: "inverted", size: 6 },
          xaxis: {
            categories: [
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
              "Dec",
            ],
          },
          yaxis: { title: { text: "payment per month" } },
          legend: {
            position: "top",
            horizontalAlign: "right",
            floating: !0,
            offsetY: -25,
            offsetX: -5,
          },
          responsive: [
            {
              breakpoint: 600,
              options: {
                chart: { toolbar: { show: !1 } },
                legend: { show: !1 },
              },
            },
          ],
        }),
        (chart = new ApexCharts(
          document.querySelector("#line_chart_datalabel"),
          options
        )).render()),
      getChartColorsArray("line_chart_dashed")),
    linechartannotationsColors =
      (linechartDashedColors &&
        ((options = {
          chart: {
            height: 380,
            type: "line",
            zoom: { enabled: !1 },
            toolbar: { show: !1 },
          },
          colors: linechartDashedColors,
          dataLabels: { enabled: !1 },
          stroke: { width: [3, 4, 3], curve: "straight", dashArray: [0, 8, 5] },
          series: [
            {
              name: "Session Duration",
              data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
            },
            {
              name: "Page Views",
              data: [36, 42, 60, 42, 13, 18, 29, 37, 36, 51, 32, 35],
            },
            {
              name: "Total Visits",
              data: [89, 56, 74, 98, 72, 38, 64, 46, 84, 58, 46, 49],
            },
          ],
          title: {
            text: "Page Statistics",
            align: "left",
            style: { fontWeight: 500 },
          },
          markers: { size: 0, hover: { sizeOffset: 6 } },
          xaxis: {
            categories: [
              "01 Jan",
              "02 Jan",
              "03 Jan",
              "04 Jan",
              "05 Jan",
              "06 Jan",
              "07 Jan",
              "08 Jan",
              "09 Jan",
              "10 Jan",
              "11 Jan",
              "12 Jan",
            ],
          },
          tooltip: {
            y: [
              {
                title: {
                  formatter: function (e) {
                    return e + " (mins)";
                  },
                },
              },
              {
                title: {
                  formatter: function (e) {
                    return e + " per session";
                  },
                },
              },
              {
                title: {
                  formatter: function (e) {
                    return e;
                  },
                },
              },
            ],
          },
          grid: { borderColor: "#f1f1f1" },
        }),
        (chart = new ApexCharts(
          document.querySelector("#line_chart_dashed"),
          options
        )).render()),
      getChartColorsArray("line_chart_annotations"));
  