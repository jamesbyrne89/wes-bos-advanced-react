const Query = {
  async items(parent, args, context, info) {
    const items = await context.db.query.item();
  }
};

module.exports = Query;
