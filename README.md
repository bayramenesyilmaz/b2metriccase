# B2Metric Case

Projeyi incelemek için canlı linki ziyaret edebilirsiniz: [Live](https://b2metriccase.vercel.app/).

## Kullanıcı Bilgileri

- Email: admin@b2metric.com

- Password: admin123

## Kullanılan Teknolojiler

Bu proje, B2Metric case çalışması için oluşturulmuştur. Projede aşağıdaki teknoloji ve kütüphaneler kullanılmıştır:

- [Next.js](https://nextjs.org/): Next.js, React tabanlı web uygulamaları için bir framework'tür. Sayfa yönlendirme, dosya tabanlı route'lar ve otomatik kod bölümleme gibi birçok özelliği destekler.
- [Tailwind CSS](https://tailwindcss.com/): Tailwind CSS, HTML ve CSS için bir utility-first CSS framework'üdür. Bu proje için stilendirmelerde kullanılmıştır.
- [Material-UI](https://mui.com/): Material-UI, React uygulamaları için Google'ın Material Design stilini uygulayan bir kütüphanedir. Projede iconlar ve bazı arayüz bileşenleri için kullanılmıştır.
- [ECharts](https://echarts.apache.org/): ECharts, veri görselleştirme için bir JavaScript grafik kütüphanesidir. Bu projede veri görselleştirmesi için kullanılmıştır.
- [RSuite](https://rsuitejs.com/): RSuite, React bileşenleri için bir kütüphanedir. Dropdown, multiselection ve date range gibi bileşenler için kullanılmıştır.
- [SWR](https://swr.vercel.app/): SWR, React uygulamaları için bir data fetching kütüphanesidir. Bu projede veri alışverişi için kullanılmıştır.
- [Context API](https://reactjs.org/docs/context.html): Context API, React uygulamalarında global state yönetimi için kullanılan bir özelliktir. Bu projede auth kontrolü için kullanılmıştır.

## Özellikler

- Projedeki stillendirmeler için Tailwind CSS kullandım ve custom komponentler oluşturdum.
- Verileri sunmak için ECharts kütühanesinden line chart kullandım.
- Dropdown, multiselection ve date range için RSuite kütüphanesini kullandım.
- Iconlar ve kullanıcı tablosuD için Material-UI kütüphanesini kullandım.
- Context API ile auth context oluşturdum ve kullanıcının oturumu varsa dashboarda yönlendiriyorum, yoksa login sayfasına.
- Proje, responsive olarak çalışmaktadır.

## Projeden Görüntüler

![SS1](/public/ss1.png)

![SS2](/public/ss2.png)

![SS3](/public/ss3.png)

![SS4](/public/ss4.png)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
