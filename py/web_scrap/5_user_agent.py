# user agent란 공인인증서(?) 느낌
# html 파일을 가지러 웹에 접근할 때 웹 사이트가 사람이 아님을 인식해 올바른 정보를 주지않음
# user agent를 이용하면 공인인증 가능!

import requests
url = "http://naver.com"
heads = {"User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36"}

res = requests.get(url, headers=heads) 
res.raise_for_status() 


with open("naver.html", "w", encoding="utf8") as f: 
  f.write(res.text) 

