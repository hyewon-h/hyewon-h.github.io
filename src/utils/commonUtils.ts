// ============================================
// 타입 체크
// ============================================

// 값이 문자열인지 확인
export const isString = <T = unknown>(str: string | T): str is string =>
  typeof str === "string";

// 값이 숫자인지 확인
export const isNumber = (val: unknown) => typeof val === "number";

// 값이 불리언인지 확인
export const isBoolean = (val: unknown) => typeof val === "boolean";

// 값이 객체인지 확인
export const isObject = (val: unknown) => typeof val === "object";

// 값이 배열인지 확인
export const isArray = (val: unknown) => Array.isArray(val);

// 값이 함수인지 확인
export const isFunction = (val: unknown) => typeof val === "function";

// 값이 Date 객체인지 확인
export const isDate = (val: unknown) =>
  Object.prototype.toString.call(val) === "[object Date]";

// 값이 undefined인지 확인
export const isUndefined = (val: unknown) => typeof val === "undefined";

// 값이 정의되어 있는지 확인
export const isDefined = (val: unknown) => typeof val !== "undefined";

// 값이 비어있는지 확인(null, undefined, 빈 배열/객체 등)
export const isEmpty = (val: unknown) =>
  val == null || !(Object.keys(val) || val).length;

// 배열이 비어있는지 확인
export const isEmptyArray = (val: unknown[]) =>
  Array.isArray(val) && val.length === 0;

// 객체가 비어있는지 확인
export const isEmptyObj = (val: object): boolean =>
  Object(val) === val && Object.keys(val).length === 0;

// ============================================
// 문자열 처리
// ============================================

// 문자열 앞뒤 공백 제거
export const setRemoveSpaceKeyword = (value: string) =>
  value.replace(/^\s+|\s+$/g, "");

// 문자열에 특정 값 포함 여부 확인
export const setSearchStr = (str: string, val: string) => str.includes(val);

// 문자열 자르기 (말줄임표)
export const truncate = (str: string, length: number, suffix = "...") => {
  if (str.length <= length) return str;
  return str.slice(0, length) + suffix;
};

// 카멜케이스 -> 스네이크케이스 변환
export const toSnakeCase = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

// 스네이크케이스 -> 카멜케이스 변환
export const toCamelCase = (str: string) =>
  str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

// 값의 길이 반환(조건에 따라)
export const validLen = (val: string | unknown[], cond: boolean) =>
  cond !== false ? `${val.toString()}`.trim().length : val.length;

// ============================================
// 숫자 처리
// ============================================

// 문자열을 정수로 변환, 실패 시 기본값 반환
export const parseIntOrDefault = (val: string, defaultVal: unknown) => {
  const num = parseInt(val, 10);
  return Number.isNaN(num) ? defaultVal : num;
};

// 숫자 문자열에 3자리마다 콤마 추가, 구분자 붙이기
export const setComma = (str: string, separator?: string) => {
  let result = "";
  if (!isEmpty(str) || str === "0") {
    const temp = String(str);
    result = temp.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    if (!isEmpty(separator)) {
      result += separator;
    }
  }
  return result;
};

// 범위 내 값으로 제한
export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

// 랜덤 정수 생성
export const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// 퍼센트 계산
export const percentage = (value: number, total: number, fixed = 2) =>
  total === 0 ? 0 : Number(((value / total) * 100).toFixed(fixed));

// ============================================
// 날짜/시간
// ============================================

// 날짜 포맷팅 (YYYY-MM-DD, YYYY.MM.DD 등)
export const formatDate = (date: Date | string, format = "YYYY-MM-DD") => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");

  return format
    .replace("YYYY", String(year))
    .replace("MM", month)
    .replace("DD", day);
};

// 상대 시간 표시 (방금 전, 5분 전, 2시간 전 등)
export const getRelativeTime = (date: Date | string) => {
  const now = new Date();
  const target = new Date(date);
  const diff = now.getTime() - target.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return "방금 전";
  if (minutes < 60) return `${minutes}분 전`;
  if (hours < 24) return `${hours}시간 전`;
  if (days < 7) return `${days}일 전`;
  return formatDate(target);
};

// 생년월일로 나이 계산(한국식/만 나이)
export const getAge = (dateString: string, useKoranAge = true) => {
  if (!dateString) {
    return 0;
  }
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (useKoranAge) {
    return age + 1;
  }
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }
  return age;
};

// 나이에 따른 연령대 반환
export const getAgeGroup = (age: number) => {
  let ageGroup = "";
  if (age < 10) {
    ageGroup = "10";
  } else if (age >= 10 && age < 20) {
    ageGroup = "10";
  } else if (age >= 20 && age < 30) {
    ageGroup = "20";
  } else if (age >= 30 && age < 40) {
    ageGroup = "30";
  } else if (age >= 40 && age < 50) {
    ageGroup = "40";
  } else if (age >= 50 && age < 60) {
    ageGroup = "50";
  } else {
    ageGroup = "99";
  }
  return ageGroup;
};

