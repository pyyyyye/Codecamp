import {
  Wrapper,
  Contents,
  Title,
  WriteInputBox,
  Categorize,
  InputBox,
  ContBox,
  ContentsBox,
  ContIcons,
  ContInput,
  AddressBox,
  AddressButton,
  AddressBoxLeft,
  LocationMap,
  AddressComponent,
  AddressBoxRight,
  GpsComponent,
  InputGPS,
  AddressDetail,
  ProductImages,
  ProductImg,
  RadioBox,
  RadioButton,
  Button1,
  ButtonBox,
} from './MarketWrite.styles';

export default function MarketWriteUI() {
  return (
    <Wrapper>
      <Contents>
        <Title>상품 등록하기</Title>

        <WriteInputBox>
          <Categorize>상품명</Categorize>
          <InputBox
            type="text"
            name="productName"
            placeholder="상품명을 작성해주세요."
          />
        </WriteInputBox>

        <WriteInputBox>
          <Categorize>한 줄 요약</Categorize>
          <InputBox
            type="text"
            name="Summary"
            placeholder="간단한 상품 설명을 작성해주세요."
          />
        </WriteInputBox>

        <ContBox>
          <Categorize>상품 설명</Categorize>
          <ContentsBox>
            <ContIcons>아이콘 줄</ContIcons>
            <ContInput
              // type="text"
              name="contents"
              placeholder="상품 설명을 자세히 작성해주세요."
            />
          </ContentsBox>
        </ContBox>

        <WriteInputBox>
          <Categorize>판매 가격</Categorize>
          <InputBox
            type="number"
            name="Price"
            placeholder="판매 가격을 입력해주세요."
          />
        </WriteInputBox>

        <WriteInputBox>
          <Categorize>태그입력</Categorize>
          <InputBox type="text" name="Tag" placeholder="#태그 #태그 #태그" />
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
              <InputGPS type="text" placeholder="경도(LNG)" />
            </GpsComponent>

            <AddressComponent>
              <Categorize>주소</Categorize>
              <AddressButton>주소 검색</AddressButton>
              <AddressDetail placeholder="주소를 입력해주세요." />
              <AddressDetail placeholder="상세 주소를 입력해주세요." />
            </AddressComponent>
          </AddressBoxRight>
        </AddressBox>

        {/* --------------  이미지 업로드 버튼  -------------- */}
        <ProductImages>
          <Categorize>사진 첨부</Categorize>
          <ProductImg>1</ProductImg>
          <ProductImg>2</ProductImg>

          {/* {new Array(3).fill('a').map((data, index) => (
            <Upload01
              key={`${data}_${index}`}
              index={index}
              onChangeFiles={props.onChangeFiles}
            />
          ))} */}
        </ProductImages>

        <RadioBox>
          <Categorize>메인 사진 설정</Categorize>
          <RadioButton>
            <Button1 type="radio" name="set" value="사진1" checked />
            <span>사진 1</span>
            <Button1 type="radio" name="set" value="사진2" />
            <span>사진 2</span>
          </RadioButton>
        </RadioBox>

        {/* ------------------- 하단 등록 버튼 ---------------- */}
        <ButtonBox> 등록하기</ButtonBox>
      </Contents>
    </Wrapper>
  );
}
