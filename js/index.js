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
