var tipuesearch = {"pages": [{'title': 'About', 'text': '41023131 \n 倉儲: https://github.com/george0324/cp2023 \xa0 \n 網頁: https://george0324.github.io/cp2023/content/index.html \xa0 \n', 'tags': '', 'url': 'About.html'}, {'title': 'W6', 'text': '', 'tags': '', 'url': 'W6.html'}, {'title': '練習1', 'text': '1. 編寫一個 C 程式來列印您的姓名、出生日期和手機號碼。 預期輸出： \n 輸出程式.txt \n', 'tags': '', 'url': '練習1.html'}, {'title': 'Progress rate', 'text': 'weak1 \n 1.申請或登入學校gmail \n 2.申請github帳號 \n \xa0 \xa0 \xa0 (1) 建立個人網站: \xa0 https://github_帳號.github.io \n \xa0 \xa0 \xa0 (2)將計算機程式課程中所編寫的程式與相關資料存入 Github 帳號下的 Gist \n 3.申請onedrive帳號 \n \xa0 \xa0 \xa0 (1)登入學校郵箱 (用來收帳號建立確認信) \n weak2 \n 1.建立可攜系統 \n 2.建立github倉儲及網頁 \n weak3 \n 1.處理replit中的python問題 \n 2.建立site-個人github帳號 倉儲設定: https://github.com/mdecp2023/site-george0324 \n weak4 \n 1.建立線上考試帳號 \n 2.建立Github評分倉儲: https://github.com/george0324/cp2023 \xa0 \n', 'tags': '', 'url': 'Progress rate.html'}, {'title': 'note', 'text': '', 'tags': '', 'url': 'note.html'}, {'title': '倉儲', 'text': '1.先登入teams帳號 \n 2.進入老師的作業倉儲: https://classroom.github.com/a/Ty_eyXdV \n 點選Create repository from template 複製頁面出現的網址 \n 3.開啟cmd(黑色頁面的編譯器) \n 輸入cd tmp/cd site-學號 \n 輸入pip install pyopenssl \n 輸入cms \n 接著會出現一段網址 \n 複製網址後到瀏覽器開啟進入近端網頁 \n 然後將網頁編輯成自己的作業網站 \n 4.接著到倉儲網站的settings的Developer settings裡的Personal access tokens建立一個自己的token， \n 5.輸入acp "(名稱)" \n 6.即可完成，並去Setting點pages，檢查是否上傳成功。 \n', 'tags': '', 'url': '倉儲.html'}, {'title': 'w4', 'text': "1. 1.牛頓第二運動定律 （ Newton's second law of motion ） \n 牛頓第二定律.txt \n 2. mass-spring-damper 系統 \n mass-spring-damper 系統.txt \n 3. Euler's Method \n \n", 'tags': '', 'url': 'w4.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};