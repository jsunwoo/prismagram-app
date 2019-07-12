# Prismagram iOS & Android App

Screens:

- [ ] Home
- [ ] Search
- [ ] Upload
- [ ] Notification (Challenge)
- [ ] Profile
- [ ] Edit Profile (Challenge)
- [ ] Photo Detail
- [ ] Photo Comments (Challenge)
- [ ] Photo Likes (Challenge)

# 10 App: Setup

# 10.0 Creating the Project

- 깃허브 세팅해준뒤 app.json 의 platforms 에서 web 은 지워줬다 (버그 많을까봐)
- yarn add styled-components react-navigation apollo-boost graphql react-apollo-hooks



# 10.1 Preloading Assets

- @expo/vector-icons 을 추가해주었다
- useEffect 도 Hook 인데 처음 보았고 아직 잘 모르겠다 (Nook 보고옴)
- useEffect 로 preLoad 를 실행시켜 font 와 asset 들을 불러온 뒤 loaded state true 로 해줌

