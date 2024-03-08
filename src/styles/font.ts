const fontGenerator = (weight: number, size: number, lineHeight: number) => `
    font-weight: ${weight};
    font-size: ${size}rem;
    line-height: ${lineHeight}%;
    `;

const font = {
  ExtraBigTitle: fontGenerator(900, 7, 130),
  BigTitle3: fontGenerator(900, 3.75, 110),
  BigTitle2: fontGenerator(700, 2.5, 130),
  BigTitle: fontGenerator(700, 1.5, 110),
  Title: fontGenerator(700, 1.25, 130),
  SmallTitle: fontGenerator(700, 1.125, 130),
  BigText: fontGenerator(400, 1.5, 130),
  Text: fontGenerator(400, 1, 130),
  SmallText: fontGenerator(400, 0.875, 130),
  Caption: fontGenerator(400, 0.75, 130),
};

export default font;
