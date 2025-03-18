import { Restaurant } from '../types';

export const mockRestaurant: Restaurant = {
  id: 0,
  name: '식당명식당명식당명식당명식당',
  address: '서울 중구 을지로 264 11, 12층',
  roadAddress: 'https://place.map.kakao.com/8700540',
  distance: 100,
  menuCategory: '카테고리',
  needsTags: [
    {
      id: 0,
      text: '가볍게 먹을래요',
      ratio: 0.5,
    },
    {
      id: 1,
      text: '빠른 식사가 필요해요',
      ratio: 0.1,
    },
    {
      id: 2,
      text: '친구들과 함께 먹을래요',
      ratio: 0.1,
    },
    {
      id: 3,
      text: '친구들과 함께 먹을래요',
      ratio: 0.15,
    },
    {
      id: 4,
      text: '친구들과 함께 먹을래요',
      ratio: 0.15,
    },
  ],
  priceTags: [
    {
      id: 0,
      text: '만원이하',
    },
    {
      id: 1,
      text: '1만원대',
    },
  ],
  restaurantImageUrls: [
    'https://s3-alpha-sig.figma.com/img/8bc3/6813/a8de75db63afbf4213688594f51d6bc2?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=e8s6zqTXZGgQYUgl5wT3ofvzgJlNz9Y6-N3eFAxAZNwO3l6rA57q~7Wt57-zXW3-3E92s8uc5rQS~U2T-PAYMXTgsT40CXwSZyyi1PHGsP0JkYEA79BVwoskM-j9X0aCUrDkC-ENG5H9vtTbfSLq3VtGefdxPieCyPmZZwgKweLnyF0hhw4zQDD4tZeQ4evKfZ3BLo0HncFHtlcXchcp4O3ohuUxnMsV7yIzRMkIOz1r5ceqnAnHFNVTOdTrr8pLFhBCfXL4TGZWNj4JKtpFRSXQ84bD3Yx3GF0FWikB~INZ6QjhN0glpWh6m62vuMHCBWSki~nvFnHdrrYLDAW0xg__',
    'https://s3-alpha-sig.figma.com/img/8bc3/6813/a8de75db63afbf4213688594f51d6bc2?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=e8s6zqTXZGgQYUgl5wT3ofvzgJlNz9Y6-N3eFAxAZNwO3l6rA57q~7Wt57-zXW3-3E92s8uc5rQS~U2T-PAYMXTgsT40CXwSZyyi1PHGsP0JkYEA79BVwoskM-j9X0aCUrDkC-ENG5H9vtTbfSLq3VtGefdxPieCyPmZZwgKweLnyF0hhw4zQDD4tZeQ4evKfZ3BLo0HncFHtlcXchcp4O3ohuUxnMsV7yIzRMkIOz1r5ceqnAnHFNVTOdTrr8pLFhBCfXL4TGZWNj4JKtpFRSXQ84bD3Yx3GF0FWikB~INZ6QjhN0glpWh6m62vuMHCBWSki~nvFnHdrrYLDAW0xg__',
    'https://s3-alpha-sig.figma.com/img/8bc3/6813/a8de75db63afbf4213688594f51d6bc2?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=e8s6zqTXZGgQYUgl5wT3ofvzgJlNz9Y6-N3eFAxAZNwO3l6rA57q~7Wt57-zXW3-3E92s8uc5rQS~U2T-PAYMXTgsT40CXwSZyyi1PHGsP0JkYEA79BVwoskM-j9X0aCUrDkC-ENG5H9vtTbfSLq3VtGefdxPieCyPmZZwgKweLnyF0hhw4zQDD4tZeQ4evKfZ3BLo0HncFHtlcXchcp4O3ohuUxnMsV7yIzRMkIOz1r5ceqnAnHFNVTOdTrr8pLFhBCfXL4TGZWNj4JKtpFRSXQ84bD3Yx3GF0FWikB~INZ6QjhN0glpWh6m62vuMHCBWSki~nvFnHdrrYLDAW0xg__',
  ],
  myReview: {
    id: 0,
    content: '리뷰 내용',
    imageUrl: [
      'https://s3-alpha-sig.figma.com/img/d95a/2e3f/279b9672e5e8376247241d1060e24178?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HmYSXYhQp2Ng7lpxu5m5XZEma3ab8SPpktrcgUeIipOL9qFK02EQTvg2z3MWTollbfo7nvPooymML9fts6jmNZHhyacENlvLszpzdtSR8r8~T1wFeyf-6M-ESAKzfIA6xvCbn1aBAbMROUVchdXmoyi6sV5WNQ1F7tizRFJij5HHn2vaRo~ZPDKlsS0SvLdEaIV0V-AfgKFjUrxQwd8AbuSsp5jB7TJMjSq-e6Y8Vm0RsRyio4~ggsT7pZy-RE2aoCFJYsYPVI0yLKE0LgBKgFQbmJbDE7yjkNhD7wN3IThVxJ7zhA5NIyY~xHJReaWWyl4sN6GHBue1PNsL5KyGzw__',
    ],
    createdAt: '2025-02-27T14:22:25.627Z',
  },
  reviews: [
    {
      id: 0,
      user: {
        id: 0,
        name: '유저1',
        profileImageUrl:
          'https://s3-alpha-sig.figma.com/img/4b1b/df3e/9adc8fd6988b7d6e31dddb342cd7b313?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NWFESKaeEXlgvwY5SNnBhdX1OBjsrdmHXhNDlBgaUr-wupbkEtgoVlcyahC1goldM9PgL5RghnvPwtd9gkMRUcKOxOOp91sMa5M114R0ZyS3lOZK~lmOBON9XGxU1jjn-zkrtnP8kiUAXHl7JTzLNsKYv3moXYSFfnNNYIqLF93vNTJSRt6QXIsQ3mZjtdZ8tSJ~GRTm~7j9AqVZ9LdGuLUEoFquDVO-FhAkH16pAAoue0EvUomFoq3Q-BvJry2tTaqj0V3vlPlA-z7kDRInblS-rSWHKlJ7hVrc25IWOwOYMI1erHJ~qN4ZY7ApiI4uP0KvWCnsbdz4ug3z6xW6dA__',
      },
      content:
        '리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용',
      imageUrl: [
        'https://s3-alpha-sig.figma.com/img/d95a/2e3f/279b9672e5e8376247241d1060e24178?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HmYSXYhQp2Ng7lpxu5m5XZEma3ab8SPpktrcgUeIipOL9qFK02EQTvg2z3MWTollbfo7nvPooymML9fts6jmNZHhyacENlvLszpzdtSR8r8~T1wFeyf-6M-ESAKzfIA6xvCbn1aBAbMROUVchdXmoyi6sV5WNQ1F7tizRFJij5HHn2vaRo~ZPDKlsS0SvLdEaIV0V-AfgKFjUrxQwd8AbuSsp5jB7TJMjSq-e6Y8Vm0RsRyio4~ggsT7pZy-RE2aoCFJYsYPVI0yLKE0LgBKgFQbmJbDE7yjkNhD7wN3IThVxJ7zhA5NIyY~xHJReaWWyl4sN6GHBue1PNsL5KyGzw__',
        'https://s3-alpha-sig.figma.com/img/d95a/2e3f/279b9672e5e8376247241d1060e24178?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HmYSXYhQp2Ng7lpxu5m5XZEma3ab8SPpktrcgUeIipOL9qFK02EQTvg2z3MWTollbfo7nvPooymML9fts6jmNZHhyacENlvLszpzdtSR8r8~T1wFeyf-6M-ESAKzfIA6xvCbn1aBAbMROUVchdXmoyi6sV5WNQ1F7tizRFJij5HHn2vaRo~ZPDKlsS0SvLdEaIV0V-AfgKFjUrxQwd8AbuSsp5jB7TJMjSq-e6Y8Vm0RsRyio4~ggsT7pZy-RE2aoCFJYsYPVI0yLKE0LgBKgFQbmJbDE7yjkNhD7wN3IThVxJ7zhA5NIyY~xHJReaWWyl4sN6GHBue1PNsL5KyGzw__',
        'https://s3-alpha-sig.figma.com/img/d95a/2e3f/279b9672e5e8376247241d1060e24178?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HmYSXYhQp2Ng7lpxu5m5XZEma3ab8SPpktrcgUeIipOL9qFK02EQTvg2z3MWTollbfo7nvPooymML9fts6jmNZHhyacENlvLszpzdtSR8r8~T1wFeyf-6M-ESAKzfIA6xvCbn1aBAbMROUVchdXmoyi6sV5WNQ1F7tizRFJij5HHn2vaRo~ZPDKlsS0SvLdEaIV0V-AfgKFjUrxQwd8AbuSsp5jB7TJMjSq-e6Y8Vm0RsRyio4~ggsT7pZy-RE2aoCFJYsYPVI0yLKE0LgBKgFQbmJbDE7yjkNhD7wN3IThVxJ7zhA5NIyY~xHJReaWWyl4sN6GHBue1PNsL5KyGzw__',
      ],
      createdAt: '2025-02-27T14:22:25.627Z',
    },
    {
      id: 1,
      user: {
        id: 1,
        name: '유저2',
        profileImageUrl:
          'https://s3-alpha-sig.figma.com/img/4b1b/df3e/9adc8fd6988b7d6e31dddb342cd7b313?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NWFESKaeEXlgvwY5SNnBhdX1OBjsrdmHXhNDlBgaUr-wupbkEtgoVlcyahC1goldM9PgL5RghnvPwtd9gkMRUcKOxOOp91sMa5M114R0ZyS3lOZK~lmOBON9XGxU1jjn-zkrtnP8kiUAXHl7JTzLNsKYv3moXYSFfnNNYIqLF93vNTJSRt6QXIsQ3mZjtdZ8tSJ~GRTm~7j9AqVZ9LdGuLUEoFquDVO-FhAkH16pAAoue0EvUomFoq3Q-BvJry2tTaqj0V3vlPlA-z7kDRInblS-rSWHKlJ7hVrc25IWOwOYMI1erHJ~qN4ZY7ApiI4uP0KvWCnsbdz4ug3z6xW6dA__',
      },
      content: '리뷰 내용',
      imageUrl: [
        'https://s3-alpha-sig.figma.com/img/d95a/2e3f/279b9672e5e8376247241d1060e24178?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HmYSXYhQp2Ng7lpxu5m5XZEma3ab8SPpktrcgUeIipOL9qFK02EQTvg2z3MWTollbfo7nvPooymML9fts6jmNZHhyacENlvLszpzdtSR8r8~T1wFeyf-6M-ESAKzfIA6xvCbn1aBAbMROUVchdXmoyi6sV5WNQ1F7tizRFJij5HHn2vaRo~ZPDKlsS0SvLdEaIV0V-AfgKFjUrxQwd8AbuSsp5jB7TJMjSq-e6Y8Vm0RsRyio4~ggsT7pZy-RE2aoCFJYsYPVI0yLKE0LgBKgFQbmJbDE7yjkNhD7wN3IThVxJ7zhA5NIyY~xHJReaWWyl4sN6GHBue1PNsL5KyGzw__',
        'https://s3-alpha-sig.figma.com/img/d95a/2e3f/279b9672e5e8376247241d1060e24178?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HmYSXYhQp2Ng7lpxu5m5XZEma3ab8SPpktrcgUeIipOL9qFK02EQTvg2z3MWTollbfo7nvPooymML9fts6jmNZHhyacENlvLszpzdtSR8r8~T1wFeyf-6M-ESAKzfIA6xvCbn1aBAbMROUVchdXmoyi6sV5WNQ1F7tizRFJij5HHn2vaRo~ZPDKlsS0SvLdEaIV0V-AfgKFjUrxQwd8AbuSsp5jB7TJMjSq-e6Y8Vm0RsRyio4~ggsT7pZy-RE2aoCFJYsYPVI0yLKE0LgBKgFQbmJbDE7yjkNhD7wN3IThVxJ7zhA5NIyY~xHJReaWWyl4sN6GHBue1PNsL5KyGzw__',
        'https://s3-alpha-sig.figma.com/img/d95a/2e3f/279b9672e5e8376247241d1060e24178?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HmYSXYhQp2Ng7lpxu5m5XZEma3ab8SPpktrcgUeIipOL9qFK02EQTvg2z3MWTollbfo7nvPooymML9fts6jmNZHhyacENlvLszpzdtSR8r8~T1wFeyf-6M-ESAKzfIA6xvCbn1aBAbMROUVchdXmoyi6sV5WNQ1F7tizRFJij5HHn2vaRo~ZPDKlsS0SvLdEaIV0V-AfgKFjUrxQwd8AbuSsp5jB7TJMjSq-e6Y8Vm0RsRyio4~ggsT7pZy-RE2aoCFJYsYPVI0yLKE0LgBKgFQbmJbDE7yjkNhD7wN3IThVxJ7zhA5NIyY~xHJReaWWyl4sN6GHBue1PNsL5KyGzw__',
        'https://s3-alpha-sig.figma.com/img/d95a/2e3f/279b9672e5e8376247241d1060e24178?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HmYSXYhQp2Ng7lpxu5m5XZEma3ab8SPpktrcgUeIipOL9qFK02EQTvg2z3MWTollbfo7nvPooymML9fts6jmNZHhyacENlvLszpzdtSR8r8~T1wFeyf-6M-ESAKzfIA6xvCbn1aBAbMROUVchdXmoyi6sV5WNQ1F7tizRFJij5HHn2vaRo~ZPDKlsS0SvLdEaIV0V-AfgKFjUrxQwd8AbuSsp5jB7TJMjSq-e6Y8Vm0RsRyio4~ggsT7pZy-RE2aoCFJYsYPVI0yLKE0LgBKgFQbmJbDE7yjkNhD7wN3IThVxJ7zhA5NIyY~xHJReaWWyl4sN6GHBue1PNsL5KyGzw__',
        'https://s3-alpha-sig.figma.com/img/d95a/2e3f/279b9672e5e8376247241d1060e24178?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HmYSXYhQp2Ng7lpxu5m5XZEma3ab8SPpktrcgUeIipOL9qFK02EQTvg2z3MWTollbfo7nvPooymML9fts6jmNZHhyacENlvLszpzdtSR8r8~T1wFeyf-6M-ESAKzfIA6xvCbn1aBAbMROUVchdXmoyi6sV5WNQ1F7tizRFJij5HHn2vaRo~ZPDKlsS0SvLdEaIV0V-AfgKFjUrxQwd8AbuSsp5jB7TJMjSq-e6Y8Vm0RsRyio4~ggsT7pZy-RE2aoCFJYsYPVI0yLKE0LgBKgFQbmJbDE7yjkNhD7wN3IThVxJ7zhA5NIyY~xHJReaWWyl4sN6GHBue1PNsL5KyGzw__',
        'https://s3-alpha-sig.figma.com/img/d95a/2e3f/279b9672e5e8376247241d1060e24178?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HmYSXYhQp2Ng7lpxu5m5XZEma3ab8SPpktrcgUeIipOL9qFK02EQTvg2z3MWTollbfo7nvPooymML9fts6jmNZHhyacENlvLszpzdtSR8r8~T1wFeyf-6M-ESAKzfIA6xvCbn1aBAbMROUVchdXmoyi6sV5WNQ1F7tizRFJij5HHn2vaRo~ZPDKlsS0SvLdEaIV0V-AfgKFjUrxQwd8AbuSsp5jB7TJMjSq-e6Y8Vm0RsRyio4~ggsT7pZy-RE2aoCFJYsYPVI0yLKE0LgBKgFQbmJbDE7yjkNhD7wN3IThVxJ7zhA5NIyY~xHJReaWWyl4sN6GHBue1PNsL5KyGzw__',
      ],
      createdAt: '2025-02-27T14:22:25.627Z',
    },
    {
      id: 2,
      isFirst: true,
      user: {
        id: 2,
        name: '유저3',
        profileImageUrl:
          'https://s3-alpha-sig.figma.com/img/4b1b/df3e/9adc8fd6988b7d6e31dddb342cd7b313?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NWFESKaeEXlgvwY5SNnBhdX1OBjsrdmHXhNDlBgaUr-wupbkEtgoVlcyahC1goldM9PgL5RghnvPwtd9gkMRUcKOxOOp91sMa5M114R0ZyS3lOZK~lmOBON9XGxU1jjn-zkrtnP8kiUAXHl7JTzLNsKYv3moXYSFfnNNYIqLF93vNTJSRt6QXIsQ3mZjtdZ8tSJ~GRTm~7j9AqVZ9LdGuLUEoFquDVO-FhAkH16pAAoue0EvUomFoq3Q-BvJry2tTaqj0V3vlPlA-z7kDRInblS-rSWHKlJ7hVrc25IWOwOYMI1erHJ~qN4ZY7ApiI4uP0KvWCnsbdz4ug3z6xW6dA__',
      },
      content: '리뷰 내용',
      imageUrl: [
        'https://s3-alpha-sig.figma.com/img/d95a/2e3f/279b9672e5e8376247241d1060e24178?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HmYSXYhQp2Ng7lpxu5m5XZEma3ab8SPpktrcgUeIipOL9qFK02EQTvg2z3MWTollbfo7nvPooymML9fts6jmNZHhyacENlvLszpzdtSR8r8~T1wFeyf-6M-ESAKzfIA6xvCbn1aBAbMROUVchdXmoyi6sV5WNQ1F7tizRFJij5HHn2vaRo~ZPDKlsS0SvLdEaIV0V-AfgKFjUrxQwd8AbuSsp5jB7TJMjSq-e6Y8Vm0RsRyio4~ggsT7pZy-RE2aoCFJYsYPVI0yLKE0LgBKgFQbmJbDE7yjkNhD7wN3IThVxJ7zhA5NIyY~xHJReaWWyl4sN6GHBue1PNsL5KyGzw__',
      ],
      createdAt: '2025-02-27T14:22:25.627Z',
    },
  ],
};
