import styled from '@emotion/styled';
import 'react-quill/dist/quill.snow.css'; // ES6
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export const Wrapper = styled.div`
  width: 100%;
`;

export const Contents = styled.div`
  max-width: 1200px;
  width: 100%;
  /* height: 1602px; */
  padding: 20px 100px 0px 100px;
  margin: 0 auto;
  box-shadow: 0px 0px 6px gray;
  margin-top: 100px;
  margin-bottom: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Title = styled.h1`
  width: 100%;
  height: 100px;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-top: 80px;
`;

export const WriteInputBox = styled.div`
  width: 100%;
  height: 92px;
  margin-bottom: 40px;
`;

export const Categorize = styled.div`
  font-size: 16px;
  line-height: 23.68px;
  font-weight: 600;
  margin-bottom: 16px;
`;
export const InputBox = styled.input`
  width: 100%;
  height: 52px;
  padding: 16px;
  border: 1px solid #bdbdbd;
  outline: none;
`;
export const ErrorMessage = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  padding: 4px 0px 10px 16px;
  color: #ff0000;
`;
export const ContBox = styled.div`
  width: 100%auto;
  margin-bottom: 40px;
`;
export const ReactQuillBox = styled(ReactQuill)`
  width: 100%;
  height: 320px;
  padding-bottom: 40px;
  outline: none;
`;
export const AddressBox = styled.div`
  width: 100%;
  height: 292px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const AddressBoxLeft = styled.div`
  width: 384px;
`;
export const LocationMap = styled.div`
  width: 100%;
  height: 252px;
  background-color: lemonchiffon;
`;
export const GpsComponent = styled.div``;
export const InputGPS = styled.input`
  width: 108px;
  height: 52px;
  padding: 16px;
  text-align: center;
  outline: none;
  border: 1px solid #bdbdbd;
`;
export const LocationIcon = styled.img`
  margin: 0px 21px;
`;
export const AddressComponent = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;
export const AddressButton = styled.button`
  height: 30px;
  margin-left: 20px;
`;
export const AddressBoxRight = styled.div`
  width: 588px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AddressDetail = styled.input`
  height: 52px;
  outline: none;
  border: 1px solid #bdbdbd;
  outline: none;
  padding: 16px;
  /* margin-top: 16px; */
`;
export const ProductImages = styled.div`
  width: 330px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ImgInputBox = styled.div`
  width: 180px;
  height: 180px;
  background-color: #bdbdbd;
`;
export const DeleteBtn = styled.img`
  width: 5px;
  height: 5px;
  border: 1px solid red;
`;
export const ProductImg = styled.div`
  width: 140px;
  height: 140px;
  background-color: gray;
  margin: 0 auto;
`;
export const RadioBox = styled.div`
  margin-top: 40px;
`;
export const RadioButton = styled.div`
  display: flex;
`;
export const Button1 = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
export const RadioText = styled.div`
  width: 43px;
  font-size: 16px;
  line-height: 23.68px;
  font-weight: 500px;
  margin-right: 24px;
`;
export const BottomBtn = styled.div`
  width: 100%;
  text-align: center;
  padding: 80px;
`;
export const ButtonBox = styled.button`
  width: 179px;
  height: 52px;
  background-color: #bdbdbd;
  border: none;
  cursor: pointer;
`;
