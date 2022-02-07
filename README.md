# 상품 등록 관리 페이지

## 프로젝트 소개

요청서 필터 페이지

## 팀원 소개

🏃‍ [민지연](https://github.com/ichbinmin2)<br/>
🏃‍ [박서윤](https://github.com/seoyuuun)<br/>
🏃‍ [양다혜](https://github.com/dahye-program)<br/>
🏃‍ [박서영](https://github.com/ongddree) (팀장)

## 배포 주소

[배포 사이트 바로가기]( )

## 과제 구현 목록

### 1  (박서윤)

☑️ 

### 2. (양다혜)

☑️ 

### 3. (박서영)

☑️ 

###  (민지연)

☑️ 


### 공통 컴포넌트

#### 민지연

☑️ 

<br/>

#### 박서영

☑️ 
 

<br/>



## 기능별 영상

### 1 노출 및 판매 기간 설정 (박서윤)<br/>

- ![]()

### 2. 상품 등록 (양다혜)

- ![]()

### 3. 상품 옵션 (박서영)

-   <br/> <br/>
  ![]()


### 4. 상품 정보 고시 (민지연)

-   <br/> <br/>
  ![]()

## 과제 후기

### 🙋‍♀️ 박서윤

<br/>

### 🙋‍♀️ 양다혜

<br/>

### 🙋‍♀️ 박서영

<br/>

### 🙋‍♀️ 민지연

(프로젝트 회고 주소 첨부 예정)


## 프로젝트 구조 설명

```bash
.
├── App.css
├── App.js
├── components
│   ├── common
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── InsertImage.jsx
│   │   ├── InsertImagePreview.jsx
│   │   ├── Radio.jsx
│   │   ├── Toggle.jsx
│   │   ├── datepicker
│   │   └── index.js
│   ├── infoNotice
│   │   ├── InfoNotice.jsx
│   │   └── infoNoticeForm
│   ├── layout
│   │   ├── Contentwrap.jsx
│   │   ├── navbar
│   │   └── sidebar
│   ├── productExpoSalesPeriod
│   │   ├── ExposurePeriodSet.jsx
│   │   └── SalesPeriodSet.jsx
│   ├── productInfo
│   │   └── ProductInfo.jsx
│   ├── productOrderSet
│   │   ├── ProductOrderStart.jsx
│   │   └── ProductPickUp.jsx
│   ├── productPreOrderReservation
│   │   └── PreOrderReservetionSet.jsx
│   └── productoption
│       ├── Optionset.jsx
│       ├── Suboption.jsx
│       └── index.js
├── hooks
│   ├── SubmitForm.jsx
│   ├── useForm.js
│   └── validate.js
├── index.css
├── index.js
├── logo.svg
├── pages
│   ├── admin.jsx
│   └── adminSection
│       ├── ExpoSalesPeriodSet.jsx
│       ├── addoption.jsx
│       ├── pagesInfoNotice.jsx
│       ├── productInfo.jsx
│       └── productorder.jsx
└── style
    ├── globalstyle.js
    └── theme.js


```

### 데이터 get 명세

```
{
  "requests": [
    {
      "id": 1,
      "title": "자동차 시제품 제작",
      "client": "A 고객사",
      "due": "2020.12.14",
      "count": 2,
      "amount": 100,
      "method": ["밀링", "선반"],
      "material": ["알루미늄"],
      "status": "대기중"
    },
    {
      "id": 2,
      "title": "비행기 시제품 제작",
      "client": "B 고객사",
      "due": "2020.12.13",
      "count": 2,
      "amount": 100,
      "method": ["선반"],
      "material": ["탄소강", "강철"],
      "status": "상담중"
    },
    {
      "id": 3,
      "title": "기차 시제품 제작",
      "client": "C 고객사",
      "due": "2020.12.12",
      "count": 1,
      "amount": 20,
      "method": ["선반"],
      "material": ["구리"],
      "status": "대기중"
    },
    {
      "id": 4,
      "title": "자전거 시제품 제작",
      "client": "D 고객사",
      "due": "2020.12.11",
      "count": 1,
      "amount": 45,
      "method": ["선반"],
      "material": ["스테인리스강"],
      "status": "대기중"
    },
    {
      "id": 5,
      "title": "헬리콥터 시제품 제작",
      "client": "E 업체",
      "due": "2020.12.10",
      "count": 2,
      "amount": 2,
      "method": ["밀링"],
      "material": ["알루미늄", "탄소강"],
      "status": "대기중"
    },
    {
      "id": 6,
      "title": "전동 킥보드 시제품 제작",
      "client": "F 업체",
      "due": "2020.12.09",
      "docs": 1,
      "amount": 20,
      "method": ["밀링"],
      "material": ["강철"],
      "status": "대기중"
    }
  ]
}
```

<br/>

## 설치 및 시작하는 법

**프로젝트 클론**

```
$ git clone 
```

**패키지 설치**

```
$ yarn
```

**서버 실행**

```
$ yarn start
```
