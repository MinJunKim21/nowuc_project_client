# 내가보고싶은것만볼래!
### 유튜브의 보고 싶은 영상들만 자동 업데이트되어 편하게 보는 서비스
배포 : https://watchwhatuwatch.vercel.app/



# ✨ 서비스 소개

- 본인의 취향이 반영하여 **선정한 콘텐츠의 최신 업데이트된 영상의 제목, 영상 링크, 업로드시간을 제공**합니다.
- 알고리즘 방식이 아닌 카테고리를 통하여 **사용의 목적에 맞는 목록이 한눈에 들어오는 디자인**입니다.
- 유튜브에서 겪는 비효율적인 과정을 생략하여 **기존보다 더 효율적인 사용자 경험** 제공합니다.

# 🤔 유튜브 불편 사항

### [문제점]

- 구독한 채널이 많으면 사용자 경험이 안좋음
- 채널들의 최신 영상을 한눈에 파악이 어려움
- 알고리즘 굴레에 빠져 첫 의도보다 오랜 시청
- 플레이리스트와 채널을 분리하고 싶음
    
     : ’튀르키예즈 온 더 블럭’만(세부 재생목록) 보고 싶지만 스튜디오 와플(채널)의 ‘바퀴달린입’(다른 세부재생목록)의 정보까지 전달 받음.
    

### [해결 방법]

- 많은 리스트에서 원하는 채널을 들어가보거나, 검색해서 채널에 들어간 후 업데이트된 영상인지 확인하는 과정 생략
- 선정한 채널 영상의 필수 정보들만 요약, 파악
- 선정한 콘텐츠들의 업데이트 여부만 확인하여 유튜브 알고리즘 노출 최소화
- 세부 재생목록까지도 개별적인 콘텐츠로 분류하여 서비스 제공

# 👨‍👨‍👦‍👦 팀원 구성

- **개발자 & 기획자 1명 (본인)** : 서비스 기획, 웹 개발 모두 담당
- **디자이너 1명** : 서비스 기획, 서비스 모든 디자인 파트 담당

# 🔑 핵심 기능

1. **사용 목적에 맞는 카테고리**
    
    유튜브 사용에는 영상을 통해 공부 또는 여가를 즐기는 목적이 있지만, 구독한 채널들은 분류 없이 열거되어있습니다. 유튜버를 찾는 과정에서 노출된 여가 시간을 위한 유튜버의 유혹으로 인하여, 접속할 때는 공부하려던 의도에서 이탈하게됩니다. 그렇기에 관심있는 콘텐츠들을 목적에 맞게 분류하여, 최대한 의도에 맞는 사용을 도와주고자 합니다.
    
2. **원하는 정보만을 효율적이게 접하며, 시청할 영상에 대한 접근성 향상**
    
    본인이 선정한 유튜버들 중에서 어느 유튜버가 업데이트 되었는지 바로 확인 가능합니다. 업데이트가 되면 업데이트 시간, 제목, 링크가 제공되어 바로 영상을 접할 수 있습니다. 이는 기존의 불필요한 사용자 경험 과정을 생략하여 효율성을 높여줍니다.  
    

# ⚒️ 기술 스택

프레임워크 : React  Next.js 

언어 : HTML  CSS  JavaScript

스타일 : Tailwind CSS  Styled-Components

API : YouTube Data API

코딩 스타일 : ESlint  Prettier

배포 : Vercel

디자인 : Figma

# 🧑‍💻 협업 파트

### [FE 개발]

- YouTube API를 활용할 경우 사용 가능한 정보, 한계를 정리하여 서비스하고자 하는 범위를 설정하였습니다.
- 디자이너와 UX/UI 협의 후, 발전된 디자이너의 시안을 토대로 구현, 구현 과정에서 지속된 협의

### [기능 구현]

1. **YouTube API**
    - YouTube에서 제공하는 API 공식 문서를 확인하면서 필요한 데이터를 요청과 응답 받는 과정을 공부하여 구현하였습니다.
    - 유튜버를 선정하여 리스트업한 뒤, 리팩토링으로 데이터들을 효율적이게 구성하는 것을 시도하였습니다.
    - API Key 유출 방지를 위해 .env 파일을 통해 변수화 하여 사용하였고, gitignore 파일에 .env를 포함시켜 Github에 업로드되어 유출되는 사항을 방지하였습니다.
2. **Tailwind CSS & Styled-Components**
    - Tailwind CSS를 사용하여 스타일 구현을 하여 디자이너와의 협의 시에 빠른 수정이 가능하였습니다.
    - UI가 확정된 후에는 styled-components를 연계시켜 반복된 컴포넌트들을 정리하여 전체 코드의 가독성을 향상 시켰습니다.
