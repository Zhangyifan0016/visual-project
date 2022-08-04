(function () {
  $(document).ready(function () {
    $(".monitor .tabs").on("click", "a", function () {
      $(this).addClass("active").siblings("a").removeClass();
      var index = $(this).index();
      $(".monitor .content").eq(index).show().siblings(".content").hide();
    });

    $(".monitor .marquee").each(function () {
      var rows = $(this).children().clone();
      $(this).append(rows);
    });
  });
})();

// 饼图 销售地分布统计
(function () {
  $(document).ready(function () {
    const pie = document.querySelector(".pie");
    const myChart = echarts.init(pie);
    const option = {
      color: [
        "#006cff",
        "#60cda0",
        "#ed8884",
        "#ff9f7f",
        "#0096ff",
        "#9fe6b8",
        "#32c5e9",
        "#1d9dff",
      ],
      tooltip: {
        trigger: "item",
        // {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      series: [
        {
          name: "销售统计",
          type: "pie",
          radius: ["10%", "70%"],
          center: ["50%", "50%"],
          roseType: "area",
          itemStyle: {
            borderRadius: 5,
          },
          data: [
            {
              value: 22,
              name: "云南",
            },
            {
              value: 28,
              name: "北京",
            },
            {
              value: 25,
              name: "山东",
            },
            {
              value: 25,
              name: "河北",
            },
            {
              value: 32,
              name: "江苏",
            },
            {
              value: 22,
              name: "浙江",
            },
            {
              value: 31,
              name: "四川",
            },
            {
              value: 42,
              name: "上海",
            },
          ],
          label: {
            fontSize: 10,
          },
          labelLine: {
            length: 6,
            length2: 8,
          },
        },
      ],
    };
    myChart.setOption(option);

    window.addEventListener("resize", function () {
      myChart.resize();
    });
  });
})();

// 全国用户统计 柱状图
(function () {
  $(document).ready(function () {
    const bar = document.querySelector(".bar");
    const myChart = echarts.init(bar);
    const item = {
      name: "",
      value: 1200,
      itemStyle: {
        color: "#254065",
      },
      emphasis: {
        itemStyle: {
          color: "#254065",
        },
      },
      tooltip: {
        extraCssText: "opacity : 0",
      },
    };
    const option = {
      color: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: "#00fffb", // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#0061ce", // 100% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      },
      tooltip: {
        trigger: "item",
      },
      grid: {
        left: "0%",
        right: "3%",
        bottom: "3%",
        top: "3%",
        containLabel: true,
        show: true,
        borderColor: "rgba(0,240,250,0.3)",
      },
      xAxis: {
        axisTick: {
          show: false,
          alignWithLabel: true,
        },
        axisLabel: {
          color: "#4c9bfd",
          fontSize: 9.5,
        },
        axisLine: {
          lineStyle: {
            color: "rgba(0,240,250,0.3)",
          },
        },
        type: "category",
        data: [
          "上海",
          "广州",
          "北京",
          "深圳",
          "合肥",
          "",
          "...",
          "",
          "杭州",
          "厦门",
          "济南",
          "成都",
          "重庆",
        ],
      },
      yAxis: {
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#4c9bfd",
        },
        axisLine: {
          lineStyle: {
            color: "rgba(0,240,250,0.3)",
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(0,240,250,0.3)",
          },
        },
        type: "value",
      },
      series: [
        {
          name: "用户总量",
          data: [
            2100,
            1900,
            1700,
            1560,
            1400,
            item,
            item,
            item,
            900,
            750,
            600,
            480,
            240,
          ],
          type: "bar",
          barWidth: "60%",
        },
      ],
    };
    myChart.setOption(option);

    window.addEventListener("resize", function () {
      myChart.resize();
    });
  });
})();

// 右一
(function () {
  const data = {
    day365: {
      orders: "30,321,988",
      amount: "99882",
    },
    day90: {
      orders: "301,987",
      amount: "9834",
    },
    day30: {
      orders: "1,987",
      amount: "3834",
    },
    day1: {
      orders: "987",
      amount: "834",
    },
  };
  $(document).ready(function () {
    const orderValue = $(".order h4:eq(0)");
    const amountValue = $(".order h4:eq(1)");

    let _index = 1;
    $(".order .filter a").click(function () {
      _index = $(this).index();
      tabs();
    });

    setInterval(() => {
      tabs();
      _index++;
      if (_index > 3) {
        _index = 0;
      }
    }, 1000);

    function tabs() {
      $(".order .filter a")
        .eq(_index)
        .addClass("active")
        .siblings("a")
        .removeClass();
      const _attr = $(".order .filter a").get(_index).dataset.type;
      const currData = data[_attr];
      orderValue.html(currData.orders);
      amountValue.html(currData.amount);
    }
  });
})();

