const handler = (req, res) => {
  return res.json({
    topCatergories: {
      nature: {
        name: "Nature",
        url: "nature",
      },
      landscape: {
        name: "Landscape",
        url: "landscape",
      },
    },
  });
};
export default handler;
