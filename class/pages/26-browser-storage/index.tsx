export default function BrowserStorage() {
  // ----- 브라우저 저장하기
  const onSaveCookie = () => {
    document.cookie = 'aaa=철수';
    document.cookie = 'bbb=훈이';
    document.cookie = 'ccc=맹구';
  };
  const onSaveLocalStorage = () => {
    localStorage.setItem('bbb', '영희');
  };
  const onSaveSessionSorage = () => {
    sessionStorage.setItem('ccc', '자두');
  };

  // ----- 브라우저 저장한 것 불러오기(가져오기)
  const onLoadCookie = () => {
    // document.cookie = 'aaa=철수';
    let ooo;
    console.log(
      document.cookie.split(';').forEach((data) => {
        if (data.startsWith('aaa=')) ooo = data;
      })
    );
    console.log(ooo.split('=')[1]);
  };

  const onLoadLocalStorage = () => {
    const zzz = localStorage.getItem('bbb');
    console.log('zzz', zzz);
  };
  const onLoadSessionSorage = () => {
    const iii = sessionStorage.getItem('ccc');
    console.log('iii', iii);
  };

  return (
    <>
      <button onClick={onSaveCookie}>쿠키에 저장하기</button>
      <button onClick={onSaveLocalStorage}> 로컬스토리지에 저장하기</button>
      <button onClick={onSaveSessionSorage}>세션스토리지에 저장하기</button>
      <br />
      <br />
      <button onClick={onLoadCookie}>쿠키에 불러오기</button>
      <button onClick={onLoadLocalStorage}> 로컬스토리지에 불러오기</button>
      <button onClick={onLoadSessionSorage}>세션스토리지에 불러오기</button>
    </>
  );
}
