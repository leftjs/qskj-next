/**
 * Created by jason on 2016/12/3.
 */
import _ from 'lodash'
import css from 'next/css'
import * as colors from './colors'
// 生成margin样式
function generateMarginStyles() {
  let styles = {}
  let ranges = []
  let i = 0
  while (i < 200){
    if (i < 50) ranges.push(i+=5)
    else if (i < 100) ranges.push(i+=10)
    else ranges.push(i+=20)
  }
  ranges.forEach((range) => {
    styles[`mtp${range}`] = {
      marginTop: range
    }
    styles[`mrt${range}`] = {
      marginRight: range
    }
    styles[`mbm${range}`] = {
      marginBottom: range
    }
    styles[`mlf${range}`] = {
      marginLeft: range
    }
  })
  return styles
}

function generatePaddingStyles() {
  let styles = {}
  let ranges = []
  let i = 0
  while (i < 200){
    if (i < 50) ranges.push(i+=5)
    else if (i < 100) ranges.push(i+=10)
    else ranges.push(i+=20)
  }
  ranges.forEach(range => {
    styles[`ptp${range}`] = {
      paddingTop: range
    }
    styles[`plf${range}`] = {
      paddingLeft: range
    }
    styles[`prt${range}`] = {
      paddingRight: range
    }
    styles[`pbm${range}`] = {
      paddingBottom: range
    }
    styles[`pv${range}`] = {
      paddingTop: range,
      paddingBottom: range
    }
    styles[`ph${range}`] = {
      paddingLeft: range,
      paddingRight: range
    }
  })
  return styles
}

// 生成textAlign样式
function generateTextAlign() {
  return {
    textAC: {
      textAlign: 'center'
    },
    textAL: {
      textAlign: 'left'
    },
    textAR: {
      textAlign: 'right'
    }
  }
}

// 生成fontSize样式
function generateFontSize() {
  let styles = {}
  let ranges = []
  let i = 0
  while (i < 100){
    if (i < 0) ranges.push(i++)
    else if (i < 50) ranges.push(i+=2)
    else ranges.push(i+=5)
  }
  ranges.forEach((range) => {
    styles[`fts${range}`] = {
      fontSize: range
    }
  })
  return styles
}

// 生成百分比的宽高
function generatePercentWH() {
  let styles = {}
  let ranges = []
  let i = 0
  while (i < 100) {
    ranges.push(i+=5)
  }
  ranges.forEach(range => {
    styles[`w${range}p`] = {
      width: `${range}%`
    }
    styles[`h${range}p`] = {
      height: `${range}%`
    }
  })
  return styles
}

// 生成flex样式
function generateFlexStyles() {
  function simplifyAndUpperFirst(str) {
    const strs = str.split('-')
    return _.upperFirst(_.last(strs))
  }
  
  
  let styles = {}
  const direction = ['row', 'column']
  const justifyContent = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around']
  const alignItems = ['flex-start', 'flex-end', 'center', 'baseline', 'stretch']
  direction.forEach(dir => {
    justifyContent.forEach(jc => {
      alignItems.forEach(ai => {
        styles[`dir${simplifyAndUpperFirst(dir)}Jc${simplifyAndUpperFirst(jc)}Ai${simplifyAndUpperFirst(ai)}`] = {
          display: 'flex',
          flexDirection: dir,
          justifyContent: jc,
          alignItems: ai
        }
        
      })
    })
  })
  
  return styles
}

export default {
    ...generateMarginStyles(),
    ...generateTextAlign(),
    ...generateFontSize(),
    ...generateFlexStyles(),
    ...generatePaddingStyles(),
    ...generatePercentWH(),
    ...colors
}

export const cssUtil = (...styles) => {
  // note: {} !!!!!
  if(styles.length > 1) return css(_.merge({}, ...styles))
  else return css(styles[0])
}

export const originCSS = css