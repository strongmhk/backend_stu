import requests
res = requests.get("http://naver.com") # 작성한 url의 html 코드 가져옴
res.raise_for_status() # 오류뜨면 실행 종료
# print("응답코드 :", res.status_code) # 200이면 정상



# if res.status_code == requests.codes.ok:
#   print("정상입니다")
# else:
#   print("문제가 생겼습니다. [에러코드 ", res.status_code, "]")


print(len(res.text)) # 가져온 html의 문자 개수
print(res.text)

with open("mygoogle.html", "w", encoding="utf8") as f: 
  f.write(res.text) # html 파일 받아오기
