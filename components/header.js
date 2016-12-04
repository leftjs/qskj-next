/**
 * Created by jason on 2016/12/1.
 */
import React from 'react'
import css from 'next/css'
import Button from 'antd/lib/button'
import generalCSS from '../utils/generalCSS'
export default ({boxShadow = false}) => {
  const styles = {
    container: {
      padding: '10px 0px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      // boxShadow: '0px 1px 5px lightgray'
    },
    btnGroup: {
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      width: 50,
      height: 50
    },
    icon: {
      width: 50,
      height: 50,
    }
  }
  
  if(boxShadow) {
    styles.container['boxShadow'] = '0px 1px 5px lightgray'
  }else {
    styles.container['borderBottom'] = '1px solid lightgray'
  }
  
  return (
      <div className={css(styles.container)}>
        <div className={css(styles.btnGroup)}>
          <img src="/static/images/logo.png" alt="" className={css(styles.logo)}/>
          {['启动系统', '官方论坛', '黑科技NEWS'].map((item, index) => (
              <Button type="ghost" className={`${css(generalCSS.mlf20)}`} key={index}>{item}</Button>
          ))}
        </div>
        <div className={css(styles.btnGroup)}>
          <Button type="ghost" icon="search">搜索</Button>
          <Button type="ghost" icon="shopping-cart" className={`${css(generalCSS.mlf20)}`}>购物车</Button>
        </div>
      </div>
  )
}

