const CreateErrorRequest = require("./core/create-error-request");

function handleError(err, ctx, fieldName = "") {
  let message = "";
  let code = 0;
  switch (err) {
  }
  ctx.body = {
    code,
    message,
  };
}

const errorRequest = new CreateErrorRequest(handleError);

module.exports = errorRequest;
