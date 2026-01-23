# GfEditer - Dual Mode Molecular Editer

README in [English](https://github.com/RyokoKuga/GfEditor/blob/main/README.md)

**GfEditer** は、Webブラウザ上で分子構造のモデリングから、量子化学計算ソフト **GAMESS** 用の入力ファイル（`.inp`）生成までをシームレスに行うための支援ツールです。

---

## 🚀 使い方

1.  **Draw**: Modeling Modeで分子を描き、`Generate 3D` ボタンをクリックして3D座標を得ます。
2.  **Configure**: `Switch to Editor Mode` ボタンをクリックして、Editor Modeで計算手法や基底関数を選択します。
3.  **Download**: 生成された内容を確認し、`Download .inp File` ボタンでファイルを保存します。

`Enable OpenBabel` ボタンをクリックすることで、対応するファイルフォーマットを増やすことができます。

---

## 📦 使用ライブラリ

本プロジェクトは以下のオープンソースライブラリにより動作しています。
*   [Kekule.js](https://github.com/partridgejiang/Kekule.js) - 分子構造の描画
*   [Open Babel](https://github.com/openbabel/openbabel) - 化学構造ファイルフォーマットの変換   
*   [Three.js](https://threejs.org) - 3Dレンダリング
*   [Raphael.js](https://github.com/DmitryBaranovskiy/raphael) - 2Dグラフィックス

---

## 📄 ライセンス

Copyright © 2026 GfEditer Project.
Licensed under the [MIT License](LICENSE).

---
*Developed for the Computational Chemistry Community.*
