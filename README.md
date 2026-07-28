# 포트폴리오 — GitHub Pages 배포

## 이미지 넣기
`img/` 폴더에 스크린샷 파일을 넣기만 하면 자동으로 뜬다. 파일명은 index.html 이 기대하는 이름 그대로:

| 파일 | 프로젝트 |
|---|---|
| `img/bluepass.png` | 카스 커넥트 블루패스 |
| `img/hanmac.png` | 한맥 |
| `img/stella.png` | 스텔라 |
| `img/budweiser.png` | 버드와이저 |
| `img/michelob.png` | 미켈롭 울트라 |
| `img/ob.png` | OB 기업사이트 |

- 파일이 없으면 그 자리는 그냥 안 보인다 (깨진 이미지 아이콘 안 뜸). 있는 것만 채우면 됨.
- 다른 이름 쓰고 싶으면 index.html 의 `<img src="img/...">` 만 바꾸면 됨.
- `.png` 대신 `.jpg`/`.webp` 써도 됨 (파일명 확장자만 맞추기).

## GitHub Pages 배포 (한 번만)
```bash
cd ~/Desktop/portfolio
git init
git add .
git commit -m "포트폴리오"
git branch -M main
git remote add origin https://github.com/nonexpertchassi-creator/portfolio.git
git push -u origin main
```
그 다음 GitHub 웹에서: **Settings → Pages → Source: Deploy from a branch → Branch: main / (root) → Save**

몇 분 뒤 → `https://nonexpertchassi-creator.github.io/portfolio/`

## 이후 업데이트
```bash
git add . && git commit -m "수정" && git push
```
