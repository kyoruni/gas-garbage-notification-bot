# gas-garbage-notification-bot

- ごみ収集日の前日に通知してくれるSlack bot

## 導入方法

- ワークスペースの `設定と管理` → `アプリを管理する`

- Appディレクトリで **webhook** と検索 → `Incoming Webhook` を選択

- `Slackに追加` をクリック

- 設定メニューの `チャンネルへの投稿` で、投稿させたいチャンネルを選択

- 設定メニューの `名前をカスタマイズ` で、任意の bot 名を設定

- **webhook URL** を控えておく

- Google ドライブで `新規作成` → `その他` → `Google Apps Script`

- **bot.gs** のコードを貼り付ける

  - 曜日を自分の地域に合わせて書き換え

  - webhook URL を、先ほど控えたURLに差し替え

- **時計マークのアイコン** をクリック、 トリガー一覧の画面へ → `トリガーを追加`

- 下記の通り設定して導入完了

  - 実行する関数を選択 → main
  
  - 実行するデプロイを選択 → Head
  
  - イベントのソースを選択 → 時間手動型
  
  - 時間ベースのトリガーのタイプを選択 → 時間ベースのタイマー 任意の時間を選択
