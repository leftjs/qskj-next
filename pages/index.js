/**
 * Created by jason on 2016/11/30.
 */
import React from 'react'
import Container from '../components/container'
import Header from '../components/header'
import Carousel from 'antd/lib/carousel'
import Button from 'antd/lib/button'
import generalCSS, {cssUtil as css} from '../utils/generalCSS'

export default () => {
  return (
      <Container>
        <Header boxShadow={false}/>
        
        <div className={css(generalCSS.dirRowJcAroundAiCenter, styles.toolBarContainer, generalCSS.pv5)}>
          <div className={css(generalCSS.dirRowJcCenterAiCenter)}>
            <Button type="ghost" size="small" >概览</Button>
          </div>
          <div className={css(generalCSS.dirRowJcCenterAiCenter)}>
            <Button type="primary">加入购物车</Button>
            <Button type="primary" className={`${css(styles.buyBtn)} ${css(generalCSS.mlf15)}`}>立即购买</Button>
          </div>
        </div>
        
        <Carousel autoplay={true} dots={true} adaptiveHeight={true} lazyLoad={true}>
          
          <div>
            <div className={css(generalCSS.dirColumnJcCenterAiCenter, generalCSS.pv30)}>
              <h1 className={css(generalCSS.fts50)}>湛泸</h1>
              <p className={css(generalCSS.fts30)}>给你一个全新的开始</p>
              <div className={css(generalCSS.dirRowJcCenterAiCenter, generalCSS.mtp40)}>
                <img src="/static/images/home/home_product_4.png" alt="" className={css(generalCSS.w40p)}/>
                <img src="/static/images/home/home_product_5.png" alt="" className={css(generalCSS.w40p, generalCSS.mlf30)}/>
              </div>
            </div>
          </div>
          <div>
            <div className={css(generalCSS.dirColumnJcCenterAiCenter, generalCSS.pv30)}>
              <h1 className={css(generalCSS.fts50)}>湛泸</h1>
              <p className={css(generalCSS.fts30)}>匠心独运，大道至简</p>
              <img src="/static/images/home/home_product_6.png" alt="" className={css(generalCSS.w70p, generalCSS.mtp40)}/>
            </div>
          </div>
          <div>
            <div className={css(generalCSS.dirRowJcCenterAiCenter, generalCSS.pv30)}>
              <div className={css(generalCSS.w30p)}>
                <h1 className={css(generalCSS.fts40)}>湛泸</h1>
                <p className={css(generalCSS.fts30)}>匠心独运，大道至简</p>
                <p className={css(generalCSS.fts18)}>湛泸启动系统适用于GY6-125款发动机，让您感受"其疾如风，其徐如林，不动如山，动若雷霆"的摩托车驾车体验。彰显自我从起步开始</p>
                <p className={css(generalCSS.fts16)}><span className={css(generalCSS.fts25, styles.priceLabel)}>260</span>元起</p>
              </div>
              <div className={css(generalCSS.dirColumnJcCenterAiCenter, generalCSS.w30p)}>
                <img src="/static/images/home/home_product_1.png" alt="" className={css(generalCSS.w40p)}/>
                <img src="/static/images/home/home_product_2.png" alt="" className={css(generalCSS.w40p)}/>
                <img src="/static/images/home/home_product_3.png" alt="" className={css(generalCSS.w70p)}/>
              </div>
            </div>
          </div>
        </Carousel>
      </Container>
  )
}

const styles = {
  toolBarContainer: {
    boxShadow: '0px 1px 5px lightgray',
  },
  buyBtn: {
    background: generalCSS.pink600,
    border: `1px solid ${generalCSS.pink600}`,
    ':hover': {
      background: generalCSS.pink300,
      border: `1px solid ${generalCSS.pink300}`
    }
  },
  priceLabel: {
    color: generalCSS.red900
  }
}
