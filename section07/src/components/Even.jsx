import { useEffect } from "react";

const Even = () => {
    // 이게 언마운트..? 클린업, 정리 함수.
    useEffect(() => {
        return () => {
            console.log("cleanup");
        };
    },[])
    return <div>짝수입니다.</div>
}

export default Even;