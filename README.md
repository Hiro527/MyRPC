# MyRPC
Discord RPCを動かすためだけのツール。使い方は自分で工夫してください。

# 使い方
1. リポジトリをクローンする
2. `npm i` でパッケージをインストールする
3. config.jsonに以下の内容を追加する

```json
{
    "appID": "AppID",
    "status": "Status Text",
    "largeImageKey": "Large Image Key",
    "largeImageText": "Large Image Text",
    "smallImageKey": "Small Image Key",
    "smallImageText": "Small Image Text"
}
```

4. `node main.js` で起動します。

## 使用上の注意
- config.jsonのパラメーターのすべてを埋める必要があります。smallImageKeyを使わない場合は適当な文字列(image keyに登録していない文字列)を挿入してください。
- 自分でDiscord Appを作成する必要があります。また、そこからappIDを取得して設定してください。アセットのアップロードも同様です。