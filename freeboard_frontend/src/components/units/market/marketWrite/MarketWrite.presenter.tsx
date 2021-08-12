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
} from './MarketWrite.styles';
import Upload01 from '../../../commons/uploads/01/uploads01.container';
import 'react-quill/dist/quill.snow.css'; // ES6

interface MarketWriteUIProps {
  // onClickSubmit: any;
  // handleSubmit: any;
  onChangeFiles: (file: File, index: number) => void;
}

export default function MarketWriteUI(props: MarketWriteUIProps) {
  return (
    <Wrapper>
      <Contents>
        <Title>상품 등록하기</Title>
        <form onSubmit={props.handleSubmit(props.onClickSubmit)}>
          <WriteInputBox>
            <Categorize>상품명</Categorize>
            <InputBox
              placeholder="상품명을 작성해주세요."
              {...props.register('name')}
            />
          </WriteInputBox>
          <WriteInputBox>
            <Categorize>한 줄 요약</Categorize>
            <InputBox
              placeholder="간단한 상품 설명을 작성해주세요."
              {...props.register('remarks')}
            />
          </WriteInputBox>

          <ContBox>
            <Categorize>상품 설명</Categorize>
            <ReactQuillBox
              onChange={props.onChangeQuill}
              placeholder="상세설명을 작성해주세요"
            />
          </ContBox>

          <WriteInputBox>
            <Categorize>판매 가격</Categorize>
            <InputBox
              placeholder="판매 가격을 입력해주세요."
              {...props.register('price')}
            />
          </WriteInputBox>

          <WriteInputBox>
            <Categorize>태그입력</Categorize>
            <InputBox
              name="Tag"
              placeholder="#태그 #태그 #태그"
              // {...props.register('contents')}
            />
          </WriteInputBox>

          <AddressBox>
            {/* --------  Address Left  ------- */}
            <AddressBoxLeft>
              <Categorize>거래 위치</Categorize>
              <LocationMap>지도 그림 박스</LocationMap>
            </AddressBoxLeft>

            {/* --------  Address Right  ------- */}
            <AddressBoxRight>
              <Categorize>GPS</Categorize>
              <GpsComponent>
                <InputGPS type="text" placeholder="위도(LAT)" />
                <LocationIcon src="/images/icon_location.png" />
                <InputGPS type="text" placeholder="경도(LNG)" />
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
