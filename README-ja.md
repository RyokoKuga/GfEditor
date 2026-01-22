# 🧪 GfEditer - Dual Mode Molecular Studio

![Version](https://img.shields.io)
![License](https://img.shields.io)
![Platform](https://img.shields.io)

**GfEditer** は、Webブラウザ上で分子構造のモデリングから、量子化学計算ソフト **GAMESS** 用の入力ファイル（`.inp`）生成までをシームレスに行うための高機能支援ツールです。

---

## 🌟 主な特徴

| 機能 | 詳細 |
| :--- | :--- |
| 🔄 **Dual Mode** | 構造を作る **Modeling** と、計算設定を行う **Editor** を瞬時に切替 |
| ⚡ **Real-time Sync** | 構造の変更を即座に感知し、XYZ座標を自動更新。入力ミスを排除 |
| ⚛️ **3D Optimizer** | 2DスケッチからMMFF94力場を用いた精度の高い初期3D構造を生成 |
| 📑 **Smart Formatting** | 2026年基準の正確なカラム整列とGAMESS専用キーワードに対応 |

---

## 🛠 機能詳細

### 🎨 Modeling Mode (分子設計)
*   **2D Composer**: 直感的なスケッチツールで分子を構築。
*   **3D View & Gen**: `Generate 3D` ボタンで立体構造を作成し、360度自由に回転・確認。
*   **OpenBabel Integration**: より高度な構造変換やフォーマット読み込みに対応。

### ⚙️ Editor Mode (計算設定)
*   **Config Panel**: 以下の項目をプルダウンで選ぶだけでキーワードを自動生成。
    *   **Run Type**: `OPTIMIZE`, `ENERGY`, `HESSIAN`, `SADPOINT`, `IRC`
    *   **Theory**: `RHF`, `UHF`, `B3LYP (DFT)`, `MP2`
    *   **Basis Sets**: `STO-3G` から `6-31+G(d,p)` までの詳細オプション
*   **Dynamic Logic**: 選択したRun Typeに応じて、`$FORCE`, `$STATPT`, `$IRC` などの制御ブロックを自動挿入。
*   **Editable Text**: 自動生成されたテキストはエディタ上で直接修正・削除が可能。

---

## 🚀 使い方 (Workflow)

1.  **Draft**: `Modeling Mode` で分子を描き、`Generate 3D` をクリックして3D座標を得ます。
2.  **Configure**: `Editor Mode` に切り替え、計算手法や基底関数を選択します。
3.  **Download**: 生成された内容を確認し、`Download .inp File` ボタンでファイルを保存します。

---

## 📦 使用ライブラリ

本プロジェクトは以下のオープンソースライブラリにより動作しています。
*   [Kekule.js](https://partridge16.github.io) - 分子操作エンジン
*   [Three.js](https://threejs.org) - 3Dレンダリング
*   [Raphael.js](http://dmitrybaranovskiy.github.io) - 2Dグラフィックス

---

## 📄 ライセンス

Copyright © 2026 GfEditer Project.
Licensed under the [MIT License](LICENSE).

---
*Developed for the Computational Chemistry Community.*
