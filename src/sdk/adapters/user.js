// import store from 'store';

export default class User {
  /**
  * Params used in this class
  * @method constructor
  * @param  {Object}    HTTPAdapter [Qiscus HTTP adapter]
  * @return {void}                Returns nothing
  */
  constructor (HTTPAdapter) {
    this.HTTPAdapter = HTTPAdapter;
    this.token       = HTTPAdapter.token;
  }

  postComment(topicId, commentMessage, uniqueId) {
    return this.HTTPAdapter.post(`api/v2/mobile/post_comment`, {token: this.token, comment: commentMessage, topic_id: topicId, unique_temp_id: uniqueId})
    .then((res) => {
      return new Promise((resolve, reject) => {
        if(res.body.status != 200) return reject(res);
        const data = res.body.results.comment;
        return resolve(data);
      })
    }, (error) => {
      return new Promise((resolve, reject) => {
        return reject(err);
      });
    })
  }

  sync() {
    return this.HTTPAdapter.get(`api/v2/mobile/sync`)
    .then((res) => {
      return new Promise((resolve, reject) => {
        if(res.body.status != 200) return reject(res);
        const data = res.body.results.comments;
        return resolve(data);
      })
    }, (error) => {
      return new Promise((resolve, reject) => {
        return reject(err);
      })
    })
  }

}
