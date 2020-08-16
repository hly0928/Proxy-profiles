let body = JSON.parse($response.body)
body['response']['user']['is_premium'] = true
body = JSON.stringify(body)
$done({body})
