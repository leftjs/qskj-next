/**
 * Created by jason on 2016/11/30.
 */
import React from 'react'
import Head from 'next/head'
import * as utils from '../utils'

export default ({ children }) => {
  return (
     <div>
       <Head>
         <title>青霜科技</title>
         <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
         {
           !utils.isDev ? <link rel="stylesheet" href={utils.antdCDN}/> :
           <link rel="stylesheet" href="/static/css/antd.css"/>
         }
         <link href="//cdn.bootcss.com/pace/1.0.2/themes/blue/pace-theme-flash.min.css" rel="stylesheet" />
       </Head>
       { children }
       <script src="//cdn.bootcss.com/pace/1.0.2/pace.min.js"></script>
     </div>
  )
}