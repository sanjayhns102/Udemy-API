const express = require("express");
const router = express.Router();

const {
  createBootcamps,
  getBootcamps,
  getBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");

router.route('/').get(getBootcamps).post(createBootcamps);
router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp);



module.exports = router;