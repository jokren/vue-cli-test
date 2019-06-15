import Mock from 'mockjs'
import user from './user.js'

Mock.mock('/main.php', 'get', () => {
  return user.page1
})
Mock.mock('/src.php', 'get', () => {
  return user.src
})
