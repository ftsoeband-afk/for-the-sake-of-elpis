# for the sake of Elpis — Official Website

GitHub Pages向けの静的サイトです。

## ファイル構成

- `index.html` — ページ本体
- `style.css` — デザイン・レスポンシブ対応
- `script.js` — 約1秒のイントロ演出
- `assets/logo.png` — 提供されたロゴを透明化したPNG
- `.nojekyll` — GitHub Pagesでそのまま静的ファイルとして公開するためのファイル

## SNSリンクを設定する

`index.html` の以下の2つを変更してください。

```html
<a href="#" class="social" aria-label="X" data-placeholder="true">
```

```html
<a href="#" class="social" aria-label="Instagram" data-placeholder="true">
```

`href="#"` を実際のURLに変更し、`data-placeholder="true"` も削除します。

例：

```html
<a href="https://x.com/..." class="social" aria-label="X">
```

## GitHub Pages

GitHubのリポジトリにこのフォルダの中身をアップロードし、
Settings → Pages → Deploy from a branch → `main` / `/ (root)`
を選択してください。

GitHub PagesはHTML/CSS/JavaScriptをGitHubリポジトリから公開できます。
