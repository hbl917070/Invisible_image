# 隱形圖片 & 偽裝圖片 產生器

線上製作`隱形圖片`或`偽裝圖片`的網站，用純 JavaScript 進行處理，無使用任何後台語言

- 網站：https://hbl917070.github.io/Invisible_image/index.html
- 討論區：https://forum.gamer.com.tw/C.php?bsn=60076&snA=4936349


### 原理
- 用單一顏色但是不同透明度來繪製圖片，這樣就會變成一張在特定顏色下面會隱形的圖片，例如用白色來繪製，那麼繪製出來的圖片在白底就會隱形，如此一來，就會變成在黑底才能看到的「隱形圖片」


- 「偽裝圖片」就是把兩個「隱形圖片」重疊，一個用黑色繪製，一個用白色繪製


### 隱形圖片
利用單一顏色與不同透明度來繪製圖片，讓圖片在特定的底色下隱形
<img  src="https://hbl917070.github.io/Invisible_image/imgs/p1_ex.jpg" width="400">



### 偽裝圖片
利用隱形圖片的技術重疊兩張圖片，在黑色與白色的地方，會分別看到兩種不同的圖片 
<img  src="https://hbl917070.github.io/Invisible_image/imgs/p2_ex.jpg" width="400">


### 此網站使用了下列的程式碼
[Materialize](https://github.com/Dogfalo/materialize "Materialize")： 一套符合 Material Design 設計 的網頁前端框架。 
[noUiSlider](https://github.com/leongersen/noUiSlider "noUiSlider")： 一個輕量級JavaScript範圍滑塊 
[jQuery](https://github.com/jquery/jquery "jQuery")： 一套跨瀏覽器的JavaScript函式庫，簡化HTML與JavaScript之間的操作。 
[jQuery MiniColors](https://github.com/claviska/jquery-minicolors "jQuery MiniColors")： 一個基於jQuery的 顏色選擇器


