const Query = {
  items(parent, args, context, info) {
    return [{ ...args }];
  }
};

module.exports = Query;
