/**
 *
 * @param {*} s32
 */
function getID(s32) {
  return document.getElementById(s32);
}

/**
 *
 * @param {*} s33
 */
function getClass(s33) {
  return document.getElementsByClassName(s33);
}

/**
 * 路由
 */
function Router() {
  this.routes = {};
  this.curUrl = "";

  this.route = function(path, callback) {
    this.routes[path] = callback || function() {};
  };

  this.refresh = function() {
    this.curUrl = location.hash.slice(1) || "/";

    this.routes[this.curUrl]();
  };

  this.init = function() {
    window.addEventListener("load", this.refresh.bind(this), false);
    window.addEventListener("hashchange", this.refresh.bind(this), false);
  };
}

//初始化路由
var R = new Router();
R.init();

R.route("/", function() {
  func_tabs_change("p_home");
});
R.route("p_home", function() {
  func_tabs_change("p_home");
});
R.route("p_1", function() {
  func_tabs_change("p_1");
});
R.route("p_2", function() {
  func_tabs_change("p_2");
});
R.route("p_about", function() {
  func_tabs_change("p_about");
});
R.route("p_other", function() {
  func_tabs_change("p_other");
});

//初始化 select 物件
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems, options);
});

//初始化側邊選單
var options;
var elem = document.querySelector(".sidenav");
var instance = M.Sidenav.init(elem, options);
$(document).ready(function() {
  //instance.sidenav();
});

var ar_item_name = ["p_home", "p_1", "p_2", "p_about", "p_other", "p_99"];

/**
 *
 * @param {*} item_name
 */
function func_tabs_change(item_name) {
  //關閉側邊選單
  instance.close();

  //隱藏所有page
  for (var i = 0; i < ar_item_name.length; i++) {
    getID(ar_item_name[i]).style.display = "none";
  }

  //隱藏所有button
  var ar_but = getClass("main_l_item");
  for (var i = 0; i < ar_but.length; i++) {
    ar_but[i].setAttribute("sel", "");
  }

  //設定選中的button
  getID("item" + item_name.substr(1, item_name.length - 1)).setAttribute(
    "sel",
    "1"
  );

  //顯示page
  getID(item_name).style.display = "block";
  $(window).scrollTop("0");

  //動畫
  $("#" + item_name + " .page_content").animate(
    { opacity: 0.6, marginTop: "30px" },
    0
  );
  $("#" + item_name + " .page_content").animate(
    { opacity: 1, marginTop: "0px" },
    200
  );
}

for (var i = 0; i < ar_item_name.length; i++) {
  getID("main_r").appendChild(getID(ar_item_name[i]));
}


//初始化顏色選擇器
$(".color_sel").each(function() {
  $(this).minicolors({
    control: $(this).attr("data-control") || "hue",
    defaultValue: $(this).attr("data-defaultValue") || "",
    format: $(this).attr("data-format") || "hex",
    keywords: $(this).attr("data-keywords") || "",
    inline: $(this).attr("data-inline") === "true",
    letterCase: $(this).attr("data-letterCase") || "lowercase",
    opacity: $(this).attr("data-opacity"),
    position: $(this).attr("data-position") || "bottom left",
    swatches: $(this).attr("data-swatches")
      ? $(this)
          .attr("data-swatches")
          .split("|")
      : [],
    change: function(value, opacity) {
      if (!value) return;
      if (opacity) value += ", " + opacity;
      if (typeof console === "object") {
        console.log(value);
      }
    },
    theme: "bootstrap"
  });
});

//func_tabs_change("p_home");

//--------------------
//--------------------
//--------------------

