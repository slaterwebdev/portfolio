const rawPortfolioImageData = [
  {
    url: "https://car.arnoldclarkinsurance.com/assumptions",
    src: "portfolio/arnoldClark.png",
    category: "B2C",
  },
  {
    url: "https://www.darwin-insurance.com/",
    src: "portfolio/darwin.png",
    category: "B2C",
  },
  {
    url: "https://getquote.gogirl.co.uk/quote/create",
    src: "portfolio/goGirl.png",
    category: "B2C",
  },
  {
    url: "https://www.victorianplumbing.co.uk/",
    src: "portfolio/vp.png",
    category: "B2C",
    employer: true,
  },
  {
    src: "portfolio/howdens.png",
    category: "B2B",
  },
  {
    src: "portfolio/vpHelp.png",
    url: "https://www.victorianplumbing.co.uk/help-and-customer-service",
    category: "B2B",
  },
  {
    url: "https://www.madebysauce.com/",
    src: "portfolio/mbs.png",
    employer: true,
  },
  {
    url: "https://bigmarketing.co.uk/",
    src: "portfolio/bigMarketing.png",
    employer: true,
  },
  {
    url: "https://quote.darwin-insurance.com/quote/create",
    src: "portfolio/darwinQuote.png",
    category: "B2C",
  },
  {
    url: "https://quote.wisedriving.com/quote/create/step/1",
    src: "portfolio/wiseDriving.png",
    category: "B2C",
  },
];

const portfolioImageData = rawPortfolioImageData.map((item) => ({
  ...item,
  src: `${process.env.BASE_URL}/images/${item.src}`,
}));

export const portfolioImages = {
  b2c: portfolioImageData.filter((item) => item.category === "B2C"),
  b2b: portfolioImageData.filter((item) => item.category === "B2B"),
  employers: portfolioImageData.filter((item) => item.employer),
};
