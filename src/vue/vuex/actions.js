export default {
  changeRoom: ({commit, state}, room) => commit('CHANGE_ROOM', room),
  toggleChatWindow: ({commit, state}) => commit('TOGGLE_CHAT_WINDOW'),
  chatTarget: ({commit}, email) => commit('CHAT_TARGET', email),
  backToHome: ({commit}) => commit('BACK_TO_HOME'),
  submitComment: ({commit}, {topic_id, comment}) => {console.info(topic_id); commit('SUBMIT_COMMENT', {topic_id, comment})},
  loadComments: ({commit}, topic_id, last_comment_id, timestamp, after) => commit('LOAD_COMMENTS', topic_id, last_comment_id, timestamp, after),
  sync: ({commit}) => commit('SYNC'),
}