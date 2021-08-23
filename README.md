# react_todo

## Todo App in React

### 라이브러리
```shell
yarn add node-sass@4.14.1 classnames react-icons
# node-sass : sass
# classnames : 조건부 스타일링 편하게 하기 위함
# react-icons : 다양한 아이콘 편하게 사용 위함 (*.svg의 컴포넌트화)
```

### 컴포넌트 구성
- TodoTemplate : 화면 가운데 정렬 + 앱 타이틀 표시 + props.children로 하위 JSX 렌더링
- TodoInsert : 새로운 항목 입력 및 추가 + input 태그 state 관리
- TodoList : props로 todos 배열 취득 + map으로 TodoListItem 렌더링
- TodoListItem : props로 todo 객체 취득 + 세부 정보 표시 + state에 따른 UI 변경