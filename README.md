## 프로젝트 실행

- 패키지 매니저는 npm을 사용하였습니다.

```sh
npm install
npm run dev
```

## 사용 모듈

프로젝트를 구현하기 위해 다음의 모듈들을 사용하였습니다.

- next
- react
- react-dom
- typescript
- tailwindcss
- eslint
- prettier

eslint는 기본적인 설정만 하였습니다.

## 폴더 구조

프로젝트에서 사용하는 폴더 구조는 다음과 같습니다.

- `app`: next 13버전 부터 지원하는 app 디렉토리 구조를 사용하였습니다.
- `components`: 공통 컴포넌트 폴더로 `atom` 단위로 구성한 `common`, 페이지에서 사용되는 컴포넌트 `tour`와 `ui`를 구성하는 폴더로 나누었습니다.
- `constants`: filters.json 파일을 사용하기 위한 폴더
- `lib`: `client`에서 동작하는 `recoil`을 별도 `component`로 분리하였습니다. 
- `models`: `data`를 `fetch` 하기 위한 모듈
- `store`: `recoil`의 `state` 정의
- `styles`: 전역 스타일 폴더

## 구현 내용

- 서버단에서 데이터를 fetch할 수 있도록 각 필터들은 query string으로 받아 필터링된 데이터를 반환하는 API를 구현하였습니다.
- 위시리스트는 recoil의 `atom`을 사용하여 구현하였습니다.
