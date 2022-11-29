/**
 * textlintのルール管理ソース
 *
 * package.json代わりに、このファイルでtextlintのルールパッケージを管理しています。
 *
 * https://deno.land/manual/node/npm_specifiers を参考にしつつ、
 * ```
 * import "npm:{package-name}@{package-version}";
 * ```
 * の書式で必要なルールを追加して下さい。
 */
import "npm:textlint-rule-preset-ja-technical-writing@^7.0.0";
