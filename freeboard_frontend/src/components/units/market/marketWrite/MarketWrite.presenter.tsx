import {
  Wrapper,
  Contents,
  Title,
  WriteInputBox,
  Categorize,
  InputBox,
  ContBox,
  ReactQuillBox,
  AddressBox,
  AddressBoxLeft,
  LocationMap,
  LocationIcon,
  AddressComponent,
  AddressBoxRight,
  GpsComponent,
  InputGPS,
  AddressDetail,
  ProductImages,
  RadioBox,
  RadioButton,
  Button1,
  RadioText,
  BottomBtn,
  ButtonBox,
  ErrorMessage,
} from './MarketWrite.styles';
import Upload01 from '../../../commons/uploads/01/uploads01.container';
import KakaoMap01 from '../../../commons/kakaomap/kakaomap01';
import 'react-quill/dist/quill.snow.css'; // ES6

interface MarketWriteUIProps {
  // onClickSubmit: any;
  // handleSubmit: any;
  onChangeFiles: (file: File, index: number) => void;
  register: any;
}

export default function MarketWriteUI(props: MarketWriteUIProps) {
  console.log(props.latLng);
  return (
    <Wrapper>
      <Contents>
        <Title>상품 등록하기</Title>
        <form onSubmit={props.handleSubmit(props.onSubmit)}>
          <WriteInputBox>
            <Categorize>상품명</Categorize>
            <InputBox
              placeholder="상품명을 작성해주세요."
              {...props.register('name')}
            />
            <ErrorMessage>{props.errors.name?.message}</ErrorMessage>
          </WriteInputBox>
          <WriteInputBox>
            <Categorize>한 줄 요약</Categorize>
            <InputBox
              placeholder="간단한 상품 설명을 작성해주세요."
              {...props.register('remarks')}
            />
            <ErrorMessage>{props.errors.remarks?.message}</ErrorMessage>
          </WriteInputBox>

          <ContBox>
            <Categorize>상품 설명</Categorize>
            <ReactQuillBox
              onChange={props.onChangeQuill}
              placeholder="상세설명을 작성해주세요"
            />
            <ErrorMessage>{props.errors.contents?.message}</ErrorMessage>
          </ContBox>

          <WriteInputBox>
            <Categorize>판매 가격</Categorize>
            <InputBox
              placeholder="판매 가격을 입력해주세요."
              {...props.register('price')}
            />
            {/* <ErrorMessage>{props.errors.price?.message}</ErrorMessage> */}
            {props.errors.price?.message ? '판매 가격은 필.' : ''}
          </WriteInputBox>

          <WriteInputBox>
            <Categorize>태그입력</Categorize>
            <InputBox
              name="tags"
              placeholder="#태그 #태그 #태그"
              // {...props.register('contents')}
            />
          </WriteInputBox>

          <AddressBox>
            {/* --------  Address Left  ------- */}
            <AddressBoxLeft>
              <Categorize>거래 위치</Categorize>
              <KakaoMap01 setLatLng={props.setLatLng} />
              {/* <LocationMap>지도 그림 박스</LocationMap> */}
            </AddressBoxLeft>

            {/* --------  Address Right  ------- */}
            <AddressBoxRight>
              <Categorize>GPS</Categorize>
              <GpsComponent>
                <InputGPS
                  type="text"
                  placeholder="위도(LAT)"
                  value={props.latLng.lat || ''}
                />
                <LocationIcon src="/images/icon_location.png" />
                <InputGPS
                  type="text"
                  placeholder="경도(LNG)"
                  value={props.latLng.lng || ''}
                />
              </GpsComponent>

              <AddressComponent>
                <Categorize>주소</Categorize>
                <AddressDetail placeholder="주소를 입력해주세요." />
                <AddressDetail
                  placeholder="상세 주소를 입력해주세요."
                  style={{ marginTop: '16px' }}
                />
              </AddressComponent>
            </AddressBoxRight>
          </AddressBox>

          {/* --------------  이미지 업로드 버튼  -------------- */}
          <ProductImages>
            {new Array(3).fill('a').map((data, index) => (
              <Upload01
                key={`${data}_${index}`}
                index={index}
                onChangeFiles={props.onChangeFiles}
              />
            ))}
          </ProductImages>

          <RadioBox>
            <Categorize>메인 사진 설정</Categorize>
            <RadioButton>
              <Button1 type="radio" name="set" value="사진1" checked />
              <RadioText>사진 1</RadioText>
              <Button1 type="radio" name="set" value="사진2" />
              <RadioText>사진 2</RadioText>
            </RadioButton>
          </RadioBox>

          {/* ------------------- 하단 등록 버튼 ---------------- */}
          {/* active={props.active} */}
          <BottomBtn>
            <ButtonBox type="submit">등록하기</ButtonBox>
          </BottomBtn>
        </form>
      </Contents>
    </Wrapper>
  );
}
