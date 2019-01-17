import { bindActionCreators } from 'redux'
import {
  REPOS_LIST_REFRESH,
  REPOS_LIST_LOADMORE,
  REPO_README
} from '../constants/repos'
import store from '../store'
import { createApiAction } from './index'
import api from '../service/api'

//  我的仓库列表 API
export const reposListRefresh = createApiAction(REPOS_LIST_REFRESH, params => api.get(params.url, params.data))
export const reposListLoadMore = createApiAction(REPOS_LIST_LOADMORE, params => api.get(params.url, params.data))

// 获取仓库 README.md
export const getRepoReadMe = createApiAction(REPO_README, params => api.get(params.url, params.data))

export default bindActionCreators({
  reposListRefresh,
  reposListLoadMore,
  getRepoReadMe
}, store.dispatch)