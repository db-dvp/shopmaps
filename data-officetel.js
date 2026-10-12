/* 오피스텔 분양가 검토 데이터 (단위: 만원, 전용면적 ㎡) */
window.OFFICETEL_TITLE = "운정역 오피스텔 분양가 vs 현재 시세";
window.OFFICETEL_SOURCE = "분양가: 입주자모집공고 타입별 최고금액 / 호가: 네이버부동산 / 실거래·시세: 국토부 신고(호갱노노), KB부동산 (2026.10 조회)";
window.OFFICETEL_DATA = [
  {
    id: "hillstate-1", short: "힐스테이트 1단지",
    name: "힐스테이트 더 운정 오피스텔 1단지",
    address: "경기도 파주시 와동동 1471-2", geocode: "경기도 파주시 와동동 1471-2",
    households: 1059, approval: "2025.08", developer: "하나자산신탁 / 시공 현대건설",
    notice: { no: "2021950091", date: "2021.11.25", apply: "2021.12.01", contract: "2021.12.07~11" },
    target: { label: "전용 84㎡", min: 80, max: 100 },
    types: [
      { code: "84OA", alias: "189OA", area: 84.9238, units: 348, price: 88520 },
      { code: "84OB", alias: "191OB", area: 84.9868, units: 350, price: 89030 },
      { code: "84OC", alias: "190OC", area: 84.9628, units: 222, price: 89130 },
      { code: "84OD", alias: "190OD", area: 84.9628, units: 135, price: 89130 },
      { code: "147OP", alias: "329OP", area: 147.9046, units: 4, price: 299520 }
    ],
    asking: {
      label: "네이버 호가 (84㎡ 22건)", date: "2026.10.12",
      avg: 75900, median: 74900, min: 62500, max: 96000,
      byFloor: [ { f: "저층(≤15)", n: 6, avg: 73200 }, { f: "중층(16~30)", n: 10, avg: 72300 }, { f: "고층(≥31)", n: 6, avg: 84500 } ],
      perPyeong: { avg: 2985, median: 2946, min: 2459, max: 3778 }
    },
    refs: [
      { label: "실거래 2026.04.06", v: 65000, note: "189OA 31층 직거래 (KB)" },
      { label: "실거래 2025.12", v: 85000, note: "189OA (호갱노노)" },
      { label: "KB 매물 평균가", v: 79900, note: "매매 매물 59건" }
    ],
    extra: ["KB AI시세 없음 · 전세 실거래 4.00억 (2026.09.20)"],
    memo: "분양가는 타입별 '최고금액'이므로 실제 분양가 평균은 이보다 낮음(층·호수별 금액은 공고문 참고). 호가는 중개사 중복 등록 가능. 실거래 2건은 직거래 포함이라 대표성 낮음."
  },
  {
    id: "hillstate-2", short: "힐스테이트 2단지",
    name: "힐스테이트 더 운정 오피스텔 2단지",
    address: "경기도 파주시 와동동 1471-3", geocode: "경기도 파주시 와동동 1471-3",
    households: 1610, approval: "2025.08", developer: "하나자산신탁 / 시공 현대건설",
    notice: { no: "2021950092", date: "2021.11.25", apply: "2021.12.01", contract: "2021.12.07~11" },
    target: { label: "전용 84㎡", min: 80, max: 100 },
    types: [
      { code: "84OA", alias: "189OA", area: 84.9238, units: 532, price: 88520 },
      { code: "84OB", alias: "191OB", area: 84.9868, units: 531, price: 89030 },
      { code: "84OC", alias: "189OC(190OC)", area: 84.9628, units: 496, price: 89130 },
      { code: "84OD", alias: "190OD", area: 84.9628, units: 45, price: 89580 },
      { code: "147OP", alias: "329OP", area: 147.9046, units: 6, price: 249400 }
    ],
    asking: {
      label: "네이버 호가 (84㎡ 32건)", date: "2026.09.14~10.12",
      avg: 72868, median: 70144, min: 60000, max: 100000,
      byFloor: [ { f: "저층(≤15)", n: 9, avg: 72651 }, { f: "중층(16~30)", n: 9, avg: 73656 }, { f: "고층(≥31)", n: 14, avg: 72502 } ],
      perPyeong: { avg: 2869, median: 2762, min: 2362, max: 3937 }
    },
    refs: [
      { label: "호가 191OB 평균", v: 69318, note: "11건" },
      { label: "호가 189OA 평균", v: 73040, note: "14건" },
      { label: "호가 189OC 평균", v: 78104, note: "7건" },
      { label: "호가 최저(협회 매물)", v: 64266, note: "191OB 12층, '마피 2억' 표기" }
    ],
    extra: ["실거래 0건(호갱노노) · KB 미등재 · 입주 2025.08(2년차)", "호가 사분위: 하위 6.56억 / 중앙 7.01억 / 상위 7.68억"],
    memo: "호가 32건(범위 표기 매물은 중간값 적용, 중개사 중복 등록 가능). 실거래가 없어 호가만으로 비교하므로 실제 거래가는 더 낮을 수 있음. 분양가는 타입별 최고금액."
  },
  {
    id: "purgio-1", short: "푸르지오 파크라인 1단지",
    name: "운정 푸르지오 파크라인 오피스텔 1단지",
    address: "경기도 파주시 와동동 1500", geocode: "경기도 파주시 와동동 1500",
    households: 578, approval: "2025.09", developer: "대우건설 시공 (공고번호 2022950034)",
    notice: { no: "2022950034", date: "2022.05.12", apply: "2022.05.17", contract: "2022.05.21~24" },
    target: { label: "전용 84㎡", min: 80, max: 100 },
    types: [
      { code: "84A", alias: "166A", area: 84.8999, units: 228, price: 86990 },
      { code: "84B", alias: "164B", area: 84.5042, units: 228, price: 86140 },
      { code: "84C", alias: "165C", area: 84.8024, units: 112, price: 85940 },
      { code: "119PA", alias: "236PA", area: 119.6385, units: 5, price: 172000 },
      { code: "119PB", alias: "236PB", area: 119.7505, units: 5, price: 179000 }
    ],
    asking: {
      label: "네이버 호가 (84㎡ 16건)", date: "2026.09.23~10.12",
      avg: 58827, median: 58665, min: 50000, max: 66840,
      byFloor: [],
      perPyeong: { avg: 2316, median: 2310, min: 1969, max: 2631 }
    },
    refs: [
      { label: "호가 166A 평균", v: 57142, note: "3건" },
      { label: "호가 164B 평균", v: 58316, note: "5건" },
      { label: "호가 165C 평균", v: 59778, note: "8건" },
      { label: "실거래 2026.01.02", v: 63340, note: "166A 14층 (KB)" },
      { label: "KB 매물 평균가", v: 59107, note: "166A, 전체 매매 매물 23건" }
    ],
    extra: ["호가 사분위: 하위 5.53억 / 중앙 5.87억 / 상위 6.34억 (범위 표기 매물은 중간값)", "펜트하우스 236PB(119㎡) 호가 15.5억·15.75억 (분양 최고 17.9억)", "최저 5.0억(164B·165C 급매), '마피 6천' 표기 매물 5.76억(165C)", "KB 시세 없음 · 전세 실거래 2.90억 (2026.09.09), 전세 매물평균 3.54억 · 갭 3.33억(47%)"],
    memo: "실거래 1건뿐. 분양가는 타입별 최고금액이라 실제 평균보다 높음. 호가는 중개사 중복 등록 가능. 층 구분은 동별 층수가 달라 생략."
  },
  {
    id: "purgio-2", short: "푸르지오 파크라인 2단지",
    name: "운정 푸르지오 파크라인 오피스텔 2단지",
    address: "경기도 파주시 와동동 1498-2", geocode: "경기도 파주시 와동동 1498-2",
    households: 86, approval: "2025.09~10", developer: "대우건설 시공 (공고번호 2022950035)",
    notice: { no: "2022950035", date: "2022.05.12", apply: "2022.05.17", contract: "2022.05.21~24" },
    target: { label: "전용 107㎡", min: 100, max: 115 },
    types: [
      { code: "107A", alias: "233A", area: 107.9519, units: 64, price: 105990 },
      { code: "107B", alias: "233B", area: 107.9625, units: 20, price: 104190 },
      { code: "119PA", alias: "263PA", area: 119.6622, units: 1, price: 169000 },
      { code: "119PB", alias: "262PB", area: 119.9112, units: 1, price: 169000 }
    ],
    asking: {
      label: "네이버 호가 (107㎡ 2건)", date: "2026.10.07",
      avg: 74500, median: 74500, min: 74000, max: 75000,
      byFloor: [],
      perPyeong: { avg: 2281, median: 2281, min: 2266, max: 2296 }
    },
    refs: [
      { label: "KB AI시세 (233A)", v: 51700, note: "2026.10.09, 신뢰도 B (상위 5.44억 / 하위 4.905억)" },
      { label: "KB 매물 평균가", v: 74000, note: "매매 매물 3건" }
    ],
    extra: ["호가: 233B(107㎡) 7.5억, 233A 7.4억 — 같은 중개사(단지내 파크라인부동산) 2건뿐", "펜트하우스 262PB(119㎡) 호가 14.52억 (분양 최고 16.9억)", "실거래 없음 · 전세 실거래 3.20억 (2026.09.03), 전세 매물 46건(매매 3건) · 운정역까지 도보 약 18분(호갱노노)"],
    memo: "호가 표본이 2건뿐이라 대표성 낮음. KB AI시세(5.17억)와 호가(약 7.4억) 차이가 큼. 분양가는 타입별 최고금액."
  }
];
