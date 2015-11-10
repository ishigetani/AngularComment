# AngularComment

## AngularJs + CakePHP

練習用に作ったコメントシステムです。  
今回気にした主な点は以下の３つ。
* AngularJSでのきちんとしたディレクトリ構造
* CakePHPのAPIComponentの自作
* git Flowの使用


> フロント側は[こちらのサイト](http://manablog.org/laravel_angular_comment_system/)を参考にさせていただきました。
大変助かりました。

## 導入手順

### API設定(CakePHP)

1. /api/以下のCakePHPのいつもの設定（DBの設定・tmp書き込み等）
2. Migrationを全て起動
```
php cake.php Migrations.migration run all
```

### Front側の設定(AngularJS)
APIのアクセスURLに定数を設定しているので環境に合わせて設定してください
```AngularJS:/js/services/constantService.js
angular.module('constantService', []).factory('Constant', function(){
    return {
        BaseUrl : '/comment/'
    }
});
```
※localhost/comment/という場合の設定例

## 使用外部ライブラリ

* [Angular Loading Bar](http://chieffancypants.github.io/angular-loading-bar/)  
Ajax通信の時に画面上部にアニメーションを表示
* [ngStorage](https://github.com/gsklee/ngStorage)  
AngularJs上から簡単にSessionやloaclStorageにアクセスする
* [Notify.js](http://notifyjs.com/)  
右上に出るメッセージ
* [Angular-xeditable](http://vitalets.github.io/angular-xeditable/#overview)  
編集時に使用(v1.1で追加)