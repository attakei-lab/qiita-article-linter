# qiita-article-linter

Qiitaの記事Markdownを、textlintで検証するのが目的のCLI。

https://user-images.githubusercontent.com/668834/204597361-e2336534-f509-465b-9f75-8fdbf6a7dd24.mp4

## 必要環境

* deno

## 実行前の準備

1. 実行者依存のファイルを準備します。

``` console
cp .textlintrc.example .textlintrc
cp rules.example.ts rules.ts
```

2. ルール関連ファイルをコピーします。
  * `rules.ts`に追加で必要になるルールパッケージを追加します。追加時のフォーマットは`rules.ts`に記載されています。
  * `.textlintrc`に適用したいルールを記載します。

## 使い方

```console
deno task main [Qiita記事のURL]
```

* Denoランタイムに許可する内容については、`deno.json`の`tasks.main`を参照して下さい。
* Qiitaの仕様上、URLには限定公開URLを指定することも可能です。
