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
