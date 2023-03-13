class apiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }
  search() {
    const location = this.queryStr.location
      ? {
          address: {
            regex: this.queryStr.location,
            options: "i",
          },
        }
      : {};
    this.queryStr = this.query.find({ ...location });
    return this;
  }
}

export default apiFeatures;
