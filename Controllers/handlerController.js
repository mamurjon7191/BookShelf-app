const catchError = require("../utility/catchingError");
const FeatureAPI = require("../utility/FeatureApi");

const responseFunction = (res, statusCode, data) => {
  if (Array.isArray(data)) {
    res.status(statusCode).json({
      status: "success",
      results: data.length,
      data: data,
    });
  } else {
    res.status(statusCode).json({
      status: "success",
      data: data,
    });
  }
};

const getAll = catchError(async (req, res, next, Model) => {
  const features = new FeatureAPI(req.query, Model)
    .filter()
    .sorting()
    .field()
    .pagination();

  let datas = await features.dataBaseQuery;

  response(res, 200, datas);
});

const getOne = catchError(async (req, res, next, Model) => {});

const add = catchError(async (req, res, next, Model) => {});

const update = catchError(async (req, res, next, Model) => {});

const deleteData = catchError(async (req, res, next, Model) => {});

module.exports = {
  getAll,
  getOne,
  add,
  update,
  deleteData,
};
