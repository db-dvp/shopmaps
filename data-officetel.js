/* 오피스텔 분양가 검토 데이터 (단위: 만원, 전용면적 ㎡) */
window.OFFICETEL_TITLE = "운정역 오피스텔 분양가 vs 현재 시세";
window.OFFICETEL_SOURCE = "분양가: 입주자모집공고(공고번호 2021950091) 타입별 최고금액 / 호가: 네이버부동산 26.10.12 / 실거래: 국토부 신고(호갱노노) / 매물평균: KB부동산 26.10";
window.OFFICETEL_DATA = [
  {
    id: "hillstate-1",
    name: "힐스테이트 더 운정 오피스텔 1단지",
    address: "경기도 파주시 와동동 1471-2",
    geocode: "경기도 파주시 와동동 1471-2",
    households: 1059,
    approval: "2025.08",
    developer: "하나자산신탁 / 시공 현대건설",
    notice: { no: "2021950091", date: "2021.11.25", apply: "2021.12.01", contract: "2021.12.07~11" },
    types: [
      { code: "84OA", alias: "189OA", area: 84.9238, units: 348, price: 88520 },
      { code: "84OB", alias: "191OB", area: 84.9868, units: 350, price: 89030 },
      { code: "84OC", alias: "190OC", area: 84.9628, units: 222, price: 89130 },
      { code: "84OD", alias: "190OD", area: 84.9628, units: 135, price: 89130 },
      { code: "147OP", alias: "329OP", area: 147.9046, units: 4, price: 299520 }
    ],
    asking: {
      label: "네이버 호가 (84㎡ 22건)",
      date: "2026.10.12",
      avg: 75900, median: 74900, min: 62500, max: 96000,
      byFloor: [ { f: "저층(≤15)", n: 6, avg: 73200 }, { f: "중층(16~30)", n: 10, avg: 72300 }, { f: "고층(≥31)", n: 6, avg: 84500 } ],
      perPyeong: { avg: 2985, median: 2946, min: 2459, max: 3778 }
    },
    trades: [
      { date: "2026.04.06", price: 65000, note: "189OA 31층 직거래 (KB)" },
      { date: "2025.12", price: 85000, note: "189OA (호갱노노)" }
    ],
    kb: { listAvg: 79900, listCount: 59, aiPrice: null, jeonse: 40000, jeonseDate: "2026.09.20" },
    memo: "분양가는 타입별 '최고금액'이므로 실제 분양가 평균은 이보다 낮음(층·호수별 금액은 공고문 참고). 호가는 중개사 중복 등록 가능. 실거래 2건은 직거래 포함이라 대표성 낮음."
  }
];