// 销售额统计
(function () {
  $(document).ready(function () {
    const data = {
      year: {
        info: [
          "2099年",
          "2199年",
          "2299年",
          "2399年",
          "2499年",
          "2599年",
          "2699年",
          "2799年",
          "2899年",
          "2999年",
          "3099年",
          "3199年",
        ],
        detail: [
          [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
          [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
        ],
      },
      quarter: {
        info: ["1季度", "2季度", "3季度", "4季度"],
        detail: [
          [23, 75, 12, 97],
          [43, 31, 65, 23],
        ],
      },
      month: {
        info: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        detail: [
          [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
          [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98],
        ],
      },
      week: {
        info: ["近1周", "近2周", "近3周", "近4周", "近5周", "近6周"],
        detail: [
          [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
          [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24],
        ],
      },
    };
    const line = document.querySelector(".line");
    const myChart = echarts.init(line);
    const option = {
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["预期销售额", "实际销售额"],
        textStyle: {
          color: "#4c9bfd",
        },
        right: "0%",
        top: "-2%",
      },
      grid: {
        top: "20%",
        left: "3%",
        right: "4%",
        bottom: "3%",
        show: false,
        borderColor: "#012f4a",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        axisLabel: {
          color: "#4c9bfd",
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
        },
        boundaryGap: false,
        data: data.year.info,
      },
      yAxis: {
        type: "value",
        axisLabel: {
          color: "#4c9bfd",
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: "#012f4a",
          },
        },
      },
      color: ["#00f2f1", "#ed3f35"],
      series: [
        {
          name: "预期销售额",
          type: "line",
          stack: "Total",
          smooth: true,
          data: data.year.detail[0],
        },
        {
          name: "实际销售额",
          type: "line",
          stack: "Total",
          smooth: true,
          data: data.year.detail[1],
        },
      ],
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });

    let _index = 0;
    let timer = null;
    $(".sales .caption a").click(function () {
      _index = $(this).index() - 1;
      tabs();
      console.log(_index);
      // const type = this.dataset.type;
      // const currData = data[type];
      // option.xAxis.data = currData.info;
      // option.series[0].data = currData.detail[0];
      // option.series[1].data = currData.detail[1];
      // myChart.setOption(option);
    });

    move();
    $(".sales").hover(
      function () {
        clearInterval(timer);
      },
      function () {
        move();
      }
    );

    function move() {
      timer = setInterval(function () {
        _index++;
        if (_index > 3) {
          _index = 0;
        }
        tabs();
      }, 1000);
    }

    function tabs() {
      $(".sales .caption a")
        .eq(_index)
        .addClass("active")
        .siblings("a")
        .removeClass();
      const _attr = $(".sales .caption a").get(_index).dataset.type;
      const currData = data[_attr];
      option.xAxis.data = currData.info;
      option.series[0].data = currData.detail[0];
      option.series[1].data = currData.detail[1];
      myChart.setOption(option);
    }
  });
})();

// 渠道分布
(function () {
  $(document).ready(function () {
    const radar = document.querySelector(".radar");
    const myChart = echarts.init(radar);
    const dataSH = [[110, 90, 80, 60, 30]];
    const lineStyle = {
      normal: {
        color: "#fff",
      },
    };
    const option = {
      tooltip: {
        show: true,
        position: ["55%", "10%"],
        textStyle: {
          fontSize: 12,
          color: "#fff",
        },
        borderWidth: 0,
        backgroundColor: "rgba(0,0,0,0.3)",
      },
      radar: {
        indicator: [
          {
            name: "淘宝",
            max: 120,
          },
          {
            name: "京东",
            max: 120,
          },
          {
            name: "苏宁",
            max: 120,
          },
          {
            name: "微商",
            max: 120,
          },
          {
            name: "其他",
            max: 120,
          },
        ],
        center: ["50%", "50%"],
        radius: "50%",
        shape: "circle",
        splitNumber: 4,
        name: {
          textStyle: {
            color: "#4c9bfd",
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,0.3)",
          },
        },
        splitArea: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,0.3)",
          },
        },
      },
      series: [
        {
          name: "上海",
          type: "radar",
          lineStyle: lineStyle,
          data: dataSH,
          symbol: "circle",
          symbolSize: 5,
          itemStyle: {
            color: "#fff",
          },
          areaStyle: {
            color: "rgba(238, 197, 102, 0.6)",
          },
        },
      ],
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  });
})();

// 季度销售进度
(function () {
  $(document).ready(function () {
    const gauge = document.querySelector(".gauge");
    const myChart = echarts.init(gauge);
    const option = {
      graphic: {
        type: "text",
        left: "center",
        top: "50%",
        z: 2,
        zlevel: 100,
        style: {
          text: "50" + "%",
          fill: "#fff",
          width: 100,
          height: 30,
          fontSize: 20,
        },
      },
      series: [
        {
          type: "pie",
          avoidLabelOverlap: false,
          startAngle: 180,
          silent: true,
          radius: ["130%", "150%"],
          center: ["50%", "80%"],
          labelLine: {
            show: false,
          },
          data: [
            {
              value: 100,
              itemStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#00c9e0", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#005fc1", // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            },
            { value: 100, itemStyle: { color: "#12274d" } },
            { value: 200, itemStyle: { color: "transparent" } },
          ],
        },
      ],
    };
    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  });
})();
