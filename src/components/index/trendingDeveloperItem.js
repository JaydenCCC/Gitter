import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types';
import { View, Navigator } from '@tarojs/components'
import { AtIcon, AtAvatar } from 'taro-ui'


import './trendingDeveloperItem.less'

export default class TrendingDeveloperItem extends Component {
  static propTypes = {
    item: PropTypes.object,
  }

  static defaultProps = {
    item: null,
  }

  onClickRepo(e) {
    e.stopPropagation()
    const { item } = this.props
    console.log('item',item)
    let api = 'https://api.github.com/repos/' + item.username + '/' + item.repo.name
    let url = '/pages/repo/repo?url=' + encodeURI(api)
    Taro.navigateTo({
      url: url
    })
  }

  render() {
    const { item } = this.props
    if (!item) return <View />
    return (
      <View className='content'>
        <AtAvatar circle size='large' image={item.avatar} />
        <View className='user_info'>
          <View className='user_name'>{item.username}</View>
          <View className='repo'>
            <AtIcon prefixClass='ion' value='md-bookmarks' size='18' color='#333' />
            <View className='repo_title' onClick={this.onClickRepo.bind(this)} hoverStopPropagation>{item.repo.name}</View>
          </View>
          <View className='repo_desc'>{item.repo.description}</View>
        </View>
      </View>
    )
  }

}
