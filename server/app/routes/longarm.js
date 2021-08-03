const express = require('express');

const router = express.Router();

/* mocks */
const options = {
  pantographs: [
    { id: 1, name: 'flowers', imgUrl: './flowers.jpg' },
    { id: 2, name: 'turtles', imgUrl: './turtles.jpg' },
  ],
  threads: [
    { id: 1, color: 'gold varigated', imgUrl: './gold-varigated.jpg' },
    { id: 2, color: 'brown', imgUrl: './brown.jpg' },
  ],
  backing: [
    {
      id: 1,
      manufacturer: 'Robert Kaufman',
      line: 'Kona',
      print: 'solid',
      color: 'Snow',
      imgUrl: './kona-snow.jpg',
      wide: false,
    },
    {
      id: 2,
      manufacturer: 'New England Quilt Company',
      line: 'Fabric Arts',
      print: 'Colorwash',
      color: 'Beige (702)',
      imgUrl: './colorwash-beige-702.jpg',
      wide: true,
    },
  ],
};

/* GET longarm options */
router.get('/options', (req, res) => {
  res.status(200).json({
    message: 'Longarm options fetched',
    options,
  });
});

/* POST longarm intake form */

module.exports = router;
