(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{153:function(_,v,t){"use strict";t.r(v);var a=t(0),e=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("div",{staticClass:"content"},[t("h2",{attrs:{id:"地理空間データとは"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#地理空間データとは","aria-hidden":"true"}},[_._v("#")]),_._v(" 地理空間データとは")]),_._v(" "),t("p",[_._v("我々が暮らす世界には、多くの地理空間データが存在しています。「地理空間データ」の定義は難しいですが、まずは空間上の特定の地点や領域とそれに紐付く情報と考えてみましょう。例えば次のものは地理空間データの一つです。")]),_._v(" "),t("p",[_._v("ここでは地物や事象の「状態」を表すための情報を地理空間情報として扱います。地理空間情報は文字通り、地球上での"),t("strong",[_._v("位置")]),_._v("や"),t("strong",[_._v("形状")]),_._v("を記録するデータです。")]),_._v(" "),t("p",[_._v("身の回りにあるものは位置情報を持っています。")]),_._v(" "),t("ul",[t("li",[_._v("それに付随する属性情報")])]),_._v(" "),t("h3",{attrs:{id:"地物とは何か"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#地物とは何か","aria-hidden":"true"}},[_._v("#")]),_._v(" 地物とは何か")]),_._v(" "),t("h3",{attrs:{id:"データ構造"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#データ構造","aria-hidden":"true"}},[_._v("#")]),_._v(" データ構造")]),_._v(" "),t("p",[_._v("地理空間情報をどのようにコンピュータ上に表現するかというデータ構造には、さまざまな表現形態があります。それは地理空間情報がどのように記録されるか・取り扱うかによって大きく2種類に分けて考えることができます。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("ベクタ")])]),_._v(" "),t("li",[t("strong",[_._v("ラスタ")])])]),_._v(" "),t("p",[_._v("これらについて、次に詳しく説明します。")]),_._v(" "),t("h3",{attrs:{id:"ベクタ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ベクタ","aria-hidden":"true"}},[_._v("#")]),_._v(" ベクタ")]),_._v(" "),t("p",[_._v("ベクトル、ベクターと呼ばれるデータ形式は、一般に、点、線、面で表現されるものです。これらは現実の世界に目に見えないもの (行政区域など実際には存在しないもの) も含めてありますが、いずれも存在する地物です。")]),_._v(" "),t("ul",[t("li",[_._v("座標と属性情報をもち、地図上で表現できる")]),_._v(" "),t("li",[_._v("ポリゴンは、(x,y)の座標値を結んだ閉じた線分として格納される")])]),_._v(" "),t("p",[_._v("ベクトルデータに格納される属性情報は、一般的にテーブル形式で格納され、図形情報と関連づけられています。")]),_._v(" "),t("h3",{attrs:{id:"ラスタ"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ラスタ","aria-hidden":"true"}},[_._v("#")]),_._v(" ラスタ")]),_._v(" "),t("ul",[t("li",[_._v("明確な形状として区切ることができない、連続的に変化する状態や広がりを持つもの")]),_._v(" "),t("li",[_._v("行と列の格子状(グリッド状)に並んだセル(ピクセル)で構成されるデータ")]),_._v(" "),t("li",[_._v("各セルに情報を表す量が含まれる")])]),_._v(" "),t("h3",{attrs:{id:"次元"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#次元","aria-hidden":"true"}},[_._v("#")]),_._v(" 次元")]),_._v(" "),t("p",[_._v("全てのジオメトリ (geometry) はポイントの集合によって形成されます。ある一カ所を示す点は一つのポイントです。2点を結ぶラインは始点と終点の2つのポイントをもちます。多角形のジオメトリであるポリゴンでは、いくつかの頂点が存在します。これらはジオメトリを構成する原子のようなものです。")]),_._v(" "),t("p",[_._v("ポイントは2次元から4次元の座標です。あるジオメトリにおいて、全てのポイントは同じ次元を有していなければいけません。1次元のポイントというのは存在しなく、どのポイントも"),t("code",[_._v("X")]),_._v("、"),t("code",[_._v("Y")]),_._v("の2点の座標値を含みます。")]),_._v(" "),t("p",[_._v("2以上の次元として、"),t("code",[_._v("Z")]),_._v("、"),t("code",[_._v("M")]),_._v("が使われることがあります。"),t("code",[_._v("Z")]),_._v("座標は高度や標高を示します。また"),t("code",[_._v("M")]),_._v("座標は他の次元と紐付く値尺 (measure) です。測定の時間や計測誤差などの記録のためのもので頻繁に使われるものではありません。")]),_._v(" "),t("p",[_._v("ポイントは、他のジオメトリを構成する要素となります。")]),_._v(" "),t("h3",{attrs:{id:"座標参照系-crs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#座標参照系-crs","aria-hidden":"true"}},[_._v("#")]),_._v(" 座標参照系 (CRS)")]),_._v(" "),t("p",[_._v("地球上の地物の位置を示すために、座標に加えて座標参照系 (Coordinate Reference System: CRS) の定義が必要になります。これは二次元の座標を地球上に投影するための位置関係と紐づけるために使われます。言い換えると、座標参照系が判明している時にのみ座標を地球の表面に置くことができます。")]),_._v(" "),t("p",[_._v("「座標」にはこれまでの例でみてきたXY座標を使ったものに加えて、緯度経度で表現されるものもあります。また地図投影法により定義された値を座標として使うこともあります。")]),_._v(" "),t("p",[_._v("座標参照系は地理座標系と投影座標系に大別されます。")])])}],!1,null,null,null);e.options.__file="introduction.md";v.default=e.exports}}]);