///
///P2 偽裝圖片
///
function C_隱形圖片() {
  /**
   *
   */
  this.init = function() {
    func_p1_初始化();
    func_p2_初始化();
  };

  /**
   *
   */
  function func_p1_初始化() {
    getID("p1_file").addEventListener(
      "change",
      function() {
        var file = this.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e) {
          getID("p1_img").src = this.result; //把載入的檔案變成圖片網址
        };
      },
      false
    );

    getID("p1_but_run").addEventListener("click", function() {
      func_產生隱形圖片();
    });

    //滑桿初始化，控制輸出圖片的背景顏色
    var slider = getID("p1_range_output_color");
    noUiSlider.create(slider, {
      start: [100],
      range: {
        min: [0],
        max: [100]
      }
    });
    //change 事件
    slider.noUiSlider.on("slide", function() {
      var int_clolr = 255 - Math.round(slider.noUiSlider.get() * 2.55);
      getID("p1_div_output").style.backgroundColor =
        "rgb(" + int_clolr + "," + int_clolr + "," + int_clolr + ")";
    });
    //預設值
    slider.noUiSlider.set(50);
  }

  /**
   *
   */
  function func_p2_初始化() {
    getID("p2_file_1").addEventListener(
      "change",
      function() {
        var file = this.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e) {
          getID("p2_img_1").src = this.result; //把載入的檔案變成圖片網址
        };
      },
      false
    );

    getID("p2_file_2").addEventListener(
      "change",
      function() {
        var file = this.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e) {
          getID("p2_img_2").src = this.result; //把載入的檔案變成圖片網址
        };
      },
      false
    );

    getID("p2_but_run").addEventListener("click", function() {
      func_產生偽裝圖片();
    });

    //滑桿初始化，控制輸出圖片的背景顏色
    var slider = getID("p2_range_output_color");
    noUiSlider.create(slider, {
      start: [100],
      range: {
        min: [0],
        max: [100]
      }
    });
    //change 事件
    slider.noUiSlider.on("slide", function() {
      var int_clolr = 255 - Math.round(slider.noUiSlider.get() * 2.55);
      getID("p2_div_output").style.backgroundColor =
        "rgb(" + int_clolr + "," + int_clolr + "," + int_clolr + ")";
    });
    //預設值
    slider.noUiSlider.set(50);
  }

  /**
   *
   */
  function func_產生隱形圖片() {
    var p2_img_1 = getID("p1_img");

    if (p2_img_1.src == "") {
      M.toast({ html: "尚未選擇圖片" });
      return;
    }

    var int_max_w = getID("p2_max_width").value;

    //計算輸出畫布的size
    var int_img01_w = p2_img_1.naturalWidth;
    var int_img01_h = p2_img_1.naturalHeight;
    if (int_img01_w > int_max_w) {
      int_img01_h = int_img01_h / (int_img01_w / int_max_w);
      int_img01_w = int_max_w;
    }

    //取得透明圖片
    var can_1 = func_取得透明圖片(
      p2_img_1,
      int_img01_w,
      int_img01_h,
      $("#p1_rgba").minicolors("rgbObject").r,
      $("#p1_rgba").minicolors("rgbObject").g,
      $("#p1_rgba").minicolors("rgbObject").b,
      1,
      $("#p1_ch_reverse")[0].checked
    );

    //產生 圖片 base64
    var base64 = can_1.toDataURL("image/png", 0.8);
    //用目前時間當做儲存檔名
    var s_name = func_取得儲存檔名();

    try {
      //轉成 blob
      var file2 = dataURLtoFile(base64, s_name);
      var objectURL = URL.createObjectURL(file2);

      //顯示到界面上
      getID("p1_output_img").src = objectURL;
      getID("p1_download").href = objectURL;
    } catch (e) {
      //顯示到界面上
      getID("p1_output_img").src = base64;
      getID("p1_download").href = base64;
    }

    getID("p1_download").setAttribute("download", s_name);

    //清理物件
    can_1.parentNode.removeChild(can_1);

    M.toast({ html: "合成完畢" });
  }

  /**
   *
   */
  function func_產生偽裝圖片() {
    var p2_img_1 = getID("p2_img_1");
    var p2_img_2 = getID("p2_img_2");

    if (p2_img_1.src == "" || p2_img_2.src == "") {
      M.toast({ html: "必須選擇兩張圖片" });
      return;
    }

    var int_max_w = getID("p2_max_width").value;

    //計算輸出畫布的size
    var int_img01_w = p2_img_1.naturalWidth;
    var int_img01_h = p2_img_1.naturalHeight;
    if (int_img01_w > int_max_w) {
      int_img01_h = int_img01_h / (int_img01_w / int_max_w);
      int_img01_w = int_max_w;
    }
    var int_img02_w = p2_img_2.naturalWidth;
    var int_img02_h = p2_img_2.naturalHeight;
    if (int_img02_w > int_max_w) {
      int_img02_h = int_img02_h / (int_img02_w / int_max_w);
      int_img02_w = int_max_w;
    }

    //取得透明圖片
    var can_1 = func_取得透明圖片(
      p2_img_1,
      int_img01_w,
      int_img01_h,
      $("#p2_rgba_01").minicolors("rgbObject").r,
      $("#p2_rgba_01").minicolors("rgbObject").g,
      $("#p2_rgba_01").minicolors("rgbObject").b,
      $("#p2_rgba_01").minicolors("rgbObject").a,
      $("#p2_ch_reverse_01")[0].checked
    );
    var can_2 = func_取得透明圖片(
      p2_img_2,
      int_img02_w,
      int_img02_h,
      255,
      255,
      255,
      1,
      $("#p2_ch_reverse_02")[0].checked
    );

    //把 canvas 轉成 img
    func_canvas_to_img(can_1, "png", 0.8, function(html_img_1) {
      func_canvas_to_img(can_2, "png", 0.8, function(html_img_2) {
        //計算輸出圖片的長寬
        var int_output_width = html_img_1.naturalWidth;
        var int_output_height = html_img_1.naturalHeight;
        if (html_img_2.naturalWidth > int_output_width) {
          int_output_width = html_img_2.naturalWidth;
        }
        if (html_img_2.naturalHeight > int_output_height) {
          int_output_height = html_img_2.naturalHeight;
        }

        //產生 canvas 物件
        var can = document.createElement("canvas");
        can.width = int_output_width;
        can.height = int_output_height;
        can.style.position = "fixed";
        can.style.top = "-99999";
        can.style.opacity = "0";
        can.style.pointerEvents = "none";
        $("body").append(can);
        var c = can.getContext("2d");

        //計算圖片坐標
        var int_對齊 = $("#p2_select_align")[0].value;
        var int_left_1;
        var int_left_2;
        var int_top_1;
        var int_top_2;

        // 水平 - 中
        if (int_對齊 == 2 || int_對齊 == 0 || int_對齊 == 6) {
          int_left_1 = (int_output_width - html_img_1.naturalWidth) / 2;
          int_left_2 = (int_output_width - html_img_2.naturalWidth) / 2;
        }
        // 水平 - 左
        if (int_對齊 == 1 || int_對齊 == 8 || int_對齊 == 7) {
          int_left_1 = 0;
          int_left_2 = 0;
        }
        // 水平 - 右
        if (int_對齊 == 3 || int_對齊 == 4 || int_對齊 == 5) {
          int_left_1 = int_output_width - html_img_1.naturalWidth;
          int_left_2 = int_output_width - html_img_2.naturalWidth;
        }

        // 垂直 - 中
        if (int_對齊 == 8 || int_對齊 == 0 || int_對齊 == 4) {
          int_top_1 = (int_output_height - html_img_1.naturalHeight) / 2;
          int_top_2 = (int_output_height - html_img_2.naturalHeight) / 2;
        }
        // 垂直 - 上
        if (int_對齊 == 1 || int_對齊 == 2 || int_對齊 == 3) {
          int_top_1 = 0;
          int_top_2 = 0;
        }
        // 垂直 - 下
        if (int_對齊 == 7 || int_對齊 == 6 || int_對齊 == 5) {
          int_top_1 = int_output_height - html_img_1.naturalHeight;
          int_top_2 = int_output_height - html_img_2.naturalHeight;
        }

        //把圖片繪製到 canvas
        c.drawImage(
          html_img_2,
          int_left_2,
          int_top_2,
          html_img_2.naturalWidth,
          html_img_2.naturalHeight
        );
        c.drawImage(
          html_img_1,
          int_left_1,
          int_top_1,
          html_img_1.naturalWidth,
          html_img_1.naturalHeight
        );

        //產生 圖片 base64
        var base64 = can.toDataURL("image/png", 0.8);
        //用目前時間當做儲存檔名
        var s_name = func_取得儲存檔名();

        try {
          //轉成 blob
          var file2 = dataURLtoFile(base64, s_name);
          var objectURL = URL.createObjectURL(file2);

          //顯示到界面上
          getID("p2_output_img").src = objectURL;
          getID("p2_download").href = objectURL;
        } catch (e) {
          //顯示到界面上
          getID("p2_output_img").src = base64;
          getID("p2_download").href = base64;
        }

        getID("p2_download").setAttribute("download", s_name);

        //清理物件
        can_1.parentNode.removeChild(can_1);
        can_2.parentNode.removeChild(can_2);
        can.parentNode.removeChild(can);
        html_img_1.parentNode.removeChild(html_img_1);
        html_img_2.parentNode.removeChild(html_img_2);

        M.toast({ html: "合成完畢" });
      });
    });
  }

  /**
   * base64 轉 File
   * @param {*} dataurl
   * @param {*} filename
   */
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  /**
   *
   * @param {*} html_can
   * @param {*} s_type
   * @param {*} float_品質
   * @param {*} func
   */
  function func_canvas_to_img(html_can, s_type, float_品質, func) {
    var html_img = document.createElement("img");
    html_img.src = html_can.toDataURL("image/" + s_type, float_品質);
    html_img.style.position = "fixed";
    html_img.style.width = "0px";
    html_img.style.height = "0px";
    html_img.style.opacity = "0";
    html_img.style.pointerEvents = "none";
    $("body").append(html_img);

    html_img.onload = function() {
      func(html_img);
    };
    return html_img;
  }

  /**
   *
   * @param {*} html_img
   * @param {*} img_width
   * @param {*} img_height
   * @param {*} col_r
   * @param {*} col_g
   * @param {*} col_b
   * @param {*} col_a
   * @param {*} bool_反轉
   */
  function func_取得透明圖片(
    html_img,
    img_width,
    img_height,
    col_r,
    col_g,
    col_b,
    col_a,
    bool_反轉
  ) {
    //去除小數點
    img_width = Math.round(img_width);
    img_height = Math.round(img_height);

    //產生 canvas 物件
    var can = document.createElement("canvas");
    can.width = img_width;
    can.height = img_height;
    can.style.position = "fixed";
    can.style.top = "-99999";
    can.style.opacity = "0";
    can.style.pointerEvents = "none";
    $("body").append(can);

    var c = can.getContext("2d");

    //把圖片繪製到 canvas
    c.drawImage(html_img, 0, 0, img_width, img_height);

    //轉換
    var s = c.getImageData(0, 0, img_width, img_height); //從原圖取得每個像素點
    var r = c.createImageData(img_width, img_height); //新建一個空白的

    for (var i = 0; i < img_width; i++) {
      for (var j = 0; j < img_height; j++) {
        var k = (img_width * j + i) * 4;
        r.data[k + 0] = col_r; //r
        r.data[k + 1] = col_g; //g
        r.data[k + 2] = col_b; //b

        var gray = (s.data[k + 0] + s.data[k + 1] + s.data[k + 2]) / 3; //灰階
        if (bool_反轉) {
          r.data[k + 3] = (255 - gray) * col_a; //a
        } else {
          r.data[k + 3] = gray * col_a; //a
        }
      }
    }

    c.clearRect(0, 0, img_width, img_height); //清空
    c.getImageData(0, 0, img_width, img_height); //不知為啥手機版的chrome需要這行，不然會有底色是灰色的BUG
    c.putImageData(r, 0, 0); //繪製canvas

    return can;
  }

  /**
   *
   */
  function func_取得儲存檔名() {
    return new Date().Format("yyyy-MM-dd hh-mm-ss" + ".png");
  }

  // 對Date的擴展，將 Date 轉化為指定格式的String
  // 月(M)、日(d)、小時(h)、分(m)、秒(s)、季度(q) 可以用 1-2 個佔位符，
  // 年(y)可以用 1-4 個佔位符，毫秒(S)只能用 1 個佔位符(是 1-3 位的數字)
  // 例子：
  // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
  // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
  Date.prototype.Format = function(fmt) {
    //author: meizz
    var o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours(), //小時
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      S: this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        (this.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ("00" + o[k]).substr(("" + o[k]).length)
        );
    return fmt;
  };
}

var C_隱形圖片 = new C_隱形圖片();
C_隱形圖片.init();
