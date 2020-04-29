const weekDays = ['日', '月', '火', '水', '木', '金', '土']
const webhookUrl = 'ここにwebhoolのURL'

function main () {
  const today = new Date()
  const weekDay = today.getDay()
  const message = getMessage(weekDay)
  if (message) sendToSlack(message)
}

function getMessage (num) {
  let message
  if (num === 0 || num === 4) {
    // 月曜日と金曜日 → 日曜日と木曜日に通知
    message = `明日は${weekDays[num+1]}曜日 燃えるゴミの日です！`
  } else if (num === 1) {
    // 火曜日 → 月曜日に通知
    message = `明日は${weekDays[num+1]}曜日 缶・瓶・ペットボトルの日です！`
  }
  return message
}

function sendToSlack (message) {
  const jsonData = { 'text': message }
  const payload = JSON.stringify(jsonData)
  const options = {
    'method':      'post',
    'contentType': 'application/json',
    'payload':     payload
  }
  UrlFetchApp.fetch(webhookUrl, options)
}
