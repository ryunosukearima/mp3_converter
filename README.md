<div id="top"></div>

## 使用技術一覧
<p>
<img src="https://img.shields.io/badge/-javascript-888888.svg?logo=javascript&style=plastic">
<img src="https://img.shields.io/badge/-python-888888.svg?logo=python&style=plastic">
<img src="https://img.shields.io/badge/-html-888888.svg?logo=html&style=plastic">
<img src="https://img.shields.io/badge/-css-888888.svg?logo=css&style=plastic">

 
</p>

## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [環境](#環境)
3. [機能説明](#機能説明)
4. [セットアップ](#セットアップ)
5. [使用方法](#使用方法)


## プロジェクト名

YOUTUBE MP3 CONVERTER



## プロジェクトについて

趣味であるDJで使用する楽曲をダウンロードする際、既存のサイトでは音質が悪い・ダウンロードに時間がかかる・ダウンロードに失敗するといったことが起こります。この経験から自分専用のサイトを作ろうと考え作成しました。



<p align="right">(<a href="#top">トップへ</a>)</p>

## 環境

| 言語・フレームワーク  | 
| --------------------- |
| Python                |
| flask                |
| html |
| css                 |
| javascript               |
<br>

<p align="right">(<a href="#top">トップへ</a>)</p>

## 機能説明

・MP3ダウンロード機能
<br>
・MP3タグの編集機能
<br>
<br>
YouTube urlの欄には、youtubeからダウンロードしたい動画のリンクを入力。

[YOUTUBE公式サイト](https://www.youtube.com/?app=desktop&hl=ja)
<br>
ダウンロードされるファイル名は、Output fileに入力されたものが使用され、空白が含まれていた場合、空白を'_'に置換した状態で出力される。
変換ボタンでダウンロード、リセットボタンで入力したテキストの一括消去が可能。
<br>
連続して同じファイルのダウンロードを避けるため、変換ボタン押下1000分の1秒後にYouTube url
・Output fileに入力されたテキストは削除される。
<br>
ビットレートは320kbpsの形で出力
<br>

<p align="right">(<a href="#top">トップへ</a>)</p>

## セットアップ

1 pythonをインストール
<br>
<br>
2 必要なpythonライブラリをインストール
<br>
<br>
pip install flask flask-socketio eventlet yt-dlp eyed3 mutagen
<br>
<br>
3 FFmpegのインストール
<br>
FFmpeg公式サイトからWindows用のバイナリをダウンロード

[FFmpeg公式サイト](https://www.youtube.com/?app=desktop&hl=ja)
<br>
ダウンロードしたファイルを解凍し、フォルダをシステム環境変数のPATHに追加。
<br>

<p align="right">(<a href="#top">トップへ</a>)</p>

## 使用方法

何も入力していない状態
<br>
<img src='youtube_README_images/YouTube MP3コンバータ - Google Chrome 2025_03_14 18_29_42.png'>
<br>
入力例
<br>
上から、YOUTUBEURL・出力ファイル名兼楽曲名・アーティスト名・楽曲のコメントを入力しています。
<br>
<img src='youtube_README_images/YouTube MP3コンバータ - Google Chrome 2025_03_14 18_29_07.png'>
<br>
入力したものが対応したタグに入力されています。
<br>
<img src='youtube_README_images/曲の情報 2025_03_14 18_31_36.png'>
<br>

<p align="right">(<a href="#top">トップへ</a>)