// ============================================
// 배열 처리
// ============================================

// 배열을 지정한 크기만큼 분할
export const arrayDivision = (data: unknown[], size = 1) => {
  const items = [...data];
  const arr = [];
  while (items.length) {
    arr.push(items.splice(0, size));
  }
  return arr;
};

// 배열에서 중복값 제거
export const duplicateValueCheck = (arrValue: string[]) => {
  let arr: string[] = [];
  if (arrValue) {
    arr = arrValue.filter((el, idx) => arrValue.indexOf(el) === idx);
  }
  return arr;
};

// 배열 섞기 (shuffle)
export const shuffle = <T>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i]!;
    arr[i] = arr[j]!;
    arr[j] = temp;
  }
  return arr;
};

// 배열 그룹화
export const groupBy = <T>(array: T[], key: keyof T) => {
  return array.reduce(
    (result, item) => {
      const groupKey = String(item[key]);
      if (!result[groupKey]) result[groupKey] = [];
      result[groupKey].push(item);
      return result;
    },
    {} as Record<string, T[]>,
  );
};

// ============================================
// 객체 처리
// ============================================

// 객체의 key를 정렬하여 새로운 객체 반환
export const sortObject = (o: { [key: string]: any }) =>
  Object.keys(o)
    .sort()
    // eslint-disable-next-line no-return-assign, no-sequences, no-param-reassign
    .reduce((r: { [key: string]: unknown }, k) => ((r[k] = o[k]), r), {});

// 딥 클론
export const deepClone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

// ============================================
// 포맷팅 (마스킹/변환)
// ============================================

// 이름 마스킹 처리(개인정보 보호)
export const setNameMasking = (name: string) => {
  let result = "";
  if (!isEmpty(name)) {
    const nameLength = name.length;
    if (nameLength === 1) {
      result = name;
    } else if (nameLength === 2) {
      result = `${name.charAt(0)}*`;
    } else if (nameLength === 3) {
      result = `${name.charAt(0)}*${name.charAt(2)}`;
    } else {
      const firstChar = name.charAt(0);
      const lastChar = name.charAt(nameLength - 1);
      const maskingLength = nameLength - 2;
      const masking = "*".repeat(maskingLength);
      result = `${firstChar}${masking}${lastChar}`;
    }
  }
  return result;
};

// 전화번호 포맷팅
export const formatPhone = (phone: string) => {
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.length === 11) {
    return cleaned.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
  }
  if (cleaned.length === 10) {
    return cleaned.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
  }
  return phone;
};

// 성별 코드에 따른 문자열 반환
export const getGender = (type: string) => {
  let gender = "";
  if (type === "01") {
    gender = "men";
  } else if (type === "02") {
    gender = "women";
  } else {
    gender = "all";
  }
  return gender;
};

// 바이트 배열을 16진수 문자열로 변환
export const byteArrayHexa = (byteArray: number[]) =>
  Array.prototype.map
    // eslint-disable-next-line no-bitwise
    .call(byteArray, (byte) => `0${(byte & 0xff).toString(16)}`.slice(-2))
    .join("");

// ============================================
// 브라우저/DOM
// ============================================

// 브라우저 환경 여부 확인
export const IS_BROWSER = typeof window !== "undefined";

// className 배열을 공백으로 합침
export const classNameBind = (arr: string[]) =>
  arr.filter((el) => el !== "").join(" ");

// URL 쿼리스트링을 객체로 변환
export const urlToJson = (url: string): { [key: string]: string } => {
  let hash;
  const params = {} as { [key: string]: string };
  if (url.indexOf("?") > -1) {
    const hashes = url.slice(url.indexOf("?") + 1).split("&");
    for (let i = 0; i < hashes.length; i++) {
      const currentHash = hashes[i];
      if (typeof currentHash === "string" && currentHash !== "") {
        hash = currentHash.split("=");
        if (hash[0] !== undefined) {
          params[hash[0]] = decodeURIComponent(hash[1] ?? "");
        }
      }
    }
  }
  return params;
};

// 스크롤바의 width 값 반환
export const getScrollbarWidth = () =>
  `${window.innerWidth - document.documentElement.clientWidth}px`;

// 스크롤 최상단 이동
export const scrollToTop = (smooth = true) => {
  window.scrollTo({
    top: 0,
    behavior: smooth ? "smooth" : "auto",
  });
};

// 클립보드 복사
export const copyToClipboard = async (text: string) => {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(text);
  } else {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }
};

// 로컬스토리지 안전하게 사용
export const storage = {
  get: <T>(key: string, defaultValue: T): T => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch {
      return defaultValue;
    }
  },
  set: (key: string, value: unknown) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error("Storage error:", e);
    }
  },
  remove: (key: string) => localStorage.removeItem(key),
};

// ============================================
// 유틸리티
// ============================================

// 랜덤 고유 키 생성
export const getUniqueKey = () => Math.random().toString(36).substr(2, 9);

// 디바운스
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// sleep (지연)
export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
