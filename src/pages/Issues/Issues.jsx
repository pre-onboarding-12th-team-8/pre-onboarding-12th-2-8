import React from "react";
import { useIntersect } from "../../hooks/useIntersect";
export const Issues = () => {
  const onIntersectCallback = (entry, observer) => {
    //다음 페이지 데이터 가져오는 함수 넣기
  };
  const intersectTarget = useIntersect(onIntersectCallback);
  return (
    <>
      <div>이슈 목록 전체 페이지</div>
    </>
  );
};
