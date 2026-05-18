📅 스마트 스케줄러 + 팀 채팅 프로젝트
📌 프로젝트 개요

Firebase를 기반으로 일정 관리와 팀 채팅 기능을 통합한 웹 애플리케이션입니다.
개인 일정 관리뿐 아니라 팀 단위로 실시간 소통이 가능하도록 설계했습니다.

GitHub Pages를 통해 배포된 정적 웹앱이며, Firestore를 이용해 데이터가 실시간으로 동기화됩니다.

🛠 기술 스택
HTML5 / CSS3 / JavaScript (Vanilla JS)
Firebase Authentication (Google 로그인)
Firebase Firestore (실시간 DB)
Firebase Cloud Messaging (알림)
GitHub Pages (배포)
✨ 주요 기능
📆 일정 관리 (Calendar)
월 단위 캘린더 UI 제공
날짜별 일정 등록 / 수정 / 삭제
일정별 작성자 표시
사용자별 색상 자동 구분
메모 추가 기능 지원
💬 팀 채팅
Firebase 기반 실시간 채팅
로그인 사용자만 채팅 가능
사용자별 고유 색상 적용
최신 100개 메시지 유지
🔐 사용자 시스템
Google 로그인 기반 인증
허용된 5명 사용자만 서비스 이용 가능
관리자 계정 별도 권한 처리
🧠 구현 특징
Firestore onSnapshot 기반 실시간 UI 업데이트
사용자 UID 기반 본인 데이터 보호 처리
모바일 / PC 반응형 UI
PWA 형태 구조 (manifest + service worker 적용)
🧾 2026.05.14 업데이트
일정 등록 시 메모 기능 추가
일정 삭제 기능 구현
메모 입력 UI 및 DB 저장 구조 개선
일정 생성/수정 시 메모 포함 처리 반영
📂 프로젝트 구성
메모장 기능 (일정 메모 포함)
GitHub Pages 배포
Firebase (Auth + Firestore + Messaging)
🚀 프로젝트 목적

실시간 데이터 처리(Firebase)와 캘린더 UI, 채팅 기능을 하나의 웹앱에 통합하여
프론트엔드 + 백엔드(서버리스) 구조를 이해하고 구현하는 것을 목표로 함.
