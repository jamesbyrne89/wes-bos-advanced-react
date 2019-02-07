const Mutations = {
  async createItem(parent, args, context, info) {
    console.log(context.db);
    const item = await context.db.mutation.createItem(
      { data: { ...args } },
      info
    );
    console.log({ item });
    return item;
  }
};

module.exports = Mutations;
